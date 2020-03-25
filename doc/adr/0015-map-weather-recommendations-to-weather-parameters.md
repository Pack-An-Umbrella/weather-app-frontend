# 15. Map Weather Recommendations to Weather Parameters

## Status

Accepted

## Context

The app makes clothing, sunscreen and umbrella recommendations based on the response from the weather forecast API. 

## Decision

The team need to define 'breakpoints' for this data and write the logic as conditional statements.

### Research

* [Coat Recommendations](https://blog.tessuti.co.uk/brits-need-coat/)
* [UV recommendations](https://www.metoffice.gov.uk/binaries/content/assets/metofficegovuk/pdf/data/datapoint_api_reference.pdf) (page 10)
* Bring an umbrella recommendations [BBC weather website as a reference](https://www.bbc.com/weather) A 25% or higher chance of rain is the breakpoint

## Consequences

* Users will have their own personal breakpoints, so our recommendations will not always be interpreted as 'accurate'
* Our fun app has some very serious data