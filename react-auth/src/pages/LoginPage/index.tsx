import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import './styles.css';


export function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authenticated, login } = useContext(AuthContext);


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const credentials = {email, password}
        console.log(credentials);
        login(email, password);
    }

    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                </div>
                <div className="actions">
                    <button type="submit">
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
}