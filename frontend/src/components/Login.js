import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Header from './Header.js';
import Footer from './footer.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            console.log(response.data);
            // Save the token to localStorage or context
            localStorage.setItem('token', response.data.token);
            navigate('/template');  // Redirect to home or resume builder page
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            
            <Header/>
            <div className='form-container'>
                <form className='card p-2' onSubmit={handleLogin}>
                    <div className='mb-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXGY9cB_P9jeq3YVfKA96O9hMw9q313ThNw&s" alt="login" height={150}  width={400}/>  
                    </div>
                    <div className='mb-3'>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{marginLeft:'40px'}} />
                    </div>
                    <div className='mb-3'>
                    <label>Password:</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{marginLeft:'10px'}} />
                    </div>
                    <div className='d-flex justify-content-between p-4'>
                        <p> New User? <Link to='/register'>Register here</Link> </p>
                        <button type="submit" className="btn btn-primary p-2">Login</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Login;
