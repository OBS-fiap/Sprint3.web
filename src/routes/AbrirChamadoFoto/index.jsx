import '../../styles/reset.css'
import '../../styles/abrirchamadofoto.css'

import TirarFoto from '../../assets/tirar-foto.png'
import CarregarFoto from '../../assets/carregar-foto.png'
import FotosAutomovel from '../../assets/fotos-automovel.png'

export default function AbrirChamadoFoto() {

    return(
        <>
            <main className="principal__abrir__chamado">
                <div className="local">
                    <h1 className="abrir__chamado__titulo">FOTO</h1>
                    <hr />
                </div>
                <div className="titulo__foto">
                        <h4>Envie uma foto do automóvel</h4>
                        <h6>tire fotos que sejam possíveis de visualizar todo o veículo, o ambiente em sua volta e a condição que ele se encontra</h6>
                </div>
                <div className="local__upload__foto">
                    <div className="foto__chamado">
                        <img src={TirarFoto} alt="campo para tirar foto" className="img___1" />
                        <img src={CarregarFoto} alt="campo para carregar uma foto" className="img___2" />
                        <img src={FotosAutomovel} alt="fotos do automóvel" className="img__3" />
                    </div>
                </div>
                <button className="formulario__botao">PRÓXIMO</button>
            </main>
    
        </>
    )

}