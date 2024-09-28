import React from 'react'
import {Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-grid-carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer.js';
import Header from './Header.js';

function Ui() {
       
  return (
    <>
      <Header/>
      <div>
          <Card className="front">
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem', color: '#ffff00',paddingTop: '100px' }}>Create a professional resume</Card.Title>
                <Card.Text style={{ color: '#00ff11ff'}}>
                  Fill in the blanks, choose a template, and download your resume instantly.
                </Card.Text>
                  <Button variant="primary" href='/login' style={{marginTop:'30px'}}>Create Resume</Button>
              </Card.Body>
          </Card>
      </div>
      <div className="templateheading" style={{height:"200"}}>
        <strong><h1 style={{textAlign:"center",padding:'40px',color:"green",}}>SAMPLE RESUME TEMPLATES</h1></strong>
      </div>
      <div className="carousel">
            <Carousel cols={4} rows={1} gap={10} loop>
            <Carousel.Item>
                <img width="100%" src="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg" alt="image1"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://marketplace.canva.com/EAFSLI7n6x4/1/0/1131w/canva-minimalist-white-and-grey-professional-resume-KjN0Z-p3Mo8.jpg" alt="image2" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://marketplace.canva.com/EAE4mb3_yUs/1/0/1131w/canva-elegant-minimalist-cv-resume-TP46smzU0OM.jpg" alt="image3" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://marketplace.canva.com/EAFbaTTSkNg/1/0/1131w/canva-white-simple-student-cv-resume-OKSUt-1SkmU.jpg" alt="image4" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://marketplace.canva.com/EAFUffvtSrU/1/0/1131w/canva-blue-minimalist-information-technology-project-manager-professional-resume-UmX1OCqvLnQ.jpg" alt="image5"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://static-cse.canva.com/blob/558072/BlueSimpleAcademicResume.jpg" alt="image6"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://marketplace.canva.com/EAFfKk6Kmck/1/0/1131w/canva-gray-and-white-simple-clean-resume-C_dNdg7kOQg.jpg" alt="image7" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://marketplace.canva.com/EAE6aBY7tN4/1/0/1131w/canva-brown-minimal-and-modern-professional-resume-template-prUmN9qWoGQ.jpg" alt="image8"/>
            </Carousel.Item>
            </Carousel>
      </div>
      <div className="RESUME_DEMO">
            <h2 style={{color:'darkblue',paddingTop:'30px',textAlign:'center'}}>How to Build Your Resume in 3 Easy Steps</h2>
            <div className="grid">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/fc015e33-1f60-4437-8238-f0f8d7cd85a9/header_resumes2.jpg" style={{height:"330"}} />
                                <Card.Body>
                                    <Card.Text>
                                    Select an ATS-friendly professionally designed resume template.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://st2.depositphotos.com/5266903/8141/v/450/depositphotos_81415724-stock-illustration-examination-flat-cyan-and-blue.jpg" style={{height:"230px"}} />
                                <Card.Body>
                                    <Card.Text>
                                        Click to add targeted content written by certified professional resume writers.
                                    </Card.Text>
                                    <Button variant="primary" href="/login" style={{justifyContent:"center",marginTop:"20px",alignItems:"center"}}>Create Resume</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrVzL0lGhlbUlAIbkkzZFnLfJB4pMw2CNHg&s" style={{height:"300px"}} />
                                <Card.Body>
                                    <Card.Text>
                                    Download your resume in the file format you need and send!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>   
                    </Row>
                </Container>   
            </div>
        </div>
        <div>
          <Footer />
        </div>
    </>
  )
}


export default Ui

