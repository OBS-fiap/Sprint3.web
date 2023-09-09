import { Link } from "react-router-dom";
import '../../styles/home.css'
import '../../styles/reset.css'


// Import das imagens 
import Guincho from '../../assets/guincho.png'
import Portologo from '../../assets/portoseguro.png'
import Batida from '../../assets/batida.png'
import Camera from '../../assets/camera.png'
import Mapa from '../../assets/mapa.png'
import Carro from '../../assets/veiculo.png'
import Chatbot from '../../assets/chatbot.png'

export default function Home() {
    return (
        <div>
            <main className="principal">
                <div className="container-main">
                    <div>
                        <h1 className='home-titulo'>GUINHELP</h1>
                        <p className='home-texto'>Problemas com o veiculo?</p>
                        <p className='home-texto'>Fique calmo, nós vamos ajudar você!</p>
                        <div className=" container-chamado" >
                            <Link to="/login" className="chamado">Abrir chamado</Link>
                        </div>
                    </div>
                    <div>
                        <img className="principal-img" src={Guincho} alt="Guincho levando um veiculo"/>
                    </div>
                </div>
            </main>

            <section className="parceria">
                <div className="parceria-box">
                    <p className="parceria-titulo ">Em parceria</p>
                    <img className="porto-logo" src={Portologo} alt="Logotipo da empresa porto seguro"/>
                </div>  
            </section>

            <section className="processo">
                
                    <h2 className="processo-titulo">COMO FUNCIONA?</h2>
                
                <div className="container-processo">
                    <div className="processo-item">
                        <img className="processo-img" src={Chatbot} alt="Um robo com celular"/>
                        <p className="processo-texto">Abrir chamado</p>
                    </div>
                    <div  className="processo-item">
                        <img className="processo-img" src={Carro} alt="Um carro azul"/>
                        <p className="processo-texto">Selecionar Automovel</p>
                    </div>
                    <div className="processo-item" >
                        <img className="processo-img" src={Mapa} alt="Mapa localizando uma pessoa"/>
                        <p className="processo-texto">Enviar Localização</p>
                    </div>
                    <div className="processo-item">
                        <img className="processo-img" src={Camera} alt="Camera forografica"/>
                        <p className="processo-texto">Tirar foto</p>
                    </div>
                    <div className="processo-item">
                        <img className="processo-img" src={Batida} alt="Batida de dois veiculos"/>
                        <p className="processo-texto">Descrever Ocorrido</p>
                    </div>
                </div>

                <div className="processo-box">
                    <p className="processo-box-texto">Recebemos o seu chamado e iniciamos o processo para resolver seu quebra-cabeça.</p>
                    <p className="processo-box-texto" >Você pode conferir o andamento pelo <a href="#">Seu Perfil</a>
                    ou <a href="#">ChatBot</a></p>
                </div>
            </section>
        </div>

    
    );
    }