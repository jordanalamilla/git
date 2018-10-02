import React from 'react';
import ComputerGif from '../../assets/computer.gif';
import './index.css';
import Hireable from '../Hireable';

const Profile = props => {

    let user = props.user;

    return (
        <div id="profile-container">

            <div id="profile-image">
                <img src={ ComputerGif } alt={ user.name } />
            </div>

            <div id="profile-details">
                <h1>{ props.user.name } on Github</h1>

                <div id="profile-bio">{ user.bio }</div>

                {/* <a className="blue button" target="_blank" href={ user.html_url }>{ user.login }</a> */}

                <Hireable hireable={ user.hireable } company={ user.company } />

            </div>

        </div>
    );
}

export default Profile;