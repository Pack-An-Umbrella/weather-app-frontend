# 1. Use A Third Party API

## Status

Accepted

## Context

The project requires detailed and frequently collected datapoints, such as percentage chance of rain, ‘feels like’ temperature, and UV index. During our research we found that some services were less detailed than others. For example, most international weather APIs offer a boolean value when it comes to rain, and a daily average (rather than hourly or three hourly) - flattening out any spikes of extreme weather. Fair use of free API calls range from 100 -  5000 per day.

## Decision

Use Met Office API

## Consequences

* We have to research and test third party APIs to find the best one for the project
* We also have no budget to buy premium features like hourly forecasts or geolocation, and exceeding the daily API call cap will result in charges 
* Filter out unwanted data in order not to overwhelm ourselves or our users

