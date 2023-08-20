import React from 'react'
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup"
import {motion, spring} from "framer-motion"

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="hero-container paddings innerWidth flexCenter">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <motion.h1
                    initial={{y: "2rem", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition = {
                        {
                            duration: 2,
                            type: spring
                        }
                    }
                    >
                        Discover A Place <br/>
                        You'll Love To Live
                    </motion.h1>
                </div>

                <div className="flexColStart hero-desc">
                    <span>
                        Find a variety of properties that suit you easily.
                    </span>
                    <span >
                        Forget all difficulties in finding a residence for you.
                    </span>
                </div>
                
                <div className="flexCenter search flex">
                    <div> 
                        <HiLocationMarker className="location-icon" color="#28a0cc" size={25} />
                    </div>
                    <div>
                        <input className="search-bar" type="text" />
                    </div>
                    <div>
                        <button className='button'>Search</button>
                    </div>
                </div>

               

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>
                        </span>  
                        <span className='secondaryText'>
                            Premium Products
                        </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span>+</span>
                        </span>
                        
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        
                        <span className='secondaryText'>
                            Award Winnings
                        </span>
                    </div>

                </div>



            </div>
            {/* right side */}
            <div className="hero-right flexCenter">
                <motion.div 
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition = {
                    {
                        duration: 2,
                        type: spring
                    }
                }
                className="image-container">
                    <img src="./hero-house.jpeg" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
