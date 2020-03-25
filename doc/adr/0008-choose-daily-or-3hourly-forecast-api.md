# 8. Choose Daily or 3 Hourly Forecast API

## Status

Accepted

## Context

The Met Office has 6000 UK locations, accessible with an ID and API key. The team has the choice of two 12 hour sets of forecasts, or eight sets of 3 hourly forecasts. We anticipate that some users would consult the app for a short trip outside; while others would want data for a full day. What the team agreed on is that all users would want the most accurate data available, so for that reason the 3 hourly forecast was chosen, as all data points are averaged over a day are averaged (meaning that extreme weather would be minimised).

## Decision

3 Hourly Forecast - latest 3 hours only

## Consequences

* Most accurate data available on the API's free tier
* Returns a lot of unwanted data, so will need to limit this
* API key is sensitive, so will need to be stored in an untracked .env file
* Each location's ID will need to be selected at the front end and sent to the backend to be passed to the 3 Hourly Forecast API