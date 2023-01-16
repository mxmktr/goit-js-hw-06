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

ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement('li')
    ingredientItem.classList.add(itemClassName)
    ingredientItem.textContent = ingredient
    ingredientsList.append(ingredientItem)
})
