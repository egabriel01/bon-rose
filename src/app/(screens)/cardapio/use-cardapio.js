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
},{
    imgSrc: "../../../imagens/lula-empanada.jpg" ,
    imgAlt: "Entrada 4",
    price: "94,90",
    title: "Lula Empanada",
    description: "O prato consiste em anéis de lula fritos e crocantes, empanados em farinha panko.",
    category: "entradas"
},{
    imgSrc: "../../../imagens/sashimi.jpg" ,
    imgAlt: "Principal 1",
    price: "68,90",
    title: "Sashimi Puro",
    description: "Tiras finas de peixe cru, geralmente salmão ou atum, acompanhadas de alga, molho shoyu e wasabi.",
    category: "principais"
}

]
                // <!-- <div class="menu-item" data-category="entradas">
                //     <img src="../../../imagens/ceviche.jpg" alt="Entrada 5">
                //     <h3>Ceviche <span class="price">R$ 64,90</span></h3>
                //     <p>É um prato de peixe (Salmão ou Tilápia) cru marinado em suco de limão ou lima, temperado com pimenta, cebola e coentro.</p>
                // </div>
                // <div class="menu-item" data-category="principais">
                //     <img src="../../../imagens/sushi.jpg" alt="Principal">
                //     <h3>Sushi <span class="price">R$ 39,50</span></h3>
                //     <p>Bolinho de arroz enrolado com alga, com recheios variados de frutos do mar, peixe ou vegetais.</p>
                // </div>
                // <div class="menu-item" data-category="principais">
                //     <img src="../../../imagens/tempura.jpg" alt="Principal">
                //     <h3>Tempurá <span class="price">R$ 42,90</span></h3>
                //     <p>Massa fluida frita, com legumes ou frutos do mar, como camarão.</p>
                // </div>
                // <div class="menu-item" data-category="principais">
                //     <img src="../../../imagens/hotroll.webp" alt="Principal">
                //     <h3>Hot Roll <span class="price">R$ 12,90</span></h3>
                //     <p>São 10 unidades de um tipo de sushi empanado e frito, feito com salmão, arroz japonês e cream cheese, enrolados em alga nori, empanados em uma massa de farinha de trigo e farinha panko.</p>
                // </div>
                // <div class="menu-item" data-category="principais">
                //     <img src="../../../imagens/hotroll-camarao.png" alt="Principal">
                //     <h3>Hot Roll Camarão<span class="price">R$ 12,90</span></h3>
                //     <p>É um tipo de sushi empanado e frito, feito com camarão, arroz japonês e cream cheese, enrolados em alga nori, empanados em uma massa de farinha de trigo e farinha panko.</p>
                // </div>

                // <div class="menu-item" data-category="sobremesas">
                //     <img src="../../../imagens/harumaki.jpg" alt="sobremesa 1">
                //     <h3>Harumaki Doce <span class="price">R$ 52,90</span></h3>
                //     <p>Rolinho primavera nas versões morango com chocolate ou banana com goiabada, servido com sorvete.</p>
                // </div>
                // <div class="menu-item" data-category="sobremesas">
                //     <img src="../../../imagens/salmaoFlambado.jpg" alt="sobremesa 2">
                //     <h3>Salmão Flambado<span class="price">R$ 52,90</span></h3>
                //     <p>Salmão grelhado flambado com geleia de maracujá</p>
                // </div> -->

const menuMapper = arrayMenu.map(item => {
return`
<div class="menu-item" data-category=${item.category}>
    <img src=${item.imgSrc} alt=${item.imgAlt} />
    <h3>${item.title}kkk <span class="price">R$ ${item.price}</span></h3>
    <p>${item.description}</p>
</div>
`
})

document.getElementById('menuItems').innerHTML = menuMapper.join('')

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
