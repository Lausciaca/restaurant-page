import './styles.css';
import home from './home';
import nav from './nav'
import menu from './menu'

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

navegador.addEventListener('click', event =>{
    if(event.target.classList.contains('nav-link')){
        const linkId = event.target.id;
        if(linkId === 'inicio'){
            showHome();
        }else if (linkId === 'menu'){
            showMenu();
        }
    }
})

content.appendChild(home());
