import "../assets/Portofolio.scss"
import { useState } from "react";
import Logo from "../images/logo1.png"
import BlurText from "../components/BlurText"
import Antigravity from "../components/Antigravity";
import TypingText from "../components/TypingText";
import { FaInstagram, FaGithub, FaLinkedinIn, FaCode, FaHandshake, FaLightbulb, FaRocket, FaEnvelope } from "react-icons/fa";
import ProjectCard from "../components/Card";
import Dashboard from "../images/magang/Dashboard.jpg"
import Kepala from "../images/magang/Tampilan Kepala.jpg"
import Seksi from "../images/magang/Tampilan Seksi.jpg"
import Login from "../images/magang/Login.jpg"
import Flowchart from "../images/magang/Flowchart.jpg"
import Gambar6 from "../images/skrpsi/Picture6.jpg"
import Gambar5 from "../images/skrpsi/Picture5.jpg"
import Gambar4 from "../images/skrpsi/Picture4.jpg"
import Gambar3 from "../images/skrpsi/Picture3.jpg"
import Gambar2 from "../images/skrpsi/Picture2.jpg"
import Tampilan1 from "../images/ecommerce/Tampilan1.png"
import Tampilan2 from "../images/ecommerce/Tampilan2.png"
import Tampilan3 from "../images/ecommerce/Tampilan3.png"
import Tampilan5 from "../images/ecommerce/Tampilan5.png"
import Flipgame1 from "../images/Flipgame/Flipgame1.png"
import Flipgame2 from "../images/Flipgame/Flipgame2.png"
import Flipgame3 from "../images/Flipgame/Flipgame3.png"
import Admin1 from "../images/Admin/Admin1.png"
import Admin2 from "../images/Admin/Admin2.png"
import Admin3 from "../images/Admin/Admin3.png"
import Admin4 from "../images/Admin/Admin4.png"
import Admin5 from "../images/Admin/Admin5.png"
const projects = [
    {
        id: 1,
        title: "Website Monitoring Laporan",
        images: [
            Dashboard,
            Kepala,
            Seksi,
            Login,
            Flowchart
        ],
        description: "Web ini bernama E-Sharing yang bertujuan untuk Memudahkan Dalam Pengelolaan Laporan di lingkungan kantor, Menggunakan PHP framework CodeIgniter dan MySQL sebagai Databasenya",
        tech: ["CodeIgniter", "MySQL", "PHP"],
        featured: true,
        
    },
    {
        id: 2,
        title: "Pendeteksi Kebakaran Dini ",
        images: [
            Gambar6,
            Gambar5,
            Gambar4,
            Gambar3,
            Gambar2
        ],
        description: "Ini merupakan sistem pendeteksi dini kebakaran berbasis Internet Of Things(IoT), dimana terdapat 3 sensor utama yaitu api, asap, dan gas. Menggunakan Blynk sebagai interface dan pengirim notifikasi ",
        tech: ["ESP32", "Blynk", "IoT"],
        featured: true,
    },
    {
        id: 3,
        title: "Ecommerce",
        images: [
            Tampilan1,
            Tampilan2,
            Tampilan3,
            Tampilan5,
            
        ],
        description: "Membangun aplikasi e-commerce sederhana menggunakan React JS,daftar produk dari API. Fetch API untuk komunikasi data, useState dan useEffect untuk pengelolaan state dan side effect, Context API dan useContext sebagai solusi Global State Management",
        repository: "https://github.com/aldonapu/Project-Eccommerce",
        demo: "https://aldonapu.github.io/Project-Eccommerce/",
        tech: ["React.js", "SASS"],
        featured: true,
    },
    {
        id: 4,
        title: "FlipGame",
        images: [
            Flipgame1,
            Flipgame2,
            Flipgame3,
            
        ],
        description: "Flip Game merupakan permainan mencocokkan kartu yang dikembangkan menggunakan React JS, useState, dan useEffect. ",
        repository: "https://github.com/aldonapu/FlipGame",
        demo: "https://aldonapu.github.io/FlipGame/",
        tech: ["React.js", "SASS"],
        featured: true,
    },
    {
        id: 5,
        title: "Dashboard Admin",
        images: [
            Admin1,
            Admin2,
            Admin3,
            Admin4,
            Admin5
        ],
        description: "Dashboard Admin merupakan mini project yang dikembangkan menggunakan React JS, SASS, dan Firebase. Dashboard ini memiliki fitur CRUD untuk mengelola data pengguna, produk, dan pesanan.",
        repository: "https://github.com/aldonapu/Dashboard",
        demo: "https://aldonapu.github.io/Dashboard/",
        tech: ["React.js", "SASS", "Firebase"],
        featured: true,
    },
    

];


