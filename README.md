# binToDec - Conversor de números binários para decimais

## O que é o projeto 
Aplicação Web para conversão de números binários em números decimais.
O projeto utiliza as linguagens e tecnologias html5, CSS e JavaScript (vanilla).
Elaborada a caráter de estudo e aprofundamento de conhecimentos.

## Funcionalidades
A aplicação se propõe a converte um número binário, digitado pelo usuário em um input do formulário, em um número decimal, que é exibido no input resultado do mesmo formulário. os valores inseríveis pelo usuário são restringidos por meio da funçao numCheck(), implementada no arquivo Conversor.js.
<img src="https://github.com/CarlosFastLab/binToDec/blob/master/images/conversorapptela.jpg">

### Aplicação em funcionamento
<img src="https://github.com/CarlosFastLab/binToDec/blob/master/images/conversorappfuncionamento.jpg">

### Restrição de digitos
<img src="https://github.com/CarlosFastLab/binToDec/blob/master/images/conversorappalerta.jpg">

## Diário de implementações
### Dia 1 - 14/09/2020
* Implementação de html base para testes iniciais da aplicação
* Implementação da função binToDec() para conversão do número binário para o número decimal, em JavaScript

### Dia 2 - 15/09/2020
* Correções e atribuições de tags sobre o código html, implementação de CSS para estilização
* Implementação da função de restrição de carácteres digitáveis pelo usuário, através da função numCheck(), JavaScript

### Dia 3 - 18/09/2020 
* Remoção da chamada de window.alert() na função numCheck() e substituição por um alerta utilizando a tag html <div>
* Estilização do alerta através da tag <div>
