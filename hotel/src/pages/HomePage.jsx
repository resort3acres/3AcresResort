import React from 'react'
import Home from './Home'
import About from './About'
import Events from './Events'
import Rooms from './Rooms'
import Aminities from './Aminities'
import Interior from './Interior'
import EnquireForm from './EnquireForm'
import contactImg from '/contact.jpg'
import ReviewPage from './ReviewPage'


const HomePage = () => {
    return (
        <div>
            <section id='home'>
                <Home />
            </section>
            <section id='about'>
                <About />
            </section>
            <section id='rooms'>
                <Rooms />
            </section>
            <section id='events'>
                {/* <Events /> */}
            </section>
            <section id='aminities'>
                <Aminities />
            </section>
            <section id='interior'>
                <Interior />
            </section>
            {/* <section
                id='enquire'
                className="relative min-h-screen"
                style={{
                    backgroundImage: `url(${contactImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="relative z-10">
                    <EnquireForm />
                </div>
            </section> */}

            <section>
                <ReviewPage/>
            </section>
        </div>
    )
}

export default HomePage