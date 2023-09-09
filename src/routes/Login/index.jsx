import { Link } from "react-router-dom";
import '../../styles/login.css'
import '../../styles/reset.css'


export default function Login() {

    return (
        <div>
            <main className="principal-login">
                <div className="form-login">
                    <div className="login-conteudo">
                        <h1 className="login-titulo">Login</h1>
                        <p className="login-texto">Digite os seus dados de acesso no campo abaixo</p>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="Digite o seu e-mail"/>
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" placeholder="Digite sua senha" />
                        </div>
                        <Link to="/EsqueceuSenha" className="esqueci-senha">Esqueci minha senha</Link>
                        <button className="btn-login" type="submit">Acessar</button>
                    </form>
                </div>
            </main>
        </div>
        
    );
}