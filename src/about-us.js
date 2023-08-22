const aboutUs = () => {
    const aboutUsContainer = document.createElement('div')
    aboutUsContainer.classList.add('about-us-container')

    const titulo = document.createElement('h2')
    titulo.textContent = "Acerca de nosotros"

    const texto = document.createElement('p')
    texto.textContent = `
      Somos un restaurante apasionado por brindar experiencias culinarias
      excepcionales a nuestros comensales. Desde nuestros humildes comienzos,
      hemos estado comprometidos con la calidad, la creatividad y la 
      hospitalidad en cada plato que servimos.
      Nuestra visión es ser el destino preferido para los amantes de la
      buena comida. Trabajamos con los ingredientes más frescos y sabores
      auténticos para crear platos que deleiten tanto el paladar como el 
      alma.
      Estamos orgullosos de nuestro equipo dedicado de chefs y personal de 
      servicio que se esfuerzan por hacer de cada visita una experiencia 
      memorable. ¡Esperamos darle la bienvenida pronto en nuestro 
      restaurante!
    `
    aboutUsContainer.appendChild(titulo)
    aboutUsContainer.appendChild(texto)

    return aboutUsContainer
}

export default aboutUs;