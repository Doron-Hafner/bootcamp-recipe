const source = $('#recipe-template').html();
const template = Handlebars.compile(source)

class Renderer {
    constructor() {}
    
    renderRecipes = (data) => {
        const newHTML = template({data});
        $('#recipes-container').empty();
        $('#recipes-container').append(newHTML);
    }
}
