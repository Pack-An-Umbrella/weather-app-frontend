# 14. Render Hardcoded State To Screen With React

## Status

Accepted

## Context

With no time to create the typeahead function for a user to select a location, the team have to find an alternative way for users to query the weather forecast for a given location, and push this data to the client.

## Decision

The team decided to home in on 6 locations, which can be selectable via a dropdown menu in the frontend. Upon a user changing the location selection, via an onClick, the human readable location value is mapped to its location ID on the frontend. This location ID value is then passed down to populate the location key variable within the endpoint to our GET API, which in turn passes this query for the given location ID to the Met Office API. The data that Met Office API returns, via our GET API, is then mapped to State within React. 


## Consequences
* Avoids use of a database or call to a static list which holds a location:location id lookup, because the small number of use cases are manageable to harcode in the frontend. 
* Frontend code becomes bulky, because multiple data pieces are being passed through components via props.
* Location choice is limited for the user







