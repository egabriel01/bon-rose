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
    imgSrc: "../../../imagens/ceviche.jpg" ,
    imgAlt: "Entrada 5",
    price: "64,90",
    title: "Ceviche",
    description: "É um prato de peixe (Salmão ou Tilápia) cru marinado em suco de limão ou lima, temperado com pimenta, cebola e coentro.",
    category: "entradas"
},{
    imgSrc: "../../../imagens/sashimi.jpg" ,
    imgAlt: "Principal 1",
    price: "68,90",
    title: "Sashimi Puro",
    description: "Tiras finas de peixe cru, geralmente salmão ou atum, acompanhadas de alga, molho shoyu e wasabi.",
    category: "principais"
},{
    imgSrc: "../../../imagens/sashimi.jpg" ,
    imgAlt: "Principal 1",
    price: "68,90",
    title: "Sashimi Puro",
    description: "Tiras finas de peixe cru, geralmente salmão ou atum, acompanhadas de alga, molho shoyu e wasabi.",
    category: "principais"
},{
    imgSrc: "../../../imagens/sushi.jpg" ,
    imgAlt: "Principal 2",
    price: "39,50",
    title: "Sushi",
    description: "Bolinho de arroz enrolado com alga, com recheios variados de frutos do mar, peixe ou vegetais.",
    category: "principais"
},{
    imgSrc: "../../../imagens/tempura.jpg" ,
    imgAlt: "Principal 3",
    price: "42,90",
    title: "Tempurá",
    description: "Massa fluida frita, com legumes ou frutos do mar, como camarão.",
    category: "principais"
},{
    imgSrc: "../../../imagens/hotroll.webp" ,
    imgAlt: "Principal 4",
    price: "12,90",
    title: "Hot Roll",
    description: "São 10 unidades de um tipo de sushi empanado e frito, feito com salmão, arroz japonês e cream cheese, enrolados em alga nori, empanados em uma massa de farinha de trigo e farinha panko.",
    category: "principais"
},{
    imgSrc: "../../../imagens/hotroll-camarao.png" ,
    imgAlt: "Principal 5",
    price: "12,90",
    title: "Hot Roll de Camarão",
    description: "É um tipo de sushi empanado e frito, feito com camarão, arroz japonês e cream cheese, enrolados em alga nori, empanados em uma massa de farinha de trigo e farinha panko.",
    category: "principais"
},{
    imgSrc: "../../../imagens/harumaki.jpg" ,
    imgAlt: "Sobremesa 1",
    price: "52,90",
    title: "Harumaki Doce",
    description: "linho primavera nas versões morango com chocolate ou banana com goiabada, servido com sorvete.",
    category: "sobremesas"
},{
    imgSrc: "../../../imagens/salmaoFlambado.jpg" ,
    imgAlt: "Sobremesa 2",
    price: "52,90",
    title: "Salmão Flambado",
    description: "Saharumakilmão grelhado flambado com geleia de maracujá",
    category: "sobremesas"
}

]


const menuMapper = arrayMenu.map(item => {
return`
<div class="menu-item" data-category=${item.category}>
    <img src=${item.imgSrc} alt=${item.imgAlt} />
    <h3>${item.title}<span class="price">R$ ${item.price}</span></h3>
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
