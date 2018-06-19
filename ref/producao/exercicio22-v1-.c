#include <stdio.h>
#include <stdlib.h>

/*
 * A jornada de trabalho semanal de um funcionário é de 40 horas. 
 * O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
 * Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do 
 * funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 
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