import React from 'react';

import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='container-fluid'>
                <div className='row justify-content-between align-items-center'>
                    <div className='col-md-auto'>
                        <ul className='footer_soc-icon'>
                            <li><a href='#'><i className='fa fa-vk'></i></a></li>
                            <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                            <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                            <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                        </ul>
                    </div>
                    <div className='col-md-auto'>
                        © 2018, Designed by 
                        <a href="#"> Lendlease</a>. Coded by 
                        <a href="#"> BiNodes Team</a>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;