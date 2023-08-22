const contact = () => {
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')

    const titulo =document.createElement('h2');
    titulo.textContent = 'Contacto';

    const texto = document.createElement('p');
    texto.textContent = `
        ¡Nos encantaría saber de ti! Si tienes alguna pregunta, sugerencia o simplemente quieres decir hola, no dudes en ponerte en contacto con nosotros.
        Puedes contactarnos a través de:
        Email: info@restaurantexyz.com
        Teléfono: +123456789
        Redes Sociales: @restaurantexyz
    `;

    contactContainer.appendChild(titulo)
    contactContainer.appendChild(texto)

    return contactContainer;
}

export default contact