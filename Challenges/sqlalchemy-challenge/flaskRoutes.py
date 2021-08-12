import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Resources/hawaii.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Measurements = Base.classes.measurement
Stations = Base.classes.station

# Flask Setup
app = Flask(__name__)

# Routes - Home:


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/<start><br/>"
        f"/api/v1.0/<start>/<end><br/>"
    )

# Routes - /api/v1.0/precipitation:


@app.route("/api/v1.0/precipitation")
def prcp():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query for date and prcp
    results = session.query(Measurements.date, Measurements.prcp).all()

    # transform to dict
    prcp_values = dict(results)

    session.close()

    return jsonify(results)

# Routes - /api/v1.0/stations:


@app.route("/api/v1.0/tobs")
def stations():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query for date and prcp
    results = session.query(Measurements.date, Measurements.tobs)\
        .filter(Measurements.date >= '2016-08-23')\
        .filter(Measurements.station == 'USC00519281').all()

    session.close()

    return jsonify(results)

# Routes - /api/v1.0/tobs:


@app.route("/api/v1.0/tobs")
def tobs():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query for date and prcp
    results = session.query(Stations.station, Stations.name).all()

    session.close()

    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)
