# Awesome Interview Prep

The ultimate interview preparation guide that goes beyond LeetCode — master data structures and algorithms, systems design, behavioral excellence, and real‑world problem solving.

---

## Why this exists

Most guides focus on solving hundreds of problems. This one focuses on building repeatable frameworks, deliberate practice routines, and high‑signal preparation so you can perform confidently under interview constraints.

---

## What you’ll get

- A pragmatic daily routine and study plan
- Frameworks for coding, system design, and behavioral interviews
- Curated, high‑signal resources (free and paid)
- Templates, checklists, and rubrics you can copy‑paste
- An 8‑week plan you can follow or adapt

---

## How to use this guide

1. Pick your timeline (2, 6, or 8+ weeks) and stick to it.
2. Follow the daily routine and weekly focus areas.
3. Use the frameworks and templates during practice to internalize them.
4. Do timed reps. Review mistakes deliberately. Track progress.
5. Ramp up mocks in the final 2–3 weeks.

Tip: Consistency beats volume. Aim for 90–120 focused minutes daily, more on weekends.

---

## Daily routine (60–120 minutes)

- Warm‑up (5–10m): One quick problem or spaced‑repetition review
- DSA focused block (30–60m): 1–2 problems from your current pattern
- Review (10–15m): Redo from scratch or write a clean solution
- Systems/Behavioral (15–30m): Alternate days
- Mock snippet (10–15m): Talk out loud through a solution or design

Optional: Add a second block in the evening for spaced repetition and behavioral refinement.

---

## Coding interview framework (repeatable steps)

1. Clarify: Restate problem, constraints, edge cases, input size, time/space targets
2. Examples: Work a small example; identify patterns and pitfalls
3. Approach: Compare 2–3 strategies; pick one and justify trade‑offs
4. Plan: Outline algorithm and complexity; define data structures
5. Code: Write clean code with clear variable names and structure
6. Test: Use the examples; cover edge cases; fix defects methodically
7. Optimize: Discuss improvements and follow‑ups if time permits

Keep a timer. Verbalize your thinking. Use meaningful variable names.

---

## Core DSA patterns (practice by pattern)

- Arrays & Hashing: Two pointers, sliding window, prefix sums, frequency maps
- Linked Lists: Slow/fast pointers, reversing, cycle detection, partitioning
- Stacks & Queues: Monotonic stack/queue, min stack, BFS
- Trees & Graphs: DFS/BFS, recursion patterns, topological sort, union‑find
- Heaps & Priority Queues: K‑th problems, streaming, scheduling
- Binary Search: On values, on answers, monotonic predicates
- Dynamic Programming: 1D (climb, house robber), 2D grid, subsequences (LCS/ LIS), knapsack, interval DP
- Backtracking: Permutations, combinations, subsets, pruning
- Greedy: Exchange arguments, local‑to‑global proofs, intervals
- Strings: KMP/Rabin‑Karp basics, tries, sliding window on strings

Suggested sequence: Hashing → Two Pointers → Sliding Window → Stack/Monotonic → Binary Search → Trees/Graphs → Heaps → DP → Backtracking → Greedy.

---

## Big‑O quick reference

| Operation                        | Average | Worst |
| -------------------------------- | ------- | ----- |
| Hash map get/set                 | O(1)    | O(n)  |
| Balanced BST get/set             | O(log n)| O(log n) |
| Binary search (sorted)           | O(log n)| O(log n) |
| Scan array                       | O(n)    | O(n)  |
| Heap push/pop                    | O(log n)| O(log n) |
| Union‑find (amortized)           | ~O(1)   | ~O(1) |

Know your invariants; choose structures that match constraints.

---

## System design framework (whiteboard friendly)

1. Clarify requirements: Functional/non‑functional, users, scale targets
2. Back‑of‑the‑envelope: Traffic, QPS, storage, bandwidth, latency budgets
3. API and data model: Read/write patterns, hot keys, indexes
4. High‑level architecture: Services, data flow, storage choices
5. Deep dives: Caching, sharding, replication, consistency, queues
6. Bottlenecks & trade‑offs: Consistency vs availability, cost, complexity
7. Evolution: Partitioning, rebalancing, backfills, migrations, observability
8. Wrap‑up: Failure modes, rate limiting, security, privacy, multi‑region

Common designs to practice: URL shortener, news feed, chat/messaging, rate limiter, notifications, file storage, search autocomplete, metrics pipeline.

---

## Behavioral framework (STAR+R)

- Situation: Concise, specific context
- Task: Your responsibility and goal
- Action: Concrete steps you took; show leadership/ownership
- Result: Impact with numbers; what changed
- Reflection: What you learned; how you applied it later

