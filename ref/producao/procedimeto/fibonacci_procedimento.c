// Inclui o arquivo <"stdio.h">
// stdio.h é responsável pelas funções de entrada e saída.
#include "stdio.h"

void fibonacci (int n)
{
              int a=1,b=1,i,x;

              printf("\n Na posicao 1 o valor = 1\n");
              printf("\n Na posicao 2 o valor = 1\n");

              for(i=3;i<=n;i++)
              {
                x=a+b;
                a=b;
                b=x;

                printf("\n na posicao %i o valor = %i\n",i, x);
              }
}

void main()
{
    int n;
    printf("\nDigite ate que posição que ir na sequencia: ");
    scanf("%d",&n);
    fibonacci(n);
}