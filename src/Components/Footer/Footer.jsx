import React from 'react';
import './Footer.css';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
    return (
        <div className="footer">
            
            <div className="f-content">
                <span>vc.anokwuru@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.linkedin.com/in/victor-anokwuru-19091a81/" target="_blank">
                        <Linkedin color='white' size='3rem' />
                    </a>
                    <a href="https://www.facebook.com/anokwuru.victor" target="_blank">
                        <Facebook color='white' size='3rem' />
                    </a>
                    <a href="https://github.com/vicano-code" target="_blank">
                        <Github color='white' size='3rem' />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Footer;