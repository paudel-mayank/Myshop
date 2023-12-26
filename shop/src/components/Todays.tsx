import moment from 'moment'
import React from 'react'

const Todays = () => {
    const date = new Date()
    const endDate = moment().add(1, 'days').format("YYYY-MM-DD")
    const newDate =   Date.parse(new Date().toISOString())
const difference =   Date.parse(new Date(endDate).toISOString()) - Date.parse(new Date().toISOString())
    const seconds= Math.floor((difference/1000)% 60)
    const minutes= Math.floor((difference/1000 /60)% 60)
    const hours= Math.floor((difference/1000 /60/60)% 60)
    console.log(hours)
    console.log(minutes)


  return (
    +
    <div className ='mt-10 px-16 md:px-28'>
        <div className='flex flex-row gap-2 justify-start items-center'>
            <div className='h-6 w-4 rounded-md bg-orange-500'></div>
            <p> Today's</p>
        </div>

        <div className ='flex flex-row gap-40 justify-start items-center text-center font-bold'>
            <p className ='text-2xl font-bold tracking-wide'> Flash Sales </p>
            <div className='flex flex-row gap-10 justify-start items-center text-center'>
            <div className='font-bold'> 
                <p> Hours</p>
                <p> 3</p>
            </div>
            <p> : </p>

            <div>
                <p> Minutes</p>
                <p> 3</p>
            </div>
            <p> : </p>
            <div>
            <p> Seconds</p>
                <p> 3</p>
                </div>
            
                </div>
            </div>  
    </div>
  )
}

export default Todays