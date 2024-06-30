import React from 'react';
import './Home.css';
import myPhoto from './myPhoto.png';
import video from './video.gif';
import warGame from './warGame.png';

const Home = () => {
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
                <h2 style={{width:"350px", margin:"0 auto", marginTop:"100px"}}>Some of My Projects</h2>
                <div className="project">
                    <h2>Eyes Talk - Jewelry Store</h2>
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
                <div className="project" style={{marginTop:'50px'}}>
                    <h2>Tools For All</h2>
                    <p>
                        It is a website that offers many tools such as finding IP addresses, converting images, converting documents, scraping images and videos from websites, scraping icons from EXE files, and more. Currently, there is a landing page at the address below, and the full website will be launched soon. The site is built using a combination of HTML, JavaScript, Python, and C#.
                    </p>
                    <a href="https://tools-4all.com">https://tools-4all.com</a>
                    <div>
                        <img src={video} alt="Preview GIF" />
                    </div>
                </div>
                <div className="project">
                    <h2>War Game</h2>
                    <p>
                        War Game is a simple card game that I developed using React. The game is played against the computer, and the goal is to win all the cards.
                    </p>
                    <div>
                        <div className='warGameGif'>
                            <iframe className='warGame'
                                style={{ height: '640px', width: '100%'}}
                                src="https://chenmishani.github.io/war-game/"
                                title="War Game Preview"
                            ></iframe>
                        </div>
                        <div className='warGamePhoto'>
                            <img src={warGame} alt="Preview GIF" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
