# 10. User Selects Location With Typeahead

## Status

Superceded

## Context

To isolate the location ID, the user will type their location into a form and a typeahead, populated with the Met Office's site list data, will offer matches on each keystroke. On submitting, the ID associated with that particular location will be passed to the forecast API. This requires the information from the static site list endpoint to be stored client-side on mounting the page.

## Decision

Although a working prototype was produced in vanilla Javascript, time restrictions meant it could not be refactored for React for this iteration of the app. For now, the user will find their location from a small selection avaiable, hard coded into the front end.

## Consequences

* User-friendly interface
* Ensures only the available locations can be queried
* Removes the need for an ID API call to the Met Office
* Integration requires deep knowledge of React, even with relevant libraries imported
* Large client-side file could cause bloat, leading to performance issues in the browser

