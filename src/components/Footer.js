import React, {useState} from 'react';
import imgRules from '../img/image-rules-bonus-opti.svg';
import '../styles/Footer.scss';

function Footer() {
    const [show, setShow] = useState(false);
    return(
        <footer>
            <button className="btn-rules" onClick={() => setShow(!show)}>Rules</button>
            {show && 
                <div className={`modal`} alt="rules">
                    <div className="container-title">
                        <h2>Rules</h2>
                        <button className="cross" onClick={() => setShow(false)}></button>
                    </div>
                    <div className="container-img">
                        <img src={imgRules}  alt="buttons about rules"/>
                    </div>
                </div>
            }
            
        </footer>
    )
}

export default Footer;