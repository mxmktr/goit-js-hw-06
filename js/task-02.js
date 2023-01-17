const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
]

const ingredientsList = document.getElementById('ingredients')
const itemClassName = 'item'

const itemCollection = []

ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement('li')
    ingredientItem.classList.add(itemClassName)
    ingredientItem.textContent = ingredient
    itemCollection.push(ingredientItem)
})

ingredientsList.append(...itemCollection)