const Portofolio = ()=>{
    const [activeProject, setActiveProject] = useState(0);
    const totalProjects = projects.length;

    const wrapDistance = (index) => {
        const diff = index - activeProject;
        if (diff < -totalProjects / 2) return diff + totalProjects;
        if (diff > totalProjects / 2) return diff - totalProjects;
        return diff;
    };

    // const prevProject = () => {
    //     setActiveProject((current) => (current - 1 + totalProjects) % totalProjects);
    // };

    const nextProject = () => {
        setActiveProject((current) => (current + 1) % totalProjects);
    };

    return(
        <>
        <div className="ContainerUtama">
        <section id="hero" className="BackgroundEffect">
            <Antigravity
                count={500}
                magnetRadius={6}
                ringRadius={7}
                waveSpeed={0.4}
                waveAmplitude={1}
                particleSize={1.5}
                lerpSpeed={0.05}
                color="#5227FF"
                autoAnimate
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={3}
                particleShape="capsule"
                fieldStrength={10}
            />
        </section>
        <div className="Header">
            <div className="Logo">
            <img className="" src={Logo} alt="Logo" />
            </div>
            <div className="Menu-Header">
                <a href="#hero">HOME</a>
                <a href="#about-me">ABOUT ME</a>
                <a href="#projects">PORTOFOLIO</a>
                
            </div>
        </div>
        <div className="Hero">  
        <BlurText
        text="Hello, I'm Aldo"
        delay={200}
        animateBy="words"
        direction="top"
        className="Judul1"
        />
        
        <span className="Judul2">Front End Developer</span>
        </div>
        <div className="Menu-Section">
            <span className="jdl">Crafting modern, responsive, and user-friendly websites with passion and precison</span>
            <div className="Button-Area">
                <button className="button1" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                    My Work
                </button>
                <button className="button1" onClick={() => window.location.href = "mailto:aldonapu10@gmail.com"}>Hire Me</button>
            </div>
        </div>
        

    <div className="Social-media">
            <button
            className="social-btn email"
            onClick={() => window.location.href = "mailto:aldonapu10@gmail.com"}
            >
            <FaEnvelope className="icon" />
            <span>Email</span>
        </button>
            <button className="social-btn instagram" onClick={() => window.open("https://www.instagram.com/aldonapu/", "_blank")}>
                <FaInstagram className="icon" />
                <span>Instagram</span>
            </button>
            <button className="social-btn github" onClick={() => window.open("https://github.com/aldonapu", "_blank")}>
                <FaGithub className="icon" />
                <span>Github</span>
            </button>
        <button className="social-btn linkedin" onClick={() => window.open("https://www.linkedin.com/in/aldo-napu/", "_blank")}>
            <FaLinkedinIn className="icon" />
            <span>LinkedIn</span>   
        </button>
    </div>
    </div>
    <section id="about-me" className="about-me">
        <div className="about-me-header">
            <h2 className="about-title">About Me</h2>
            <div className="about-divider"></div>
        </div>
        
        <div className="about-cards-container">
            <div className="about-card">
                <div className="card-icon">
                    <FaCode />
                </div>
                <h3>Web Developer & Informatics Engineer</h3>
                <p>Skilled in React.js, JavaScript, HTML, SCSS. Passionate about crafting dynamic and responsive web experiences that engage users and drive results.</p>
            </div>
            
            <div className="about-card">
                <div className="card-icon">
                    <FaHandshake />
                </div>
                <h3>Contract & Assets Management Experience</h3>
                <p>Over 3 years of experience in managing contracts, assets, and business operations. Proven ability to optimize processes and deliver measurable outcomes.</p>
            </div>
            
            <div className="about-card">
                <div className="card-icon">
                    <FaLightbulb />
                </div>
                <h3>Problem Solver & Team Player</h3>
                <p>Strong skills in communication, organization, and solving problems in collaborative settings. Committed to creating innovative solutions through teamwork.</p>
            </div>
            
            <div className="about-card">
                <div className="card-icon">
                    <FaRocket />
                </div>
                <h3>Lifelong Learner</h3>
                <p>Always eager to learn new technologies and deliver high quality solutions. Constantly evolving my skills to stay ahead in the ever-changing tech landscape.</p>
            </div>
        </div>
        
        <div className="about-footer">
            <p className="about-tagline">Driven by a passion for technology and continuous improvement.</p>
        </div>
    </section>
    <section id="projects" className="projects-container">
        <TypingText
        text="PROJECTS"
        speed={0.1}
        delay={0}
        color="#ffffff"
        cursorColor="#8b5cf6"
        cursor={true}
        className="project-title"
        showCursor={true}
        loop={false}
        cursorCharacter='_'
        cursorBlinkDuration={0.5}
        startOnVisible={true}
        />
        
        <div className="gallery-frame">
            <div className="gallery-content">
            {/* <button className="nav-btn prev" onClick={prevProject} aria-label="Previous project">←</button> */}
            <div className="gallery-slider">
                {projects.map((project, index) => {
                    const offset = wrapDistance(index);
                    const visible = Math.abs(offset) <= 2;

                    return (
                        <div
                            key={project.id}
                            className={`gallery-slide ${visible ? "visible" : "hidden"}`}
                            data-offset={offset}
                            style={{
                                '--offset': offset,
                                opacity: visible ? 1 : 0,
                                pointerEvents: visible ? "auto" : "none",
                            }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    );
                })}
            </div>
            <button className="nav-btn next" onClick={nextProject} aria-label="Next project">→</button>
        </div>
        </div>
        <div className="pagination-bar">
            <span className="page-info">Halaman {activeProject + 1} / {totalProjects}</span>
            <div className="page-dots">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`page-dot ${index === activeProject ? "active" : ""}`}
                        onClick={() => setActiveProject(index)}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    </section>
    </>
    )
}

export default Portofolio