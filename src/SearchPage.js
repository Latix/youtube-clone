import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"
                channel="Kamsi Kodi"
                verified
                subs="659K"
                noOfVideos={382}
                description="This is a fully comprehensive python course with exercises, notes, solutions, and projects. We will cover all fundamentals of python programming and give you a solid understanding of things like "
            />
            <hr />
        </div>
    )
}

export default SearchPage
