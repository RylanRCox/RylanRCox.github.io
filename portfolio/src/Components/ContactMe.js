const ContactMe = () => {
    return (
        <div id="ContactMe" className="w-full bg-violet-900 flex flex-col justify-center items-center text-center flex-grow py-10">
            <div className="border-b-4 border-dashed mb-5">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white">Contact Me</h1>
            </div>
            <div className="w-full md:w-5/12 flex justify-center bg-slate-100 rounded-xl drop-shadow-md p-5">
                <form className="w-full flex flex-col space-y-4" action="https://formspree.io/f/mgegoooj" method="post">
                    <div className="flex flex-col text-start">
                        <label className="font-semibold" htmlFor="name">Name:</label>
                        <input className="h-11 bg-slate-300 rounded-s p-2" type="text" id="name" name="name" placeholder="Enter Your Name" />
                    </div>
                    <div className="flex flex-col text-start">
                        <label className="font-semibold" htmlFor="email">Email:</label>
                        <input className="h-11 bg-slate-300 rounded-s p-2" type="text" id="email" name="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="flex flex-col text-start">
                        <label className="font-semibold" htmlFor="message">Message:</label>
                        <textarea className="h-40 md:h-80 bg-slate-300 rounded-s p-2" id="message" name="message" placeholder="Enter Your Message" />
                    </div>
                    <div className="flex justify-end">
                        <input className="w-48 h-12 md:h-16 bg-violet-500 text-lg md:text-xl text-white font-bold rounded-2xl p-2" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
