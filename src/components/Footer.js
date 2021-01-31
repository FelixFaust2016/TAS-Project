import React from "react";
import { Facebook, Twitter, Instagram, YouTube, WhatsApp, Copyright } from '@material-ui/icons';

import Logo from "../components/Logo"

const Tablets = (props) => {


    return (
        <div className='footer'>
            <div className='icon-div'>
                <Facebook className='icon'/>
                <Twitter className='icon'/>
                <Instagram className='icon'/>
                <YouTube className='icon'/>
                <WhatsApp className='icon'/>
            </div>
            <div className='copyright-div'>
                <Copyright />
                <p>2020 Copyright: negst</p>
            </div>
        </div>


    )
}
export default Tablets;

