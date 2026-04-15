---
title: Test	Driven Development / Behavior Driven Development
description: Best practices for implementing TDD and BDD in Terraform projects.
---

[Test Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development){:target="_blank"} and [Behavior Driven Development (BDD)](https://en.wikipedia.org/wiki/Behavior-driven_development){:target="_blank"} are essential practices for ensuring the quality and reliability of any code base you are writing. In the context of Terraform, this means writing tests for your modules and infrastructure code to ensure that they behave as expected when somebody includes that module ino their code base, or when we want to validate functionality	of the module itself.

The ultimate goal of TDD/BDD is to create is to create your expected outcomes first, and then write the code to make those tests pass. This ensures that your code is always tested and that you are always working towards a specific goal. Let it be IaC and giving your first step of your infrastructure as being Disaster Recovery from the beginning, an application front end that you can have the utmost confidence that you can deploy code to production without any concerns of rolling anything back.

Ultimately, success is measured by the ability to confidently write code that can be handed off to the "dumbest person in the room" (Orchestration/Automation), and it can successfully deploy	the code without any issues. Cross training and tribal knowledge is left at the gates, as you move forward to a thought out architecture that is designed to be resilient, scalable, and maintainable.

### Code Development <!-- omit from toc -->

The testing framework for Terraform can be implemented using various tools and frameworks. Some of the popular ones include:

- [terratest](https://terratest.gruntwork.io/){:target="_blank"}: A Go library that makes it easier to write automated tests for your Terraform code.
- [terraform test](https://developer.hashicorp.com/terraform/language/tests){:target="_blank"}: A framework that allows you to write tests for your Terraform code using the `terraform test` command.
- tflint: A linter for Terraform code that helps you identify potential issues and best practices in your code.
- [terraform-docs](http://terraform-docs.io/){:target="_blank"}: A tool that generates documentation for your Terraform modules, making it easier to understand and use them.
- [trivy](https://aquasecurity.github.io/trivy/v0.39.0/){:target="_blank"}: A vulnerability scanner for your Terraform code that helps you identify potential security issues in your infrastructure.

The ultimate design for a good test framework is that y

<!-- 
#### Terraform Native Test

#### Terragrunt Terratest

###	Testing Strategies

#### Version Control in Testing
-->
