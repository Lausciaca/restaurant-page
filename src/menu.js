const menu = () => {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')
    const comidas = [
        {
            titulo: 'hamburguesa',
            ingredientes: ['lechuga', 'tomate', 'carne', 'pan'],
            precio: 5
        },
        {
            titulo: 'sandwich',
            ingredientes: ['pan', 'jamon', 'queso'],
            precio: 5
        },
        {
            titulo: 'pancho',
            ingredientes: ['pan', 'salchica', 'mostaza'],
            precio: 5
        }
    ]
    comidas.forEach(comida => {
        const card = document.createElement('div')
        card.classList.add('card')
        
        const titulo = document.createElement('h3')
        titulo.classList.add('card-titulo')
        titulo.textContent = `${comida.titulo}`
        
        const ingredientes = document.createElement('p')
        ingredientes.classList.add('card-ingredientes')
        ingredientes.textContent = `${comida.ingredientes}`
        
        const precio = document.createElement('p')
        precio.classList.add('card-precio')
        precio.textContent = `${comida.precio}`


        card.appendChild(titulo);
        card.appendChild(ingredientes);
        card.appendChild(precio);
        menuContainer.appendChild(card);
    })
    return menuContainer;
}

export default menu;