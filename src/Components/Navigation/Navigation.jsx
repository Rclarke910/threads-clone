import React from 'react';
import logo from '../../Images/realowllogo.png';
import {Avatar, Box, Button, Menu, MenuItem} from "@mui/material";
import { navigation } from "./Navbar";
import { useNavigate } from "react-router-dom";
import profile from "../../Images/egg.jpg";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log("Logout");
        handleClose();
    }

    const navigate = useNavigate();
        return (

            <div className="h-screen sticky top-0">
                <div>
                    <div className="py-5">
                        <Box component="img" src={logo} alt="Owl Logo" className="h-16 w-16" />

                    </div>
                    <div className="space-y-6">

                        {
                            navigation.map(
                            (item) => <div className='cursor-pointer flex space-x-2 items-center'
                                            onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`)
                                            : navigate(item.path)}>

                                            {item.icon}
                            <p className='text-x1'>{item.title}</p>

                        </div>
                            )}
                    </div>
                    <div className="py-10">
                        <Button sx={{
                            width: "100%",
                            borderRadius: "29px",
                            py: "15px",
                            bgcolor: "#C19A6B",
                            color: "white"
                        }}
                                variant = "contained">
                                    Hoot
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-between">

                    <div className="flex items-center space-x-3">
                        <Avatar alt="username" src={profile}/>

                <div>
                    <span>Rashawn Clarke</span>
                    <span className="opacity-70">@ShizzSama</span>
                </div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreHorizIcon className="text-custom-brown"/>
                        </Button>
                        <Menu
                            className=""
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>

                        </Menu>
                </div>

            </div>
            </div>
        );
    }


export default Navigation;

