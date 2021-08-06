var total = 0;


inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `      
        	<div class="produto-single"> 
                <img src="` + val.img + `" />
                <p> ` + val.nome + ` </p>
                <a key="` + val.id + `" href="#"> Adicionar ao carrinho </a>                   
                </div>
                    `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val) => {
        if (val.quantidade > 0) {
            total += val.valor;
            total = parseFloat(total.toFixed(2));
            containerCarrinho.innerHTML += `
                	<div class="info-single-checkout">   
                	<p style="float:left">Produto: ` + val.nome + `<br> Remover Produto </p>
                	<p style="float:right">Valor un. R$ ` + val.valor +  `<br>Quantidade: ` + val.quantidade + `</p>    
                    	<div style="clear:both"></div>
                    	</div>
                 `;
        }
    })
    var containerTotal = document.getElementById('total');
    containerTotal.innerHTML = `
        <div class="info-single-checkout">   
        <center> <p>Total da Compra: R$ ` + total + `</p> </center>
            <div style="clear:both"></div>
            </div>`
        
}

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}