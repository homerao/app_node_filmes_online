function carregou(){
    document.querySelector('card-text').addEventListener('onload',()=>{
      let data = document.getElementsByClassName('card-text');
    let newData= [];
  for(i=0; i< data.length; i++){
   newData.push(data.item(i).innerHTML.substring(0,100) +'...');
   data.item(i).innerHTML = newData[i];
   alert("I am an alert box!");
  }
    })
}