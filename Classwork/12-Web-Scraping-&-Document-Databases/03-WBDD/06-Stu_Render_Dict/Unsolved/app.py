# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO: Create a list of dictionaries
dict_list = [
    {
        "name": "Fido",
        "type": "Lab"
    },
    {
        "name": "Tim",
        "type": "Frenchie"
    },
    {
        "name": "Travis",
        "type": "shih tzu"
    },
    {
        "name": "Rocky",
        "type": "German Shepard"
    }
]

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template


@app.route("/")
def index():
    return render_template("index.html", dict=dict_list)


if __name__ == "__main__":
    app.run(debug=True)
