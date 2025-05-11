import "./Top_login.css";
import LogoComp from "../../assets/logo.svg";

function Top_login() {
    return (
        <div className='Top_login'>
            <div className="Login_logo">
                <img src= {LogoComp} />
            </div>
            <div className='Login_botao_criar'>
                <button className='Botao_criar_conta'><span className='Texto_botao_criar_conta'>Criar conta</span></button>
            </div>
        </div>
    ); 
}

export default Top_login


