#include <stdio.h>
#include <stdlib.h>

/*
 * 
 */
int main(int argc, char** argv) {
    int num = 1;
    int ant = 0;
    int auxiliar;
    
    for (int i=0; i<20;i++){
        printf("%d", num);
        auxiliar = num;
        num += ant;
        ant = auxiliar;
             
    }
    printf("\n\n\n");
    
    return 0;
}