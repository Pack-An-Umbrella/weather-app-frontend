# 17. Connect Frontend State to the Backend

## Status

Accepted

## Context

The team needed to connect the frontend state to the backend API request in order to retrieve the weather variables from the Met Office API (e.g. UV index, the chance of rain, etc) 


## Decision

We used Fetch API to get data from our backend API. Then we got an object as a response and converted it to JSON which in turn updated our state. 


## Consequences

Updating state with the weather variables drawn from the backend API. 
Translating the fetched object into a JSON object. 
In case of errors catching them into a console.log . 
