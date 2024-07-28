# System Design

##

## System design notes:

### Developers CI/CD flow (sample)

##

### Good System Design ensures:

1. Scalability
2. Maintainability
3. Efficiency
4. Reliability

##

### Types of data handling

1. Moving data
2. Storing data
3. Transforming data

##

### System Design Theorem

The CAP theorem, also known as Brewer's theorem, is a concept in
distributed computing that states that it is impossible for a distributed
system to simultaneously provide three specific guarantees: Consistency,
Availability, and Partition tolerance.

In simpler terms, the CAP theorem says that in any given moment, a
distributed system can either be consistent (ensuring all nodes see the
same data at the same time), available (able to respond to client
requests), or partition-tolerant (able to continue functioning even if
some nodes are unavailable due to network issues). However, it's not
possible for a system to guarantee all three of these properties
simultaneously.

This theorem is often used as a framework for thinking about the tradeoffs
involved in designing distributed systems and understanding the
limitations of such systems.

##

### A bit of understanding Networking

OIS Layers

IPv4
IPv6

DNS

RPC (Remote Procedure Calls)

HTTP
UDP
SSH
FTP
SMTP
IMAP
POP3
Web-sockets
webRTC
MQTT
AMQP

##

### APIs

- Make sure your APIs are backward compatible. This make sure to not break the stuff.
  Eg: api/products/v1/ - old clients
  api/products/v2/ - new clients

- Rate Limiting : Make sure to have rate limiting to avoid DDOS attacks.

- CORS : Make sure to accept request from certain domains only.

##

### Caching Topics

- Cache Hits
- Cache Miss
- Cache Ratio = Cache Hits / (Cache Hits + Cache Miss)
  The better the ratio the effective is the caching

##

### Load Balancer

Handling load balancing failures is important for maintaining the performance and availability of distributed systems. Here are some steps you can take to handle such
failures:

1. Monitor your load balancer: Regularly monitor your load balancer's health, configuration, and performance metrics to ensure that it is functioning properly.
2. Configure failover: Set up failover mechanisms in case one of the servers or the entire data center fails. This can include configuring backup servers or redundant
   hardware.
3. Test failover procedures: Regularly test your failover procedures to ensure that they work as expected and that you are able to quickly recover from a failure.
4. Use health checks: Configure health checks to periodically check the status of your servers, and automatically redirect traffic to healthy servers in case of a
   failure.
5. Monitor application logs: Regularly monitor your application logs to detect any errors or issues that may be affecting your load balancing performance.
6. Scale up or down as needed: Depending on the load on your system, you may need to scale up or down the number of servers in your load balancer to ensure optimal
   performance.
7. Use a distributed tracing tool: A distributed tracing tool can help you identify and diagnose issues with your load balancing setup by providing visibility into how
   requests are being handled across your distributed system.

<b> Auto healing features </b>

Auto healing is a feature that some load balancers offer, which automatically detects and corrects failures in real-time. This can include rerouting traffic to
healthy servers or automatically restarting failed servers.

Auto healing is typically implemented through algorithms that monitor the health of servers in real-time, and automatically take action to reroute traffic or restart failed servers when necessary. This helps ensure that your system remains highly available and responsive even in the event of failures.

##

### Databases

RDBMS and No SQL

- RDBMS provides ACID compliance (Atomicity, Consistency, Isolation, Durability)

More about ACID

- Atomicity: All changes made to the database during a single transaction are treated as a single unit of work. If any part of the transaction fails, the entire
  transaction is rolled back.
- Consistency: Transactions bring the database from one valid state to another. This means that no violation of integrity constraints or rules is allowed.
- Isolation: Transactions should be isolated from each other, meaning that changes made by one transaction should not be visible to others until the transaction has
  completed.
- Durability: Once a transaction has been committed, its changes should be permanent and persistent in the database, even in the event of system failures or crashes.

We also have In-Memory databases.
An in-memory database is a type of database that stores data in memory rather than on disk. This allows for much faster access times than traditional disk-based
databases, as data can be retrieved directly from memory without the need to read from disk.

Here are some examples of popular in-memory databases:

- SAP HANA: A column-oriented in-memory database that is commonly used for real-time analytics and high-performance OLTP (Online Transaction Processing) workloads.
- Redis: An open-source, in-memory data structure store that can be used as a database, cache, or message broker.
- VoltDB: A distributed, in-memory relational database that is optimized for high-performance OLTP workloads.

In-memory databases are often used in applications where speed and low latency are critical, such as real-time analytics, financial trading platforms, and high-traffic
web applications.

Understanding the vertical and horizontal scaling

- Vertical Scaling

  - Definition: Increasing the resources of a single server.
  - Process: Upgrading CPU, RAM, storage, or network capabilities of an existing server.
  - Advantages: Simpler to manage, often cheaper initially.
  - Disadvantages: Limited scalability, potential for bottlenecks, downtime during upgrades.

- Horizontal Scaling
  - Definition: Adding more servers to distribute the workload.
  - Process: Adding additional servers to handle increased traffic or load.
  - Advantages: Better scalability, higher availability, improved fault tolerance.
  - Disadvantages: Increased complexity, higher initial costs.

### Improving database

Sharding
Sharding is a database partitioning technique that divides a large dataset into smaller, more manageable chunks called shards. This is commonly used to improve database performance and scalability when dealing with massive amounts of data.

Types of Sharding:

Horizontal Sharding: Distributes data across multiple databases based on data attributes (e.g., user ID, order date).
Vertical Sharding: Separates database tables into different databases based on data types or access patterns.
Master-Slave Replication
Master-slave replication is a technique where a primary database (master) is replicated to one or more secondary databases (slaves). This is used for:

