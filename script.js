let listaCompras = []

function adicionarItem() {
    const nome = document.getElementById('nomeItem').value;
    const quantidade = parseInt(document.getElementById('quantidadeItem').value)
    const valor = parseFloat(document.getElementById('valorItem').value)

    const item = {
        nome: nome,
        quantidade: quantidade,
        valor: valor,
        comprado:false
    }
    listaCompras.push(item)
    renderizarLista();
    atualizarValor();
    //atualizarTotalComprado();
}
function atualizarValor(){
    let total = 0
    for(let item of listaCompras){
        total += item.valor*item.quantidade;
    }
    document.getElementById('totalCompra').textContent = `Total: R$ ${total.toFixed(2)}`
}
function atualizarTotalComprado(){
    let totalComprado=0;
    for(let item of listaCompras){
        if(item.comprado){
            totalComprado+=item.valor*item.quantidade;
        }
    }
    document.getElementById('totalComprado').textContent = `Total Comprado: R$ ${totalComprado.toFixed(2)}`
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
    listaCompras.forEach((item,indice)=>{
        const itemDiv=document.createElement('div')
        itemDiv.classList.add('item')
        const checkBox=document.createElement('input')
        checkBox.type='checkbox';
        checkBox.checked=item.comprado;
        itemDiv.appendChild(checkBox);
        const nomeDiv=document.createElement('div')
        nomeDiv.textContent=item.nome;
        nomeDiv.classList.add("nome");
        itemDiv.appendChild(nomeDiv);
        const qtdDiv=document.createElement('div')
        qtdDiv.classList.add("qtd");
        qtdDiv.textContent=item.quantidade;
        itemDiv.appendChild(qtdDiv);
        const valorDiv=document.createElement('div')
        valorDiv.textContent=`R$ ${(item.valor * item.quantidade).toFixed(2)}`;
        itemDiv.appendChild(valorDiv);
        valorDiv.classList.add("valor");
        lista.appendChild(itemDiv);
        checkBox.addEventListener("change", function(){
            item.comprado = checkBox.checked;
            if(item.comprado){
                itemDiv.classList.add("comprado")
            }
            else{
                itemDiv.classList.remove("comprado")
            }
            atualizarTotalComprado();
        });
        const btnExcluir=document.createElement("button");
        btnExcluir.textContent = "🗑️";
        itemDiv.appendChild(btnExcluir);

    });
}
/*marcarTodos.addEventListener(
    'change',
    function(){

    }
);*/
