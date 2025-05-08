import ImageLogin from '../../assets/image_login.svg';
import "./Imagem_login.css";

function Imagem_login() {
    return (
        <div className='Imagem_login_card'>
            <img src={ImageLogin} className='Imagem_login'></img>
        </div>
    ); 
}

export default Imagem_login
