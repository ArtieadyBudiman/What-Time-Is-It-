import {useState, useEffect} from 'react';
import morning from './../images/morning.jpg';
import afternoon from './../images/afternoon.jpg';
import evening from './../images/evening.jpg';
import night from './../images/night.jpg';
import Quotes from './Quotes'

const Clock = ()=>{

   const times = new Date();
   const hours= times.getHours().toString().padStart(2, '0');
   const minutes= times.getMinutes().toString().padStart(2, '0');
   const timeType = hours <= 12 ? 'AM' : 'PM';
   // console.log(`${hours} ${timeType}`)

   const [time, setTime] = useState('');
   const [greeting, setGreeting] = useState('');
   const [backgroundView, setBackgroundView] = useState();
   
   const updateTime = () => {
      setTime(`${hours}:${minutes}`);
   }
   setInterval(updateTime, 1000);
   clearInterval(setInterval);

   // console.log(updateTime);
   // console.log(time);


   useEffect(() => {
      if( 5 <= hours && hours < 12 ) {
         setGreeting('GOOD MORNING');
         setBackgroundView(`url(${morning})`);
      }
      else if( 12 <= hours && hours < 18 ) {
         setGreeting('GOOD AFTERNOON');
         setBackgroundView(`url(${afternoon})`);
      }
      else if( 18 <= hours && hours < 24 ) {
         setGreeting('GOOD EVENING');
         setBackgroundView(`url(${evening})`);
      }
      else {
         setGreeting('GOOD NIGHT')
         setBackgroundView(`url(${night})`);
      }
   }, [])

   return(
      <div className="container" style={{backgroundImage: backgroundView}}>
         <div className="layer">
            <div className="wrapperContent">
               <Quotes/>
               <div className="wrapperTime">
                  <div className="greeting">{greeting}</div>
                  <div className="time">
                        <div className="clock">
                           {time}
                           <div className="timeType">{timeType}</div>
                        </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
// 

export default Clock;