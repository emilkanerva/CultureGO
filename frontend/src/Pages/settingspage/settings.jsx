import React, {useEffect, useState} from 'react'
import Button from '../../Components/buttons/button'
import ProfileIcon from '../../Components/icons/ProfileIcon'
import UserTermsIcon from '../../Components/icons/UserTermsIcon'
import LogoutIcon from '../../Components/icons/LogoutIcon'
import AchievementsIcon from '../../Components/icons/AchievementsIcon'
import LogoLarge from "../../Components/icons/LogoLarge"
import Moreinfo from './moreinfo'
import serverUrl from '../../address'
export default function Settings() {

  const userID = 'cfb5b9bd-ece8-470e-89c0-8ac52122652a' //charlie

  const [data, setData] = useState({
    showMoreInfo: false,
    info: '',
    type: ''
  })

  const fetchUserData = async (userId)=>{
    const featchedData = await fetch(`http://${serverUrl}:4000/getuser?userid=${userId}`)
    
    return featchedData.json()
  }

  const handleClick = async (type)=>{
    if(type === 'about'){
      const userData = await fetchUserData(userID)
      setData({showMoreInfo: true, info: userData, type: type})
    }
    else if(type === 'achievements'){
      setData({showMoreInfo: true, info: 'achievements info', type: type})
    }
    else if(type === 'terms'){
      setData({showMoreInfo: true, info: 'user terms info', type: type})
    }
  }
    return   (
        <div className="bg-white h-full w-full relative overflow-hidden">
        
          <div className="h-1/3 ">
            <div className="flex flex-col justify-center h-full">  
              <div className="flex flex-row justify-center">
                      <LogoLarge/>
              </div>
            </div>
          
          </div>
          <Moreinfo dataState={[data, setData]} />
          <div className='items-center flex flex-col h-1/2 justify-between relative' style={{opacity: data.showMoreInfo? 0:1 ,transition: 'all 0.2s ease-in-out'}}>
            <Button clickHandler={async()=>handleClick('about')} text="About Me" icon={ProfileIcon} size="large"></Button>
            <Button clickHandler={()=>setData({showMoreInfo: true, info: 'achievements info', type:'achievements'})} text="Achievements" icon={AchievementsIcon} size="large"></Button>
            <Button clickHandler={()=>setData({showMoreInfo: true, info: 'user terms info', type:'terms'})} text="User Terms" icon={UserTermsIcon} size="large"></Button>
            <Button text="Logout" icon={LogoutIcon} size="large"></Button>
            

          </div>
        </div>
    )
    
  
}