import React from 'react' 
import {AiFillHome} from 'react-icons/ai';
import {MdCall} from 'react-icons/md';
import {MdOutlineMailOutline} from 'react-icons/md';
const Footer = () => {
  return (
    <>
      <div className="py-4 bg-slate-600 mt-4">
        <div className="grid-cols-1 grid sm:!grid-cols-4 px-3 max-w-5xl gap-3 m-auto text-white">
            <div>
                <h2>SAMPLE PAPERS</h2>
                <ul className='grid gap-2  pt-3'>
                    <li>
                        <a href='#'>NEET Sample Papers</a>
                    </li>
                    <li>
                        <a href='#'>NEET Biology Sample Papers</a>
                    </li>
                    <li>
                        <a href='#'>NEET Physics Sample Papers</a> 
                    </li>
                    <li>
                        <a href='#'>NEET Chemistry Sample Papers</a> 
                    </li>
                    <li>
                        <a href='#'>JEE Main Mock Test Papers</a>
                    </li>
                    <li>
                        <a href='#'>JEE Advanced Mock Test Papers</a>
                    </li>
                    <li>
                        <a href='#'>Bihar Board Sample Paper</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>SAMPLE PAPERS</h2>
                <ul className='grid gap-2  pt-3'>
                    <li>
                        <a href='#'>NEET Sample Papers</a>
                    </li>
                    <li>
                        <a href='#'>NEET Biology Sample Papers</a>
                    </li>
                    <li>
                        <a href='#'>NEET Physics Sample Papers</a> 
                    </li>
                    <li>
                        <a href='#'>NEET Chemistry Sample Papers</a> 
                    </li>
                    <li>
                        <a href='#'>JEE Main Mock Test Papers</a>
                    </li>
                    <li>
                        <a href='#'>JEE Advanced Mock Test Papers</a>
                    </li>
                    <li>
                        <a href='#'>Bihar Board Sample Paper</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>SAMPLE PAPERS</h2>
                <ul className='grid gap-2  pt-3'>
                    <li>
                        <a href='#'>NEET Sample Papers</a>
                    </li>
                    <li>
                        <a href='#'>NEET Biology Sample Papers</a>
                    </li>
                    <li>
                        <a href='#'>NEET Physics Sample Papers</a> 
                    </li>
                    <li>
                        <a href='#'>NEET Chemistry Sample Papers</a> 
                    </li>
                    <li>
                        <a href='#'>JEE Main Mock Test Papers</a>
                    </li>
                    <li>
                        <a href='#'>JEE Advanced Mock Test Papers</a>
                    </li>
                    <li>
                        <a href='#'>Bihar Board Sample Paper</a>
                    </li>
                </ul>
            </div>
            <div  className='grid gap-2'>
                <h2>CONTACT US</h2>
                <div className='flex items-center gap-3'><AiFillHome className='text-3xl'/> Kanhai Colony Sector 44, Gurugram, Haryana 122022 </div>
                <div className='flex items-center gap-3'><MdCall className='text-2xl'/> + 91 1234567809</div>
                <div className='flex items-center gap-3'><MdOutlineMailOutline className='text-2xl'/> pramod.info@gmail.com</div>
                <div className='flex'>
                    <input type="text" className="relative m-0 px-2 block " placeholder="Search........"/>
                    <button className="z-[2] inline-block bg-primary px-3" type="button" >
                    Search
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
