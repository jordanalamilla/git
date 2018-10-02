import React, { Component } from 'react';
import Loader from '../Loader';
import Profile from '../Profile';
import ProjectsContainer from '../ProjectsContainer';
import Footer from '../Footer';

class ProfileContainer extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            user : null
        };
    }

    componentDidMount() {

        fetch( 'https://api.github.com/users/jordanalamilla' )
            .then( res => res.json() )
            .then( user => this.setState({ user }) );
    }

    render() {

        console.log( this.state.user );
        let user = this.state.user;

        switch( user ) {
            case null:
                return (
                    <div className="App">
                        <Loader />
                    </div>
                )

            default:
                return (
                    <div className="App">
                        <Profile user={ user } />
                        <ProjectsContainer />
                        <Footer />
                    </div>
                );
        }
    }
}

export default ProfileContainer;