const projects = [
  {
    name: 'Watney4',
    description:
      'A self-hosted AI assistant built in Kotlin that combines persistent memory, tool execution, voice interactions, and automation workflows.',
    url: 'https://github.com/hawk0120/watney4',
    question:
      'How should a persistent AI assistant manage memory, execute tools, and maintain user trust over long-term interaction?',
    architecture:
      'Kotlin coroutine-based runtime with SQLite memory layers, local and remote LLM orchestration, Discord and CLI interfaces.',
    findings:
      'Memory retrieval timing matters more than retrieval accuracy. Users prefer transparency in tool execution. Local models are viable for structured tasks and offer a trust advantage.',
    futureWork: 'Memory decay strategies, multi-user memory isolation, attention-based retrieval.',
  },
  {
    name: 'Thomas',
    description:
      'The first iteration of what would become Watney4. An experimental AI assistant exploring memory and reflection.',
    url: 'https://github.com/hawk0120/Thomas',
    question:
      'What happens when an AI assistant remembers across sessions?',
    architecture:
      'Kotlin/Spring Boot with PostgreSQL, Bluesky integration, strategy pattern for tool-based actions.',
    findings:
      'Memory is harder than conversation. Long-term context requires careful design. Persistence fundamentally changes how users perceive an assistant.',
    futureWork: 'Superseded by Watney4.',
  },
  {
    name: 'Turtles',
    description:
      'A modern terminal file manager written in Kotlin with mouse-driven interaction and GraalVM native compilation.',
    url: 'https://github.com/hawk0120/turtles',
    question:
      'Can a terminal file manager provide desktop-quality UX through mouse-driven interaction?',
    architecture:
      'Kotlin with Mosaic/Mordant terminal UI framework, GraalVM native image for fast startup.',
    findings:
      'Terminal UIs can match desktop expectations with careful event handling. GraalVM makes CLIs feel like native applications.',
    futureWork: 'Plugin system, remote filesystem support, protocol integration.',
  },
  {
    name: 'clammy',
    description:
      'An insurance claims management platform exploring backend architecture and API design across multiple stacks.',
    url: 'https://github.com/hawk0120/clammy',
    question:
      'How do different backend architectures compare when implementing the same domain model?',
    architecture:
      'Dual REST implementations (Java/Spring Boot and TypeScript/Express) sharing a domain model with Angular frontend.',
    findings:
      'Java/Spring Boot offers stronger type safety and tooling. TypeScript/Express enables faster iteration. The domain model remained consistent across both implementations.',
    futureWork: 'Event sourcing, GraphQL layer, performance benchmarking.',
  },
  {
    name: 'ToolRunner',
    description:
      'A Kotlin framework for building and orchestrating reusable tools and workflows.',
    url: 'https://github.com/hawk0120/ToolRunner',
    question:
      'How should tool execution be structured for composability in AI agent workflows?',
    architecture:
      'Kotlin framework with plugin architecture and strongly typed tool definitions.',
    findings:
      'Type-safe tool definitions reduce runtime errors. Composable pipelines enable complex multi-step workflows from simple primitives.',
    futureWork: 'Remote execution, tool discovery protocol, standard library.',
  },
  {
    name: 'debby',
    description:
      'A lightweight file-based database engine experimenting with simplifying persistence.',
    url: 'https://github.com/hawk0120/debby',
    question:
      'How simple can a file-based database be while remaining practically useful?',
    architecture:
      'In-memory loaded file store with read, write, and update operations. Entire database held in memory during use.',
    findings:
      'For small projects, file-based persistence eliminates deployment complexity. Simplicity is a feature, not a limitation.',
    futureWork: 'Transaction support, query filtering, indexed access.',
  },
  {
    name: 'Weapy',
    description:
      'A mobile application tracking real-time pollen levels based on user location.',
    url: 'https://www.bradyhawkins.dev/blog/',
    question:
      'How can real-time environmental data be presented in an accessible, location-aware mobile interface?',
    architecture:
      'React Native with geolocation services, pollen API integration, and custom theming.',
    findings:
      'Location-based environmental data is compelling for users. API reliability and data freshness are the primary bottlenecks.',
    futureWork: 'Historical tracking, allergy predictions, push notifications.',
  },
];

export { projects };
