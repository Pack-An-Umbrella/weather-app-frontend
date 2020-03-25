# 11. Create a GET API

## Status

Accepted

## Context

The team need to create a GET API to pass the location ID to the Met Office's APO and recieve a human-readable JSON in response

## Decision

After testing, the team decide to get the first JSON object - the weather information for the next three hours, which key: value pairs to expose, and convert Met Office weather codes to human-readable strings.

## Consequences

* Easy to test in Postman
* Responses that can be rendered on the front end
* Code can be commented/uncommented to display desired key: value pairs



