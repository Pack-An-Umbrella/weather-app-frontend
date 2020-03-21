# 13. Serverless And Lambdas Deployment

## Status

Accepted

## Context

The team needed to establish a lightweight way of hosting our GET API, without having any on prem infrastructural resources ourselves.

## Decision
We used AWS Lambda as a server solution to run our code. We used Serverless framework to compatibly build our GET API application upon AWS. 

## Consequences
* Creating a Lambda function using one team member's AWS account
* Enabling admin user access to other team members so that they could also contribute towards the GET API development
* Implementing a CORS policy with Amazon S3 services so that our our GET API could speak to our frontend



