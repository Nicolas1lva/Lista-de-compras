let listaCompras = []

function adicionarItem() {
    const nome = document.getElementById('nomeItem').value;
    const quantidade = parseInt(document.getElementById('quantidadeItem').value)
    const valor = parseFloat(document.getElementById('valorItem').value)

    const item = {
        nome: nome,
        quantidade: quantidade,
        valor: valor
    }
    listaCompras.push(item)
    renderizarLista();
    atualizarValor();
}
function atualizarValor(){
    let total = 0
    for(let item of listaCompras){
        total += item.valor*item.quantidade;
    }
    document.getElementById('totalCompra').textContent = `total: R$ ${total.toFixed(2)}`

    console.log(total)
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
}
function renderizarLista(){
    const lista = document.getElementById("listaCompras")
    lista.innerHTML = "";
    for(let item of listaCompras){
        const li = document.createElement('li');
        li.textContent=`${item.nome}  |  ${item.quantidade} | ${(item.valor*item.quantidade).toFixed(2)}`
        lista.appendChild(li)
        console.log(li)

    }
}