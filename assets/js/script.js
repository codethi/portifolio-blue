
let inputNome = document.querySelector('#nome') /* Cria a variável inputNome e coloca nela o elemento que possui o id nome */
let inputEmail = document.querySelector('#email') /* Cria a variável inputEmail e coloca nela o elemento que possui o id email */
let textareaMensagem = document.querySelector('#mensagem') /* Cria a variável textareaMensagem e coloca nela o elemento que possui o id mensagem */
let btnEnviar = document.querySelector('#enviar') /* Cria a variável btnEnviar e coloca nela o elemento que possui o id enviar */
 
/* Só posso utilziar a arrow function (=>) quando a função não tiver nome */

/* Adiciona um evento de keyup no inputNome e realiza a função */
inputNome.addEventListener('keyup', () => { 
   /* Verifica se o tamanho do valor do inputNome é menor que 2 */
   if(inputNome.value.length < 2){
      inputNome.style.borderColor = 'red' /* Troca a cor da borda do input para red */
   } else {
      inputNome.style.borderColor = 'green' /* Troca a cor da borda do input para green */
   }
})


/* Adiciona um evento de keyup no inputEmail e realiza a função */
inputEmail.addEventListener('keyup', () => {
   /* 
   O indexOf procura um caractere no valor do inputEmail, se esse valor não existir ele retorna -1. 
   Então essa expressão inputEmail.value.indexOf('@') == -1 é a mesmo coisa que:
   Se no valor de inputEmail não existir @, faça...

   || é o operador OU em JavaScript
   && é o operador E em JavaScript
   */
   if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1){
      inputEmail.style.borderColor = 'red' /* Troca a cor da borda do input para red */
   } else {
      inputEmail.style.borderColor = 'green' /* Troca a cor da borda do input para green */
   }  
})

/* Adiciona um evento de keyup no textareaMensagem e realiza a função */
textareaMensagem.addEventListener('keyup', ()=>{
   /* Verifica se o tamanho do valor do textareaMensagem é maior que 100  */
   if(textareaMensagem.value.length > 100){
      textareaMensagem.style.borderColor = 'red' /* Troca a cor da borda do input para red */
   } else {
      textareaMensagem.style.borderColor = 'green' /* Troca a cor da borda do input para green */
   }
})

/* Adiciona um evento de click no btnEnviar e realiza a função */
btnEnviar.addEventListener('click', () => {
   alert('Formulário enviado com sucesso!') /* Mostra um alerta na tela com essa mensagem */
})


