import ResumeImg from '../assets/resume.jpg';

function Resume() {
    const config = {
        link : 'https://drive.google.com/file/d/1vIH4gKY0UjPNZPX0Ghi545T7ZTvNo4Gu/view?usp=drive_link',
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-5 bg-indigo-900' id='resume'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-[300px]' src={ResumeImg} alt="" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='font-bold text-4xl border-b-4 border-indigo-700 mb-5 w-36'>Resume</h1>
                    <p className='pb-5'>You can view my resume. <a className='bg-indigo-700 px-5 py-2 font-semibold border-2 rounded-md hover:border-white border-indigo-900' target='_blank' href={config.link}>Download</a></p>
                </div>
            </div>
        </section>
    )
}

export default Resume