---
title: Taxonomy and Naming Conventions
description: Guidelines for organizing Terraform code and naming resources to maintain clarity and professionalism.
---

Writing terraform isn't just about writing code; it's about creating a professional and maintainable structure that can be easily understood by others. This section provides guidelines on how to organize your Terraform code and name resources effectively.

__Table of Contents__

- [Module Reference](#module-reference)
- [Resource and Data Source Reference](#resource-and-data-source-reference)
- [Variables	Reference](#variablesreference)
- [Output Reference](#output-reference)
- [Locals Reference](#locals-reference)
- [Inference](#inference)
	- [For\_each vs count](#for_each-vs-count)
	- [The one() function](#the-one-function)
	- [Boolean vs Empty lists/maps](#boolean-vs-empty-listsmaps)
- [Dependency Management](#dependency-management)
- [Resources and References](#resources-and-references)

## Module Reference

```hcl
module "example" {
  source  = "app.terraform.io/organization/example/module"
  version = "~> 1.0.0" # (Optional)

  providers = { aws = aws.alias1 } # (Optional)

  for_each = [for item in var.map2 : item if item.condition] # (Optional)

  # Boolean variables for controlling features along with module feature to turn on and off completely
  create           = true
  enable_feature_x = true
  enable_feature_y = false

  # Use of variables for configuration
  var1 = var.var1
  var2 = var.var2
  var3 = var.map1.var3
  var4 = var.map1.var4
  map1 = var.map2
  map2 = {
    key1 = var.var5
    key2 = var.map1.var6
  }

  tags = module.metadata.tags

  depends_on = [module.Example_module.resource_name] # (Optional)
}
```

## Resource and Data Source Reference

As with most nameology, redundancy is the bane of existence. When defining resources and data sources, it is crucial to use clear and descriptive names that reflect their purpose. This helps in understanding the code and maintaining it over time.

You don't want duplication of words, or logic, as it just adds to confusion. Ex:

* `ATM Machine`: Automatic Teller Machine... Machine?
* `NT Technology`: New Technology... Technology? 

So don't go naming your aws_instance resources with the same logic.

```hcl
resource "aws_subnet" "private_subnet" {}
``` 

Nobody needs a case of [Semantic Satiation](https://en.wikipedia.org/wiki/Semantic_satiation#:~:text=Semantic%20satiation%20is%20a%20psychological,speech%20as%20repeated%20meaningless%20sounds) plaguing them while trying to read your code. Naming things within context and with purpose.

## Variables Reference {#variablesreference}

Variables should be defined in the `variables.tf` file of your module. Each variable should have a clear description, type, and default value if applicable. The structure should always be in the following format:

### Example 1 - Basic Variable <!-- omit from toc --> {#Example-1---basic-variable}
```hcl
variable "variable_name" {
		description = "Description of the variable is on the first line"
		type        = string # or any other type like number, bool, list, map, etc.
		default     = "" # Optional, if not provided, the variable is required
		validation {
				condition     = var.variable_name != ""
				error_message = "Do Not Leave This Variable Empty"
		}
}
```

## Output Reference

Outputs should be defined in the `outputs.tf` file of your module. Each output should have a clear description and a value that is either a single value, an object, or sensitive data.

The structure should always be in the following format:

```hcl
output "output_name" {
	description = "Description of the output is on the first line"
	value       = module.example.output_name
	sensitive   = false # Optional, set to true if the output is sensitive
}
```
The value can be a single value, an object, or a sensitive value. 

The output should be presentable in a dictionary/map format, which allows for easy access and readability, so that the outputs from a module can't be affected by indexing or other issues that might arise from using lists. This allows for better data structuring and makes it easier to understand the outputs of the module, along with the ability to reference specific outputs without 

### Example 1 - Single output <!-- omit from toc -->
```hcl
output "example_output" {
	description = "Description of the output"
	value       = module.example.output_name01
}
```

### Example 2 - Object Output <!-- omit from toc -->
```hcl
output "example_output" {
	description = "Description of the output"
	value       = {
		key1 = module.example.output_name01
		key2 = module.example.output_name02
		key3 = module.example.output_name03
	}
}
```

### Example 3 - Sensitive Output <!-- omit from toc -->
```hcl
output "example_output" {
	description = "Description of the output"
	value       = module.example.output_name01
	sensitive   = true
}
```

## Locals Reference

!!! Warning "`locals` IS NOT THE PLACE FOR STATIC VARIABLES"
TO REITERATE:
`locals` is not a place for variables. It is used for interpolation and polymorphism, here you can define logic and declarative rules that can be reused throughout your module.

`locals`	are used to define reusable expressions or values that can be referenced multiple times within your module. They are not meant to replace variables but to provide a way to simplify complex expressions or calculations.

An example of using `locals` would be to catch if a variable was left blank, and then an expected, interpolated, value is used instead. This allows for a more declarative approach to defining values that can be reused throughout the module.

### Example 1 - Naming convention and legacy controls <!-- omit from toc -->
In this example, the locals is evaluating if the [var.example_variable](#Example-1---basic-variable) is empty, and if so, it assigns a default value. This is useful for ensuring that the module can function correctly even if certain variables are not provided.

```hcl
locals {
  name_prefix = upper(var.name_prefix != "" ? var.name_prefix : "${local.tags.customer}-${local.tags.account_group}-${var.region}")
}
```

### Example 2 - Boolean Logic <!-- omit from toc -->
In this example, the locals is used to define a boolean logic that can be reused throughout the module. This allows for a more declarative approach to defining functions and their behavior based on the input variables. 

By implementing a feature table and expected outcome, you can easily manage the behavior of your module based on the input variables. The goal to proper coding isn't to make everything under the sun supportable, but to make sure that people can easily understand how the code will work based on the specific scenarios that it was designed around. With even better engineering and architecture, developing this way will allow for future changes to be made without breaking existing functionality, as the code is designed to be flexible and adaptable to various use cases.

```hcl
locals {
  transit_network = var.create_vpc && var.transit_network && !var.create_spoke_vpc
  create_spoke    = var.create_vpc && var.create_spoke_vpc && !var.transit_network
  create_igw      = local.create_public_subnets

  one_nat_gateway_per_az = local.transit_network ? false : var.one_nat_gateway_per_az
  single_nat_gateway     = local.transit_network ? true : var.single_nat_gateway
  enable_nat_gateway     = local.transit_network ? true : var.create_vpc && var.enable_nat_gateway
}
```

## Inference

There's a few times in life where assumption is allowed. 
1. When you're worried your child is in danger
2. When you're writing code.

In Terraform, [inference](https://en.wikipedia.org/wiki/Inference){:target="_blank"} is the process of deriving values or behaviors based on the context of the code. This can be done through the use of locals, variables, and outputs to create a more dynamic and adaptable module. By using inference, you can create modules that are flexible and can adapt to different scenarios `without requiring extensive changes to the code`.

### For_each vs count 

When using `for_each` and `count`, it's important to understand the implications of each. `for_each` allows you to iterate over a map or set, creating a resource for each item, while `count` creates a specified number of resources based on an integer value.

What's the difference? A `for_each` will use the key and the values as seaparate objects, while applying the key as a portion of the state object.

Wheras, the `count` interfaces with a list and will "infer" the index number as the key. So if you're iterating over a list, the `count` will create resources based on the index of the list, while for_each will create resources based on the key-value pairs in a map.

`for_each` stands out as the preferred method for creating resources in Terraform, as it infers logic into the inputs and outputs that follow a more direct object orients pattern. It also adds a human readability to the state. 

A `count` will do the EXACT same thing as a `for_each`, but if you were to delete one of the objects within a list that is part of the decision logic for creating objects, the second you remove an object	from the list, the `count` will change the index of all the objects that follow, which will cause a change in the state of those resources. This can lead to unexpected behavior and potential issues with your infrastructure.

### The one() function

This little masterpiece allows for some intelligent inference in your code. The `one()` function is used to return the first element of any list/set. 

Why does this matter? 

Seeing a `count` is used as a `boolean` control for features (a strict `1 (true)` or `0 (false)`), we can use the `one()` function to quickly label any outputs and identify the resources that are used as a single resource, rather than a list of resources. TLDR: By using a `one()`, when we're reading through the code, we can quickly identify what resources are actually singular and controlled by feature tables.

Otherwise, a `for_each` loop should be used on everything else, so we can better utilize naming conventions and human readable logic. This also allows you to leverage the `count` based on the amount of objects passing through the loop. No items, no loop, no resource. 

### Boolean vs Empty lists/maps

When dealing with boolean values, it's important to differentiate between a boolean value and an empty list or map. A boolean value is either `true` or `false`, while an empty list or map is simply a collection with no elements. Both of these situations create different outcomes. 

#### Boolean <!-- omit from toc -->

When using a boolean value, you can use it to control the flow of your code and determine whether certain resources or features should be enabled or disabled. The downfall is that the resource is implicitly created, but will change the default status of the resource from a "null" to a blank "" when value if the boolean is set to `0 (false)`. The result of this comes from further down the dependency tree, when you leverage the resource in another module or output.

A failure occures, as the resource technically exists, but with a lack of actual information to transfer. It creates a "ghost". To fix this, you use a `try()` to allow you to catch the error and return a default value or an empty string if the resource does not exist.

#### Empty lists/maps <!-- omit from toc -->

An empty list or map, on the other hand, is simply a collection with no elements or objects. When the list/map is empty, it allows the resource to default to the "non-existent" state, and any reference to it will state "null", allowing you to avoid the issues that come with a boolean value that is set to `false`.

On the other hand, if you have not created feature tables correctly, and a resource depends on the resource that has an empty list/map, it will cause the resource to fail out anyways. To solve this, dependant resources must have a boolean check via the `for_each`	or `count` to ensure that the resource is only created when the list/map is not empty.

## Dependency Management

Don't use `depends_on` unless absolutely necessary. Terraform is smart enough to figure out dependencies based on the resources and data sources you reference in your code. Using `depends_on` can lead to unnecessary complexity and make your code harder to read and maintain.

By properly designing your feature tables	and using `for_each` or `count`, you can ensure that resources are created in the correct order without having to explicitly define dependencies. 

See: [Boolean vs Empty lists/maps](#boolean-vs-empty-listsmaps) to better understand how to handle dependencies based on the state of your resources.

## Resources and References

- [lifecycle Meta-Argument ](https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle){:target="_blank"}
- [Terraform Best Practices](https://www.terraform-best-practices.com/){:target="_blank"}
