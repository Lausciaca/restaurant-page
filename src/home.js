const home = () => {
    let div = document.createElement('div');
    div.classList.add('div-home');
    
    let h1 = document.createElement('h1');
    h1.textContent = "Bienvenidos a Y"
    let p = document.createElement('p');
    p.textContent = "Un lugar donde la comida se convierte en una experiencia inolvidable. Nuestro restaurante es un oasis culinario que combina la pasión por la gastronomía con un ambiente acogedor y sofisticado. Explora nuestra galería de imágenes para capturar un vistazo a nuestros elegantes espacios, platos exquisitos y momentos de satisfacción compartidos por nuestros comensales. ¡Te invitamos a descubrir y deleitarte con lo que ofrecemos!";

    div.appendChild(h1);
    div.appendChild(p);

    return div;
}

export default home;