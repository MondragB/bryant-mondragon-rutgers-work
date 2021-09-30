from flask import Flask, render_template, redirect
from flask import jsonify

import psycopg2
import sys
import json
import pandas as pd

# Create an instance of our Flask app.
app = Flask(__name__)

# DB connection settings
con = psycopg2.connect(
    "host='localhost' dbname='Real_Estate' user='postgres' password='postgres'")
cur = con.cursor()

####################################################################
####################################################################
# Data Retrevial - Walter's Part
monthly_by_state = "monthly_by_state"
hotness_by_metro = "hotness_by_metro"
states_tbl = "states"

cur.execute(f'''SELECT state, state_id, median_listing_price,
        month_date_yyyymm, average_listing_price from {monthly_by_state}''')

results = cur.fetchall()
price_data = [{"states": result[0], "state_id":result[1], "median_listing_price": result[2],
               "month_date_yyyymm": result[3], "average_listing_price": result[4]} for result in results]

#  Gather Metro Hotness Scrore Data


cur.execute(
    f'''SELECT metro, state_id, hotness_score from {hotness_by_metro} WHERE month_date_yyyymm = 202108''')

results2 = cur.fetchall()
hot_data = [{"metro": result[0], "state_id":result[1], "hotness_score": result[2]}
            for result in results2]

# Gathering State abreviation data to add to hotness table/dataframe:


cur.execute(
    f'''SELECT state_long_name, state_short_name from {states_tbl}''')

results = cur.fetchall()
state_ids = [{"state_nm": result[0], "abr": result[1]} for result in results]


# Arrange Listing Price data:
df = pd.DataFrame(price_data)
gdf = df.groupby(['states', 'month_date_yyyymm'], as_index=False).sum()
state_h = gdf.to_json(orient="index")

# Arrange metro hotness score data:
mhdf = pd.DataFrame(hot_data)
stid = pd.DataFrame(state_ids)


metro_hot = mhdf.to_json(orient="index")
st_abr = stid.to_json(orient="index")


####################################################################
####################################################################

# Index Page Route


@app.route("/")
def index():
    return render_template("index.html")

# States Page Route


@app.route("/statesPage")
def state():
    return render_template("MM.html")

# Metro Page Route


@app.route("/metroPage")
def metro():
    return render_template("metroPage.html")

# Data retriaval pages


@app.route('/hotnessdata')
def grab_data():
    cur.execute("""select * from  hotness_by_county limit 4000""")
    data = [col for col in cur]
    return jsonify(data)
    # return 'Data Retriaval Successful. <a href="/">Go back</a>'


@app.route("/statedata")
def transform():
    return(state_h)


@app.route("/hotness")
def metroHotness():
    return(metro_hot)


@app.route("/stateAbr")
def state_abr():
    return(st_abr)


if __name__ == "__main__":
    app.run(debug=True)
