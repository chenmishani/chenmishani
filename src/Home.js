import React from 'react';
import { useState } from 'react';
import './Home.css';
import myCV from './assets/myCV.pdf';
import myPhoto from './myPhoto.png';
import tools4all from './tools4all.png';
import tools4allMedia from './tools4allMedia.png';
import video from './video.gif';
import warGame from './warGame.png';


const DownloadIcon = () => (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
        <path d="M12 15l4-4h-3V3h-2v8H8l4 4zm-8 2h16v2H4v-2z" fill="white" />
    </svg>
);

const CheckMarkIcon = () => (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
        <path d="M9 16.2l-4.2-4.2L2 14l7 7 14-14-1.8-1.8L9 16.2z" fill="green" />
    </svg>
);

const Home = () => {

    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        setIsDownloaded(true);
        setTimeout(() => setIsDownloaded(false), 2000); // Resets after 2 seconds
    };


    return (
        <div className="home">
            <div className="header-container">
                <div>
                    <h1>Chen Mishani</h1>
                    <h3>Full Stack Developer</h3>
                    <p>
                        Specializing in JavaScript, React, Node.js, and Express. I have a passion for creating modern, responsive, and user-friendly websites and applications. I'm always looking to learn new technologies and improve my skills.
                    </p>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={myPhoto} alt="Chen Mishani"/>
                </div>
            </div>
            <div className="projects-section">
                <h2 style={{width:"350px", margin:"0 auto", marginTop:"100px"}}>Some of my projects</h2>
                <div className="project">
                    <h2>EYES TALK - Jewelry Store</h2>
                    <p>
                        Eyes Talk is a jewelry store website that I developed using React and Node.js. The website is fully responsive and includes a shopping cart and a contact form.
                    </p>
                    <a href="https://eyestalk.co.il">https://eyestalk.co.il</a>
                    <div className='eyesTalkIframe' style={{display:"flex", height:"500px", marginBottom:"120px" }}>
                        <div style={{ width: '30%' }} className='eyesTalkIframeMedia'>
                            <iframe style={{width:'90%', height:'100%'}}
                                src="https://eyestalk.co.il"
                                title="Eyes Talk Website Preview"
                            ></iframe>
                        </div>
                        <div className='eyesTalkIframeWeb'>
                            <iframe style={{width:'100%', height:'100%'}}
                                src="https://eyestalk.co.il"
                                title="Eyes Talk Website Preview"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="project" style={{marginTop:'50px',marginBottom:"100px"}}>
                    <h2>TOOLS 4 ALL</h2>
                    <p>
                        It is a website that offers many tools such as finding IP addresses, converting images, converting documents, scraping images and videos from websites, scraping icons from EXE files, and more. Currently, there is a landing page at the address below, and the full website will be launched soon. The site is built using a combination of HTML, JavaScript, Python, and C#.
                    </p>
                    <a href="https://tools-4all.com">https://tools-4all.com</a>

                        <div style={{marginTop:"50px",display:"flex",justifyContent:"center"}}>
                            <a href="https://tools-4all.com" id='tools4all' >
                        <img src={tools4all} alt="tools4all" />
                        </a>   
                        <a href="https://tools-4all.com" id='tools4allMedia'>
                        <img src={tools4allMedia} alt="tools4all" style={{height:"95%"}} />
                        </a>                                
                          </div>
                </div>

                <div style={{ textAlign: "center", marginBottom: "50px" }}>
                <h2>Thank you for visiting my page!</h2>
                <p>If you would like more details about me, click below to download my CV.</p>
                <a href={myCV} download className="download-cv" onClick={handleDownload}>
                    {isDownloaded ? <CheckMarkIcon /> : <DownloadIcon />}
                </a>
                      </div>
         
            </div>
        </div>
    );
};

export default Home;
