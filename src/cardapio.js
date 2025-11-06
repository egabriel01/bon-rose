function filtrar(categoria) {
    const itens = document.querySelectorAll('.menu-item');

    itens.forEach(item => {
        const cat = item.dataset.category;

        // Se for "todos" ou a categoria bater → mostra
        if (categoria === 'todos' || cat === categoria) {
            item.style.display = '';               // deixa o CSS original decidir
        } else {
            item.style.display = 'none';
        }
    });

    // Marca o botão ativo (visual)
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === categoria);
    });
}

const btnEntradas   = document.getElementById('entradas');
const btnPrincipais = document.getElementById('principais');
const btnSobremesas = document.getElementById('sobremesas');

btnEntradas.addEventListener('click',   () => filtrar('entradas'));
btnPrincipais.addEventListener('click', () => filtrar('principais'));
btnSobremesas.addEventListener('click', () => filtrar('sobremesas'));

document.addEventListener('DOMContentLoaded', () => {
    filtrar('entradas');       // vai mostras só as Entradas ao carregar
    btnEntradas.classList.add('active'); 
});
