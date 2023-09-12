import '../../styles/reset.css'
import '../../styles/AbrirChamado.css'

 export default function AbrirChamadoLocal() {



    return (
        <>
            <main className="principal__abrir__chamado">
                <div className="local">
                    <h1 className="abrir__chamado__titulo">LOCAL</h1>
                    <hr />
                </div>
                <div className="local__formulario">
                <div className="opcoes__chamado">
                    <p className="titulo__formulario">Selecione o automóvel</p>
                    <select>
                        <optgroup>
                            <option value="">teste 1</option>
                            <option value="">teste 1</option>
                            <option value="">teste 1</option>
                            <option value="">teste 1</option>
                            <option value="">teste 1</option>
                        </optgroup>
                    </select>
                    <p className="titulo__formulario">Selecione o condutor</p>
                    <select>
                        <optgroup>
                            <p>Selecione o condutor</p>
                            <option value="">teste 2</option>
                            <option value="">teste 2</option>
                            <option value="">teste 2</option>
                            <option value="">teste 2</option>
                            <option value="">teste 2</option>
                        </optgroup>
                    </select>
                    
                </div>
                <div className="form__endereco">
                            <form action="">
                                <label htmlFor="" className="titulo__formulario"> Informe sua localização no mapa </label>
                                <input type="text" id="" className="input__mapa"/>

                                <label htmlFor="" className="titulo__formulario"> Nº </label>
                                <input type="number" id="" className="input__numero"/>

                                <label htmlFor="" className="titulo__formulario"> Cidade </label>
                                <input type="text" id="" className="input__cidade"/>

                                <label htmlFor="" className="titulo__formulario"> Endereco </label>
                                <input type="text" id="" className="input__endereco"/>

                                <label htmlFor="" className="titulo__formulario"> Bairro </label>
                                <input type="text" id="" className="input__bairro"/>

                                <label htmlFor="" className="titulo__formulario"> CEP </label>
                                <input type="text" id="" className="input__cep"/>

                                <label htmlFor="" className="titulo__formulario"> Estado </label>
                                <input type="text" id="" className="input__estado"/>

                                <label htmlFor="" className="titulo__formulario"> Referência </label>
                                <input type="text" id="" className="input__referencia"/>

                                <div>
                                    <label htmlFor="" className='titulo__formulario'> Descreva o Ocorrido</label>
                                    <textarea  className='input__ocorrido' cols="60" rows="10"/>
                                </div>

                            </form>


                </div>
                </div>
                <button className="formulario__botao">PRÓXIMO</button>
            </main>
        </>


    )


 }