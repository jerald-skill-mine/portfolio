import AboutImg from '../assets/about.png';

function About() {
    const config = {
        line1 : "Hi, my name is Jerald Jesudasan. I am a full-stack developer. I build beautiful websites with React and Tailwind CSS.",
        line2 : "I am proficient in frontend skills like React.js, Redux, Tailwind CSS, Sass, and many more.",
        line3 : "In the backend, I know Node.js, Express.js, MongoDB, and Mongoose.",
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-5 bg-indigo-900' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt="" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='font-bold text-4xl border-b-4 border-indigo-700 mb-5 w-44'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                </div>
            </div>
        </section>
    )
}

export default About