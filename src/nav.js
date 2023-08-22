const nav = () => {
    let navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');
    let navLinks = [
        'inicio',
        'menu',
        'about us',
        'contacto',
    ];
    navLinks.forEach(navLink => {
        let link = document.createElement('button');
        link.id = `${navLink}`;
        link.classList.add('nav-link');
        link.textContent = navLink;
        navContainer.appendChild(link);
    });
    return navContainer
}

export default nav;