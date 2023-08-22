import './styles.css';
import home from './home';
import nav from './nav'
import menu from './menu'
import aboutUs from './about-us';
import contact from './contact';

const content = document.getElementById('content');
const navegador = document.getElementById('navegador');

navegador.appendChild(nav())

const showHome = () => {
    content.innerHTML = ''; // Limpia el contenido actual
    content.appendChild(home());
  };
  
const showMenu = () => {
    content.innerHTML = ''; // Limpia el contenido actual
    content.appendChild(menu());
};
const showAboutUs = () => {
    content.innerHTML = '';
    content.appendChild(aboutUs());
}
const showContact = () => {
    content.innerHTML = '';
    content.appendChild(contact());
}

navegador.addEventListener('click', event =>{
    if(event.target.classList.contains('nav-link')){
        const linkId = event.target.id;
        if(linkId === 'inicio'){
            showHome();
        }else if (linkId === 'menu'){
            showMenu();
        }else if (linkId === 'about us'){
            showAboutUs();
        }else if (linkId === 'contacto'){
            showContact();
        }
    }
})

content.appendChild(home());
