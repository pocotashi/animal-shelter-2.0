import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Socials(){
    return (
        <div>
        <div className='socialIcons'>
            <FontAwesomeIcon icon={faCoffee}  />
            <FontAwesomeIcon icon={faCoffee}   />
            <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div>
        <form>
            <input type="text" placeholder="email"/>
            <button>Sign Up for Newsletter</button>
        </form>
        </div>
        </div>
    )
}

export default Socials;
