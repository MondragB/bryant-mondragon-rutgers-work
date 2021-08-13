# SQLAlchemy Homework - Surfs Up

## Step 1 - Climate Analysis and Exploration

To begin, use Python and SQLAlchemy to do basic climate analysis and data exploration of your climate database. All of the following analysis should be completed using SQLAlchemy ORM queries, Pandas, and Matplotlib.

- [x] Use the provided [starter notebook](climate_starter.ipynb) and [hawaii.sqlite](Resources/hawaii.sqlite) files to complete your climate analysis and data exploration.

- [x] Use SQLAlchemy `create_engine` to connect to your sqlite database.

- [x] Use SQLAlchemy `automap_base()` to reflect your tables into classes and save a reference to those classes called `Station` and `Measurement`.

- [x] Link Python to the database by creating an SQLAlchemy session.

- [x] **Important** Don't forget to close out your session at the end of your notebook.

### Precipitation Analysis

- [x] Start by finding the most recent date in the data set.

- [x] Using this date, retrieve the last 12 months of precipitation data by querying the 12 preceding months of data. **Note** you do not pass in the date as a variable to your query.

- [x] Select only the `date` and `prcp` values.

- [x] Load the query results into a Pandas DataFrame and set the index to the date column.

- [x] Sort the DataFrame values by `date`.

- [x] Plot the results using the DataFrame `plot` method.

- [x] Use Pandas to print the summary statistics for the precipitation data.

### Station Analysis

- [x] Design a query to calculate the total number of stations in the dataset.

- [x] Design a query to find the most active stations (i.e. which stations have the most rows?).

- [x] List the stations and observation counts in descending order.

- [x] Which station id has the highest number of observations?

- [x] Using the most active station id, calculate the lowest, highest, and average temperature.

- [x] Design a query to retrieve the last 12 months of temperature observation data (TOBS).

- [x] Filter by the station with the highest number of observations.

- [x] Query the last 12 months of temperature observation data for this station.

- [x] Plot the results as a histogram with `bins=12`.

- [x] Close out your session.

- - -

## Step 2 - Climate App

Now that you have completed your initial analysis, design a Flask API based on the queries that you have just developed.

- [x] Use Flask to create your routes.

### Routes

 `/`

- [x] Home page.

- [x] List all routes that are available.

- [x] `/api/v1.0/precipitation`

- [x] Convert the query results to a dictionary using `date` as the key and `prcp` as the value.

- [x] Return the JSON representation of your dictionary.

 `/api/v1.0/stations`

- [x] Return a JSON list of stations from the dataset.

`/api/v1.0/tobs`
  
- [x] Query the dates and temperature observations of the most active station for the last year of data.

- [x] Return a JSON list of temperature observations (TOBS) for the previous year.

 `/api/v1.0/<start>` and `/api/v1.0/<start>/<end>`

- [x] Return a JSON list of the minimum temperature, the average temperature, and the max temperature for a given start or start-end range.

- [x] When given the start only, calculate `TMIN`, `TAVG`, and `TMAX` for all dates greater than and equal to the start date.

- [x] When given the start and the end date, calculate the `TMIN`, `TAVG`, and `TMAX` for dates between the start and end date inclusive.