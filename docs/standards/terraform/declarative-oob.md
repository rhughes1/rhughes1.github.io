---
title: Declarative and Object-Oriented Best Practices
description: Guidelines for using declarative and object-oriented principles in Terraform.
---

What puts Terraform into a new classification of application, is that it	is declarative and object-oriented. This means that you can define the desired state of your infrastructure, and Terraform will handle all of the requirements and put the architecture into a stateful design. This allows you to focus on the high-level design of your infrastructure, rather than the low-level implementation details.

At it's roots, Terraform is a compiled language (based on GO) that interfaces with API systems to allow it to create, update, and delete resources in a declarative manner. Once the assets are deployed, Terraform will then manage the state of those resources via a state file. When any resources are changed, Terraform will compare the current state of the resources with the desired state defined in the code, and then apply only the necessary changes to bring the resources into compliance with the desired state.

### Terraform Evolving Configuration Management Standards <!-- omit from toc -->
How terraform evolves the configuration management standards, is like when storage drives implemented Master File Tables (MFT) to manage all of the surface of the disks, so that you no longer had to scan an entire disk to find a file. The MFT keeps track of all of the files and their locations, allowing for faster access and management of the files. 

Terraform does the same thing with infrastructure, by keeping track of the state of the resources and their relationships, allowing for faster and more efficient management of the infrastructure. Where it takes it one step further, is that it performs a database style compilation on all of the dependencies, references, and relationships between the resources, allowing it to understand the entire architecture and how it all fits together. 

### Terraform as a Database <!-- omit from toc -->

### Terraform Object-Oriented Design <!-- omit from toc -->
