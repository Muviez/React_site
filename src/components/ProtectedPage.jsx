import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router-dom';

function ProtectedPage() {
    return (
        <div className='content'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='content_button'>
                        <h1>PROTECTED PAGE</h1>
                    </div>
                    <div className='content_button'>
                        <h1>PROTECTED PAGE</h1>
                    </div>
                    <div className='content_button'>
                        <h1>PROTECTED PAGE</h1>
                    </div>
                    <div className='content_button'>
                        <h1>PROTECTED PAGE</h1>
                    </div>
                    <div className='content_button'>
                        <h1>PROTECTED PAGE</h1>
                    </div>
                    <div className='content_button'>
                        <h1>PROTECTED PAGE</h1>
                    </div>
                    <div className='content_button'>
                        <h1>PROTECTED PAGE</h1>
                    </div>
                    <div className='content_button'>
                        <h1>PROTECTED PAGE</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProtectedPage;