from bs4 import BeautifulSoup
from splinter import Browser
import pandas as pd
from webdriver_manager.chrome import ChromeDriverManager
from flask import Flask, render_template
import pymongo


# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.mars.db


def scrape():
    # Set Executable Path & Initialize Chrome Browser
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)

    # Visit the NASA Mars News Site
    mars_url = 'https://redplanetscience.com/'
    browser.visit(mars_url)
    # Parse Results HTML with BeautifulSoup
    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')
    row_element = soup.select_one('div', class_='row')
    # Scrape the title and paragraph text
    news_title = row_element.find('div', class_='content_title').get_text()
    news_p = row_element.find('div', class_='article_teaser_body').get_text()

    # Visit the JPL Mars Space Images Site
    space_image_url = 'https://spaceimages-mars.com/'
    browser.visit(space_image_url)
    # Parse Results HTML with BeautifulSoup
    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')
    header_element = soup.select_one('div', class_='header')
    # Scrape the src for the featured image
    featured_image_url = header_element.find(
        'img', class_='headerimage fade-in').get('src')

    # Use pandas to "scrape" the table into a datafram
    # NOTE: "[x]" will grab the different tables on the page
    mars_facts_df = pd.read_html('https://galaxyfacts-mars.com/')[1]
    mars_facts_df.columns = ['Description', 'Value']
    mars_facts_df.set_index('Description', inplace=True)
    mars_facts = mars_facts_df.to_html(classes="table table-striped")

    # Visit the JPL Mars Space Images Site
    mars_hemisphere_url = 'https://marshemispheres.com/'
    browser.visit(mars_hemisphere_url)

    hemisphere_image_urls = []
    # Get a List of All the Hemispheres to use for the counter
    hemipshere_links = browser.find_by_css('span.count').first.text[0]
    for item in range(int(hemipshere_links)):
        hemisphere = {}
        # Click the link to open the separate page for information
        browser.find_by_css('a.itemLink.product-item h3')[item].click()
        # Get hemisphere title
        hemisphere['title'] = browser.find_by_css('h2.title').text
        # Find sample amage anchor tag & extract
        sample_picture = browser.links.find_by_text('Sample').first
        hemisphere['img_url'] = sample_picture['href']
        # Append hemisphere object to list
        hemisphere_image_urls.append(hemisphere)
        # Go back to able to select next in list
        browser.back()

    data = {
        'title': news_title,
        'paragraph': news_p,
        'featured_image': f'https://spaceimages-mars.com/{featured_image_url}',
        'facts': mars_facts,
        'urls': hemisphere_image_urls
    }

    browser.quit()

    return data

# Index route


@app.route("/")
def index():
    mars = db.find_one()
    return render_template("index.html", mars=mars)

# Scrape route to call `scrape` function


@app.route("/scrape")
def scrape_data():
    mars_data = scrape()
    db.update({}, mars_data, upsert=True)
    return "Scraping Successful"


if __name__ == "__main__":
    app.run(debug=True)
