const categoriesList = document.getElementById('categories')

const categoryListItem = [...categoriesList.children]
console.log(`Number of categories: ${categoryListItem.length}`)

for (const element of categoryListItem) {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`${element.lastElementChild.children.length}`)
}

/* Second variant */

console.log('============== second variant ==============')

const categoryListItem2 = document.querySelectorAll('li.item')
console.log(`Number of categories: ${categoryListItem2.length}`)

categoryListItem2.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`${element.lastElementChild.children.length}`)
})
