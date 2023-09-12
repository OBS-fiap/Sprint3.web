import { Link } from "react-router-dom";
import '../../styles/abrirchamado.css'

import SOS from '../../assets/sos.png'

export default function AbrirChamadoConfirmacao() {
    return (
        <div>
        <>
            <main className ="ac-principal">
                <div className="barra-status"></div>
                <div className="container-ac-confirmacao">
                    <img className="ac-img" src={SOS} alt="Moça reportando um ocorrido pelo numero de emergencia" />
                    <div className="ac-confirmacao-conteudo">
                        <h1 className="ac-confirmacao-titulo">Recebemos o seu chamado</h1>
                        <p className="ac-confirmacao-texto">Nossa equipe iniciou o processo para realizar o seu chamado</p>
                        <p className="ac-confirmacao-texto">Logo menos, nosso prestador chegará até o local</p>
                        <p className="ac-confirmacao-texto">Você pode acompar todo o processo em <Link to="/meusChamado">MEUS CHAMADOS</Link></p>
                    </div>
                </div>
            </main>
        </>
        </div>
    );
    }