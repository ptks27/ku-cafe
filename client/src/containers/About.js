import React, {Component, component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <div className=' container con-md-5'>
            <h3>สวัสดีครับ</h3>
            <p className='titel text-justify mt-4 mb-4'>Cafe</p>
            <h4 className='text-success'>จาก KU Cafe</h4>
            </div>
            <Footer company = "KUKPS" email = "Bptk@ku.th" />
        </div>
    )

    
}
export default About;