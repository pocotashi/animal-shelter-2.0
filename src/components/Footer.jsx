import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter,FaRegCopyright} from 'react-icons/all'



function Footer(){
    const today = new Date();
    const date = today.getFullYear();
    return (
        <div className="footer">
            
            <div>

            <FaRegCopyright/> <span><h6>{date} Kipu's Rescue</h6> </span>
            200 Middle Street
            <br/>
            Astoria NY 11103 
            <br/>
            info@kipurescue.org

            <br/>
            kipu's Rescue is a 501(c)(3) nonprofit organization (EIN: 11-6101487).
            </div>
            <FaFacebook/>
            <FaInstagram />
            <FaTwitter />
            <form>
            <input type="text" placeholder="email"/>
            <button>Sign Up for Newsletter</button>
        </form>

        </div>
    )
}

export default Footer;
