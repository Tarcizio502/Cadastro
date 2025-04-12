document.addEventListener('DOMContentLoaded',()=>{  
   
let nome = document.querySelector('.nome')  
let cpf = document.querySelector('.cpf') 
let data = document.querySelector('.data') 
let idade =document.querySelector('.idade') 
let cidade = document.querySelector('.cidade')  
let email = document.querySelector('.email')  
let genero = document.querySelector('.genero')
let btn = document.querySelector('.btn') 
let infos = document.querySelector('.infos') 
let arr = []

btn.addEventListener('click',()=>{  
  const pessoa = {  
    nome:nome.value,  
    cpf:cpf.value,  
    data:data.value,
    idade:idade.value,   
    cidade:cidade.value, 
    email:email.value,
    genero:genero.value, 
  } 
  arr.push(pessoa)
  infos.innerHTML = ``
  arr.forEach((elemento,index)=>{
    infos.innerHTML += `
    <p>Chegada: ${index+1}º</p>  
    <p>Nome: ${elemento.nome}</p>  
    <p>CPF: ${elemento.cpf}</p>  
    <p>Data: ${elemento.data}</p>
    <p>Idade: ${elemento.idade}</p>  
    <p>Cidade: ${elemento.cidade}<p>
    <p>Email: ${elemento.email}<p/>
    <p>Gênero: ${elemento.genero}</p> 
    <hr>
    `

  })

})

})
