const food = [
    {
        foodURL: 'https://www.svgrepo.com/show/425857/taco.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425852/doughnut.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425854/hotdog.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425856/sushi-plate.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425861/pizza.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425868/sandwich.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425863/british-breakfast.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425859/food.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425853/shish-kebab.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425864/doner-roll.svg'
    },
    {
        foodURL: 'https://www.svgrepo.com/show/425862/cheeseburger.svg'
    },
]

let randomFood = {}

export const getRandomFood = () => {
    const randomIndex = Math.floor(Math.random() * food.length)

    randomFood = food[randomIndex]

    return randomFood
}