import './Nav_bar.css';
import LogoComp from "../../assets/logo.svg";
import { useLocation } from 'react-router-dom';
import Icon_dashboard from "../../assets/Icons/Icon_dashboard.svg"
import Icon_func_comprov from "../../assets/Icons/Icon_func_comprov.svg"
import Icon_pag from "../../assets/Icons/Icon_pag.svg"
import Icon_comunicados from "../../assets/Icons/Icon_comunicados.svg"
import Icon_circ from "../../assets/Icons/Icon_circ.svg"
import Icon_manut from "../../assets/Icons/Icon_manut.svg"
import Icon_logist from "../../assets/Icons/Icon_logist.svg"
import Icon_orcam from "../../assets/Icons/Icon_orcam.svg"
import Icon_estoq from "../../assets/Icons/Icon_estoq.svg"
import Icon_notif from "../../assets/Icons/Icon_notif.svg"
import Icon_capac from "../../assets/Icons/Icon_capac.svg"
import Icon_aquis from "../../assets/Icons/Icon_aquis.svg"


function Nav_bar (){
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className='Nav_bar'>
            <div className="Login_logo">
                <img src= {LogoComp} />
            </div>
            <button className={pathname === '/dashboard' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_dashboard}/> Dashboard</button>
            <button className={pathname === '/funcionarios' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_func_comprov}/> Funcionários</button>
            <button className={pathname === '/comprovantes' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_func_comprov}/> Comprovantes de pagamento</button>
            <button className={pathname === '/pagamentos' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_pag}/> Pagamentos recebidos</button>
            <button className={pathname === '/comunicados' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_comunicados}/>Comunicados</button>
            <button className={pathname === '/circulares' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_circ}/> Circulares</button>
            <button className={pathname === '/manutencao' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_manut}/> Manutenção</button>
            <button className={pathname === '/logistica' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_logist}/> Logística</button>
            <button className={pathname === '/orcamento' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_orcam}/>  Orçamento</button>
            <button className={pathname === '/estoque' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_estoq}/> Estoques e inventário</button>
            <button className={pathname === '/notificacoes' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_notif}/> Notificações</button>
            <button className={pathname === '/capacitacao' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_capac}/> Capacitação</button>
            <button className={pathname === '/aquisicoes' ? 'Botao_selecionado' : 'Botao_navbar'}>
                <img src={Icon_aquis}/> Aquisições</button>

        </div>
    );
}
export default Nav_bar