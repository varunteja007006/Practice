#include <stdio.h>

// It is not a built-in data type, was introduced later and hence it has to be imported
#include <stdbool.h>

int main(int argc, char const *argv[])
{
    printf("Booleans \n\n");

    // represents true or false

    bool var1 = true;
    bool var2 = false;

    // boolean values can only be printed as 1 or 0
    printf("This is true in c: %d \n", var1);
    printf("This is false in c: %d \n", var2);

    // often it is returned as a result of comparison

    int var3 = 10;
    int var4 = 5;

    printf("This is result of comparison: %d \n", var3 > var4);
    printf("This is result of comparison: %d \n", var3 < var4);

    return 0;
}
