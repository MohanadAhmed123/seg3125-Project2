import logo from './logo.svg';
import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Chart } from "react-google-charts";
import Carousel from 'react-bootstrap/Carousel';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from "react-i18next";

export const data = [
  ["Task", "Hours per Day"],
  ['Antarctica', 0],
  ['Africa', 950],
  ['Asia', 3000],
  ['Australia', 800],
  ['Europe', 2500],
  ['North America', 1900],
  ['South America', 2000]
];

export const options = {
  title: "Number of Students from Different Continents",
};



function App() {

  const { t, i18n } = useTranslation();

  const handleLanguage = (e) => { 
    i18n.changeLanguage(e.target.value);
  }

  // useState hooks for "practice and play" section collapses
  const [openQuiz1, setOpenQuiz1] = useState(false);
  const [openQuiz2, setOpenQuiz2] = useState(false);
  const [openQuiz3, setOpenQuiz3] = useState(false);
  
  const [proceedQuiz1, setProceedQuiz1] = useState(false);
  const [proceedQuiz2, setProceedQuiz2] = useState(false);
  const [proceedQuiz3, setProceedQuiz3] = useState(false);

  const [reveal11, setReveal11] = useState(false);
  const [reveal12, setReveal12] = useState(false);
  const [reveal13, setReveal13] = useState(false);
  
  const [reveal21, setReveal21] = useState(false);
  const [reveal22, setReveal22] = useState(false);
  const [reveal23, setReveal23] = useState(false);
  
  const [reveal31, setReveal31] = useState(false);
  const [reveal32, setReveal32] = useState(false);
  const [reveal33, setReveal33] = useState(false);


  // modal vars for enrollment confirmation
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal vars for contact us message confirmation
  const [showMsg, setShowMsg] = useState(false);

  const handleCloseMsg = () => { {
    setShowMsg(false)
    window.location.reload()}};
  const handleShowMsg = () => setShowMsg(true);
  
  return (
    <div className="App">
      {/* <!-- Navigation Bar --> */}
    

    <nav className="navbar fixed-top bg-light navbar-expand-md navbar-light pb-2">
        <div className="container-xxl border-bottom border-2 border-secondary">
          {/*  navbar brand / title  */}
          <a className="navbar-brand" href="#intro">
            <img src= {require('./assets/logo5.jpg')} alt="logo" />
          </a>
          {/* <!-- toggle button for mobile nav --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          {/* <!-- navbar links --> */}
          <div className="collapse navbar-collapse justify-content-center" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#intro">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">Our Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tutors">Our Tutors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#play-and-practice">Play and Practice</a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="#enroll">Enroll in a Course</a>
              </li>
              <li className="nav-item ms-2 d-none d-md-inline">
                <a className="btn btn-primary fw-bold"  href="#enroll" style={{color:"white"}}>Enroll in a Course</a>
              </li>
              
            </ul>
          </div>

          <span className="me-3 py-2 text-dark">
                        <select className="form-select form-select-sm language-switcher" onClick={handleLanguage}>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
          </span>
        </div>
      </nav>
      
      
      

    {/* <!-- Home Page section --> */}
    
    <section id="intro">
        <div className="container-lg mt-4">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-6 text-center">
                    
                    <div className="h1 text-primary mb-2">{t('home_title')}</div> 
                    <div className="h4">{t('home_subtitle')}</div>
                    
                </div>
            </div>
        </div>


        <div className="container-fluid">
            <div className="row justify-content-center bg-secondary mx-5 rounded">
                <div className="col-md-5 px-2">
                    <p className="h4 ps-4 pt-4 ms-4 mt-4 text-light text-start">{t('home_splash')}</p>
                    <div className="text-center">  
                        <a href="#enroll" className="btn btn-primary btn-lg mt-3 fw-bold text-light">{t('enroll_now')}</a>
                    </div>
                    
                </div>
                <div className="col-md-5 ps-4 py-1">
                    <img className="img-fluid rounded-pill" src= {require("./assets/testHome.jpg")} alt="Home Page Picture" />
                </div>
            </div>
        </div>


        <div className="container-lg mt-4">
            <div className="row justify-content-center">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header h5 bg-warning text-center text-light">{t('play_and_practice')}</div>
                        <div className="card-body">
                          <p className="card-text px-3 mb-2 text-start">{t('play_and_practice_text')}</p>
                          
                          <div className="text-center">  
                            <a href="#play-and-practice" className="btn btn-primary mt-3 fw-bold">{t('learn_more')}</a>
                          </div>
                        </div>
                        
                    </div>
                </div>
                
                <div className="col-3">
                    <div className="card">
                        <div className="card-header h5 bg-success text-center text-light">{t('courses')}</div>
                        <div className="card-body">
                          <p className="card-text px-3 mb-2 text-start">{t('courses_text')} </p>

                            <div className="text-center">  
                                <a href="#courses" className="btn btn-primary mt-3 fw-bold">{t('learn_more')}</a>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
      
    </section>
      

    
    {/* <!-- Our Courses section --> */}

    <section id="courses" className="bg-light">
        <div className="container">
            <div className="row justify-content-evenly">
                <div className="col-7 text-start">
                    <div className="h1 text-primary">Our Courses</div>
                    <p className="lead fw-normal">English Wizard offers a full range of English courses based on your learning needs!</p>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row justify-content-center">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="container mt-4">
                      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="">

                        {/* General English tab */}

                        <Tab eventKey="home" title="General English" className="tabs tab1">
                          <div className="container p-3">
                            <div className="row justify-content-center mx-3">
                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/8 - Dictonary.jpg")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">English Writing Course</div>
                                    <div className="h5 text-primary text-center">30 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">In this course, you will learn and practice how to develop your writing skills. Through a variety of activities, you will learn how to structure a well-organized, coherent and cohesive text adapted to your audience and serving your writing purpose.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$159.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/14 - Whiteboard.jpg")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">English Conversation Course</div>
                                    <div className="h5 text-primary text-center">20 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">Through extensive speaking practice and multiple activities for improving your fluency, coherence, pronunciation, vocabulary and grammatical accuracy, you will be able to communicate efficiently in any context.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$159.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/4 - School Building.jpg")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">English Grammar Course</div>
                                    <div className="h5 text-primary text-center">30 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">In this outstanding learning journey, you will learn  and explore the fundamentals of English grammar and sentence structure. You will play, practice, have fun and learn how to avoid grammatical errors in your speaking and writing.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$159.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>   
                          </div>                       
                        </Tab>

                        {/* Test preperation tab */}

                        <Tab eventKey="profile" title="Test Preperation" className="tabs tab2">
                        <div className="container p-3">
                            <div className="row justify-content-center mx-3">
                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/23 - Library.jpg")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">IELTS Prep Course</div>
                                    <div className="h5 text-primary text-center">30 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">In this comprehensive course, you will learn and practice how to respond to the listening, reading, writing and speaking questions in the IELTS test. You will also learn how to get the highest score in writing and speaking.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$159.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/19 - Exam.jpg")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Duolingo Prep Course</div>
                                    <div className="h5 text-primary text-center">20 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">To help you get perfectly prepared for the Duolingo English test, this self-paced course will provide you with the most effective strategies for getting the highest score in comprehension, literacy, conversation and production.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$159.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/4 - School Building.jpg")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">TOEFL Prep Course</div>
                                    <div className="h5 text-primary text-center">30 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">In this course, you will learn the most effective techniques for responding to the different types of questions in the TOEFL iBT test. You will also learn and practice the tips and tricks for getting the highest score in the TOEFL test.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$159.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>   
                          </div> 
                        </Tab>

                        {/* Business English tab */}

                        <Tab eventKey="contact" title="Business English" className="tabs tab3">
                          <div className="container p-3">
                            <div className="row justify-content-evenly mx-3">
                              <div className="col-4">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/17 - Stationery.jpg")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Business Writing Course</div>
                                    <div className="h5 text-primary text-center">30 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">In this course, you will learn how to enhance your business writing skills, avoid communication barriers and establish credibility. You will be able to write clearly and concisely, motivate your readers to react or respond, and adapt your messages to audience and context.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$159.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col-4">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/7 - Books.jpg")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Public Speaking Course</div>
                                    <div className="h5 text-primary text-center">30 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">This course will help you develop your public speaking skills, improve your self-confidence, and adapt your speaking to your audience. You will learn and practice how to make use of verbal and non-verbal language to communicate your message effectively to your audience.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$159.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>   
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
      </div>
    </section>


    {/* <!-- Our Tutors section --> */}

    <section id="tutors">
        <div className="h1 text-primary mb-0 text-center">Our Tutors</div>

        <div className="container-md">
            <div className="row justify-content-center">
                <div className="col-3">
                    <div className="card my-4 px-4 rounded border-0 bg-secondary" style={{width: 'fluid'}}>
                        <img src={require("./assets/teacher1.jpg")} className="card-img-top rounded-circle mt-4 border border-5 border-light" alt="Dentist Picture"/>
                        <div className="card-body">
                            <div className="text-center my-3">
                                <div className="h4 text-light">Jenny James</div>
                            </div>
                        
                            <div className="row bg-primary rounded">
                                <p className="card-text mx-0 px-3 py-2 text-light text-start">Jenny has been teaching for 15 years. She is also a certified language proficiency examiner. She has helped hundreds of students in different parts of the world.</p>
                            </div>

                            <div className="pb-2 pt-4 text-center text-primary fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                            <div className="h6 text-light text-center">Student Reviews</div>
                          
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card my-4 px-4 rounded border-0 bg-secondary" style={{width: 'fluid'}}>
                        <img src={require("./assets/teacher2.jpg")} className="card-img-top rounded-circle mt-4 border border-5 border-light" alt="Dentist Picture"/>
                        <div className="card-body">
                            <div className="text-center my-3">
                                <div className="h4 text-light">Mary Wilson</div>
                            </div>
                        
                            <div className="row bg-primary rounded">
                                <p className="card-text mx-0 px-3 py-2 text-light text-start">Mary is senior IELTS examiner in Canada. She has over 10 years of experience in teaching general English, Business English and IELTS test preparation courses.</p>
                            </div>

                            <div className="pb-2 pt-4 text-center text-primary fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                            <div className="h6 text-light text-center">Student Reviews</div>
                          
                        </div>
                    </div>
                    
                </div>

                <div className="col-3">
                    <div className="card my-4 px-4 rounded border-0 bg-secondary" style={{width: 'fluid'}}>
                        <img src={require("./assets/teacher3.jpg")} className="card-img-top rounded-circle mt-4 border border-5 border-light" alt="Dentist Picture"/>
                        <div className="card-body">
                            <div className="text-center my-3">
                                <div className="h4 text-light">Jim Scravenger</div>
                            </div>
                        
                            <div className="row bg-primary rounded">
                                <p className="card-text mx-0 px-3 py-2 text-light text-start">Jim has more than 10 years of English teaching experience. He is a certified language proficiency examiner, a university lecturer and teacher trainer in USA.</p>
                            </div>

                            <div className="pb-2 pt-4 text-center text-primary fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                            <div className="h6 text-light text-center">Student Reviews</div>
                          
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>


    {/* <!--Analyze Results section--> */}

    <section id="analyze" className="bg-light">
        <div className="container-lg">
            <div className="row justify-content-center text-center mb-0 pb-0">
                <div className="h1 text-primary mb-4 text-center">Why Choose English Wizard?</div>

                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-person-check-fill text-primary"></i>
                    <div className="h3 text-light">1,300+</div>
                    <div className="h5 text-light pb-3">Active Enrolled Students</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-emoji-smile-fill text-primary"></i>
                    <div className="h3 text-light">6,500+</div>
                    <div className="h5 text-light pb-3">Satisfied Students</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-journal-check text-primary"></i>
                    <div className="h3 text-light">10,800+</div>
                    <div className="h5 text-light pb-3">Course Enrollments</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-check-circle-fill text-primary"></i>
                    <div className="h3 text-light">97%</div>
                    <div className="h5 text-light pb-3">Course Completion Rate</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-globe2 text-primary"></i>
                    <div className="h3 text-light">45+</div>
                    <div className="h5 text-light pb-3">Countries Reached</div>
                </div>
            </div>

            
                <div className="row justify-content-center my-0 py-0">
                    <div className="col-3"></div>
                    <div className="col-6 ps-4 pb-4 mt-4 bg-secondary rounded">
                        <div className="text-center">
                            <div className="h5 text-center text-light mt-4">Our English Learning Services Reached Students Globally!</div>

                            {/* <!--Div that will hold the pie chart--> */}
                            <div id="chart_div" className="my-0 py-0">

                              <Chart
                                chartType="PieChart"
                                data={data}
                                options={options}
                                width={600}
                                height={400}
                              />
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            
        </div>
        
    </section>


    {/* <!--Contact Us section--> */}
    <section id="contact">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-md-5 me-4 pe-2 text-start">
            <div className="h1 text-primary mb-3">{t('FAQ')}</div>

            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{t('FAQ1')}</Accordion.Header>
                <Accordion.Body>
                {t('FAQA1')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{t('FAQ2')}</Accordion.Header>
                <Accordion.Body>
                {t('FAQA2')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{t('FAQ3')}</Accordion.Header>
                <Accordion.Body>
                {t('FAQA3')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>{t('FAQ4')}</Accordion.Header>
                <Accordion.Body>
                {t('FAQA4')}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="col-md-4 ms-1 ps-1 text-start">
            <div className="h1 text-primary mb-3 text-center">{t('contact_us_title')}</div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{t('requestor')}</label>
                <input type="text" className="form-control border border-primary border-3" id="exampleFormControlInput1" placeholder="Full Name"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">{t('phone')}</label>
                <input type="tel" className="form-control border border-primary border-3" id="exampleFormControlInput2" placeholder="e.g. +1-123-456-7890"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">{t('email')}</label>
                <input type="email" className="form-control border border-primary border-3" id="exampleFormControlInput3" placeholder="e.g. name@example.com"/>
            </div>

            <label for="subject" className="form-label">{t('query_label')}</label>
            <select className="form-select border border-primary border-3 mb-3" id="subject">
                <option selected value="appointment">{t('enrollment')}</option>
                <option value="business">{t('business')}</option>
                <option value="other">{t('other')}</option>
              </select>

            <div className="mb-4">
                <label for="exampleFormControlTextarea1" className="form-label">{t('msg')}</label>
                <textarea className="form-control border border-primary border-3" id="exampleFormControlTextarea1" rows="3" placeholder={t('msg_place')}></textarea>
            </div>

            <div className="mb-4 text-center">
                <a type="submit" className="btn btn-primary fw-bold" style={{color: "white"}} href="#contact" 
                onClick={handleShowMsg}>{t('send')}</a>
            </div>
            
          </div>
        </div>
      </div>

          {/* <!-- Message/Request Confirmation Modal --> */}
                
            <Modal show={showMsg} onHide={handleCloseMsg}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="h3 text-center ps-4 text-primary">
                    Request Confirmation
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <p class="lead fs-5 fw-bold">
                      Thank you for contacting us!
                      <br/> We have received your request and will be reaching out to you via email soon (usually within 2 business days).
                    </p>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" className='fw-bold px-5' onClick={handleCloseMsg} style={{color:"white"}}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

    </section>
      

    
    {/* <!-- Play and Practice section --> */}

    <section id="play-and-practice" className="bg-light">
        <div className="h1 text-primary text-center mb-2">Play and Practice</div> 
        <div className="h4 text-center">Enjoy Your English Learning Journey!</div>

        {/* Carousel */}
        <Carousel interval={null}>
          <Carousel.Item>
          <div className="container-fluid my-3">
                    <div className="row justify-content-center bg-secondary mx-5 rounded">
                        <div className="col-md-5 px-2">
                            <p className="h3 ps-5 pt-5 ms-5 mt-5 text-light text-start"><br/> Watch the video and then take the quiz below.</p>

                            <div className="text-center">  
                                <a data-bs-toggle="collapse" className="btn btn-primary btn-lg mt-5 fw-bold" style={{color: "white"}} 
                                onClick={() => {
                                  if (proceedQuiz2) {
                                    setProceedQuiz2(!proceedQuiz2)
                                    setOpenQuiz2(!openQuiz2)
                                  }
                                  if (proceedQuiz3) {
                                    setProceedQuiz3(!proceedQuiz3)
                                    setOpenQuiz3(!openQuiz3)
                                  }
                                  setProceedQuiz1(!proceedQuiz1)
                                  setOpenQuiz1(!openQuiz1)}}>Take Quiz</a>
                            </div>

                            <Collapse in={proceedQuiz1}>
                              <div className="text-center" id="collapseQuiz">  
                                  <a href="#quizSection" className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}>Proceeed to Quiz</a>
                              </div>
                            </Collapse>
                            
                        </div>
                        <div className="col-md-5 py-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7RqdoRAM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="container-fluid my-3">
                    <div className="row justify-content-center bg-secondary mx-5 rounded">
                        <div className="col-md-5 px-2">
                            <p className="h3 ps-5 pt-5 ms-5 mt-5 text-light text-start"><br/> Watch the video and then take the quiz below.</p>

                            <div className="text-center">  
                                <a data-bs-toggle="collapse" className="btn btn-primary btn-lg mt-5 fw-bold" style={{color: "white"}} 
                                onClick={() => {
                                  if (proceedQuiz1) {
                                    setProceedQuiz1(!proceedQuiz1)
                                    setOpenQuiz1(!openQuiz1)
                                  }
                                  if (proceedQuiz3) {
                                    setProceedQuiz3(!proceedQuiz3)
                                    setOpenQuiz3(!openQuiz3)
                                  }
                                  setProceedQuiz2(!proceedQuiz2)
                                  setOpenQuiz2(!openQuiz2)}}>Take Quiz</a>
                            </div>

                            <Collapse in={proceedQuiz2}>
                              <div className="text-center" id="collapseQuiz">  
                                  <a href="#quiz2" className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}>Proceeed to Quiz</a>
                              </div>
                            </Collapse>
                            
                        </div>
                        <div className="col-md-5 py-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/dmJrYbDjxQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="container-fluid my-3">
                    <div className="row justify-content-center bg-secondary mx-5 rounded">
                        <div className="col-md-5 px-2">
                            <p className="h3 ps-5 pt-5 ms-5 mt-5 text-light text-start"><br/> Watch the video and then take the quiz below.</p>

                            <div className="text-center">  
                                <a data-bs-toggle="collapse" className="btn btn-primary btn-lg mt-5 fw-bold" style={{color: "white"}} 
                                onClick={() => {
                                  if (proceedQuiz1) {
                                    setProceedQuiz1(!proceedQuiz1)
                                    setOpenQuiz1(!openQuiz1)
                                  }
                                  if (proceedQuiz2) {
                                    setProceedQuiz2(!proceedQuiz2)
                                    setOpenQuiz2(!openQuiz2)
                                  }
                                  setProceedQuiz3(!proceedQuiz3)
                                  setOpenQuiz3(!openQuiz3)}}>Take Quiz</a>
                            </div>

                            <Collapse in={proceedQuiz3}>
                              <div className="text-center" id="collapseQuiz">  
                                  <a href="#quiz3" className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}>Proceeed to Quiz</a>
                              </div>
                            </Collapse>
                            
                        </div>
                        <div className="col-md-5 py-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/kvZ5P5RRJfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
          </Carousel.Item>
        </Carousel>
        
          {/* <!-- QUIZ --> */}

          <Collapse in={openQuiz1}>
          <div className="container-lg mt-4" id="quizSection" style={{paddingTop: "75px"}}>
            <div className="h2 text-primary text-center mb-2">Take the Quiz</div> 
              <div className="h3 text-center mb-2">Quiz 1</div>
                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 1</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">She was ............. by the hiring committee.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                        interviewed
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                        interview
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label className="form-check-label" for="flexRadioDefault3">
                                        interviewing
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal11(!reveal11)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal11}>
                                  <div className="mt-3" style={{color: "black"}} id="collapseA1">
                                      <div className="card card-body">
                                        Correct Answer: "interviewed"
                                      </div>
                                  </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 2</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">The library ............. renovated last year.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault4"/>
                                        <label className="form-check-label" for="flexRadioDefault4">
                                        were
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault5" />
                                        <label className="form-check-label" for="flexRadioDefault5">
                                        was
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault6"/>
                                        <label className="form-check-label" for="flexRadioDefault6">
                                        being
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal12(!reveal12)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal12}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA2">
                                    <div className="card card-body">
                                      Correct Answer: "was"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 3</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">He was ............. by the police.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault7"/>
                                        <label className="form-check-label" for="flexRadioDefault7">
                                        arrest
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault8" />
                                        <label className="form-check-label" for="flexRadioDefault8">
                                        arrests
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault9"/>
                                        <label className="form-check-label" for="flexRadioDefault9">
                                        arrested
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal13(!reveal13)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal13}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA3">
                                    <div className="card card-body">
                                      Correct Answer: "arrested"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
        </div>
        </Collapse>

        <Collapse in={openQuiz2}>
          <div className="container-lg mt-4" id="quiz2" style={{paddingTop: "75px"}}>
            <div className="h2 text-primary text-center mb-2">Take the Quiz</div> 
              <div className="h3 text-center mb-2">Quiz 2</div>
                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                        <div className="card-header h5 bg-warning text-light">Question 1</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">She ............. to travel to Panama last week.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                        has
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                        had
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label className="form-check-label" for="flexRadioDefault3">
                                        have
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal21(!reveal21)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal21}>
                                  <div className="mt-3" style={{color: "black"}} id="collapseA1">
                                      <div className="card card-body">
                                        Correct Answer: "had"
                                      </div>
                                  </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 2</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">He ............. his son how to ride a bike.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault4"/>
                                        <label className="form-check-label" for="flexRadioDefault4">
                                        learned
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault5" />
                                        <label className="form-check-label" for="flexRadioDefault5">
                                        teach
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault6"/>
                                        <label className="form-check-label" for="flexRadioDefault6">
                                        taught
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal22(!reveal22)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal22}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA2">
                                    <div className="card card-body">
                                      Correct Answer: "taught"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 3</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">Karen ............. the class suddenly this morning.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault7"/>
                                        <label className="form-check-label" for="flexRadioDefault7">
                                        leave
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault8" />
                                        <label className="form-check-label" for="flexRadioDefault8">
                                        leaves
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault9"/>
                                        <label className="form-check-label" for="flexRadioDefault9">
                                        left
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal23(!reveal23)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal23}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA3">
                                    <div className="card card-body">
                                      Correct Answer: "left"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
        </div>
        </Collapse>

        <Collapse in={openQuiz3}>
          <div className="container-lg mt-4" id="quiz3" style={{paddingTop: "75px"}}>
            <div className="h2 text-primary text-center mb-2" id="collapseQuiz">Take the Quiz</div>
              <div className="h3 text-center mb-2">Quiz 3</div>
                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                        <div className="card-header h5 bg-warning text-light">Question 1</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">Egypt is famous ............. its famous temple.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                        at
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                        for
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label className="form-check-label" for="flexRadioDefault3">
                                        about
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal31(!reveal31)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal31}>
                                  <div className="mt-3" style={{color: "black"}} id="collapseA1">
                                      <div className="card card-body">
                                        Correct Answer: "for"
                                      </div>
                                  </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 2</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">He is proud ............. his children.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault4"/>
                                        <label className="form-check-label" for="flexRadioDefault4">
                                        in
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault5" />
                                        <label className="form-check-label" for="flexRadioDefault5">
                                        at
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault6"/>
                                        <label className="form-check-label" for="flexRadioDefault6">
                                        of
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal32(!reveal32)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal32}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA2">
                                    <div className="card card-body">
                                      Correct Answer: "of"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 3</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">Jane is waiting ............. her husband.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault7"/>
                                        <label className="form-check-label" for="flexRadioDefault7">
                                        for
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault8" />
                                        <label className="form-check-label" for="flexRadioDefault8">
                                        of
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault9"/>
                                        <label className="form-check-label" for="flexRadioDefault9">
                                        to
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal33(!reveal33)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal33}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA3">
                                    <div className="card card-body">
                                      Correct Answer: "for"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
        </div>
        </Collapse>
        
    </section>


    {/* <!-- Enroll in a Course section --> */}

    <section id="enroll">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">

                    <div className="h1 text-primary mb-4 text-center">Enroll in a Course</div>

                    <div className="text-start">
                      <label for="service list" className="form-label">Select a Course</label>
                      <select className="form-select border border-primary border-3 mb-3" id="service list">
                          <option selected value="select course">Please select an option...</option>
                          <option value="English Writing Course">English Writing Course</option>
                          <option value="English Conversation Course">English Conversation Course</option>
                          <option value="English Grammar Course">English Grammar Course</option>
                          <option value="IELTS Prep Course">IELTS Prep Course</option>
                          <option value="Duolingo Prep Course">Duolingo Prep Course</option>
                          <option value="TOEFL Prep Course">TOEFL Prep Course</option>
                          <option value="Business Writing Cours">Business Writing Course</option>
                          <option value="Public Speaking Course">Public Speaking Course</option>
                      </select>
                    </div>

                    <div className="h3 text-center mt-4" id="contact-info">Your Contact Information</div>
    
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control border border-primary border-3 mb-3" id="exampleFormControlInput1" placeholder="First Name"/>
                        <input type="text" className="form-control border border-primary border-3" id="exampleFormControlInput1" placeholder="Last Name"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput2" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control border border-primary border-3" id="exampleFormControlInput2" placeholder="e.g. +1-123-456-7890"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput3" className="form-label">Email address</label>
                        <input type="email" className="form-control border border-primary border-3" id="exampleFormControlInput3" placeholder="e.g. name@example.com"/>
                    </div>
            
                    <div className="row justify-content-center my-4 text-center">
                        <div className="col-4">
                            <a type="submit" className="btn btn-outline-danger px-5 ms-2 fw-bold" href="#booking" onClick={() => window.location.reload()}>Cancel</a>
                        </div>
                        <div className="col-6">
                            <a type="submit" className="btn btn-primary fw-bold px-5 ms-2" style={{color: "white"}} onClick={handleShow} role="button">
                                Enroll
                              </a>
                        </div>
                        
                    </div>
                </div>


                {/* <!-- Booking Confirmation section (Modal) --> */}
                
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <div className="h3 text-center ps-4 text-primary">
                        Course Enrollment Confirmation
                      </div>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div class="h4 ms-5">Your Enrollment Details</div>
                      <div class="container mb-1 px-5">
                        <div class="row mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Selected Course:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>Duolingo Prep Course</div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Tutor's Name:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>Mary Wilson</div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Date of Booking:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>Monday, May 30, 2022</div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Duration of Course:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>Access Valid Until September 30th, 2022</div>
                        </div>

                        <p class="lead fs-5 fw-bold mt-5">
                          A confirmation email was sent to you with your course enrollment details. <br/> Thank you for choosing English Wizard!
                        </p>

                    </div>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" className='fw-bold px-5' onClick={handleClose} style={{color:"white"}}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

            </div>
        </div>
        
    </section>

      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
