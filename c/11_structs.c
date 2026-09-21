#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct point
{
    int x;
    int y;
};

typedef struct complex
{
    int a;
    int b;
    char desc64[64] // string of 64 chars
} complex_type;

void point_add(complex_type *a, const complex_type *b)
{
    a->a = a->a + b->a;
    a->b = a->b + b->b;
    // b-> a = 0 // You cannot do this because b is a const
}

int main(int argc, char const *argv[])
{
    struct point p;
    p.x = 10;
    p.y = 5;

    struct point s = {11, 22};

    struct point q;
    q = p;

    q.x += 7;
    q.y += 7;

    printf("p = x: %d, y: %d \n\n", p.x, p.y);
    printf("s = x: %d, y: %d \n\n", s.x, s.y);
    printf("q = x: %d, y: %d \n\n", q.x, q.y);

    // Here we are doing some complex stuff

    complex_type *myPointer = (complex_type *)malloc(sizeof(complex_type));

    myPointer->a = 10;

    myPointer->b = 20;

    strcpy(myPointer->desc64, "Some text");

    printf(" a is %d, b is %d and the string is %s  size of %d \n\n", myPointer->a, myPointer->b, myPointer->desc64, (int)sizeof(myPointer));

    free(myPointer);

    printf("==================== \n\n");

    complex_type *p1 = (complex_type *)malloc(sizeof(complex_type));
    p1->a = 7;
    p1->b = 14;
    strcpy(p1->desc64, "Hello");

    complex_type p2 = {10, 100, "World"};

    point_add(p1, &p2); // address of p2

    printf("a: %d b: %d \n\n", p1->a, p1->b);

    return 0;
}
