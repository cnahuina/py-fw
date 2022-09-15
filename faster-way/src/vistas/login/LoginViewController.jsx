import { Header } from "./../../components/shared/Header"

export const LoginViewController = () => {
    return (
        <>
            <Header />
            <div className="loginContainer">
                <br />
                <h2>Sign In</h2>
                <p>Let’s sign in with your FWTFL account</p>

                <br />
                <br />
                <br />
                <br />
                <span>Sign in with your email</span>

                <form className="formGroup">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </form>

                <a href="/today" className="btn-default">SIGN IN</a>
                <a href="/" className="link-btn">Forgot password?</a>

            </div>
        </>
    )
}