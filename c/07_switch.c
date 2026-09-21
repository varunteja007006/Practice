#include <stdio.h>

int main(int argc, char const *argv[])
{
    printf("Switch Statements \n\n");
    char x = 'b';
    switch (x)
    {
    case 'a':
        printf("x is a \n\n");
        break; // The break statement breaks out of the switch block and stops the execution
    case 'b':
        printf("x is b \n\n");
        break;
    default: // The default statement is optional, and specifies some code to run if there is no case match
        break;
    }
    return 0;
}
