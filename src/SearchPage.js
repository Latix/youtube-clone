import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

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
            <VideoRow 
                views="1.4M"
                subs="659K"
                description="Do you want a free online course"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Lets Build an application"
                image="https://cdn.geekwire.com/wp-content/uploads/2019/07/bigstock-Real-Python-Code-Developing-Sc-217216555-630x421.jpg"
            />
            <VideoRow 
                views="1.4M"
                subs="659K"
                description="Do you want a free online course"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Lets Build an application"
                image="https://cdn.geekwire.com/wp-content/uploads/2019/07/bigstock-Real-Python-Code-Developing-Sc-217216555-630x421.jpg"
            />
        </div>
    )
}

export default SearchPage
