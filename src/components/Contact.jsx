
function Contact() {
    const config = {
        email: 'jeraldjesudasan@gmail.com',
    }

    return (
        <section className='flex flex-col px-5 py-32 bg-indigo-700' id="contact">
            <div className='flex flex-col items-center text-white'>
                <h1 className='font-bold text-4xl border-b-4 border-indigo-900 mb-5 w-36'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail, please contact me.</p>
                <p className="py-2">
                    <span className="font-semibold">Email : </span>
                    <a href={`mailto:${config.email}`}>{config.email}</a>
                </p>
            </div>
        </section>
    )
}

export default Contact