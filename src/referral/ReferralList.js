import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {request} from '../util/APIUtils';
import { API_BASE_URL } from '../constants';
import Sidebar from '../common/Sidebar';
import ProfileImage from '../user/profile/ProfileImage';
import './ReferralList.css';


function ReferralList() {
    const [List, setList] = useState([]);
    const [experience, setExperience] = useState(0);
    const [locations, setLocations] = useState([]);

    const handleExperienceChange = (event) => {
        setExperience(Number(event.target.value));
    };

    const handleLocationChange = (event) => {
        const locationValue = event.target.value;
        if (locations.includes(locationValue)) {
        setLocations(locations.filter((loc) => loc !== locationValue));
        } else {
        setLocations([...locations, locationValue]);
        }
    };

    const logo = "https://logo.clearbit.com/";

    useEffect(() => {
       
        const json = request({
            url: API_BASE_URL + "/referrals",
            method: 'GET',

        });

        json.then(response=>{ 
            setList(response);
            console.log(List)});
            
    },[])


    
    return (
        <div className='body'>
            <Sidebar
                handleExperienceChange={handleExperienceChange}
                handleLocationChange={handleLocationChange}
                locations={locations}
            />
            <div className='cards'>
            <ul>
                {List.map(item => (
                  
                    <li key={item.email}>
                        <div className='content'>
                            <div className='profile-img'>
                            <ProfileImage userId={item.userid}/>
                            </div>
                        <span className='heading'>{item.name} works as <b>{item.jobRole}</b> at {item.company}
                        <br></br>
                        can refer for  <button class = 'yoe'>{item.yoe}</button></span> 
                        </div>
                       
                        <div className="logo-container">
                        <img src={logo+item.company+".com"}></img>
                        </div>
                        
                        <div className='apply-button'>
                            
                            
                            <Link to={'/apply/'+item.id}>
                            <button type="radio" class="apply-radio" name="apply">Ask for a referral</button>
                            </Link>

                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default ReferralList;