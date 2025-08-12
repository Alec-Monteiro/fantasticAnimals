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
const menuContato = document.querySelector('.menuContato')
// console.log(tagContato)
const tagContato = document.querySelector('.contato').offsetTop;

menuContato.addEventListener('click', () => {
    window.scrollBy({
        top: tagContato,
        left: 0,
        behavior: "smooth"
    });
})

// console.log(sectionContato.offsetTop)