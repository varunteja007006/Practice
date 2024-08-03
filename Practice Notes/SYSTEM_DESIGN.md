# System Design

##

## System design notes:

### Developers CI/CD flow (sample)

![CI CD](https://github.com/varunteja007006/Practice/blob/main/Practice%20Notes/CI-CD.svg?raw=true)

More Robust CI CD
![robust CI CD](https://github.com/varunteja007006/Practice/blob/main/Practice%20Notes/CI_CD_2.svg?raw=true)

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
distributed system can either be **_Consistent_** (ensuring all nodes see the
same data at the same time), **_Available_** (able to respond to client
requests), or **_Partition-tolerant_** (able to continue functioning even if
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

  ![cache hit miss](https://github.com/varunteja007006/Practice/blob/main/Practice%20Notes/cache-hit-miss.svg?raw=true)

#### Caching types:

- Client Cache: Storage of data on the client-side (e.g., in the browser's local storage, session storage, or cache) to reduce the need for repeated requests to the server.
- Server Cache: Storage of data on the server-side to reduce the load on the database and improve response times. Examples include caching layers like Memcached or Redis.
- Database Cache: Caching mechanisms within the database system to speed up query responses. This can include in-memory caches, query result caches, or index caches.
- CDN Cache:

  - Pull-based CDN Cache: The CDN retrieves (pulls) content from the origin server as needed and caches it at various edge locations.
  - Push-based CDN Cache: The origin server actively pushes content to the CDN's edge locations, ensuring that the content is available in the cache before any user requests it.

#### Caching Mechanism:

- Write-Around Cache: This mechanism writes data directly to the storage backend, bypassing the cache. The cache is updated only on read operations. It helps avoid cache pollution with data that might not be frequently accessed.

- Write-Through Cache: In this approach, every write operation is done both to the cache and the storage backend. This ensures that the cache is always synchronized with the backend storage, but it can introduce some write latency.

- Write-Back Cache: Here, data is written to the cache first and later asynchronously written to the storage backend. This can improve write performance and reduce latency, but it introduces a risk of data loss in case of a cache failure before the data is written to the backend.

- Cache Invalidation: Methods for ensuring that outdated or stale data is removed from the cache. Strategies include time-based (TTL - Time to Live), event-based (cache invalidation on data change), and manual invalidation.

- Cache Coherence: Ensuring that multiple caches have consistent data, especially in distributed systems. Protocols like MESI (Modified, Exclusive, Shared, Invalid) are used for this purpose.

- Cache Eviction Policies: Methods for determining which data to remove from the cache when new data needs to be loaded. Common policies include:
  - Least Recently Used (LRU): Removes the least recently accessed items first.
  - First In, First Out (FIFO): Removes the oldest items first.
  - Least Frequently Used (LFU): Removes the least frequently accessed items first.

##

### Proxy Servers

How does proxy work

![proxy request](https://github.com/varunteja007006/Practice/blob/main/Practice%20Notes/proxy-request.svg?raw=true)

#### Proxy server types:

- Forward Proxy: Acts as an intermediary between a client and the internet. It can be used for various purposes such as filtering content, improving performance, and hiding the client's IP address.

- Reverse Proxy: Sits in front of web servers and forwards client requests to those servers. It is often used for load balancing, improving web performance, and enhancing security by hiding the details of the backend servers.

- Open Proxy: Accessible by any user on the internet, providing anonymity by hiding the user's IP address. These proxies can be used for bypassing content restrictions but are generally less secure.

- Transparent Proxy: Intercepts client requests and sends them to the internet without modifying them. The client's IP address is still visible to the destination server. Often used in content filtering and caching.

- Anonymous Proxy: Hides the client's IP address from the destination server, providing a degree of anonymity. However, it may still identify itself as a proxy.

- Distorting Proxy: Provides a false IP address to the destination server while hiding the client's real IP address. It helps in bypassing geo-restrictions and provides a higher level of anonymity than anonymous proxies.

- High Anonymity Proxy (Elite Proxy): Does not identify itself as a proxy and hides the client's IP address completely. It provides the highest level of anonymity, making it very difficult for the destination server to trace the original client.

#### Additional Proxy Server Types:

- Caching Proxy: Stores copies of frequently requested resources to reduce bandwidth usage and improve load times for users.

- SSL Proxy: Decrypts and encrypts traffic between the client and server to facilitate monitoring and management of encrypted connections.

- Residential Proxy: Uses IP addresses assigned to real residential addresses, making it appear as if requests are coming from real users in specific locations. Useful for web scraping, bypassing geo-restrictions, and avoiding detection.

- Data Center Proxy: Uses IP addresses provided by data centers. These proxies are typically fast and used for large-scale web scraping and data extraction.

- Rotating Proxy: Automatically rotates through a pool of proxy IP addresses, providing a new IP address for each request or at regular intervals. Useful for web scraping and avoiding IP bans.

- Web Proxy: A web-based proxy that allows users to access websites through a web browser interface. Often used to bypass content restrictions without installing software.

- DNS Proxy: Intercepts DNS queries and can be used to filter content, block certain websites, or bypass DNS-based restrictions.

- SOCKS Proxy: Handles any kind of traffic generated by any protocol or program. SOCKS5 is the latest version, providing additional security features like UDP and IPv6 support.

#### Specialized Proxy Server Types:

- Content Filtering Proxy: Filters content based on predefined rules. Commonly used in corporate networks and schools to block inappropriate or distracting websites.

- Load Balancing Proxy: Distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. Enhances performance and availability.

- Ad-blocking Proxy: Blocks advertisements from loading on web pages, reducing bandwidth usage and improving user experience.

- Authentication Proxy: Requires user authentication before granting access to the internet or certain resources. Enhances security by ensuring only authorized users can access the network.

- Application Layer Proxy: Works at the application layer of the OSI model, handling specific protocols like HTTP, FTP, or SMTP. Provides detailed control and logging for specific types of traffic.

- VPN Proxy: Combines the features of a proxy server with a virtual private network (VPN), encrypting all traffic between the client and the proxy server for enhanced security and privacy.

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

####

#### Load Balancing techniques

- Round Robin: Distributes incoming requests sequentially across a list of servers. Each server receives an equal number of requests in a cyclic order.

- Least Connections: Directs traffic to the server with the fewest active connections. This helps in balancing the load more evenly, especially when there are servers with varying capacities.

- Least Response Time: Routes traffic to the server that has the lowest response time, which typically indicates that the server is the least loaded and can handle additional requests efficiently.

- IP Hash: Uses the client's IP address to determine which server will handle the request by applying a hash function. This ensures that a particular client will consistently be directed to the same server.

- Weighted Algorithm: Assigns different weights to each server based on their capacity or performance. Servers with higher weights receive a proportionally larger share of the traffic.

- Geographical (Geo-based): Routes traffic based on the geographic location of the client. Requests are directed to the nearest server or data center.

- Consistent Hashing: Maps both clients and servers to a hash ring. Each client request is directed to the server that is immediately clockwise on the ring. When a server is added or removed, only a portion of the requests are redistributed, minimizing disruption.

- Random Allocation: Distributes requests randomly across servers. Simple to implement but can lead to uneven load distribution.

- Weighted Round Robin: An extension of the round robin algorithm where servers are assigned different weights based on their capacities. Servers with higher weights get more requests.

- Weighted Least Connections: Similar to the least connections algorithm but takes into account the capacity of servers by assigning weights. Servers with fewer active connections and higher weights receive more traffic.

- Source IP Hash: Uses the client's IP address to determine which server will handle the request. Ensures that a client's requests are consistently directed to the same server, useful for session persistence.

- URL Hash: Uses a hash of the URL to determine which server will handle the request. Ensures that requests for the same URL are consistently directed to the same server, useful for caching.

- Session Persistence (Sticky Sessions): Ensures that requests from a particular client are always directed to the same server during a session. Can be implemented using cookies or IP addresses.

- Adaptive Load Balancing: Adjusts load distribution dynamically based on real-time metrics such as server response times, current load, and health status. Uses advanced algorithms and machine learning techniques.

- Least Bandwidth: Distributes requests based on the bandwidth usage of each server. Servers with the least bandwidth usage receive more traffic.

- Least Packets: Distributes requests based on the number of packets being processed by each server. Servers handling fewer packets receive more traffic.

- Dynamic Ratio Load Balancing: Uses a combination of real-time performance metrics and pre-assigned server weights to dynamically adjust the distribution of traffic.

- Global Server Load Balancing (GSLB): Distributes traffic across multiple data centers located in different geographical regions. Improves disaster recovery, reduces latency, and ensures high availability.

- Multi-Path Load Balancing: Distributes traffic across multiple network paths to optimize bandwidth usage and minimize latency. Often used in Software-Defined Wide Area Networks (SD-WAN).

- Layer 4 Load Balancing: Operates at the transport layer (Layer 4) of the OSI model, distributing traffic based on IP addresses and TCP/UDP ports. Provides faster performance by handling fewer data points.

- Layer 7 Load Balancing: Operates at the application layer (Layer 7) of the OSI model, distributing traffic based on HTTP headers, cookies, and other application-specific data. Enables advanced routing and content switching.

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

![server accessing information](https://github.com/varunteja007006/Practice/blob/main/Practice%20Notes/Access%20Information%20by%20server.svg?raw=true)

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
