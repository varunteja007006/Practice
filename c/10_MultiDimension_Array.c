#include <stdio.h>

int main(int argc, char const *argv[])
{
	int matrix[2][3] = {{1, 4, 2}, {3, 6, 8}};
	printf("\n %d \n\n", matrix[0][2]);

	// Loop through the multi-dimensional array
	for (int i = 0; i < 2; i++)
	{
		for (int j = 0; j < 3; j++)
		{
			printf("%d ", matrix[i][j]);
		}
		printf("\n");
	}

	printf("\n\n");
	return 0;
}
