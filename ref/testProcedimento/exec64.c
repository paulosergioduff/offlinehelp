/*
O algoritmo lê 10 números. 
Todos os números lidos com valor inferior a 40 são somados. 
Escreva o valor final da soma efetuada.*/

#include <stdio.h>
void menorDe(int limite)
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
	
	printf("Resultado: %d\n", sum); // Imprime o resultado na tela
	
	
 
}

void main()
{ 
	int resultado;
     menorDe(40); // Passa função com critério de limite para somar (nesse exercío, 40 no caso)
	
}