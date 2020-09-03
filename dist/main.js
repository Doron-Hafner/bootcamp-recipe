 const source = $('#recipe-template').html();
 const template = Handlebars.compile(source)

$("#submit").on("click", function () {
    const input = $("#ingredient").val().toLowerCase()
    $.get(`/recipes/${input}`, function(data){
        render.renderRecipes(data)
    })
})

class Renderer {
    constructor() {}

    renderRecipes = (data) => {
        console.log(data);
        const newHTML = template({data});
        $('#recipes-container').empty();
        $('#recipes-container').append(newHTML);
    }
}



$('#recipes-container').on('click', '.recipeImg',function() {
    let ingredient = this.closest(".recipe").find('li').first().html
    alert(ingredient)
})

const render = new Renderer
