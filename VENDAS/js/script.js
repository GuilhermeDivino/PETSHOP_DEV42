let modalKey = 0

let quantProdutos = 1

let cart = [] // carrinho

const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatoMonetario = (valor) => {
    if(valor) {
        return valor.toFixed(2)
    }
}

const abrirModal = () => {
    seleciona('.produtoWindowArea').style.opacity = 0
    seleciona('.produtoWindowArea').style.display = 'flex'
    setTimeout(() => seleciona('.produtoWindowArea').style.opacity = 1, 150)
}

const fecharModal = () => {
    seleciona('.produtoWindowArea').style.opacity = 0
    setTimeout(() => seleciona('.produtoWindowArea').style.display = 'none', 500)
}

const botoesFechar = () => {
    // BOTOES FECHAR MODAL
    selecionaTodos('.produtoInfo--cancelButton, .produtoInfo--cancelMobileButton').forEach( (item) => item.addEventListener('click', fecharModal) )
}

const preencheDadosDosProdutos = (produtoItem, item, index) => {
	produtoItem.setAttribute('data-key', index)
    produtoItem.querySelector('.produto-item--img img').src = item.img
    produtoItem.querySelector('.produto-item--price').innerHTML = formatoReal(item.price[2])
    produtoItem.querySelector('.produto-item--name').innerHTML = item.name
    produtoItem.querySelector('.produto-item--desc').innerHTML = item.description
}

const preencheDadosModal = (item) => {
    seleciona('.produtoBig img').src = item.img
    seleciona('.produtoInfo h1').innerHTML = item.name
    seleciona('.produtoInfo--desc').innerHTML = item.description
    seleciona('.produtoInfo--actualPrice').innerHTML = formatoReal(item.price[2])
}

const pegarKey = (e) => {
    let key = e.target.closest('.produto-item').getAttribute('data-key')
    console.log('Produto clicada ' + key)
    console.log(produtoJson[key])

    quantProdutos = 1

    modalKey = key

    return key
}

const preencherTamanhos = (key) => {
    seleciona('.produtoInfo--size.selected').classList.remove('selected')

    selecionaTodos('.produtoInfo--size').forEach((size, sizeIndex) => {
        (sizeIndex == 2) ? size.classList.add('selected') : ''
        size.querySelector('span').innerHTML = produtoJson[key].sizes[sizeIndex]
    })
}

const escolherTamanhoPreco = (key) => {
    selecionaTodos('.produtoInfo--size').forEach((size, sizeIndex) => {
        size.addEventListener('click', (e) => {
            seleciona('.produtoInfo--size.selected').classList.remove('selected')
            size.classList.add('selected')

            seleciona('.produtoInfo--actualPrice').innerHTML = formatoReal(produtoJson[key].price[sizeIndex])
        })
    })
}

const mudarQuantidade = () => {
    seleciona('.produtoInfo--qtmais').addEventListener('click', () => {
        quantPizzas++
        seleciona('.produtoInfo--qt').innerHTML = quantProdutos
    })

    seleciona('.produtoInfo--qtmenos').addEventListener('click', () => {
        if(quantProdutos > 1) {
            quantProdutos--
            seleciona('.produtoInfo--qt').innerHTML = quantProdutos	
        }
    })
}
const adicionarNoCarrinho = () => {
    seleciona('.produtoInfo--addButton').addEventListener('click', () => {
        console.log('Adicionar no carrinho')

    	console.log("Produto " + modalKey)
	    let size = seleciona('.produtoInfo--size.selected').getAttribute('data-key')
	    console.log("Tamanho " + size)
	    // quantidade
    	console.log("Quant. " + quantProdutos)
        // preco
        let price = seleciona('.produtoInfo--actualPrice').innerHTML.replace('R$&nbsp;', '')
    
	    let identificador = produtoJson[modalKey].id+'t'+size

        let key = cart.findIndex( (item) => item.identificador == identificador )
        console.log(key)

        if(key > -1) {
            cart[key].qt += quantProdutos
        } else {
            let produto = {
                identificador,
                id: produtoJson[modalKey].id,
                size, // size: size
                qt: quantProdutos,
                price: parseFloat(price) // price: price
            }
            cart.push(produto)
            console.log(produto)
            console.log('Sub total R$ ' + (produto.qt * produto.price).toFixed(2))
        }

        fecharModal()
        abrirCarrinho()
        atualizarCarrinho()
    })
}

