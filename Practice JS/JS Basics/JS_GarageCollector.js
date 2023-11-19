/*
    Reference-counting garbage collection: This algorithm is considered to be the most basic kind 
    of garbage collection algorithm. What these algorithms do is that rather than determining 
    whether any resource is important or not it scans the memory to determine if an object has any 
    other objects referring to it. An object with zero references is considered to be garbage or 
    “collectible”.

    Obstructions: Circular references
    Limitations arise when it comes to circular references. A circular reference occurs when two
    objects are created with properties that refer each other, thus creating a cycle. 
    The reference-counting algorithm fails to reclaim the these memory resources as each object 
    has at least one reference pointing to them which prevents both the objects from being marked 
    for garbage collection. Circular references are one of the major cause for memory leaks.
*/

/*
    Mark-and-sweep-algorithm: This algorithm modifies the problem statement from the “object being 
    no longer needed” to the object being “unreachable”. This algorithm demands a prerequisite of 
    the knowledge of roots which are a set of objects. In JavaScript, a root is a global object. 
    On a regular basis, the garbage collector starts from these roots and finds all the objects 
    that are referenced from these roots, then all objects referenced from these, etc. Starting 
    from the roots, the garbage collector will find all the objects that are reachable and mark all 
    the non-reachable objects.
*/

/*
    Some Limitations: The only limitation that can be found is that it is not possible to 
    explicitly or programmatically trigger garbage collector in JavaScript.
    Hence if there are cases when it would be convenient to manually program when to release 
    memory, there are no provisions in JavaScript to trigger such an event.

*/
