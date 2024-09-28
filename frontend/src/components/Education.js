import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Education = () => {
    const [education, setEducation] = useState([]);
    const [newEducation, setNewEducation] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: '',
    });

    const fetchEducations = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/users/profile', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setEducation(data.profile.education);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddEducation = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/profile/education', newEducation, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('education details added');
            setEducation(data.education);
            setNewEducation({ school: '', degree: '', startDate: '', endDate: '', description: '' });
        } catch (err) {
            toast.error('Failed to add education');
            console.log(err);
        }
    };

    const handleDeleteEducation = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/users/profile/education/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('education details deleted');
            setExperiences(data.education);
        } catch (err) {
            toast.error('Failed to delete education');
            console.log(err);
        }
    };

    useEffect(() => {
        fetchEducations();
    }, []);

    return (
        <div>
            <ToastContainer />
            <h2>Work Experience</h2>

            {education.map((edu) => (
                <div key={edu._id}>
                    <h3>{edu.school}</h3>
                    <p>{edu.degree}</p>
                    <p>{edu.startDate} - {exp.endDate}</p>
                    <p>{edu.description}</p>
                    <button onClick={() => handleDeleteEducation(edu._id)}>Delete</button>
                </div>
            ))}

            <h3>Add Education</h3>
            <input type="text" placeholder="school" value={newEducation.school} onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })} />
            <input type="text" placeholder="degree" value={newEducation.degree} onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })} />
            <input type="date" placeholder="Start Date" value={newEducation.startDate} onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })} />
            <input type="date" placeholder="End Date" value={newEducation.endDate} onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })} />
            <textarea placeholder="Description" value={newEducation.description} onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })} />
            <button onClick={handleAddEducation}>Add Education</button>
        </div>
    );
};

export default Education;
