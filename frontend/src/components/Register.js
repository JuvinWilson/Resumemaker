import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Header from './Header.js';
import Footer from './footer.js';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
            console.log(response.data);
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div>
                <Header/>
            </div>
            <div className='form-container'>
                <form className='card p-2' onSubmit={handleRegister}>
                <div className='mb-5'>
                    <img src="https://www.kindpng.com/picc/m/273-2734199_registration-logo-register-now-hd-png-download.png" alt="login" height={150}  width={400}/>  
                </div>
                    <div className='mb-3'>
                    <label>Name:</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{marginLeft:'40px'}} />
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
                        <p> Already Registred? <Link to='/register'>Login here</Link> </p>
                        <button type="submit" className="btn btn-primary p-2">Register</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Register;
