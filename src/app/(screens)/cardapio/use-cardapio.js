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

const arrayMenu = [{
    imgSrc: "../../../imagens/sunomono.webp",
    imgAlt: "Entrada 1",
    price: "25,50",
    title: "Sunomono",
    description: "Salada refrescante de pepino japonês com um molho agridoce de vinagre de arroz e gergelim.",
    category: "entradas"
},{
    imgSrc: "../../../imagens/shimeji.jpg" ,
    imgAlt: "Entrada 2",
    price: "30,90",
    title: "Shimeji",
    description: "É um cogumelo com sabor suave e textura levemente crocante quando cozido.",
    category: "entradas"
},{
    imgSrc: "../../../imagens/guioza.jpg" ,
    imgAlt: "Entrada 3",
    price: "39,50",
    title: "Guioza",
    description: "Pastel frito ou cozido no vapor, com massa fina recheada de carne de porco moída ou legumes, servido com molho shoyu.",
    category: "entradas"
}

]

{/* <div class="menu-item" data-category="entradas">
                    <img src="../../../imagens/lula-empanada.jpg" alt="Entrada 4">
                    <h3>Lula Empanada <span class="price">R$ 94,90</span></h3>
                    <p>O prato consiste em anéis de lula fritos e crocantes, empanados em farinha panko.</p>
                </div> */}

const menuMapper = arrayMenu.map(item => {
return`
<div class="menu-item" data-category=${item.category}>
    <img src=${item.imgSrc} alt=${item.imgAlt} />
    <h3>${item.titl}<span class="price">R$ ${item.price}</span></h3>
    <p>${item.description}</p>
</div>
`
})

const btnEntradas = document.getElementById('entradas');
const btnPrincipais = document.getElementById('principais');
const btnSobremesas = document.getElementById('sobremesas');

btnEntradas.addEventListener('click', () => filtrar('entradas'));
btnPrincipais.addEventListener('click', () => filtrar('principais'));
btnSobremesas.addEventListener('click', () => filtrar('sobremesas'));

document.addEventListener('DOMContentLoaded', () => {
    filtrar('entradas');       // vai mostras só as Entradas ao carregar
    btnEntradas.classList.add('active');
});

