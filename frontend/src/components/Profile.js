import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const fetchProfile = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/users/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setName(data.name);
            setEmail(data.email);
            setPhone(data.profile.phone);
            setAddress(data.profile.address);
        } catch (err) {
            console.log(err);
        }
    };

    const updateProfile = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put('http://localhost:5000/api/users/profile', { name, phone, address }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            toast.success('Profile updated successfully!');
        } catch (err) {
            toast.error('Failed to update profile.');
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div>
            <ToastContainer />
            <h2>User Profile</h2>
            <form onSubmit={updateProfile}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    disabled
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
