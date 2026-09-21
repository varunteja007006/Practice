#include <stdio.h>

/**
 * Data Types in C
 * Basic Data Types
 * ==========================
 * keyword (size) [specifier]
 * int (2-4 bytes) [%d or %i]
 * float (4 bytes) [%f or %F]
 * double (8 bytes) [%lf]
 * char (1 byte) [%c]
 */

//  string [%s] #multiple chars together make a string

int main(int argc, char const *argv[])
{
    int a = 10;
    // char b = "b"; // The double quotes "b" create a string literal, not a single character hence it
    // will throw a warning (uncomment line 20, line 23 for warning)
    char c = 'c';
    printf("number is %d and char is %c, %c \n\n", a,
           // b,
           c);

    printf("==============================================\n\n");

    // Storing scientific float number with e to indicate the power of 10
    float f1 = 35e3;
    double d1 = 12E4;

    printf("%f\n", f1);     // precision of float is 6-7
    printf("%lf \n\n", d1); // precision of double of about 15

    printf("==============================================\n\n");

    // setting decimal precision

    float f2 = 23.3242412412112312342342434535432312;
    printf("float number %.2f \n", f2);
    printf("float number %.4f \n", f2);
    printf("float number %.8f \n", f2);
    printf("float number %.16f \n\n", f2);

    // The sizeof operator
    // when you use sizeof operator the compiler returns long unsigned int (%lu) hence use this instead
    // of int

    printf("Size of the f2 float variable: %lu \n\n", sizeof(f2));
    printf("Size of the a char variable: %lu \n\n", sizeof(a));
    printf("Size of the c char variable: %lu \n\n", sizeof(c));
    printf("Size of the d1 double variable: %lu \n\n", sizeof(d1));

    printf("==============================================\n\n");

    // Type conversion - converting one data type to another
    // Example 1, Divide 5 with 2 and you expect 2.5 but you get 2 if 5 and 2 are int
    int num1 = 5;
    int num2 = 2;
    int res = num1 / num2;
    printf("Divide 5 with 2 you get %d \n", res);

    /**
     * There are two types of Type Conversion
     * Implicit Conversion (automatically)
     * Explicit Conversion (manually)
     * */

    // To get floating result
    float res_float = num1 / num2;
    printf("Divide 5 with 2 you get %f \n", res_float); // We still dont get 2.5
    // This is because 5 and 2 are still int

    // hence we manually convert it to float
    float res_float_finally = (float)num1 / num2;
    printf("Divide 5 with 2 you get %f \n\n", res_float_finally);

    printf("==============================================\n\n");

    // Final Example
    int var1 = 23;
    int var2 = 334;
    float percentage = (float)var1 / var2 * 100.00;

    printf("Final Example answer: %0.2f \n", percentage);

    return 0;
}
