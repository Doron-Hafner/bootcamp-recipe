const render = new Renderer()

$("#submit").on("click", function () {
    const input = $("#ingredient").val().toLowerCase()
    $.get(`/recipes/${input}`, function(data){
        render.renderRecipes(data)
    })
})

$('#recipes-container').on('click', '.recipeImg',function() {
    let ingredient = $(this).closest(".recipe").find('li').first().html()
    alert(ingredient)
})