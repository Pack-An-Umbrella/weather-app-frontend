# 12. Securely pass API key

## Status

Accepted

## Context

The Met Office treats their API key as sensitive information, so the key needs to be passed in a secure way, accessible only by the team

## Decision

The team pass in the API key to the GET call with a hidden .env file

## Consequences

* .env must remain in the .gitignore 



