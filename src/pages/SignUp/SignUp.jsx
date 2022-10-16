import "./SignUp.css";

export function SignUp() {
    return (
        <section>
            <form className="form__container">
                <h2>Seja Bem-vindo!</h2>
                <p>Aqui você irá realizar o seu registro na nossa plataforma!</p>
                <p>Tudo isso é realizado para simular um ambiente de cadastro</p>
                <p>
                    Após realizar o seu cadastro,
                    você poderá responder um questionário
                    que definirá o seu perfil como Dev.
                </p>
                <h3>Preencha os campos abaixo:</h3>
                <fieldset className="register__field">
                    <label htmlFor="nome">
                        Nome
                        <input
                            id="nome"
                            type="text"
                            placeholder="Nome"
                            required
                        />
                    </label>
                    <label htmlFor="email">
                        E-mail
                        <input
                            id="email" 
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </label>
                    <label htmlFor="usuario">
                        Usuário
                        <input
                            id="usuario"
                            type="text"
                            placeholder="Username"
                            required
                        />
                    </label>
                    <label htmlFor="senha">
                        Senha
                        <input
                            id="senha"
                            type="password"
                            placeholder="Defina a sua senha"
                            required
                        />
                    </label>
                    <label htmlFor="repeteSenha">
                        Confirmar Senha
                        <input
                            id="repeteSenha"
                            type="password"
                            placeholder="Repita a sua senha"
                            required
                        />
                    </label>
                    <button>Cadastrar</button>
                </fieldset>
            </form>
        </section>
    )
}