import '../../styles/reset.css'
import '../../styles/meuperfil.css'

//IMAGENS

import FotoDePerfil from '../../assets/foto-perfil.png'
import PerfilVeiculo from '../../assets/carro2D.png'
import MapaPerfil from '../../assets/mapa_perfil.svg'
import MarcaCarro from '../../assets/marca_carro.svg'

export default function MeuPerfil() {

    return(
        <>
        <main>
            <section className="container__mariana">
                <div  className="perfil__mariana">
                    <img src={FotoDePerfil} alt=""/>
                </div>
                <div className="nome__mariana">
                    <h1>Mariana Peixoto</h1>
                </div>
                <div className="email__mariana">
                    <p>marianapeixoto@gmail.com</p>
                </div>
            </section >
            <section className="container__veiculo">
                <div className='titulo__veiculo__perfil'>
                    <h2 >VEÍCULO</h2>
                </div>
                <div>
                    <img src={PerfilVeiculo} alt="" className="perfil__veiculo" />
                </div>
                <div className="atributos__veiculo">
                    <div className="marca__veiculo">
                    <h1>MARCA</h1>
                    <img src={MarcaCarro} alt="" />
                    <p>Honda</p>
                    </div>

                    <div className="modelo__veiculo">
                    <h1>ENDEREÇO</h1>
                    <img src={MapaPerfil} alt="" />
                    <p>Rua Alemã, 678, - Vila Prudente, SP</p>
                    </div>
                </div>
            </section>
            <section className='meus__chamados'>
                <div className='titulo__Veiculo__chamado'>
                    <h2>MEUS CHAMADOS</h2>
                </div>
                <div className='chamado__1'>
                    <h1>CH00056 - <b>Em Andamento</b></h1>
                    <p>Av. Marandeira 789 - Sonho Lindo, Guarulhos, SP</p>
                    <p>Abertura: 03/12/2023</p>
                </div>
                <div className='chamado__2'>
                    <h1>CH00056 - <b>Finalizado</b></h1>
                    <p>Av. Marandeira 789 - Sonho Lindo, Guarulhos, SP</p>
                    <p>Abertura: 20/10/2022</p>
                </div>
                <div className='chamado__3'>
                    <h1>CH00056 - <b>Finalizado</b></h1>
                    <p>Av. Marandeira 789 - Sonho Lindo, Guarulhos, SP</p>
                    <p>Abertura: 15/02/2022</p>
                </div>
            </section>
        </main>

        </>

    )


}