function carregou(){
    let data = document.getElementsByClassName('card-text');
    let newData= [];
  for(i=0; i< data.length; i++){
   newData.push(data.item(i).innerText.substring(0,100) +'...');
   data.item(i).innerText = newData[i];
   alert("I am an alert box!");
  }