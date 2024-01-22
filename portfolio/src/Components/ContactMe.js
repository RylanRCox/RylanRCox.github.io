const ContactMe = () => {
    return (
        <div id="ContactMe" class="w-full bg-violet-900 h-screen flex flex-col justify-center items-center text-center flex-grow">
            <div class="border-b-4 m-5 border-dashed">
                <h1 class="text-6xl font-extrabold text-white">Contact Me</h1>
            </div>
            <div class = "w-5/12 flex justify-center bg-slate-100 rounded-xl drop-shadow-md p-5">
                <form class = "w-full flex-col space-y-4" action="https://formspree.io/f/mgegoooj" method="post">
                    <div class = "flex flex-col text-start">
                        <label class = "font-semibold" for="name">Name:</label>
                        <input class = "h-11 bg-slate-300 rounded-s p-2" type="text" id="name" name="name" placeholder="Enter Your Name" />
                    </div>
                    <div class = "flex flex-col text-start">
                        <label class = "font-semibold" for="email">Email:</label>
                        <input class = "h-11 bg-slate-300 rounded-s p-2" type="text" id="email" name="email" placeholder="Enter Your Email" />
                    </div>
                    <div class = "flex flex-col text-start">
                        <label class = "font-semibold" for="message">Message:</label>
                        <textarea class = "h-80 bg-slate-300 rounded-s p-2" id="message" name="message" placeholder="Enter Your Message" />
                    </div>
                    <div class = "flex justify-end">
                        <input class = "w-48 h-16  bg-violet-500 text-xl text-white font-bold rounded-2xl p-2" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;