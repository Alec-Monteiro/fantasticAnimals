const listaImg = document.querySelectorAll('.animais-lista li');
const listaDescricao = document.querySelectorAll('.animais-descricao section')

function initTabList() {
    listaImg.forEach((item, index) => {
        listaDescricao[0].classList.add('ativo')
        item.addEventListener('click', () => {
            listaDescricao.forEach((itemdesc, indexDesc) => {
                itemdesc.classList.remove('ativo')
                itemdesc.classList.add('desativo')
                listaDescricao[index].classList.add('ativo')
                listaDescricao[index].classList.remove('desativo')
            })
        })
    })
}
initTabList();

// #################################################
function initAccordion() {
    const allDts = document.querySelectorAll('.faq-lista dt')
    const allDds = document.querySelectorAll('.faq-lista dd')

    if (allDds.length) {
        allDts.forEach((dt, indexDt) => {
            dt.addEventListener('click', () => {
                dt.classList.toggle('dtAtivo')
                allDds[indexDt].classList.toggle('ddOff')
            })
        })
    }
}
initAccordion();

// ###################################################

function initScrollSuave() {
    const menu = document.querySelectorAll('.menu ul li a[href^="#"]')
    const getLinks = document.querySelectorAll('[id]')

    menu.forEach((link, index) => {

        link.addEventListener('click', () => {
            let getHeight = getLinks[index].offsetTop

            window.scrollBy({
                top: getHeight,
                left: 0,
                behavior: "smooth"
            })
        })
    })
}
initScrollSuave();