Read Scaling: Distributing read load across multiple slaves.
High Availability: If the master fails, a slave can be promoted to become the new master.
Data Backup: Slaves serve as backups of the master database.

Other Related Topics

- Data Consistency: Ensuring data integrity and consistency across multiple shards or replicas.
- Load Balancing: Distributing incoming traffic across multiple servers or database instances.
- Caching: Storing frequently accessed data in memory for faster retrieval.
- Indexing: Creating indexes on frequently queried columns to improve query performance.
- Partitioning: Dividing data into smaller, more manageable chunks for efficient storage and retrieval.
- Distributed Transactions: Managing transactions across multiple databases or nodes.
- CAP Theorem: Understanding the trade-offs between Consistency, Availability, and Partition tolerance in distributed systems.

Additional Considerations

- Database Technologies: Different databases offer varying levels of support for sharding and replication (e.g., MySQL, PostgreSQL, MongoDB).
- Sharding Key: Carefully choosing a sharding key is crucial for efficient data distribution and retrieval.
- Data Distribution: Consider how data will be distributed across shards and how to handle data growth and rebalancing.
- Fault Tolerance: Implement mechanisms to handle failures and ensure data availability.

### More to the increasing the DB performance

DB Caching

- Definition: Storing frequently accessed data in memory to reduce database load and improve query performance.
- How it works: Copies of frequently accessed data are stored in memory, allowing faster retrieval without hitting the database directly.
- Benefits: Reduced database load, improved query response times.
- Example: Web applications often cache frequently accessed product information or user profiles.

DB Indexing

- Definition: Creating data structures that allow for efficient searching and retrieval of specific data items within a database table.
- How it works: Indexes are like an index in a book, pointing to the location of data. They speed up data retrieval by avoiding full table scans.
- Benefits: Improved query performance, faster search and sorting operations.
- Example: Creating an index on a frequently searched column like customer_id in a customer table.

Query Optimization

- Definition: The process of improving the efficiency of database queries to reduce query execution time.
- How it works: Analyzing query execution plans, identifying performance bottlenecks, and rewriting queries to optimize their execution.
- Benefits: Faster query execution, reduced database load, improved application performance.
- Example: Using appropriate indexes, avoiding unnecessary data retrieval, and optimizing query structure.
  In essence:

- Caching stores frequently accessed data in memory for faster retrieval.
- Indexing creates data structures to speed up data search within the database.
- Query optimization analyzes and improves the efficiency of SQL queries.

These techniques are often used together to achieve optimal database performance. By understanding and effectively implementing these concepts, you can significantly enhance the responsiveness and scalability of your database applications.

##

### Server

On a server level how does server accesses the information.

##

### Server must be

- Reliable : Correct & consistent.
- Fault tolerant : Handling unexpected failures.
- Redundancy : Having a backup to switch to incase a server fails.
- Speed

  - Throughput: How much data it can handle (Bytes per second).
  - Response per second (RPS).
  - Queries per second (QPS) (DB servers).

- Latency : How long it takes to handle single request.

##

### Server Availability

This is shown as 99.9% availability (8.76hrs downtime), 99.999%(5mins of downtime) availability etc, it means.

SLO - Service Level Objectives

- Definition: Quantitative measures of performance that define what a service level is.
- Relation to Availability: Availability is a common metric used in SLOs, but SLOs can also include other performance indicators like response time, error rates, and success rates.
- Example: An SLO might state that the system will be available 99.9% of the time and have an average response time of less than 200 milliseconds.

SLA - Service Level Agreements

- Definition: Formal contractual obligations between a service provider and its customers that define the expected service levels.
- Relation to SLOs: SLAs are based on SLOs and specify penalties or remedies if the service provider fails to meet the agreed-upon service levels.
- Example: An SLA might guarantee 99.9% availability with a financial penalty for each hour of downtime exceeding the agreed-upon threshold.

Additional Considerations

- Five Nines: A common term for 99.999% availability, representing very high levels of uptime.
- Mean Time Between Failures (MTBF): The average time between failures of a system.
- Mean Time To Repair (MTTR): The average time it takes to restore a system to operation after a failure.
- Redundancy: Implementing redundant components (e.g., servers, network connections) can improve availability.
- Monitoring: Continuous monitoring of system performance is essential for identifying and addressing issues before they impact availability.

### Downtime calculation

Total Hours in a Year:

There are 24 hours in a day.
There are 365 days in a year (ignoring leap years for simplicity).
So, total hours in a year = 24 hours/day \* 365 days/year = 8760 hours.
Calculating Downtime:

If a system is available 99.9% of the time, it means it's unavailable for 0.1% of the time.
To calculate the downtime in hours:
Downtime = Total hours _ (1 - Availability percentage)
Downtime = 8760 hours _ (1 - 0.999) = 8760 hours \* 0.001 = 8.76 hours

##

## System design Interview Session

1. Understand and design scope (5mins)
   Get the requirements, understand them, get a sense of scope and size of data dealt with
   the app being built.
   Requirements can be : Functional and Non Functional.

2. High level design (20mins)

   - API design.
   - Load balancer.
   - API gateway.
   - Data storage layer.

3. deep dive (15mins)

   - Articulate the problem.
   - Come up with at least 2 solutions.
   - Discuss tradeoff of the solution.
   - Pick a solution and discuss with interviewer.
   - Repeat.

4. wrap up (5mins)

A session for system design could easily last for 50mins.

### NFR (Non Functional Requirements):

1. Consistency
2. Freshness
3. Accuracy
4. Performance
5. Scale
6. Security
