import "./SignUp.css";

export function SignUp() {
    return (
        <section>
            <form className="form__container">
                <fieldset className="register__field">
                    <label><input type="text" placeholder="Username"/></label>
                    <label><input type="email" placeholder="Email" /></label>
                    <label><input type="password" placeholder="Password"/></label>
                </fieldset>
            </form>
        </section>
    )
}