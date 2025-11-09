
const cardDishes = [{
    imgSrc: '../../../imagens/sashimi.jpg',
    imgAlt: 'Prato 1',
    title: 'Sashimi Puro',
    description: 'O prato traz tiras finas de peixe cru, geralmente salmão, atum e outros peixes. Não é consumido com arroz, mas pode ser acompanhado de alga, molho shoyu e wasabi. Sashimi significa carne perfurada (sashi = perfurada + mi = carne).',
    price: 'R$ 68,90'
}, {
    imgSrc: '../../../imagens/shimeji.jpg',
    imgAlt: 'Prato 2',
    title: 'Shimeji na Chapa',
    description: 'Esse cogumelo macio e servido quentinho na entrada ou como acompanhamento é simplesmente irresistível. Frito na manteiga, aqui no Djapa o shimeji é regado com molho shoyu e decorado com cebolinha.',
    price: 'R$ 49,90'
}, {
    imgSrc: '../../../imagens/harumaki.jpg',
    imgAlt: 'Prato 3',
    title: 'Harumaki',
    description: 'Também conhecido como rolinho primavera, o harumaki é uma massa leve feita à base de farinha de trigo e recheada com ingredientes variados. Aqui no Djapa você encontra huramakis de queijo e de legumes. Há também as versões doces, morango com chocolate e banana com goiabada, ambas servidas com sorvete.',
    price: 'R$ 52,90'
}, {
    imgSrc: '../../../imagens/sushi.jpg',
    imgAlt: 'Prato 4',
    title: 'Sushi',
    description: 'Esta típica comida japonesa é um bolinho de arroz enrolado com uma alga. O sushi traz diferentes ingredientes em seu interior, entre eles frutos do mar, peixe e vegetais. Como a variedade de sushi é bem grande, a iguaria pode ganhar outros nomes dependendo do recheio escolhido. A título de curiosidade, a palavra sushi significa “é azedo”.',
    price: 'R$ 39,50'
}, {
    imgSrc: '../../../imagens/tempura.jpg',
    imgAlt: 'Prato 5',
    title: 'Tempurá',
    description: 'De origem portuguesa, o tempurá se tornou um dos pratos clássicos da comida japonesa. A iguaria de massa fluida, feita à base de farinha de trigo e frita, pode ser composta apenas de legumes (cenoura, abóbora, berinjela, repolho, brócolis, entre outros) ou por frutos do mar, como camarão.',
    price: 'R$ 42,90'
}, {
    imgSrc: '../../../imagens/guioza.jpg',
    imgAlt: 'Prato 6',
    title: 'Guioza',
    description: 'O guioza (ou gyoza) é um pastel frito ou cozinho no vapor. É feito com uma massa bem fina com recheio de carne de porco moída ou legumes (repolho e cebolinha). O guioza geralmente é servido com molho shoyu. Dizem que, na verdade, o prato é originalmente chinês.',
    price: 'R$ 29,50'
}];

const cardDishesMapper = cardDishes.map(dish => {
    return `
    <div class="dish-card">
        <img src="${dish.imgSrc}" alt="${dish.imgAlt}">
        <h3>${dish.title}</h3>
        <p>${dish.description}</p>
        <span class="price">${dish.price}</span>
    </div>
    `;
});

document.getElementById('cardDishes').innerHTML = cardDishesMapper.join('')



    const menuLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    menuLinks.forEach((link) => {
        link.addEventListener("click", (evento)=>{

            evento.preventDefault();

            const idSecao = link.getAttribute('href')
            const alvoSecao = document.querySelector(idSecao)

            alvoSecao ? (alvoSecao.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })) : null
        })
    })