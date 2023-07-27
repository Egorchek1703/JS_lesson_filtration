let searchInput = document.querySelector('.search-inp')
let ulSearch = document.querySelector('.name-list')
let lists = ulSearch.querySelectorAll('li')
let pressedKeys
let link


function searchName() {

    for(let i = 0; i<lists.length; i++){
        link = lists[i].querySelector('a')
        pressedKeys = searchInput.value.toUpperCase()

        if(link.innerHTML.toUpperCase().indexOf(pressedKeys) > -1){
            lists[i].style.display = 'block'
        }
        else{
            lists[i].style.display = 'none'
        }
    }
}

searchInput.addEventListener('keyup', searchName)