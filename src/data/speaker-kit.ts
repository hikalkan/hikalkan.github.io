export const bios = {
  short:
    'Halil İbrahim Kalkan is a software architect and co-founder of Volosoft. He is the lead architect of the open source ABP Framework, the author of "Mastering ABP Framework", and speaks about Domain-Driven Design, modular architectures and .NET.',
  long: [
    'Halil İbrahim Kalkan is a software architect and developer who has been programming since 1997. He co-founded Volosoft in 2015 and leads the development of the open source ABP Framework, an opinionated application framework for building modern .NET solutions. Before ABP, he created ASP.NET Boilerplate and several other open source projects.',
    'He is the author of "Mastering ABP Framework" (Packt, 2022) and the free e-book "Implementing Domain Driven Design". He is mostly interested in reusable frameworks and libraries, distributed systems, and multi-threaded, scalable solutions.',
    'Halil speaks at international conferences such as NDC, Techorama, .NET Conf, DotNext and WeAreDevelopers about multi-tenancy, microservice architecture, Domain-Driven Design, modular systems and developer tools.',
  ],
};

/** Talks offered to organizers. `presentedAt` lists ids from talks.yaml. */
export const signatureTalks = [
  {
    title: 'Implementing Domain-Driven Design as a Pragmatic .NET Developer',
    abstract: [
      'Domain-Driven Design is a well-accepted approach to building large systems with maintainable codebases. It provides both strategic and tactical patterns for software development. This talk focuses on tactical patterns with a pragmatic approach, explaining how to layer your software and implement aggregates, repositories, domain services, application services, and other fundamental building blocks through real-world examples and clear guidelines.',
      'The solution structure and code samples are based on .NET and C#, but this talk will be valuable for developers and architects working with any server-side technology.',
    ],
    presentedAt: [
      '2025-techorama-nl-ddd',
      '2025-developer-days-warsaw-ddd',
      '2025-ndc-copenhagen-ddd',
      '2025-devdays-vilnius-ddd',
      '2024-dotnext-ddd',
    ],
  },
  {
    title: 'Designing Modular Monolith for Microservice Architecture',
    abstract: [
      'Building a monolith first is a highly recommended approach for new solutions, even if your goal is to build a microservice solution in the end. One major reason is that requirements and service boundaries are not clear in the beginning, and playing with the service boundaries is not easy in a distributed system as it is in a monolith application.',
      'In this talk, I will clearly explain and offer a well-defined approach to build a modular monolith application that is easy to transform into a microservice system later.',
    ],
    presentedAt: ['2025-dotnext-modular-monolith', '2025-codemotion-rome-modular-monolith', '2024-abp-conf-modular-monolith'],
  },
  {
    title: 'Building a Kubernetes Integrated Local Development Environment for ASP.NET Core',
    abstract: [
      "Microservice architecture is a quite common approach to build highly scalable solutions with a large development team. While there are standard tools, like Kubernetes, to deploy, run and scale your microservices, the development side is not as mature as that. It is not easy to develop, run and test a single microservice that depends on other microservices and services. Running a copy of the entire system in the developer's machine is impractical.",
      'In this talk, I will introduce an efficient way of creating a development environment that is well integrated to Kubernetes. In this way, you can just run the microservice you are building and let Kubernetes run all your dependencies in your local machine or a remote server.',
    ],
    presentedAt: [
      '2025-techorama-nl-kubernetes',
      '2025-developer-days-warsaw-kubernetes',
      '2024-devdays-vilnius-kubernetes',
      '2023-abp-conf-kubernetes',
    ],
  },
  {
    title: 'Dynamic Entities in .NET: Building Low-Code Systems on Top of Entity Framework Core',
    abstract: [
      'Designing a truly dynamic data model is one of the most challenging tasks in modern application development. Many teams fall back to traditional approaches like Entity-Attribute-Value (EAV) or overly generic schemas, only to struggle later with complexity, performance bottlenecks, and maintainability issues. In this talk, we will explore the landscape of dynamic entity systems, compare alternative patterns, and highlight their strengths and tradeoffs, before zooming in on how Entity Framework Core can be leveraged to build something both flexible and efficient.',
      "Drawing on real-world experience from building the low-code capabilities in ABP Framework, I will share the key architectural decisions, pitfalls, and solutions that made our dynamic entity system robust and performant. You'll see how EF Core's extensibility can be pushed to its limits, how to handle querying and schema evolution at runtime, and how to avoid common traps while maintaining developer productivity.",
    ],
    presentedAt: ['2026-wearedevelopers-dynamic-entities', '2026-devnot-dotnet-conf-dynamic-entities'],
  },
  {
    title: 'Developing Multi-Tenant Applications with .NET and ABP Framework',
    abstract: [
      'In this session, I will introduce the multi-tenancy pattern, which is a widely accepted approach for SaaS application development. Then I will show how you can build multi-tenant applications with .NET using the ABP Framework. We will mostly focus on isolating users, roles and other data of tenants while they are located in the same database and accessed by the same application instance.',
    ],
    presentedAt: ['2024-dotnet-conference-italy-multi-tenancy', '2023-dnf-summit-multi-tenancy', '2018-dotnext-multi-tenancy'],
  },
];
