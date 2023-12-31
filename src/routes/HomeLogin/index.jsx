import { Link } from 'react-router-dom';

import '../../styles/reset.css';
import '../../styles/abrirchamado.css';

    //Importando as fotos

import Add from '../../assets/adicionar.svg'
import Pessoa from '../../assets/pessoa.svg';
import Cancelar from '../../assets/cancelar.svg';
import Carro from '../../assets/carro.svg';
import Relogio from '../../assets/relogio.svg';

export default function PaginaInicial() {
    return (
        <>
            <main>
                <div className="main__div__h1">
                    <h1><b className="main__div__h1__b">OLÁ MARIANA,</b></h1>
                    <p>Bem vindo(a) de volta!</p>
                </div>

                <navbar className="nav-full-content">
                    <div className="div_1">
                    <Link to="/meuPerfil">
                        <span><img src={Pessoa} alt="imagem de uma pessoa" /></span>
                        <p>MEU PERFIL</p>
                    </Link>
                    <Link to="/abrirChamadoLocal">
                        <span><img src={Add} alt="imagem de um círculo com mais no meio" /></span>
                        <p>ABRIR CHAMADO</p>
                    </Link>
                    <Link to="/meusChamados">
                        <span><img src={Relogio} alt="imagem de um relógio" /></span>
                        ACOMPANHAR
                    </Link>
                    <div className="div_2">
                        <a href="#">
                            <span><img src={Carro} alt="formato de um carro"/></span>
                            ACESSAR VEÍCULOS
                        </a>
                        <a href="#">
                            <span><img src={Cancelar} alt="circulo com x no meio"/></span>
                            CANCELAR
                        </a>
                    </div>
                    </div>
                </navbar>
            </main>
        </>
    )
}