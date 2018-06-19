#include <stdio.h>
#include <stdlib.h>


int numeroTotalMercadoria;
int valorMercadoria;
int valorTotalEmEstoque;
int mediaValorMercadoria;
int soma;
int i;

void main(){
    printf("informe o total de estoque\n");
	scanf("%destoque:\n", &numeroTotalMercadoria);
	scanf("%dValor: ", &valorMercadoria);

			int contador; //variável de controle do loop
			  for(i = 1; contador <= numeroTotalMercadoria; contador++)
			  {
			      printf("informe o valor de cada mercadoria");
        		  scanf("%d",&valorMercadoria );
			  }

			  soma = soma +i;
        valorTotalEmEstoque = numeroTotalMercadoria * valorMercadoria;
        mediaValorMercadoria = valorTotalEmEstoque / soma;

        printf("O valor total em estoque é de %d:", valorTotalEmEstoque);
        
        printf("A media de valor da mercadoria é de %d ", mediaValorMercadoria);


}