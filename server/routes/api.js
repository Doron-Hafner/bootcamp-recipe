const urllib = require('urllib')
const express = require('express')
const router = express.Router()
let recipes = {}

router.get('/sanity', function (req, res) {
    res.send('ok');
})

router.get('/recipes/:ingredient', function (request, response) {
    const input = request.params.ingredient
    
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${input}`, function (err, res) {
        const result = JSON.parse(res.toString()).results
        recipes.data = result
        let filteredRecipes = recipes.data.map(r => (
            {
                ingredients: r.ingredients,
                title: r.title,
                thumbnail: r.thumbnail,
                href: r.href
            }))
        response.send(filteredRecipes)
    })
})

module.exports = router
