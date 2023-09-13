
import '../../styles/reset.css'
import '../../styles/meuschamados.css'


//Imagens
import FotosAutomovel from '../../assets/fotos-automovel.png'

export default function MeusChamados() {

    return(
        <>
            <main>
                <section className="container__acompanhar">
                    <div className="titulo__andamento">
                        <h1>CH00056 <b>- Em andamento</b></h1>
                    </div>
                    <div className='descritivo__abertura'>
                        <h4><b>Data de Abertura:</b> 03/12/2023</h4>
                        <h4><b>Data de Fechamento:</b> ********</h4>
                        <h4><b>Local Chamado:</b> Av. Marandeira 789 - Sonho Lindo, Guarulhos, SP</h4>
                    </div>
                    <div className='ocorrido__foto'>
                        <h4><b>Automovel :</b> Civic - 2.0 - SPORT PRATA  </h4>
                        
                        <h4><b>Condutor:</b> Mariana Peixoto </h4>
                    </div>
                    <div className='ocorrido'>
                    <h4><b>Ocorrido :</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le.ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 19 60s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
                    </div>

                    
                    <div className='fotos__veiculos'>
                        <h4 className='fotos__veiculo__h4'><b>Fotos:</b></h4>
                        <img src={FotosAutomovel} alt="" />
                    </div>
                </section>
            </main>
        
        
        </>


    )


}