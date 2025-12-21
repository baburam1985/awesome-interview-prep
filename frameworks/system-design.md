# System Design Interview Framework

## 1. Clarify Requirements
- Capture the problem statement in your own words to ensure understanding.
- Identify **functional requirements** (core features, inputs/outputs, user interactions).
- Identify **non-functional requirements** such as latency, availability, consistency, scalability, durability, security, privacy, and compliance.

## 2. Scope and Constraints
- Estimate the scale: number of users, requests per second (QPS), data size, and growth rate.
- Clarify constraints like geographic distribution, regulatory constraints, SLA.
- Decide what features are in scope vs. future improvements.

## 3. API & Interface Design
- Define core APIs or endpoints: request methods, parameters, responses, error codes.
- Document typical user flows and how clients will interact with the system.

## 4. Data Modeling
- Identify key entities and relationships.
- Choose appropriate data storage technologies (SQL, NoSQL, time-series, in-memory) based on access patterns.
- Consider indexing, partitioning/sharding, replication, and backup strategies.

## 5. High-Level Architecture
- Sketch the overall system: client \u2194 load balancer \u2194 service layer \u2194 databases/storage.
- Identify stateless vs stateful components and microservices vs monolith.
- Describe how external services (third-party APIs, authentication providers) integrate.

## 6. Component Deep Dive
- **Ingestion:** How requests enter the system; load balancing, rate limiting, API gateways.
- **Processing:** Business logic, microservices, orchestration patterns.
- **Storage:** Data caching (Redis, Memcached), databases, object storage, message queues.
- **Caching & CDN:** Layered caching strategies, content delivery networks for static assets.
- **Messaging:** When to use asynchronous processing (queues, streams) to decouple services.
- **Search & Indexing:** Approaches for full-text search, analytics, or recommendations.

## 7. Non-Functional Considerations
- **Scalability:** Horizontal vs vertical scaling, auto-scaling, partitioning, replication.
- **Availability & Fault Tolerance:** Redundancy, failover strategies, multi-AZ/multi-region deployment.
- **Consistency & Data Integrity:** CAP theorem trade-offs, eventual vs strong consistency, idempotency.
- **Performance & Latency:** Caching, load shedding, backpressure, monitoring.
- **Security & Privacy:** Authentication, authorization, encryption (at rest and in transit), rate limiting, auditing.
- **Observability:** Logging, metrics, distributed tracing, health checks, alerting.

## 8. Evolution & Trade-offs
- Highlight trade-offs made between consistency, availability, latency, complexity, and cost.
- Discuss how the system can evolve: adding new features, handling traffic spikes, migrating to microservices, introducing machine learning.
- Consider versioning of APIs and data, backward compatibility.

## 9. Summary
- Recap the design choices and their justifications.
- Identify potential risks and future improvements.
- Ask clarifying questions to check if stakeholders have additional requirements or edge cases.
