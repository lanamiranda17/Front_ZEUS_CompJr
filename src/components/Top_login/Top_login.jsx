import "./Top_login.css";
import Logo_comp from '../../components/Logo_comp/Logo_comp';

function Top_login() {
    return (
        <div className='Top_login'>
            <Logo_comp />
            <div className='Login_botao_criar'>
                <button className='Botao_criar_conta'><span className='Texto_botao_criar_conta'>Criar conta</span></button>
            </div>
        </div>
    ); 
}

export default Top_login


