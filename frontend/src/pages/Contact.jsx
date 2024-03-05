
import '../styles/landing.css'
import Footer from './footer'

export default function Contact() {

    return (
        <>
            <section className="sub-header">
                <nav>
                    <a href="index.html"><img src="https://engineering.nmims.edu/images/2a4ca0eeb31e71b312f1df1b25865a8a.png" /></a>
                    <div className="nav-links">
                        <ul>
                            <li><a href="/about">ABOUT</a></li>
                            <li><a href="/#ch">SCHOOLS</a></li>
                            <li><a href="/register">REGISTER</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>

                </nav>
                <h1>CONTACT US</h1>
            </section>

            <section className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9860286024!2d73.07563301469735!3d19.064351887094595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1fa2d330e2b%3A0xfb8df77eb24acba7!2sNMIMS%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1674799033912!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </section>

            <section className="contact-us">
                <div>
                    <div className="contact-col">
                        <div>
                            <i className="fa fa-home fa-2x"></i>
                            <span>
                                <h3>Plot No.2, near Pethpada Metro Station, Sector 33</h3>
                                <p>Kharghar, Navi Mumbai, Maharashtra</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-phone fa-2x"></i>
                            <span>
                                <h3>022 3547 6550</h3>
                                <p>Monday to Saturday - 9.00am to 4.00pm</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-envelope-o fa-2x"></i>
                            <span>
                                <h3>info@nmims.edu</h3>
                                <p>Email us your query</p>
                            </span>
                        </div>
                        <div className="horizontal_line">
                        </div>
                        <h4>Write to us</h4>
                    </div>
                    <div className="contact-col">
                        <form method="POST" className='contact-form'>
                            <input type="text" name="name" placeholder="Enter Your name" required />
                            <input type="email" name="email" placeholder="Enter email address" required />
                            <input type="text" name="subject" placeholder="Enter Your Subject" required />
                            <textarea rows="8" name="message" placeholder="Message" required style={{resize: "none"}}></textarea>
                            <button type="submit" className="submit-btn red-btn">Send Message</button>
                            <input type="hidden" name="_subject" value="New query!" />
                            <input type="hidden" name="_template" value="table" />
                        </form>
                    </div>
                </div>
            </section>


            <Footer />
        </>

    )
}
