#include <stdio.h>
int menorDe(int limite)
{       
    int i,n,sum=0;
	
	printf("Insira 10 números : \n");
	for (i=1;i<=10;i++) // Lê 10 números dentro de um for
	{
                printf("Numero: -%d :",i);

		scanf("%d",&n);
		if (n < limite) // Se o valor for inferior ao parametro de limite, soma aos números anteriores
		{
			sum +=n; 
		}
	}
	
	return sum;
	
 
}

void main()
{ 
	int resultado;
	resultado = menorDe(40); // Passa função com critério de limite para somar (nesse exercío, 40 no caso)
	printf("Resultado: %d\n", resultado); // Imprime o resultado na tela
}