Keep 6–8 stories ready: leadership, conflict, failure, ambiguity, ownership, impact, technical depth, cross‑team collaboration.

---

## Templates you can copy

### Coding interview checklist

```md
- [ ] Restate the problem and constraints
- [ ] Identify examples and edge cases
- [ ] Compare approaches; choose and justify
- [ ] Outline algorithm and complexity
- [ ] Write clean, readable code
- [ ] Test with normal and edge cases
- [ ] Discuss optimizations and trade‑offs
```

### System design scratchpad

```md
## Requirements
- Functional:
- Non‑functional: latency, throughput, availability, durability

## Estimates
- Users/QPS:
- Storage / growth:
- Latency budgets:

## API
- POST /...
- GET /...

## Data model
- Entities, indexes, hot keys

## Architecture
- Services, data flow, storage

## Deep dives
- Caching, sharding, replication
- Queues / streams
- Consistency model

## Risks and mitigations
- Failures, backpressure, retries, idempotency

## Evolution
- Repartitioning, migrations, observability
```

### STAR+R story outline

```md
Situation: 
Task: 
Action: 
Result: 
Reflection: 
```

### Self‑review rubric (quick scoring)

```md
Coding (10): correctness [ ], complexity [ ], clarity [ ], tests [ ]
Design (10): requirements [ ], scale math [ ], components [ ], trade‑offs [ ]
Behavioral (10): clarity [ ], ownership [ ], impact [ ], reflection [ ]
Communication (10): structure [ ], listening [ ], concision [ ], collaboration [ ]
```

---

## 8‑week plan (adapt as needed)

- Week 1: Arrays/Hashing, Two Pointers, Sliding Window; 1 behavioral story/day
- Week 2: Stack/Monotonic, Binary Search; mock coding (30m) × 2
- Week 3: Trees/Graphs I (DFS/BFS), Heaps; system design fundamentals
- Week 4: Trees/Graphs II (toposort/union‑find); 1 small design (URL shortener)
- Week 5: DP I (1D, knapsack); behavioral deep‑dives; mock design × 1
- Week 6: DP II (subsequences, intervals); system design (feed/notifications)
- Week 7: Backtracking, Greedy; company‑specific prep; 2–3 full mocks
- Week 8: Review weak spots; mixed practice; 3–4 full mocks; rest day before onsite

If you have 2–3 weeks, compress to patterns you can master and do daily mocks.

---

## Company‑specific prep (high level)

- Amazon: Leadership Principles; bar raiser; data‑driven impact
- Google: General cognitive ability; algorithmic clarity; clean abstractions
- Meta: Product sense; metrics; moving fast with impact
- Microsoft: Collaboration; design; customer focus

Tailor stories to company values. Mirror their language in your answers.

---

## Tools and setup

- Language: Choose one primary (Python, Java, or TypeScript) and master its DS libraries
- IDE: Set up snippets, format on save, linting, and test runner hotkeys
- Timing: Use a 30–45 minute timer; practice under interview constraints
- Whiteboarding: Alternate between editor and plain text/whiteboard mode
- Tracking: Maintain a simple log of problems, patterns, and mistakes

---

## High‑signal resources

- DSA
  - [NeetCode Roadmap](https://neetcode.io/roadmap)
  - [Sean Prashad’s LeetCode Patterns](https://seanprashad.com/leetcode-patterns/)
  - [Tech Interview Handbook](https://www.techinterviewhandbook.org/)
  - [VisuAlgo (DSA animations)](https://visualgo.net/en)
  - [Big‑O Cheat Sheet](https://www.bigocheatsheet.com/)
- System Design
  - [System Design Primer](https://github.com/donnemartin/system-design-primer)
  - [Grokking the System Design Interview (Educative)](https://www.educative.io/courses/grokking-the-system-design-interview)
- Behavioral & Mocks
  - [Interviewing.io (mock interviews)](https://interviewing.io/)
  - [Pramp (peer mocks)](https://www.pramp.com/)
  - Cracking the Coding Interview (book)

Use paid resources only if they fit your learning style; great prep is possible with free options.

---

## FAQ

- How many problems should I do? Quality over quantity. Master ~75–125 across patterns.
- Which language should I use? Your strongest one. Master its standard library and idioms.
- I keep forgetting solutions. Redo problems 24–48 hours later from scratch; build a spaced‑repetition queue.
- I panic in interviews. Practice out loud daily. Use the frameworks until they’re automatic.

---

## Contributing

Spotted a gap or want to add a mini‑guide/template? Open a PR with a short summary of the improvement. Please keep additions opinionated, concise, and high‑signal.
