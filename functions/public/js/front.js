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