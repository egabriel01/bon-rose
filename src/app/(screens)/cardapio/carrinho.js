
let carrinho = [];

const elementosCarrinho = {
    contadorCarrinho: document.getElementById('contador-carrinho'),
    itensCarrinho: document.getElementById('itens-carrinho'),
    totalCarrinho: document.getElementById('total'),
    btnFinalizar: document.getElementById('btn-finalizar-compra'),
    carrinhoLateral: document.getElementById('carrinho-lateral'),
    overlay: document.querySelector('.carrinho-overlay')
};

function inicializarCarrinho() {

    elementosCarrinho.btnFinalizar.addEventListener('click', finalizarPedido);
    
    atualizarCarrinho();
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && elementosCarrinho.carrinhoLateral.classList.contains('active')) {
            toggleCarrinho();
        }
    });
}

function toggleCarrinho() {
    elementosCarrinho.carrinhoLateral.classList.toggle('active');
    elementosCarrinho.overlay.classList.toggle('active');
    
    if (elementosCarrinho.carrinhoLateral.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function adicionarAoCarrinho(id, nome, preco) {
    const itemExistente = carrinho.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            id: id,
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }
    
    atualizarCarrinho();
    mostrarFeedback(`${nome} adicionado ao carrinho!`);
    
    if (carrinho.length === 1 && window.innerWidth <= 768) {
        toggleCarrinho();
    }
}

function atualizarCarrinho() {

    elementosCarrinho.contadorCarrinho.textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);
    
    elementosCarrinho.itensCarrinho.innerHTML = '';
    
    if (carrinho.length === 0) {
        elementosCarrinho.itensCarrinho.innerHTML = '<div class="carrinho-vazio">Seu carrinho está vazio</div>';
        elementosCarrinho.btnFinalizar.disabled = true;
    } else {
        elementosCarrinho.btnFinalizar.disabled = false;
        
        carrinho.forEach(item => {
            const elementoItem = document.createElement('div');
            elementoItem.className = 'item-carrinho';
            elementoItem.innerHTML = `
                <div class="info-item">
                    <h4>${item.nome}</h4>
                    <p>R$ ${item.preco.toFixed(2)}</p>
                </div>
                <div class="controles-item">
                    <button class="btn-quantidade" onclick="alterarQuantidade(${item.id}, -1)">-</button>
                    <span>${item.quantidade}</span>
                    <button class="btn-quantidade" onclick="alterarQuantidade(${item.id}, 1)">+</button>
                    <button class="btn-remover" onclick="removerItem(${item.id})">Remover</button>
                </div>
            `;
            elementosCarrinho.itensCarrinho.appendChild(elementoItem);
        });
    }
    
    const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
    elementosCarrinho.totalCarrinho.textContent = total.toFixed(2);
}

function alterarQuantidade(id, mudanca) {
    const item = carrinho.find(item => item.id === id);
    
    if (item) {
        item.quantidade += mudanca;
        
        if (item.quantidade <= 0) {
            removerItem(id);
        } else {
            atualizarCarrinho();
        }
    }
}

function removerItem(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
    mostrarFeedback('Item removido do carrinho!');
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        mostrarFeedback('Seu carrinho está vazio!', 'error');
        return;
    }
    
    const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
    const itensResumo = carrinho.map(item => 
        `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`
    ).join('\n');
    
    const mensagem = `Boa noite! Gostaria de pedir um:\n\n${itensResumo}\n\nTotal: R$ ${total.toFixed(2)}`;
    const telefone = '17997347418'
    const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');
    
    carrinho = [];
    atualizarCarrinho();
    toggleCarrinho();
    
    mostrarFeedback('Pedido enviado para o WhatsApp!');
}

function mostrarFeedback(mensagem, tipo = 'success') {
    const feedback = document.createElement('div');
    feedback.textContent = mensagem;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${tipo === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(feedback)) {
                document.body.removeChild(feedback);
            }
        }, 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    inicializarCarrinho();
});