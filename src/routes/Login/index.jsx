import { Link } from "react-router-dom";
import '../../styles/login.css'
import '../../styles/reset.css'
import { useNavigate } from "react-router-dom";
import { usuarios } from "../../components/usuarios";


export default function Login() {
    const inputEmail = document.querySelector('#idEmail')
    const inputPassword = document.querySelector("#idPassword")

    const navegacao = useNavigate()
    
    const Login = () => {
        const email = inputEmail.value
        const senha = inputPassword.value

        const usuario = usuarios.find(usuario => usuario.email == email && usuario.senha == senha)

        if(usuario) {
            return navegacao('/meuPerfil')
        } else {
            return navegacao('/login')
        }
    }
    

    return (
        <div>
            <main className="principal-login">
                <div className="form-login">
                    <div className="login-conteudo">
                        <h1 className="login-titulo">Login</h1>
                        <p className="login-texto">Digite os seus dados de acesso no campo abaixo</p>
                    </div>
                    <form onSubmit={false}>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="idEmail" placeholder="Digite o seu e-mail"/>
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="idPassword" placeholder="Digite sua senha" />
                        </div>
                        <Link to="/EsqueceuSenha" className="esqueci-senha">Esqueci minha senha</Link>
                        <button className="btn-login" type="submit" onClick={Login}>Acessar</button>
                    </form>
                </div>
            </main>
        </div>
        
    );
}