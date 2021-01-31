import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Tab from '@material-ui/core/Tab';
import { HowToVote, AccountBalance, Group, Gavel, Settings, Help } from '@material-ui/icons';

import Logo from "../components/Logo"

const ContentHolder = (props) => {
    return (
        <div className='content-holder'>
            <div className='img-holder'>
                <img src={props.image} />
            </div>
            <div className='text-holder'>
                {/* <div className='text-box'>
                    fagergegr
                </div> */}
            </div>
        </div>
    )
}


const ServicesHolder = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');
    const [valueside, setValueside] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className='services-holder'>
            {/* <TabContext value={value}> */}
            <div className='center-container'>

                <div className='head-top' >

                    <Paper square className={classes.iconHeader}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                        // className={classes.tab}
                        >
                            <Tab value='1' icon={<HowToVote className='head-icon' />} label="Government" className={classes.tabSingle} />
                            <Tab value='2' icon={<AccountBalance className='head-icon' />} label="Business" />
                            <Tab value='3' icon={<Group className='head-icon' />} label="Citizens" />
                        </Tabs>
                    </Paper>
                    {/* <div className='iconHeader-underline'>
                    </div> */}

                </div>

                <div className='lower-nav'>
                    <div className='lower-nav-holder'>
                        <div className='lower-nav-tab'>
                            <div className='icon-holder'>
                                < button
                                    className={`iconBack ${valueside == 0 && 'select'}`}
                                    onClick={() => { setValueside(0) }}
                                >
                                    <Gavel className='head-icon grow' />
                                    <p>Overview</p>
                                </button>
                            </div>
                            <div className='icon-holder'>
                                <button
                                    className={`iconBack ${valueside == 1 && 'select'}`}
                                    onClick={() => { setValueside(1) }}
                                >
                                    <Settings className='head-icon grow' />
                                    <p>Services</p>
                                </button>
                            </div>
                            <div className='icon-holder'>
                                <button
                                    className={`iconBack ${valueside == 2 && 'select'}`}
                                    onClick={() => { setValueside(2) }}
                                >
                                    <Help className='head-icon grow' />
                                    <p>FAQs</p>
                                </button>
                            </div>
                        </div>

                        <div className='lower-content'>
                            {
                                value === '1'
                                &&
                                <div className='content-holder'>
                                    <ContentHolder image={'assets/team.svg'}/>
                                </div>
                            }
                            {
                                value === '2'
                                &&
                                <div className='content-holder'>
                                    <ContentHolder image={'assets/options.svg'}/>
                                </div>
                            }
                            {
                                value === '3'
                                &&
                                <div className='content-holder'>
                                    <ContentHolder image={'assets/citizen.svg'}/>
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </div>
            {/* </TabContext> */}
        </div>
    )
}
export default ServicesHolder;

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
    iconHeader: {
        width: '80%'
    },
    tab: {
        backgroundColor: 'yellow',
        height: '100%'
    },
    tabSingle: {
        // backgroundColor: 'red',
        width: '40px !important',
        display: 'flex',
    }
});

