function resumeSinopse(){
    let tag = Document.querySelector('card-text')
    let data = tag.innerText
    let novaString = data.substring(0,100)+"..."
    console.log(data)
    tag.innerText = novaString
    return true
}