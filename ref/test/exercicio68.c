/*Uma loja está levantando o valor total 
de todas as mercadorias em estoque. 
Escreva um algoritmo que permita a entrada das seguintes informações: 
a) o número total de mercadorias no estoque; 
b) o valor de cada mercadoria. Ao final imprimir o valor 
total em estoque e a média de valor das mercadorias.*/


int main(){
    int numeroTotalMercadoria;
    double valorMercadoria;
    double valorTotalEmEstoque = 0;
    double mediaValorMercadoria =0;
    
    int soma=0;
    
    
    printf("informe o numero total de mercadoria no estoque");
    scanf("%f", &numeroTotalMercadoria);
    
    for(int i=1; i = numeroTotalMercadoria ; i++){
        printf("informe o valor de cada mercadoria");
        scanf("%f",&valorMercadoria );
        
        soma = soma +i;
        valorTotalEmEstoque = numeroTotalMercadoria * valorMercadoria;
        mediaValorMercadoria = valorTotalEmEstoque / soma;
        
        
        printf("O valor total em estoque é de %f:", valorTotalEmEstoque);
        
        printf("A media de valor da mercadoria é de %f ", mediaValorMercadoria);
    }
    
}