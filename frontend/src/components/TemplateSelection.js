import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const TemplateSelection = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('template1');
    const [selectedFont, setSelectedFont] = useState('Arial');
    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleTemplateChange = (e) => setSelectedTemplate(e.target.value);
    const handleFontChange = (e) => setSelectedFont(e.target.value);
    const handleColorChange = (e) => setSelectedColor(e.target.value);

    const navigate=useNavigate()

    const handlelogout=()=>{
        localStorage.clear();
    }


    const saveCustomization = async () => {
        try {
            await axios.put('http://localhost:5000/api/users/profile/customization', {
                template: selectedTemplate,
                font: selectedFont,
                color: selectedColor
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            toast.success('Customization saved successfully!');
            navigate('/resumepreview')
        } catch (err) {
            toast.error('Failed to save customization.');
            console.log(err);
        }
    };

    return (
        <div>
            <ToastContainer />
            <div>
            <Navbar  fixed="top" style={{background:"#e3f2fd"}}>
            <Container>
                <Navbar.Brand href="/">Resume Maker</Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link href="/profile">Update profile</Nav.Link>
                  <Nav.Link href="/login" onClick={handlelogout}>Logout</Nav.Link>
                </Nav>
            </Container>
            </Navbar>        
            </div>
            <h2 className='text-center mb-3' style={{marginTop:"60px"}}>Choose a Template</h2>
            <div className="templates">
                <div className='d-flex justify-content-between'>
                <label>
                    Font:
                    <select value={selectedFont} onChange={handleFontChange}>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Helvetica">Helvetica</option>
                    </select>
                </label>
                <label>Color:
                    <input type="color" value={selectedColor} onChange={handleColorChange} />
                </label>
                </div>   
            </div>
            <hr></hr>
            <div className="templates">
                <label>
                    <input
                        type="radio"
                        name="template"
                        value="template1"
                        checked={selectedTemplate === 'template1'}
                        onChange={handleTemplateChange}
                    />
                    <div className='image-container'>
                        <img src="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg" alt="Template 1" className='image' />
                        <button className='image-button' onClick={saveCustomization}>Use template</button>
                    </div>
                </label>
                <label>
                    <input
                        type="radio"
                        name="template"
                        value="template2"
                        checked={selectedTemplate === 'template2'}
                        onChange={handleTemplateChange}
                    />
                    <div className='image-container'>
                        <img src="https://static-cse.canva.com/blob/558072/BlueSimpleAcademicResume.jpg" alt="Template 2" className='image'/>
                        <button className='image-button' onClick={saveCustomization}>Use template</button>
                    </div>
                </label>
                <label>
                    <input
                        type="radio"
                        name="template"
                        value="template3"
                        checked={selectedTemplate === 'template3'}
                        onChange={handleTemplateChange}
                    />
                    <div className='image-container'>
                        <img src="https://marketplace.canva.com/EAE4mb3_yUs/1/0/1131w/canva-elegant-minimalist-cv-resume-TP46smzU0OM.jpg" alt="Template 3" className='image' />
                        <button className='image-button' onClick={saveCustomization}>Use template</button>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default TemplateSelection;
