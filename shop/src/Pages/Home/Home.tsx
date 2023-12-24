    import * as React from 'react';

    import TopTag from '../../components/TopTag';
    import MainHeader from '../../components/MainHeader';
import Img from '../../assets/d1b9f181-8929-442a-ac58-dfa8fc55055a.jpg_1200x1200.jpg'
    const Home = () => {
        return (
            <div>
                <TopTag />
                <MainHeader />
                <div
                    className="px-16 md:px-28">
                    <div className='flex flex-row   gap-10'>
                        <div className='hidden md:flex flex-col flex-auto w-[20%] md:gap-4 border-r border-gray-300 '
                        >
                            <p className ="pt-4" > Electonics</p>
                            <p > Men's Fashion</p>
                            <p > Women's Fashion</p>
                            <p > Baby's and Toys</p>
                            <p > Health and Beauty</p>
                            <p > Groceries</p>
                        </div>
                        <div>

                            <img src={Img} alt='asd' className='pt-4 object-cover w-[100%]' />

                    </div>
                    </div>
                </div>
            </div>
        );
    }
    export default Home
