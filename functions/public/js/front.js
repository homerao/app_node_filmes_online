function carregou(){
  
    Document.addEventListener('onload',()=>{
    let data = document.getElementsByClassName('card-text');
    let newData= [];
  for(i=0; i< data.length; i++){
    alert(data.length)
   newData.push(data.item(i).innerHTML);
   data.push(newData[i]);
   alert(newData[i]);
  }
    })
    
}

function validaFormLogin(){
  let listErrors = []
  let email, password, repassword, first_name, last_name
  email = document.getElementById('form18').value
  password = document.getElementById('form19').value
  repassword = document.getElementById('form20').value
  first_name = document.getElementById('form16').value
  last_name = document.getElementById('form17').value
  if(email === ""){
   listErrors.push('E-mail vazio')
   
  }
  
  if(password === ""){
    listErrors.push('Password vazio')
    
  }
  if(password.length < 5){
    listErrors.push('Password muito curto')
    
  }
  if(password !== repassword){
    listErrors.push('Os passwords não coincidem')
    
  }
  if(listErrors.length > 0){
    alert("Existem erros no formuçários "+ listErrors.toLocaleString())
    return false
  }
  
  return true
}

function limpaCamposDeEndereco (){
  document.getElementById("form22").value = ""
  document.getElementById("form23").value = ""
  document.getElementById("form24").value = ""
  document.getElementById("form25").value = ""
  alert('Campos limpos')
}
function cepMask(){
 let cep = document.getElementById("cep").value
}
function pegaCEPDoForm(){
 let unformated = document.getElementById("cep").value
 cep = Number.parseInt(unformated.replace("-", "").replace(".",""))
 let erros = []
 
 if(isNaN(cep)){
    erros.push("Cep contém caracteres que não são números")
 }
 if(erros.length > 0){
  erros.forEach(alert)
  return -1
 } else {
  return cep
 }
 
}
async function buscaCEP(cep){
let endereco = await fetch('https://viacep.com.br/ws/'+cep+'/json/')
return endereco
}
 async function onLeave(){
   let cep = pegaCEPDoForm()
   if(cep == -1){
    alert('Digite um CEP válido')
   } else {
    buscaCEP(pegaCEPDoForm()).then((response)=>{
      response.json().then((data)=>{
       preencheCamposDeEndereco(data)
      }).catch((err)=>{ alert('ocorreu um erro com o json')})
      }).catch((err)=>{
        alert('Não foi possível buscar o cpf')
      })
   }
  
  
 
}

async function preencheCamposDeEndereco(endereco){
  document.getElementById("endereco").value = await endereco.logradouro
  document.getElementById("bairro").value = await endereco.bairro
  document.getElementById("cidade").value = await endereco.localidade
  document.getElementById("estado").value = await endereco.uf

  
}