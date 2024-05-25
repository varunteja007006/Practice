#include <stdio.h>

int main(void)
{
    printf("Give me a number\n");
    int myNum;
    scanf("%d", &myNum);
    printf("Bye world %d \n\n", myNum);

    // comments in C

    /**
     * Multi line comments in C
     */

    // Format specifiers in C
    /**
     * Format specifiers are used together with the printf() function to tell the compiler what type
     * of data the variable is storing. It is basically a placeholder for the variable value.
     * A format specifier starts with a percentage sign %, followed by a character.
     * */

    // Create variables
    float myFloatNum = 5.99; // Floating point number
    char myLetter = 'D';     // Character
    printf("%f\n", myFloatNum);
    printf("%c\n", myLetter);

    // To print different types in C
    printf("My number is %d and my letter is %c \n\n", myNum, myLetter);
}