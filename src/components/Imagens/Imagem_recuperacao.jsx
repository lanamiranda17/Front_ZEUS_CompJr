import ImageRecuperacao from '../../assets/image_recuperacao.svg';
import "./Imagens.css";

function Imagem_recuperacao() {
    return (
        <div className='Imagem_card'>
            <img src={ImageRecuperacao} className='Imagem_container'></img>
        </div>
    ); 
}

export default Imagem_recuperacao