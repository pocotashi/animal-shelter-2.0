import React from 'react';
import Socials from './FooterSocial';



function Footer(){
    return (
        <div className="footer">
            <div className="textwidget">
                <ul>
                    <li><a style={{color:"white"}} href="/category/journal/">Sarama's Journal</a></li>
                    <li><a style={{color:"white"}} href="/events/">Upcoming Events</a></li>
                    <li><a style={{color:"white"}} href="/category/news/">News</a></li>
                    <li><a style={{color:"white"}} href="/media-mention/">Media Mention</a></li>
                    <li><a style={{color:"white"}} href="/contact-us/">Contact Us</a></li>
                    <li><a style={{color:"white"}} href="/faq/">Frequently Asked Questions</a></li>
                </ul>
            </div>
            <div className="textwidget">
                <ul>
                    <li><a style={{color:"white"}} href="/foster-application/">Foster Application</a></li>
                    <li><a style={{color:"white"}} href="/adoption-application/">Adoption Application</a></li>
                    <li><a style={{color:"white"}} href="/volunteer-application/">Volunteer Application</a></li>
                    <li><a style={{color:"white"}} href="/donate/">Ways to Donate</a></li>
                    <li><a style={{color:"white"}} href="/volunteer/">Available Volunteer Positions</a></li>
                </ul>

		    </div>
            <div>
                <Socials/>
            </div>

        </div>
    )
}

export default Footer;
