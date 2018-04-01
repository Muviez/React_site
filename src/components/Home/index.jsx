import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router-dom';

function Home() {
    return (
        
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className="content_button">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-auto col-lg-12 col-md-auto col-sm-auto col-auto">
                                    <Link to='/one-time-order' className='oneOrder btn btn-primary'>Единоразовый заказ</Link>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-5 col-sm-auto col-auto">
                                    <Link to='/register' className='reg btn btn-primary'>Регистрация</Link>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-5 col-sm-auto col-auto">
                                    <Link to='/login' className='btn btn-primary'>Войти</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Home;