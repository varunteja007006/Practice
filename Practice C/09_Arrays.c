#include <stdio.h>

int main(int argc, char const *argv[])
{
    int myArr[] = {11, 25, 36, 43};
    printf("Print an element %d \n\n", myArr[1]);

    // Print elements in an array via loop
    int i;
    for (i = 0; i < 4; i++)
    {
        printf("%d \n", myArr[i]);
    }

    printf("\n\n");

    // specifying the size of array beforehand
    int someArr[4];
    someArr[0] = 1;
    someArr[1] = 2;
    someArr[2] = 3;
    someArr[3] = 4;
    for (i = 0; i < 4; i++)
    {
        printf("%d \n", someArr[i]);
    }

    printf("\n\n");
    // array size
    printf("%lu", sizeof(someArr)); // size of whole array
    printf("\n\n");
    int length = sizeof(someArr) / sizeof(someArr[0]); // divide size of whole array with size of single
    // element size to get length of array

    printf("%d", length); // Prints 5
    printf("\n\n");

    return 0;
}
