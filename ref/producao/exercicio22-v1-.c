#include <stdio.h>
#include <stdlib.h>

/*
 * A jornada de trabalho semanal de um funcion�rio � de 40 horas. 
 * O funcion�rio que trabalhar mais de 40 horas receber� hora extra, cujo c�lculo � o valor da hora regular com um acr�scimo de 50%. 
 * Escreva um algoritmo que leia o n�mero de horas trabalhadas em um m�s, o sal�rio por hora e escreva o sal�rio total do 
 * funcion�rio, que dever� ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o m�s possua 4 semanas exatas). 
 */


int horasTrabalho,horasExtras;
    float hora, salario, extra;

int jornada(){ // Falta passar parametro e retorno
       
    if(horasTrabalho <= 40){
        horasExtras =0;
        
    }else{
        horasExtras = horasTrabalho - 40;
        horasTrabalho = 40;
    }
    
    salario = hora * horasTrabalho;
    extra = hora * horasExtras;
    extra *= 1.5;
    
    printf(" Base: %f \t Extra %f \n Total %f", salario, extra, salario + extra);
    printf("\nconsole\n");

    return extra;   
    
    
}

void main(){

printf("informe o total de horas e o valor da hora\n");
    scanf("%dHoras de trabalho:\n", &horasTrabalho);
    scanf("%fHoras: ", &hora);

    jornada();
}