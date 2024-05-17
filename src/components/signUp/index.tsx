import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
interface SignUpProps {
    handleSignIn: (value: boolean) => void;
    handleRouteToDashboard: (route: string) => void;
}
const SignUp: React.FC<SignUpProps> = ({ handleSignIn, handleRouteToDashboard }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailId, setEmailId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (!username || !password) {
            setErrorMessage('Please enter username and password');
            return;
        }

        console.log('Login successful!');
    }
    return (

        <div className="login-container flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8">SignUp / Register</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                <TextField
                    label="Username/Email"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!errorMessage}
                    helperText={errorMessage}
                    className="w-full"
                />
                <TextField
                    label="Email Id"
                    variant="outlined"
                    type="emailId"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    error={!!errorMessage}
                    className="w-full"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errorMessage}
                    className="w-full"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={() => handleRouteToDashboard('dashboard')}>
                    Submit
                </button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSignIn(true)}>
                    Login
                </button>
            </form>
        </div>

    )

}
export default SignUp;