import { Link } from "react-router-dom";
import '../../styles/sobre.css'
import '../../styles/reset.css'

//Importando as imagens
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram-azul.png'
import Linkedin from '../../assets/linkedin.png'
import Perfil from '../../assets/perfil.png'
import Dispositivos from '../../assets/dispositivos.png'

export default function Sobre() {
  return (
    <div>
          <main className="principal-sobre">
            <div className="sobre-conteudo">
              <h1>Qual o nosso objetivo</h1>
              <p>is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since ndustry's standard du ndustry's st
                the 1500s, when an unknow printer took a galley ndustry's standard du ndustry's s
                of type and scrambled it to make a type specimen book.</p>
              </div>
              <img className="dispositivo-img" src={Dispositivos} alt="Um computador e celular" />
          </main>
          <section className="time">
            <div>
              <h1>Nosso Time</h1>
              <p>Conheça a equipe que esta por tras da criação deste projeto</p>
              <p>Desde a ideação até o desenvolvimento da plataforma</p>
            </div>
            <div className="container-integrantes">
              <div className="integrante">
                <img className="integrante-img" src={Perfil} alt="Foto do integrante" />
                <p>Olá, eu sou a <strong>Nicoly</strong></p>
                <p>RM 552410</p>
                <p>is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley</p>
                  <div className="social-media-sobre">
                    <a href="#"><img src={Github} alt="Logo do Github" /></a>
                    <a href="#"><img src={Instagram} alt="Logo Instagram" /></a>
                    <a href=""><img src={Linkedin} alt="Logo do linkedin" /></a>
                  </div>
              </div>
              <div  className="integrante">
                <img className="integrante-img" src={Perfil} alt="Foto do integrante" />
                <p>Olá, eu sou a <strong>Nicoly</strong></p>
                <p>RM 552410</p>
                <p>is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley</p>
                    <div className="social-media-sobre">
                    <a href="#"><img src={Github} alt="Logo do Github" /></a>
                    <a href="#"><img src={Instagram} alt="Logo Instagram" /></a>
                    <a href=""><img src={Linkedin} alt="Logo do linkedin" /></a>
                  </div>
              </div>
              <div className="integrante">
                <img className="integrante-img" src={Perfil} alt="Foto do integrante" />
                <p>Olá, eu sou a <strong>Nicoly</strong></p>
                <p>RM 552410</p>
                <p>is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley</p>
                    <div className="social-media-sobre">
                    <a href="#"><img src={Github} alt="Logo do Github" /></a>
                    <a href="#"><img src={Instagram} alt="Logo Instagram" /></a>
                    <a href=""><img src={Linkedin} alt="Logo do linkedin" /></a>
                  </div>
              </div>
              <div className="integrante">
                <img className="integrante-img" src={Perfil} alt="Foto do integrante" />
                <p>Olá, eu sou a <strong>Nicoly</strong></p>
                <p>RM 552410</p>
                <p>is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley</p>
                  <div className="social-media-sobre">
                    <a href="#"><img src={Github} alt="Logo do Github" /></a>
                    <a href="#"><img src={Instagram} alt="Logo Instagram" /></a>
                    <a href=""><img src={Linkedin} alt="Logo do linkedin" /></a>
                  </div>
              </div>
              <div className="integrante">
                <img className="integrante-img" src={Perfil} alt="Foto do integrante" />
                <p>Olá, eu sou a <strong>Nicoly</strong></p>
                <p>RM 552410</p>
                <p>is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley</p>
                  <div className="social-media-sobre">
                    <a href="#"><img src={Github} alt="Logo do Github" /></a>
                    <a href="#"><img src={Instagram} alt="Logo Instagram" /></a>
                    <a href=""><img src={Linkedin} alt="Logo do linkedin" /></a>
                  </div>
              </div>
            </div>
          </section>
    </div>
  );
}