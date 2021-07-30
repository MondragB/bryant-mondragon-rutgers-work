# Python API Homework - What's the Weather Like?

## Part I - WeatherPy

In this example, you'll be creating a Python script to visualize the weather of 500+ cities across the world of varying distance from the equator. To accomplish this, you'll be utilizing a [simple Python library](https://pypi.python.org/pypi/citipy), the [OpenWeatherMap API](https://openweathermap.org/api), and a little common sense to create a representative model of weather across world cities.

The first requirement is to create a series of scatter plots to showcase the following relationships:

- [x] Temperature (F) vs. Latitude
- [x] Humidity (%) vs. Latitude
- [x] Cloudiness (%) vs. Latitude
- [x] Wind Speed (mph) vs. Latitude

After each plot, add a sentence or two explaining what the code is analyzing.

The second requirement is to run linear regression on each relationship. This time, separate the plots into Northern Hemisphere (greater than or equal to 0 degrees latitude) and Southern Hemisphere (less than 0 degrees latitude):

- [x] Northern Hemisphere - Temperature (F) vs. Latitude
- [x] Southern Hemisphere - Temperature (F) vs. Latitude
- [x] Northern Hemisphere - Humidity (%) vs. Latitude
- [x] Southern Hemisphere - Humidity (%) vs. Latitude
- [x] Northern Hemisphere - Cloudiness (%) vs. Latitude
- [x] Southern Hemisphere - Cloudiness (%) vs. Latitude
- [x] Northern Hemisphere - Wind Speed (mph) vs. Latitude
- [x] Southern Hemisphere - Wind Speed (mph) vs. Latitude

After each pair of plots, take the time to explain what the linear regression is modeling. For example, describe any relationships you notice and any other analysis you may have.

Your final notebook must:

- [x] Randomly select **at least** 500 unique (non-repeat) cities based on latitude and longitude.
- [x] Perform a weather check on each of the cities using a series of successive API calls.
- [x] Include a print log of each city as it's being processed with the city number and city name.
- [x] Save a CSV of all retrieved data and a PNG image for each scatter plot.

### Part II - VacationPy

Now let's use your skills in working with weather data to plan future vacations. Use jupyter-gmaps and the Google Places API for this part of the assignment.

To complete this part of the assignment,you will need to do the following:

- [x] Create a heat map that displays the humidity for every city from Part I.
- [x] Narrow down the DataFrame to find your ideal weather condition. For example:
- [x] A max temperature lower than 80 degrees but higher than 70.
- [x] Wind speed less than 10 mph.
- [x] Zero cloudiness.
- [x] Drop any rows that don't contain all three conditions. You want to be sure the weather is ideal.
- [x] Using Google Places API to find the first hotel for each city located within 5000 meters of your coordinates.

- [x] Plot the hotels on top of the humidity heatmap with each pin containing the **Hotel Name**, **City**, and **Country**.