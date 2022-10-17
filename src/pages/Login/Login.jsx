import "../SignUp/SignUp.css";

export function Login() {
    return (
        <section>
            <h2 className="login__tittle">Login</h2>
            <form className="form__container">    
                <fieldset className="register__field">
                    <label htmlFor="email" className="label__item">
                        E-mail:
                    </label>
                    <input
                        className="items__register"
                        id="email" 
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <label htmlFor="senha" className="label__item">
                        Senha:
                    </label>
                    <input
                        className="items__register"
                        id="senha"
                        type="password"
                        placeholder="Defina a sua senha"
                        required
                    />
                    <button className="button__register">Enviar</button>
                </fieldset>
            </form>
        </section>
    );
};