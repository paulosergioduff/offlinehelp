#include <stdio.h>
#include <stdlib.h>

// obedece a sequência fibonacci com a soma dos números anteriores e sua posição
int fibonacci(int numero,int x, int y) // Essa função recebe os parametros para o calculo fibonacci
{
  if(numero == 0)
    return 0;
  if(numero > 1)
    return y + fibonacci(numero - 1, y, x + y);
  else
    return 1;
}

//função principal
int main()
{
  int numero= 0;
  printf("Consultar posição: ");
  scanf("%d",&numero);
  printf("O resultado da posicao %d dos numeros fibonacci : %d\n",numero,fibonacci(numero,1,0));
  return 0;
}