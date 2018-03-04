import React from 'react';

import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

const Layout = props => ({
    render() {
      return (
        <div className="layout">
          <Header />
            {props.children}
          <Footer />
        </div>
      );
    }
  });


export default Layout;