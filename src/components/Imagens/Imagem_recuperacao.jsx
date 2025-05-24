import ImageRecuperacao from '../../assets/image_recuperacao.svg';
import "./Imagens.css";

// Componente de exibição de imagem ilustrativa para telas de recuperação de senha.
function Imagem_recuperacao() {
    return (
        <div className='Imagem_card'>
            <img src={ImageRecuperacao} className='Imagem_container'></img>
        </div>
    ); 
}

export default Imagem_recuperacao