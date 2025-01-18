// Função para alternar entre as categorias
function showCategory(category) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(function(cat) {
        if (cat.id === category) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
}

// Inicializa a exibição da categoria "lingeries" ao carregar a página
window.onload = function() {
    showCategory('lingeries');
}
