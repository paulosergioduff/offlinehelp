#include <stdio.h>
 
// Isto é uma função
int dobro(int valor) {
  // TEM RETORNO
  return 2 * valor;
}
 
int main() {
 
  int total, entrada;
 
  printf("Digite um valor:\n");
  scanf("%d",&entrada);
 
  total = dobro(entrada);
 
  printf("O dobro de %d é %d\n",entrada,total);
}