// Clique dos menus
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)

// Expandir o menu

var btnEpx = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnEpx.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})
