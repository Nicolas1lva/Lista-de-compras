function adicionarItem() {
    const nome = document.getElementById('nomeItem').value;
    const lista = document.getElementById("listaCompras");
    const novoItem = document.createElement("li");
    novoItem.textContent = nome;
    lista.appendChild(novoItem);
}
function menos(){
    const quantidade = document.getElementById("quantidadeItem");
    if (quantidade.value>1){
        quantidade.value--;
    }
}
function mais(){
    const quantidade = document.getElementById("quantidadeItem");
    quantidade.value++;
}
function add(){
    const add = document.getElementById('adcionar');
    add.classList.toggle("aberto");
    console.log(add.classList);
}