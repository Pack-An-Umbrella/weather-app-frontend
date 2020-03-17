# 9. Select Location By ID

## Status

Accepted

## Context

The Met Office has a 'site list' - a location API, populatated with 6000 JSON objects. To get the weather forecast for a specific location the team needs to first get the ID associated with the location, and then pass it on to the weather forecast API.

## Decision

Rather than make a second API call to the Met Office, and considering the data of locations is extremely unlikely to change, it is decided to save that raw data in a static endpoint. It is to be hosted on a GitHub Gist.

## Consequences
* Assess the reliability of GitHub Gist
* If the Met Office change their site list this information will need to be updated
* Reduces number of API calls
