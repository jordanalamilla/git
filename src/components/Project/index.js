import React from 'react';
import './index.css';

const Project = props => {

    let project = props.project;

    return (
        <div className='project'>

            <div className="project-image">
            <a href={project.html_url} target='_blank' rel="noopener noreferrer">
                <img src={ '/images/' + project.name + '.jpg' }
                     alt={ project.name } />
                     </a>
            </div>

            <div className="project-details">
            
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className='button-container'>

                    {
                        (() => {
                            switch ( project.homepage ) {
                                case null:
                                    return <div className="disabled button">Live Site</div>
                                case '':
                                    return <div className="disabled button">Live Site</div>
                                default:
                                    return <a className="blue button" href={project.homepage} target='_blank' rel="noopener noreferrer">Live Site</a>
                            }
                        })()
                    }
                    
                    <div className="project-language">{ project.language }</div>

                </div>
            
            </div>
            
        </div>
    );
}

export default Project;