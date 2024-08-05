import React, { useState } from 'react';
import axios from 'axios';
import { useMyContext } from '../MyContext';

const SignIn: React.FC = () => {
    const { username, setUsername, message, setMessage, password, setPassword, navigate } = useMyContext();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/users/login', { username, password });
            if (response.status === 200) {
                navigate('/menu');
            }
        } catch (error) {
            setMessage('Username or password is incorrect');
        } finally {
            setLoading(false);
            setPassword('');
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit" disabled={loading}>Sign In</button>
                <button type="button" onClick={() => navigate('/signUp')}>Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignIn;
