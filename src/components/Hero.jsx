import { FaLinkedin, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import HeroImg from '../assets/hero.png';

function Hero() {
    const config = {
        subtitle: "I'm a full-stack developer.",
        social : {
            twitter : 'https://twitter.com/JeraldJesudasan/',
            linkedin : 'https://www.linkedin.com/in/jerald-jesudasan/',
            instagram : 'https://www.instagram.com/jerald__16/',
        }
    }

    return (
        <section className='flex flex-col md:flex-row justify-center px-5 py-32 bg-indigo-700'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>Hi, <br /> I'm <span className='text-amber-400'>Jerald</span> Jesudasan. <p className='text-2xl'>{config.subtitle}</p></h1>
                <div className="text-white flex py-10">
                    <a target="_blank" href={config.social.twitter} className="pr-5 hover:text-black cursor-pointer"><FaSquareXTwitter size={40} /></a>
                    <a target="_blank" href={config.social.linkedin} className="pr-5 hover:text-blue-500 cursor-pointer"><FaLinkedin size={40} /></a>
                    <a target="_blank" href={config.social.instagram} className="pr-5 hover:text-pink-500 cursor-pointer"><FaSquareInstagram size={40} /></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt="" />
        </section>
    )
}

export default Hero