import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className=" p-10 bg-slate-800 text-white">
                <div>

                    <div className="grid grid-flow-col justify-center gap-4">
                        <a> <FaFacebook /></a>
                        <a><FaInstagram /></a>
                        <a> <FaTwitter /> </a>
                        <a> <FaGooglePlus /> </a>
                        <a> <FaYoutube /> </a>
                    </div>
                </div>


                <div className="footer mt-4 justify-between">
                    <nav className="uppercase">

                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Plolicy</a>
                    </nav>
                    <nav className="uppercase">

                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover text-right">house:2/2 pallabi,mirpur 11.5 <br />dhaka 1216 </a>

                        <a className="link link-hover">mobile number: 0123456789</a>
                    </nav>

                </div>


            </footer>
            <footer className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © 2024 - Design By</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;