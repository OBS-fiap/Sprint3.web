import '../../styles/esqueceusenha.css'

export default function EsqueceuSenha() {
    return (
        <div>
        <main className="esqueceu-senha-principal">
            <div className="esqueceu-senha-container">
                <img src="" alt="Vetor com uma mulher em duvida da senhna" />
                <p className='senha-texto'>Esqueceu sua senha? Sem problemas,</p>
                <p className='senha-texto'>Enviaresmos um e-mail para que você possa redefinir</p>
                <div>
                    <input className='input-email' type="email" placeholder="Digite o seu e-mail" />
                </div>
                <button className='btn-enviar-senha'>Enviar Senha</button>
            </div>

        </main>
        </div>
    );
    }