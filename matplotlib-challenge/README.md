# Instructions

Your tasks are to do the following:

  - [x] * Before beginning the analysis, check the data for any mouse ID with duplicate time points and remove any data associated with that mouse ID.

  - [x] * Use the cleaned data for the remaining steps.

  - [x] * Generate a summary statistics table consisting of the mean, median, variance, standard deviation, and SEM of the tumor volume for each drug regimen.

  - [x] * Generate a bar plot using both Pandas's `DataFrame.plot()` and Matplotlib's `pyplot` that shows the total number of timepoints for all mice tested for each drug regimen throughout the course of the study.

    **NOTE:** These plots should look identical.

- [x] * Generate a pie plot using both Pandas's `DataFrame.plot()` and Matplotlib's `pyplot` that shows the distribution of female or male mice in the study.

    **NOTE:** These plots should look identical.

- [x] * Calculate the final tumor volume of each mouse across four of the most promising treatment regimens: Capomulin, Ramicane, Infubinol, and Ceftamin. Calculate the quartiles and IQR and quantitatively determine if there are any potential outliers across all four treatment regimens.

- [ ] * Using Matplotlib, generate a box and whisker plot of the final tumor volume for all four treatment regimens and highlight any potential outliers in the plot by changing their color and style.

  **Hint**: All four box plots should be within the same figure. Use this [Matplotlib documentation page](https://matplotlib.org/gallery/pyplots/boxplot_demo_pyplot.html#sphx-glr-gallery-pyplots-boxplot-demo-pyplot-py) for help with changing the style of the outliers.

- [x] * Select a mouse that was treated with Capomulin and generate a line plot of tumor volume vs. time point for that mouse.

- [x] * Generate a scatter plot of tumor volume versus mouse weight for the Capomulin treatment regimen.

- [x] * Calculate the correlation coefficient and linear regression model between mouse weight and average tumor volume for the Capomulin treatment. Plot the linear regression model on top of the previous scatter plot.

- [x] * Look across all previously generated figures and tables and write at least three observations or inferences that can be made from the data. Include these observations at the top of notebook.