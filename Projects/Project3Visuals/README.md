# Real Estate Data Analysis

   ![Read_me_Image](https://user-images.githubusercontent.com/83404547/133019814-d4b6f0e7-d1fe-4415-b934-0046ba36d8a1.jpeg)

## Background

This project revolves around putting to use all aspects that we have learned up until this point. Here we decided to go ahead and focus on one  main source *Realtor.com*. This site hosts multiple different datasets that we felt would appropriately satisfy almost anyones needs. Our goal is to provide a webapp/service where people can come view different types of data and visualizations in the housing market to better make decisions and or investments. A good portion of this project is getting a good normalization of the data and making sure it is atomic. The data provided for this project is broken up into multiple parts that we will provide access to - it ranges from as frequent as weekly updates to yearly and each set has data going back three or four years depending on the one you look at. We decided to keep most if not all the data in the files to ensure anyone would have access to all the relevant information from each file. Once the data is extracted, and cleaned/transformed, it will be loaded into a Postgres database.

This database is meant to serve avid movie watchers, reviewers and even data analyst. The final database will contain data on the cast, the crew, revenue, ratings and even keywords which allow this dataset to be pretty universal in terms scope. You can build and view trends, you will be able to compare and contrast different movies and even build something like a movie watching guide based on factors of your choosing.

## Table of Contents

- [Real Estate Data Analysis](#real-estate-data-analysis)
  - [Background](#background)
  - [Table of Contents](#table-of-contents)
  - [Data Sources](#data-sources)
  - [Technologies](#technologies)
  - [Creators](#creators)

## Data Sources

[Realtor.com](https://www.realtor.com/research/data/)

## Technologies

- Python
   - Pandas
   - Beautiful Soup
   - Splinter
   - Flask Framework
   - SQL Alchemy (Object-Relational Mapper)
   - Pscycopg2 (Database Adapter)
- HTML/CSS
   - Bootstrap
- Javascript
   - D3
   - JSON
   - Plotly
   - Choropleth
- SQL/Postgres
- Microsoft CSV


## Data Processinng

We were able to extract the data from [Realtor.com](https://www.realtor.com/research/data/) website where [CSV files](https://github.com/Tinuola-1/Project3Visuals/tree/main/Dataset) were structred for database use, and contain multiple metrics for different levels of geography down to zip code level. These files record Market trends and monthly statistics on active for-sale listings (including median list price, average list price, luxury list price, median days on market, average days on market, total active listings, new listings, price increases, price reductions).

   - ‘Monthly Inventory’ shows figures for the latest month available as well as Historical data going back in time. 
   - 'Market Hotness' contains scores and rankings based on days on market (supply index) and realtor.com views per property (demand index).

## File Structre

## Data Visulization

## Creators

- [Bryant Mondragon](https://github.com/MondragB)
- [Walter Depalma](https://github.com/Wdepalma)
- [Paul Shelffo](https://github.com/Shelf0)
- [Tinu Adepoju](https://github.com/Tinuola-1)
- [Vasav Dave](https://github.com/vasavdave)
