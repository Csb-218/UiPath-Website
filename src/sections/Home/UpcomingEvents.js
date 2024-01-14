import React from 'react'
import { dots,circle } from '../../assets/images/upcomingEvents'
import EventsListItems from '../../components/upcomingEvents/EventsListItems'


const UpcomingEvents = () => {
    return (
        <div className='bg-white w-full h-[700px] border-2 overflow-hidden'>
            <div className=' h-[354.71px] backgroundEvents flex flex-col items-center  relative'>
                <img 
                src={circle} 
                className='absolute -top-16 -right-44'
                alt=''/>

                {/* <div className='eventsHeader'>hiiihih</div> */}
                <div className='text-black text-center mt-[80px]  '>
                   <p className='text-sm'>OUR EVENTS</p>
                   <p className='text-3xl font-bold'>Upcoming events</p>
                </div>

                <div className='mt-[59px] flex flex-col space-y-6  '>
                    
                    {
                        [1,2,3].map((item,index) => 
                        <React.Fragment key={index}>
                        <EventsListItems index={index}/>
                        </React.Fragment>
                        
                        )
                    }
                    
                </div>

                <img 
                src={dots} 
                className='absolute -bottom-9 left-0'
                alt=''/>
            </div>
            
        </div>

    )
}

export default UpcomingEvents