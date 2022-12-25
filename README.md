# NLW Heat | Domain Drive Design

![banner](banner.png)

> Another project carried out at the Rocketseat event, `Next Level Week - Heat`, in this edition we build an end-to-end application, with
> the purpose of authenticating the user via Github's authentication provider so that the user can send a message about the expectations of the event.
> The application was initially developed following good back-end development practices, such as `separating controller responsibilities into services`,
> as you can see in the `main` branch, but when redoing the project I used `Domain Drive Design` concepts to improve my knowledge of clean architecture.

:arrow_right: Domain Drive Design <br />
:arrow_right: Factories and Mappers <br />
:arrow_right: Middlewares <br />
:arrow_right: Github Authentication <br />

<br />

## Clean Architecture & Domain Drive Design 

A software system that is difficult to develop is unlikely to have a long, healthy lifespan. Therefore, `the architecture` must facilitate the development of this system by the development teams.

### Product, Module and Component

- <strong>Component</strong>

A component is a `single piece`, usually relatively small in scope, possibly general purpose.

Components are units of deployments. `They are the smallest entities that can be deployed as part of a system`, in interpreted languages, they are aggregations of source files. Components can be bundled into a single executable. They can also be bundled into a single file or deployed independently as separate dynamically loaded plugins. In any case, when effectively deployed, well-designed components always retain the ability to be independently deployed and therefore independently developed.

```
Product - application, library, package, service
  Module - GUI, core logic, data, etc...
    Component - purpose specific collection of objects
```

 - <strong>Product</strong>

The product is a functional system that aggregates a collection of modules (the fundamental parts for the functioning of the system).

 - <strong>Module</strong>
 
JavaScript modules are a way for you to share information between files, so all files that import this module will be able to use and benefit from its functions or information that has been exposed. This way, we avoid having to keep loading N files.

```
Shapes             <- Package/Library name
  - Circle.js      <-
  - Rectangle.js   <- Modules that belong to the Shapes package/library
  - Square.js      <-
```

The dynamically linked files, which can be assembled at runtime, are the software components of our architectures. It took 50 years, but we've reached a point where component plugin architecture can be applied as the typical pattern, as opposed to the herculean effort it was in the past.

Teams with different structures require different architectural decisions. On the one hand, a small team of five developers could very well work together to develop a minolithic system with no defined components or interfaces. In fact, this team would likely see architectural frameworks as something of an obstacle during the early days of development. That's probably why so many systems don't have good architecture: they started with none because the team was small and didn't want to face the hassle of a superstructure.

*<i>Clean Architecture By Robert C. Martin</i> <br />

### Main benefits of a good software architecture

In a simple way, we can list the main benefits of software architecture:

 - Risk reduction with information security and systemic interruptions
 - Efficient interaction between different sectors of the company
 - Provision of flexible and high quality solutions
 - Easy integration with different solutions
 - Easy scalability if needed
 - Less impact if there is a need for maintenance

In addition, good practices and requirements related to software architecture allow the development of solutions to be based more easily on the `agile methodology`, facilitating the management of deliveries.

Still on the benefits of software architecture, when looking for a specific modeling that allows combining different components, in order to guarantee the benefits listed above, software architects are based on the so-called architectural vision, which is what guarantees the choice of architecture ideal for the evaluated solution.

For this, the architect evaluates all the architectural options for implementing the application, selecting the set of solutions that will determine the best functioning of the system.

Among the types of software architecture decisions, we have:

 - processing;
 - flow, use cases and business logic;
 - infrastructure;
 - implantation.
 
### Domain Driven Design

When you talk about Domain-Driven Design (DDD), you immediately think of the `architectural model`, the DDD building blocks and related design patterns.

However, to work with DDD we need to develop some more skills, such as learning to model domains effectively, and for that, we need to become what Eric Evans calls `Knowledge Crunchers`, someone prepared to receive, filter and organize a avalanche of information. Domain-Driven Design is, first of all, `communication`. In DDD modeling and implementation go hand in hand. Domain experts (users, analysts, and other domain experts) along with developers and architects work hand in hand with a common goal: to build domain-driven software to meet customer needs.

To do this, in the first place, it is necessary that everyone uses a common language and that there is no translation in the communication between team members. The team therefore develops a ubiquitous (general and universal) language that expresses the knowledge of business experts for the domain model (for the code).

 - <strong>Domain and Model</strong>
 
The domain of a software are the activities performed by the user and their area of ​​interest. The domain can be as complex as the processes and data it comprises.

 - A model is, according to Evans (2004, p. 2) `“a simplification. It is an interpretation of reality that abstracts the relevant aspects to solve the problem in question and ignores extraneous details”.`

With a model we get:

 - `Abstract the complexity of the business` through a simplified representation of it — a model.
 - The model serves as something `common and palpable to all team members`, which, together with the ubiquitous language, allows everyone to actively participate in the progressive construction of the same.
 - The model (provided it is done correctly) `guarantees that what is being specified is what is being implemented`.
 - The model `is the means of communication used by the team`. Thanks to the link between model and implementation, developers can speak in the language of the software when communicating with domain experts (without having to translate the message).
 - The model is distilled knowledge — `it's the way the team agrees to structure the knowledge extracted from the domain`.

`The model is evolving`: With each iteration between domain experts and the technical team, the model becomes deeper and more expressive, richer, and developers transfer this source of value to the software.

Thus, `the model is gradually enriched` with the expertise of domain experts distilled by the developers, making the team gain more and more insight into the business and that knowledge is transferred to the model (to the code) through the building blocks of DDD.

When new business rules are added and existing rules are changed or removed, the implementation is refactored to reflect these model changes in the code.

In the end, the model (which ultimately will be the software) will express the business with a wealth of knowledge.

 - As Evans (2004, p. 23) explains `“DDD puts a lot of knowledge into the model that deeply reflects the domain. This is only possible through collaboration between those who know the domain and those who know how to create software. And because development is iterative, that collaboration continues throughout the life of the project.”`

That is, Domain-Driven Design leads us to build software guided by knowledge and business modeling before any appeal for technology.

Obviously in order for us to successfully implement the domain model, we need engineering.

And, therefore, the DDD `guides us through its building blocks` to use some consecrated architecture principles and design patterns, among them I highlight:

 - Domain isolation with layered architecture.
 - Model representation through well-defined software artifacts (entities, value objects, services, factories, repositories, specs, modules, etc).
 - Lifecycle management of domain objects with aggregates.
 
<strong>The 5 ingredients of an effective model:</strong>

 - Link the model with the implementation: this link is made from the beginning, when the model is still primitive and will be maintained until the end. This bond is deep, the implementation must 100% reflect the model.
 - Cultivate a language based on the model: in the beginning it will be necessary for developers and domain experts to understand each other's terms, but later both will speak the same language, organizing the communication sentences in a structure consistent with the model and without ambiguities.
 - Develop a model rich in knowledge: objects have data and associated behaviors. The model should not just be a data structure (anemic model), it should capture domain knowledge to solve domain problems.
 - Distill the model: the model must be refined. Just as important concepts must be added, concepts that have no relevance must be removed. With each iteration the model will get richer and have more value.
 - Brainstorming and experimentation: direct interaction between developers and domain experts, through brainstorming and on-the-spot diagramming, turns discussions into model labs, in which several variations of experiments can be exercised and the result can be used if it shows value or discarded otherwise.
 
*<i>medium.com/cwi-software/domain-driven-design-do-in%C3%ADcio-ao-c%C3%B3digo-569b23cb3d47</i> <br />



