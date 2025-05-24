import ImageLogin from '../../assets/image_login.svg';
import "./Imagens.css";

// Componente de exibição de imagem ilustrativa para telas de login.
function Imagem_login() {
    return (
        <div className='Imagem_card'>
            <img src={ImageLogin} className='Imagem_container'></img>
        </div>
    ); 
}

export default Imagem_login
