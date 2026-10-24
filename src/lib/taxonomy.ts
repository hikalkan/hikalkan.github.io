export const topics = {
  ddd: 'Domain-Driven Design',
  modular: 'Modular Monolith',
  microservices: 'Microservices',
  kubernetes: 'Kubernetes',
  'multi-tenancy': 'Multi-Tenancy',
  abp: 'ABP Framework',
  blazor: 'Blazor',
  efcore: 'EF Core',
  aspnetcore: 'ASP.NET Core',
  'low-code': 'Low-Code',
  security: 'Security',
  concurrency: 'Concurrency',
} as const;

export const formats = {
  conference: 'Conference',
  meetup: 'Meetup',
  workshop: 'Workshop',
} as const;

export type Topic = keyof typeof topics;
export type Format = keyof typeof formats;
