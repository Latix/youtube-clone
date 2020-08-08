import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/youtube/youtube_PNG21.png" 
                    alt="" />
                </Link>
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" value={inputSearch} onChange={e => setInputSearch(e.target.value)}/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    className="header__icon"
                    alt="Kamsi Kodi"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"
                />
            </div>
        </div>
    )
}

export default Header
