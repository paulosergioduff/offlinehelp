#include <stdio.h>
#include <stdlib.h>

/*
 * A jornada de trabalho semanal de um funcionário é de qtdHorasPorMes horas. 
 * O funcionário que trabalhar mais de qtdHorasPorMes horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
 * Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do 
 * funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 
 */


int horasTrabalho,horasExtras, qtdSemanasMes, qtdHorasPorSemana, qtdHorasPorMes;
    float hora, salario, extra;



void jornada(){ // Falta passar parametro e retorno

	qtdSemanasMes = 4; // Quantidade de semanas do mes vigente
	qtdHorasPorSemana = 40; // Quantidade de horas trabalhadas por semana
	qtdHorasPorMes = qtdSemanasMes * qtdHorasPorSemana; // Quantidade de horas de todo um mes
       
    if(horasTrabalho <= qtdHorasPorMes){
        horasExtras =0;
        
    }else{
        horasExtras = horasTrabalho - qtdHorasPorMes;
        horasTrabalho = qtdHorasPorMes;
    }
    
    salario = hora * horasTrabalho;
    extra = hora * horasExtras;
    extra *= 1.5;
    
    printf(" Base: %f \t Extra %f \n Total %f", salario, extra, salario + extra);
    printf("\nHoras trabalhadas em um mes: %d\n", qtdHorasPorMes); 
    
    
}

void main(){

printf("informe o total de horas de trabalho\n");
    scanf("%dHoras de trabalho:\n", &horasTrabalho);
printf("informe o valor da hora\n");    
    scanf("%fHoras: ", &hora);

    jornada();
}