import { useState } from "react";
import ElectricBorder from "./Electricblitz";

const ProjectCard = ({ project }) => {
    const [selectedImage, setSelectedImage] = useState(
        project.images[0]
    );

    return (
        <div className="project-card">
            <div className="image-wrap">
                <img
                    src={selectedImage}
                    alt={project.title}
                    className="main-image"
                />
                <div className="card-glow" />
            </div>

            <div className="thumbnails">
                {project.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>

            <div className="card-content">
                <h3>{project.title}</h3>
                {project.tech?.length > 0 && (
                    <div className="project-tags">
                        {project.tech.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                )}
                <p>{project.description}</p>

                <div className="project-buttons">
                    {project.repository && (
                        <a
                            href={project.repository}
                            target="_blank"
                            rel="noreferrer"
                            className="repo-btn"
                        >
                            Repository
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="demo-btn"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;