import React from 'react';
import logo from '../../Images/realXlogo.png';
import {Box} from "@mui/material";
import {navigation} from "./Navbar";


const Navigation = () => {
        return (
            <div className="h-screen sticky top-0">
                <div>
                    <div className="py-5">
                        <Box component="img" src={logo} alt="Xlogo" sx={{ height: '30px', width: "30px"}} />

                    </div>
                    <div className="space-y-6">

                        {navigation.map(
                            (item) => (<div className='cursor-pointer flex spaxe-x-3 items-center'>
                            {item.icon}
                            <p className='text-x1'>{item.title}</p>
                        </div>))}
                    </div>
                </div>
            </div>
        );
    }


export default Navigation;

