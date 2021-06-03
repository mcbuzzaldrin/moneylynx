import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default class Contact extends React.Component{

    render() {
        return (
            <div className='Contact-Us'>
                <h3>Moneylynx’s vision is to become a platform and tool that educates and connects a global community of creatives with technologies surrounding digital arts, cryptocurrency and Non-Fungible tokens.</h3>
                <br></br>
                <h3>For access to enter the crypto space, Moneylynx provides the invaluable service of onboarding artists to Non-Fungible Tokens and showcasing their talent to a wider digital audience.</h3>
                <br></br>
                <a href='https://www.instagram.com/moneylynx/' style={{margin: 'auto'}}>Instagram: @moneylynx <SocialIcon url='https://www.instagram.com/moneylynx/' /></a>
            </div>
                );
    }
}