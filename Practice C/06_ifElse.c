#include <stdio.h>
#include <stdbool.h>

int main(int argc, char const *argv[])
{
    printf("if else... \n\n");
    bool x = true;
    bool y = false; 

    if (x)
    {
        printf("x is true \n\n");
    }

    if (y)
    {
        printf("y is true \n\n");
    }
    else
    {
        printf("y is false \n\n");
    }

    char z = 'a';

    if (z == 'b')
    {
        printf("z is b \n\n");
    }
    else if (z == 'a')
    {
        printf("z is a \n\n");
    }
    else
    {
        printf("z is not a & b \n\n");
    }

    // ternary operation
    const xyz = false;
    xyz ? printf("Oh it is true \n\n") : printf("Oh it is false \n\n");

    return 0;
}
