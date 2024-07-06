import React, {useState} from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import profile from "../../Images/egg.jpg";
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const HootCard = () => {
    const [isLiked,setClickedLike] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteHoot = () => {
        console.log("Delete Hoot");
        handleClose();
    }

    const handleOpenReplyModel = () => {
        console.log("Open Reply Model");
    }

    const handleCreateRehoot = () => {
        console.log("Create Rehoot");
    }

    const handleLikeHoot = () => {
        setClickedLike(!isLiked)
        console.log("Like Hoot");
    }

    const handleShare = () => {
        console.log("Shared Hoot")
    }
    return (
        <div className=''>

            {/* <div className="flex items-center font-semibold text-gray-700 py-2">
                <RepeatIcon/>
                <p>Retweeted</p>
            </div>*/}

            <div className='flex space-x-5'>
                <Avatar alt="username"
                        src={profile}
                        className="cursor-pointer"
                />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Shizz Sama</span>
                            <span className='text-gray-600'>@ShizzSama . 2m</span>
                            <VerifiedIcon/>

                        </div>
                        <div>
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
                                <MenuItem onClick={handleDeleteHoot}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteHoot}>Edit</MenuItem>

                            </Menu>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='cursor-pointer'>
                            <p className='mb-2 p-0'>Literally me</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md'
                                 src={profile} alt="profile" />

                        </div>
                        <div className={'py-5 flex flex-wrap justify-between items-center'}>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                <p>43</p>
                            </div>
                            <div className={` space-x- flex items-center`}>
                                {isLiked ? <FavoriteBorderIcon
                                        onClick={handleLikeHoot}
                                        className='cursor-pointer'/>
                                    :
                                    <FavoriteIcon
                                        onClick={handleLikeHoot}
                                        className='cursor-pointer text-pink-600'/>}
                                <p>50</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <RepeatIcon className='cursor-pointer' onClick={handleCreateRehoot}/>
                                <p>43</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleCreateRehoot}/>
                                <p>43</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <IosShareIcon className='cursor-pointer' onClick={handleShare}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HootCard;