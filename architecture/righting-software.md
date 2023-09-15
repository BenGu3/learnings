## Chapter 1 - The Method

### What is the Method?

- `The Method = System Design + Project Design`
- System Design
    - breaking down a big system into small modular comonents
    - guidelines for the structure, role, semantics of componenents and interactions of components
- Project Design
    - schedule/cost/risk
    - sets up the project for execution and tracking
- ? Project design is far more important for success than system design
- Design Validation
    - the design must address the customer requirements
    - the design must address the organization or the team capabilities and constraints
- ? Parkinson's law states that work always expands to fill the alloted time

### What The Method Is Not

- A silver bullet...

---

## Chapter 2 - Functional Decomposition

### Avoid Functional Decomposition

- decomposition based on time (components are written in the context of the order they are called)
- too many or too big (leads to have as many services as variations of functionalities)
- client bloating (when clients orchestrate)
- service bloating (when services orchestrate)
- ? "The level of coupling and complexity is so high in function/domain decomposition that you can only unit test. The sad reality is that unit testing is borderline useless" 🤮

### Volatility-Based Decomposition

- Identifies areas of potential change and encapsulates those into services or system building blocks
- "You can extend the system by adding more areas of encapsulated volatility or integrate existing areas of volatility in a different way"
- ? All well-designed systems, software and physical systems alike, encapsulate their volatility inside the system's building blocks

### Identifying Volatility

- Variability is something that can easily be handled using conditional logic
- Volatility is a change that would ripple through the system
- Axes of Volatility
    - One Customer over time
    - All customers at one time
- The nature of business is a volatility that should not be encapsulated
- Don’t encapsulate extremely unlikely volatilities (speculative design)

---

## Chapter 3 - Structure

### Use Cases and Requirements

- Requirements should capture the required behavior (how the system should operate) rather than functionality (what it should do)
- A use case is an expression of required behavior

### Layered Approach

- The more layers, the better the encapsulation
- Cross layers using services to provide:
    - Scalabity - you only need as many service instances as there are calls in progress
    - Security - authorize/authenticate between clients and services (use chain-of-trust)
    - Throughput and Availability - services can accept calls over queues
    - Responsiveness - services can throttle calls
    - Reliability - services can use reliable messaging protocol
    - Consistency -
    - Synchronization - calls to the service can be synchronizaed even if clients are multi-thread

### Typical Layers

- Client Layer
    - All clients are equalized, whether human users or other systems
    - All clients use the same entry point and subject to same security, data types, other interfacing requirements
    - Separation of presentation and business logic
    - Often the most volatile layer
- Business Logic Layer
    - Implements the systems behavior which is best expressed in use cases
    - A use case will change in one of two ways:
        - The sequence changes (managers)
        - The activities change (engines)
    - Managers tend to encapsulate a family of logically related use cases
    - Engines encapsulate business rules and activities
- Resource Access Layer
    - Encapsulates the volatility of resource access and the resource itself
    - Use atomic business verbs in naming access layer methods
- Resource Layer
    - Contains the actual physical resource
- Utilities Bar
    - Common infrastructure

### Classification Guidelines

- Naming
    - Services are two part compound words
        - Suffix is service type (manager, engine, access)
        - Prefix depends on type of service
            - Manager should be noun associated with the encapsulated volatlity
            - Engines should be noun describing encapsulated activity
            - Access should be noun associated with recourse l
    - Gerunds should only prefix engines
    - Atomic business verbs shouldn’t be used in a prefix, only operation names in access layer
- Four Questions
    - Clients - Who
    - Managers - What
    - Engines - How (business activities)
    - Access - How (accesses resources)
    - Resources - Where
    - If you have a lot of engines, you may have done functional decomposition
- Key observations
    - Volatility decreases top-to-bottom
        - Clients are most volatile
        - Managers change when use cases change
        - Engines change when business changes an activity
        - Access changes when you change the way you access resources
        - Resources are least volatile
    - Reuse increase top-to-bottom
        - Clients are hardly ever reusable
        - Resources are extremely reusable
- Almost-Expendable Managers
    - Expensive manager (too much work to change) is probably too big
    - Expendable manager (too easy to change because it’s a pass-through) are only satisfying design guidelines without encapsulating use case volatility
    - Almost-Expendable Manager should:
        - Orchestrate engines and access
        - Encapsulate the sequence volatility

### Subsystems and Services

- Design iteratively, build incrementally
    - Geared toward extensibility
- Concerns about Microservices
    - Implied constraint of number and granularity of sevices
    - Functional decomposition in microservices
    - Shouldn’t use same communication mechanism internal and external
        - Internal communication should be impeccable
        - External communication is low bandwidth, slow, expensive, error prone

### Open and Closed Architectures
