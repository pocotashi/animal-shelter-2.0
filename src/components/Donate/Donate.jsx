import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import BodySection from '../BodySection';

function Donate(){
    return <div>
    <NavBar/>
    <img className="firstImage" alt="donate" src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

    <BodySection
        header={'Donate'}
        message={<div className="adopt-cat-text">
        <section style={{marginTop:"20px"}}>
        <div>
            <input type="radio" id="donation_10" name="donation_box" value="10" onclick={"changeDonationValue(this.value);"}/>
            <label for="donation_10" className="donation_label"><h2>$10</h2>
            </label>
        </div>
        <div>
            <input type="radio" id="donation_25" name="donation_box" value="25" onclick={"changeDonationValue(this.value);"}/>
            <label for="donation_25" className="donation_label"><h2>$25</h2>  </label>
        </div>
        <div>
            <input type="radio" id="donation_50" name="donation_box" value="50" onclick={"changeDonationValue(this.value);"}/>
            <label for="donation_50" className="donation_label"><h2>$50</h2></label>
        </div>
        <div>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">

    {/* <!-- Identify your business so that you can collect the payments. --> */}
            <input type="hidden" name="business" value="SaramaRescue@gmail.com"/>

    {/* <!-- Specify a Donate button. --> */}
            <input type="hidden" name="cmd" value="_donations"/>

    {/* <!-- Specify details about the contribution --> */}
            <input type="hidden" name="item_name" value="Sarama Animal Rescue Donations"/>
            <input type="hidden" id="donation_PaypalAmount" name="amount" value=""/>
            <input type="hidden" name="currency_code" value="USD"/>

    {/* <!-- Display the payment button. --> */}
    {/* <input type="submit" id="donation_submit"/> */}
            <label for="donation_submit" className="submit_label"><h2>DONATE</h2></label>
    </form>
    </div>
    </section>
</div>}
    
        para={"Hello"}
    />
    
<Footer/>
    </div> 
}

export default Donate


