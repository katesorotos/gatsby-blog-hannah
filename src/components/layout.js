import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

const layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default layout; 