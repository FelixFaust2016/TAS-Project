import React, {useEffect} from "react";
import { ImportContacts, FlightTakeoff, Today, VerifiedUser, HowToReg, Dvr, Star, Stars, Payment } from '@material-ui/icons';
import AOS from 'aos';

const Tablet = (props) => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div className='tablet' style={{}} data-aos="flip-left" >
            <div className='icon-div'>
                {props.children}
            </div>
            <div className='header-div'>
                <h2>{props.head}</h2>
            </div>
            <div className='text-div'>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

const Tablets = (props) => {


    return (

        <div className='tablets' >
            <h1>Quick Services</h1>
            <div className='first-row' >
                <Tablet
                    head={'Open Gorvernment'}
                    text={'See government publications, announcements, performance reports, whistle-blowing'}
                >
                    <ImportContacts style={{ fontSize: '50px' }} />
                </Tablet>
                <Tablet
                    head={'Nigerian E-Pasport'}
                    text={'This is our flagship eGovernment deliverable. Ever since the official launch of this important travel document, it has provided security, reliability and significantly improve our revenue generation efforts'}
                >
                    <Today style={{ fontSize: '50px' }} />
                </Tablet>
                <Tablet
                    head={'E-VISA'}
                    text={'If you are processing your Visa outside of Nigeria, your payment will be in US Dollars. You will be re-directed to an approved payment platform to complete your application and make your payment in US Dollars'}
                >
                    <FlightTakeoff style={{ fontSize: '50px' }} />
                </Tablet>
                <Tablet
                    head={'Diaspora NIN Enrollment'}
                    text={'Through our sister organization, we have partnered with NIMC to provide NIN enrolment for Nigerians in the diaspora.'}
                >
                    <HowToReg style={{ fontSize: '50px' }} />
                </Tablet>
                <Tablet
                    head={'NIN Verification'}
                    text={'Verify NIN for individuals and corporate organizations'}
                >
                    <VerifiedUser style={{ fontSize: '50px' }} />
                </Tablet>

            </div>
            <div className='second-row first-row'>
                <Tablet
                    head={'Digital Content Integration'}
                    text={'See government publications, announcements,performance reports, whistle-blowing'}
                >
                    <Dvr style={{ fontSize: '50px' }} />
                </Tablet>
                <Tablet
                    head={'Payment System'}
                    text={'This is our flagship eGovernment deliverable. Ever since the official launch of this important travel document, it has provided security, reliability and significantly improve our revenue generation efforts'}
                >
                    <Payment style={{ fontSize: '50px' }} />
                </Tablet>
                <Tablet
                    head={'Certificate Verification'}
                    text={'Verify your certificate'}
                >
                    <Star style={{ fontSize: '50px' }} />
                </Tablet>
                <Tablet
                    head={'Agency Ranking'}
                    text={"Check MDA's Ranking"}
                >
                    <Stars style={{ fontSize: '50px' }} />
                </Tablet>
            </div>
        </div>

    )
}
export default Tablets;

