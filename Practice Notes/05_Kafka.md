About KAFKA:

1. Kafka has the ability to move lot of data efficiently.
2. Sequential I/O.
3. Network to disk and disk to network
4. Pattern disk (-COPY->) --> OS buffer --> kafka buffer --> socket buffer --> network buffer --> finally data is sent
5. Zero Copy DMA - Direct Memory Access is used to copy from OS buffer --> Network card buffer.

Types of access
Random and Sequential access.

-- check more later
