#include <stdio.h>

int main(int argc, char const *argv[])
{
    int x = 1;
    while (x <= 100)
    {
        printf("Looping - %d \n", x);
        x += 1;
    }

    int y = 1;
    do
    {
        printf("Looping do - %d \n", y);
        y += 1;
    } while (y <= 100);

    int count = 10;
    for (int i = 0; i < count; i++)
    // (Expression 1 sets a variable before the loop starts,
    // Expression 2 defines the condition for the loop to run,
    // Expression 3 increases a value each time the code block in the loop has been executed)
    {
        printf("for loop - %d \n", i);
    }

    // Nested loops
    // The "inner loop" will be executed one time for each iteration of the "outer loop":
    int i, j;

    // Outer loop
    for (i = 1; i <= 2; ++i)
    {
        printf("Outer: %d\n", i); // Executes 2 times

        // Inner loop
        for (j = 1; j <= 3; ++j)
        {
            printf(" Inner: %d\n", j); // Executes 6 times (2 * 3)
        }
    }

    return 0;
}
