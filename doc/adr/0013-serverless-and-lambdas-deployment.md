# 13. Serverless And Lambdas Deployment

## Status

Accepted

## Context

The team needed to establish a lightweight way of hosting our GET API, without having any infrastructural resources ourselves.

## Decision
We used AMS Lambda as a server solution to run our code, and we used Serverless framework to compatibly build our GET API application upon AWS. 

## Consequences
* Creating a Lambda function using one team member's AWS account, and enabling admin user access to other team members so that they could also contribute towards the GET API development
* Implementing a CORS policy so that our our GET API could speak to our frontend



