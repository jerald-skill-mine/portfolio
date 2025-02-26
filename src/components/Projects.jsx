import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'An eCommerce website. Build with the MERN stack.',
                link: 'https://github.com/jerald1608/',
            },
            {
                image: websiteImg2,
                description: 'Food eCommerce website like Swiggy, built with Angular & .Net',
                link: 'https://github.com/jerald1608/',
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website. Built with Next.js and MongoDB',
                link: 'https://github.com/jerald1608/',
            },
        ]
    }

    return (
        <section className="flex flex-col px-5 py-20 justify-center bg-indigo-700 text-white" id='projects'>
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="font-bold text-4xl border-b-4 border-indigo-900 mb-5 w-36">Projects</h1>
                    <p>These are some of my best projects. I have built these with React, MERN, and Vanilla. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project) => (
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} alt="" />
                            <div className='absolute project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='bg-indigo-700 px-5 py-2 font-semibold border-2 rounded-md hover:border-white border-indigo-900' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects