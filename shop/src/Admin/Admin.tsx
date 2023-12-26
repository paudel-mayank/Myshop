import { RiMenuLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

const Admin = () => {
  return (
   <div className='flex flex-row '> 
   <div className="h-[100vh] w-[20%] bg-slate-400  sticky left-0 py-6 shadow-lg">
    
   </div>
   <div className ='bg-white w-[90%] '> 
    <div className ='py-1 px-4 bottom-2'>
      <div className="flex  flex-row justify-between items-center">
        <RiMenuLine  color='red' size={30}/>
        <RxAvatar />
      </div>

    </div>
    </div>

   </div>
  )
}

export default Admin