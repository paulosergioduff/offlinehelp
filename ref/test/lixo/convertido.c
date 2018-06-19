#include <stdio.h>
#include <stdlib.h>


int numeroTotalMercadoria;
 	double valorMercadoria;
    double valorTotalEmEstoque = 0;
    double mediaValorMercadoria =0;

int soma;
int i;

void main(){
    printf("informe o numero total de mercadoria no estoque\n");
	scanf("%destoque:\n", &numeroTotalMercadoria);

			//int contador; //variável de controle do loop
			  for(i = 1; i <= numeroTotalMercadoria; i++)
			  {
			      printf("informe o valor de cada mercadoria");
        		  scanf("%lf",&valorMercadoria );
			  }

			  soma = soma +i;
        valorTotalEmEstoque = numeroTotalMercadoria * valorMercadoria;
        mediaValorMercadoria = valorTotalEmEstoque / soma;

        printf("O valor total em estoque é de %lf:", valorTotalEmEstoque);
        
        printf("A media de valor da mercadoria é de %lf ", mediaValorMercadoria);


}