const abrirCarrinho = () => {
    console.log('Qtd de itens no carrinho ' + cart.length)
    if(cart.length > 0) {
        // mostrar o carrinho
	    seleciona('aside').classList.add('show')
        seleciona('header').style.display = 'flex'
    }

    // exibir aside do carrinho no modo mobile
    seleciona('.menu-openner').addEventListener('click', () => {
        if(cart.length > 0) {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}

const fecharCarrinho = () => {
    // fechar o carrinho com o botão X no modo mobile
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').style.left = '100vw' // usando 100vw ele ficara fora da tela
        seleciona('header').style.display = 'flex'
    })
}

const atualizarCarrinho = () => {
    // exibir número de itens no carrinho
	seleciona('.menu-openner span').innerHTML = cart.length
	
	// mostrar ou nao o carrinho
	if(cart.length > 0) {

		// mostrar o carrinho
		seleciona('aside').classList.add('show')

		seleciona('.cart').innerHTML = ''

		let subtotal = 0
		let desconto = 0
		let total    = 0

		for(let i in cart) {
			let produtoItem = produtoJson.find( (item) => item.id == cart[i].id )
			console.log(produtoItem)

            // em cada item pegar o subtotal
        	subtotal += cart[i].price * cart[i].qt

			let cartItem = seleciona('.models .cart--item').cloneNode(true)
			seleciona('.cart').append(cartItem)

			let produtoSizeName = cart[i].size

			let produtoName = `${produtoItem.name} (${produtoSizeName})`

			cartItem.querySelector('img').src = produtoItem.img
			cartItem.querySelector('.cart--item-nome').innerHTML = produtoName
			cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt

			// selecionar botoes + e -
			cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
				console.log('Clicou no botão mais')
				cart[i].qt++
				atualizarCarrinho()
			})

			cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
				console.log('Clicou no botão menos')
				if(cart[i].qt > 1) {
					cart[i].qt--
				} else {
					cart.splice(i, 1)
				}

                (cart.length < 1) ? seleciona('header').style.display = 'flex' : ''

				atualizarCarrinho()
			})

			seleciona('.cart').append(cartItem)

		} // fim do for

		// fora do for
		// calcule desconto 10% e total
		//desconto = subtotal * 0.1
		desconto = subtotal * 0
		total = subtotal - desconto

		// exibir na tela os resultados
		seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal)
		seleciona('.desconto span:last-child').innerHTML = formatoReal(desconto)
		seleciona('.total span:last-child').innerHTML    = formatoReal(total)

	} else {
		// ocultar o carrinho
		seleciona('aside').classList.remove('show')
		seleciona('aside').style.left = '100vw'
	}
}

const finalizarCompra = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        console.log('Finalizar compra')
        seleciona('aside').classList.remove('show')
        seleciona('aside').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}

produtoJson.map((item, index ) => {
    let produtoItem = document.querySelector('.models .produto-item').cloneNode(true)
    seleciona('.produto-area').append(produtoItem)

    preencheDadosDosProdutos(produtoItem, item, index)
    
    produtoItem.querySelector('.produto-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou no produto')

        let chave = pegarKey(e)
        // abrir janela modal
        abrirModal()

        // preenchimento dos dados
        preencheDadosModal(item)

        // pegar tamanho selecionado
        preencherTamanhos(chave)

		// definir quantidade inicial como 1
		seleciona('.produtoInfo--qt').innerHTML = quantProdutos

        // selecionar o tamanho e preco com o clique no botao
        escolherTamanhoPreco(chave)

    })

    botoesFechar()

})

// mudar quantidade com os botoes + e -
mudarQuantidade()

adicionarNoCarrinho()
atualizarCarrinho()
fecharCarrinho()
finalizarCompra()