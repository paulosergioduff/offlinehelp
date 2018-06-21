//https://gist.github.com/FelipeGrijo
/*
Faça um procedimento que recebe a idade de um nadador por parâmetro e retorna , também por parâmetro, a categoria desse nadador de acordo com a tabela abaixo:
Idade Categoria
5 a 7 anos Infantil A
8 a 10 anos Infantil B
11-13 anos Juvenil A
14-17 anos Juvenil B
Maiores de 18 anos (inclusive) Adulto
*/
#include <stdio.h>

void Categoria(int idade){
    if(idade >= 5 && idade <= 7){
        printf("Infantil A\n");
    }
    else if(idade >= 8 && idade <= 10){
        printf("Infantil B\n");
    }
    else if(idade >= 11 && idade <= 13){
        printf("Juvenil A\n");
    }
    else if(idade >= 14 && idade <= 17){
        printf("Juvenil B\n");
    }
    else if(idade >= 18){
        printf("Adulto\n");
    }
    else{
        printf("Sem categoria\n");
    }
}

int main(){
    int Idade;

    printf("Digite a sua idade:");
    scanf("%d",&Idade);

    Categoria(Idade);

    return 0;
}