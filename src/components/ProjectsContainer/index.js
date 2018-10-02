import React, { Component } from 'react';
import Project from '../Project';
import './index.css';

class ProjectsContainer extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            projects : null
        };
    }

    componentDidMount() {

        fetch( 'https://api.github.com/users/jordanalamilla/repos' )
            .then( res => res.json() )
            .then( projects => this.setState({ projects }) );
    }

    render() {

        console.log( this.state.projects );
        let projects = this.state.projects;

        return (
            <div id="projects-container">

                <h2>Github Repositories</h2>

                <div id="projects">
                {
                    // IF PROJECTS ARE THERE, RETURN THEM
                    projects &&
                    projects.map( project => {
                        return <Project key={project.name} project={ project } />
                    })
                }
                </div>

            </div>
        )
    }

}

export default ProjectsContainer;