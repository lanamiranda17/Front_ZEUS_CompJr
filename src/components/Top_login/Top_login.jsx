import "./Top_login.css";
import LogoComp from "../../assets/logo.svg";
import { useNavigate } from 'react-router-dom';

// Componente de topo da tela de login. Exibe o logo e o botão para criar conta.
function Top_login() {
    const navigate = useNavigate();
    return (
        <div className='Top_login'>
            <div className="Login_logo">
                <img src= {LogoComp} />
            </div>
            <div className='Login_botao_criar'>
                <button className='Botao_criar_conta' onClick={() => navigate('/criar-conta')}>
                    <span className='Texto_botao_criar_conta'>Criar conta</span>
                </button>
            </div>
        </div>
    ); 
}

export default Top_login


