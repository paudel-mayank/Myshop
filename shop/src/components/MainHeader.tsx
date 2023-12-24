
import { PiShoppingCartThin } from "react-icons/pi";
import { IoPersonCircle } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";



const MainHeader = () => {
    return (
        <div className='bg-white px-16 md:px-28 py-3 m-auto border-b border-black '>

            <div className='flex justify-between items-center '>
                <p className='font-bold text-2xl'> Exclusive . </p>
                <div className='flex justify-between items-center gap-10'>
                    <div className='hidden  md:flex justify-between items-center gap-8'>
                        <p> Home</p>
                        <p> Contact</p>
                        <p> About </p>
                        <p> Sign Up</p>
                    </div>
                    <div className='flex justify-around items-center gap-5'>
                        <div className='relative inline-block'>
                            <input type="text" placeholder='Search here...'
                                className=' hidden sm:block px-2 py-2 bg-gray-200' />
                            <span className='sm:absolute sm:right-2 sm:top-2'>
                                <CiSearch size={20} color='red' />
                            </span>
                        </div>
                        <PiShoppingCartThin size={28} />
                        <IoPersonCircle size={28} />

                    </div>
                </div>
            </div> 
        </div>
    )
}

export default MainHeader