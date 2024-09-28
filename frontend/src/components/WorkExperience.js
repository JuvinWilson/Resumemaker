import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const WorkExperience = () => {
    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
    });

    const fetchExperiences = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/users/profile', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setExperiences(data.profile.workExperience);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddExperience = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/profile/work', newExperience, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('Work experience added');
            setExperiences(data.workExperience);
            setNewExperience({ company: '', position: '', startDate: '', endDate: '', description: '' });
        } catch (err) {
            toast.error('Failed to add work experience');
            console.log(err);
        }
    };

    const handleDeleteExperience = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/users/profile/work/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('Work experience deleted');
            setExperiences(data.workExperience);
        } catch (err) {
            toast.error('Failed to delete work experience');
            console.log(err);
        }
    };

    useEffect(() => {
        fetchExperiences();
    }, []);

    return (
        <div>
            <ToastContainer />
            <h2>Work Experience</h2>

            {experiences.map((exp) => (
                <div key={exp._id}>
                    <h3>{exp.company}</h3>
                    <p>{exp.position}</p>
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.description}</p>
                    <button onClick={() => handleDeleteExperience(exp._id)}>Delete</button>
                </div>
            ))}

            <h3>Add Work Experience</h3>
            <input type="text" placeholder="Company" value={newExperience.company} onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })} />
            <input type="text" placeholder="Position" value={newExperience.position} onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })} />
            <input type="date" placeholder="Start Date" value={newExperience.startDate} onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })} />
            <input type="date" placeholder="End Date" value={newExperience.endDate} onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })} />
            <textarea placeholder="Description" value={newExperience.description} onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })} />
            <button onClick={handleAddExperience}>Add Experience</button>
        </div>
    );
};

export default WorkExperience;

