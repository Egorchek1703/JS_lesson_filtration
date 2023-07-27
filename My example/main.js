let searchInput = document.querySelector('.color-search-inp')
let colorsUl = document.querySelector('.colors')
let colorsLi = document.querySelectorAll('.color')
// Задать стили каждому цвету и добавить слушатель при клике менять фон страницы
for(let i = 0; i<colorsLi.length; i++){
    let textColor = colorsLi[i].innerHTML.toLowerCase()
    colorsLi[i].style.color = textColor
    colorsLi[i].style.border = `2px solid ${textColor}`

    colorsLi[i].addEventListener('click', (event)=>{
        document.body.style.background = event.target.innerHTML.toLowerCase()
    })
}
// Функция для поиска цвета
let pressedKeys
function searchColor(){
    pressedKeys = searchInput.value.toUpperCase()

    for(let i = 0; i<colorsLi.length; i++){
        if(colorsLi[i].innerHTML.toUpperCase().indexOf(pressedKeys) > -1){
            colorsLi[i].style.display = 'block'
        }
        else{
            colorsLi[i].style.display = 'none'
        }
    }
}

let listsStatus = true
searchInput.addEventListener('focus', ()=>{
    colorsUl.style.display = 'block'
})
// searchInput.addEventListener('blur', ()=>{
//     colorsUl.style.display = 'none'
// })

searchInput.addEventListener('keyup', searchColor)