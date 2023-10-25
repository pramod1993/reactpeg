import React from 'react'
import bannerbg from '../img/banner-bg.png';
import bannerinfo from '../img/banner-info.png';
import classroom from '../img/classroom-bg.png'
import { Link } from 'react-router-dom';
import { TiStarburst } from 'react-icons/ti';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GrNext } from 'react-icons/gr';
import {ImPriceTags} from 'react-icons/im';
import {FaRunning} from 'react-icons/fa';
import {FaRegAddressCard} from 'react-icons/fa';
import {TbAward} from 'react-icons/tb';
import {GiMoebiusStar} from 'react-icons/gi';
import study from '../img/classroom-black.svg';
import hub from '../img/hub.svg';
import html from '../img/html.svg';
import java from '../img/java.svg';
import webico from '../img/webico.svg';
import  tools from '../img/tools.png';

const Home = () => {
  return (
    <>
     <div style={{backgroundImage: `url(${bannerbg})`,backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
        <div className="max-w-5xl m-auto pt-12 px-3">
            <div className="grid grid-cols-2 gap-5 text-white pt-6 pb-44 relative">
                <div className="w-full">
                    <h1 className='sm:text-4xl text-base font-semibold m-0'>Full Stack Web Development 
                        Training</h1>
                    <h3 className='sm:text-2xl text-sm font-semibold'>Become an Accomplished Full 
                        Stack Web Developer</h3>
                    <p>The Knowledge Academy is Globally Recognised as the Market
                     Leader in providing Web and App Development Training. Our 
                     "Web Development Expert Team" comprises over 34 leading 
                     professionals with over 14 years of industry-recognised 
                     experience in developing both client-side and server-side 
                     web applications. Our specialised instructors have developed
                    unique teaching styles to help aspiring candidates gain the
                    ability to design complete websites and web applications.</p>
                    <Link to='/' className='btn bg-violet-500 hover:bg-violet-600 
                    text-base md:!w-3/4 w-full text-white flex items-center'>
                        <span className='relative w-10'>                        
                            <TiStarburst className='text-4xl'/> 
                            <span className='absolute top-1 left-3 text-black'>%</span>
                        </span> 
                        discount40% Off Limited Time Offer
                    </Link>
                </div>
                <div className="w-full relative">
                    <img src={bannerinfo} alt="banner-info" className='absolute 
                    bottom-0 w-full' />
                </div>
            </div>
        </div>
     </div>
     <div className="max-w-5xl m-auto mt-3 px-3">
        <div className="text-center">
            <h1 className='text-4xl m-0'>Full Stack Web Development Training Overview</h1>
            <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
                <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
                bottom-1.5 animation-myfirst'></div>
            </div>
            <p>Full Stack Development refers to the development of both the back-end 
            (server-side) and front-end (client-side) of web applications. It is a
             practical solution for businesses to reduce their operational costs. 
             Full stack developers are specialists in both front-end and back-end 
             web development. They help businesses to curate functionalities which 
             establish the infrastructure, test for issues across the web, and firmly 
             control the projects.
            </p>
            <p>Our Full Stack Web Development training is designed by our industry 
            experts to provide delegates with a comprehensive understanding of the 
            technologies required to become a Full Stack Developer. Attending this 
            Full Stack Web Development training will help delegates to gain in-depth 
            knowledge and skills to add unique features to their website and become 
            successful Full Stack Developers.</p>
            <Link to='/' className='btn bg-violet-500 hover:bg-violet-600 
                text-base md:!w-1/3 w-full  text-white flex items-center text-center m-auto mt-3'>
                    <span className='relative w-10'>                        
                        <BsFillInfoCircleFill className='text-4xl'/>  
                    </span> 
                    infoNeed More Information
            </Link>            
        </div>
     </div>
     <div className="max-w-5xl m-auto text-center  px-3">
        <h2 className='text-2xl mt-2'>Best Selling Courses in India</h2>
        <h1 className='text-4xl m-0'>Top in-Demand Full Stack Web Development Courses</h1>
        <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
            <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
            bottom-1.5 animation-myfirst'></div>
        </div>

        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 mt-4">
            <div className='block border w-full p-3 hover:bg-blue-600 hover:text-white transition duration-700 delay-150'>
                <div className='flex relative'><h3>UX / UI Design Jumpstart</h3> 
                    <div className=' w-16 h-16 border-2 border-orange-600 absolute  right-0'>
                        <SiBookstack className='text-4xl relative top-3 left-3'/>
                    </div>
                </div>
                <div className='mt-5 w-full text-left grid gap-2'>
                    <p><strong>Duration:</strong> 1 Day</p>
                    <Link to="/" className='btn bg-violet-500 hover:bg-violet-600 
                        text-base text-white flex items-center text-center w-1/2'><BiSolidPhoneCall className='mr-2'/>Enquire Now</Link>
                </div>
            </div>
            <div className='block border w-full p-3 hover:bg-blue-600 hover:text-white transition duration-700 delay-150'>
                <div className='flex relative'><h3>WordPress Essentials</h3>
                    <div className=' w-16 h-16 border-2  border-orange-600 absolute right-0'>
                        <SiBookstack className='text-4xl relative top-3 left-3'/>
                    </div>
                </div>
                <div className='mt-5 w-full text-left grid gap-2'>
                    <p><strong>Duration:</strong> 1 Day</p>
                    <Link to="/" className='btn bg-violet-500 hover:bg-violet-600 
                        text-base text-white flex items-center text-center w-1/2'><BiSolidPhoneCall className='mr-2'/>Enquire Now</Link>
                </div>
            </div>
            <div className='block border w-full p-3 hover:bg-blue-600 hover:text-white transition duration-700 delay-150'>
                <div className='flex relative'><h3>Javascript & JQuery Masterclass</h3>
                    <div className=' w-16 h-16 border-2 border-orange-600 absolute right-0  '>
                        <SiBookstack className='text-4xl relative top-3 left-3'/>
                    </div>
                </div>
                <div className='mt-5 w-full text-left grid gap-2'>
                    <p><strong>Duration:</strong> 1 Day</p>
                    <Link to="/" className='btn bg-violet-500 hover:bg-violet-600 
                        text-base text-white flex items-center text-center w-1/2'><BiSolidPhoneCall className='mr-2'/>Enquire Now</Link>
                </div>
            </div>
        </div>
     </div>
     <div className="max-w-5xl m-auto  px-3">
        <h1 className='text-4xl font-semibold'>Our Available Delivery Methods</h1>
        <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
            <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
            bottom-1.5 animation-myfirst'></div>
        </div>
       <p> This layout normally displays 3 equal columns on large screens, and on small screens, each of them occupies 100% and lines up one below the other. The only difference is medium screens, i.e. the so-called tablet view, where one column takes up 100% of the width, and the other two are placed below it and each takes up 50% of the width.</p>
        <div className="grid-cols-1 grid sm:!grid-cols-4 gap-3">
            <div className='border w-full flex flex-col'>
                <div className="deliver relative overflow-hidden bg-cover bg-no-repeat bg-slate-300 items-center flex justify-center">
                    <img src={classroom} alt="classroom" />
                    <div className="overlay bg-[#7a81a8cf] items-center flex justify-center m-auto ">
                        <img src={study} alt="study" className='bg-white  w-12 h-12 p-2' />
                    </div>
                    <div className='w-52 h-32 bg-white rotate-[149deg] absolute right-[-60px] bottom-[-78px]' />
                </div>
                <div className='shadow-md p-2'>
                    <h3>Classroom Training</h3>
                    <p>This layout normally displays 3 equal columns on large screens, and on small screens, each of them occupies 100% and lines up one below the other.</p>
                    <footer className='bg-slate-100 p-2 mt-2 '>
                        <Link to='/' className='flex items-center justify-center text-blue-700'>Enquire Nowright-arrow  <GrNext/></Link>
                    </footer>
                </div>
            </div>

            <div className='border w-full flex flex-col'>
                <div className="deliver relative overflow-hidden bg-cover bg-no-repeat bg-slate-300 items-center flex justify-center">
                    <img src={classroom} alt="classroom" />
                    <div className="overlay bg-[#7a81a8cf] items-center flex justify-center m-auto ">
                        <img src={study} alt="study" className='bg-white  w-12 h-12 p-2' />
                    </div>
                    <div className='w-52 h-32 bg-white rotate-[149deg] absolute right-[-60px] bottom-[-78px]' />
                </div>
                <div className='shadow-md p-2'>
                    <h3>Classroom Training</h3>
                    <p>This layout normally displays 3 equal columns on large screens, and on small screens, each of them occupies 100% and lines up one below the other.</p>
                    <footer className='bg-slate-100 p-2 mt-2 '>
                        <Link to='/' className='flex items-center justify-center text-blue-700'>Enquire Nowright-arrow  <GrNext/></Link>
                    </footer>
                </div>
            </div>

            <div className='border w-full flex flex-col'>
                <div className="deliver relative overflow-hidden bg-cover bg-no-repeat bg-slate-300 items-center flex justify-center">
                    <img src={classroom} alt="classroom" />
                    <div className="overlay bg-[#7a81a8cf] items-center flex justify-center m-auto ">
                        <img src={study} alt="study" className='bg-white  w-12 h-12 p-2' />
                    </div>
                    <div className='w-52 h-32 bg-white rotate-[149deg] absolute right-[-60px] bottom-[-78px]' />
                </div>
                <div className='shadow-md p-2'>
                    <h3>Classroom Training</h3>
                    <p>This layout normally displays 3 equal columns on large screens, and on small screens, each of them occupies 100% and lines up one below the other.</p>
                    <footer className='bg-slate-100 p-2 mt-2 '>
                        <Link to='/' className='flex items-center justify-center text-blue-700'>Enquire Nowright-arrow  <GrNext/></Link>
                    </footer>
                </div>
            </div>

            <div className='border w-full flex flex-col'>
                <div className="deliver relative overflow-hidden bg-cover bg-no-repeat bg-slate-300 items-center flex justify-center">
                    <img src={classroom} alt="classroom" />
                    <div className="overlay bg-[#7a81a8cf] items-center flex justify-center m-auto ">
                        <img src={study} alt="study" className='bg-white  w-12 h-12 p-2' />
                    </div>
                    <div className='w-52 h-32 bg-white rotate-[149deg] absolute right-[-60px] bottom-[-78px]' />
                </div>
                <div className='shadow-md p-2'>
                    <h3>Classroom Training</h3>
                    <p>This layout normally displays 3 equal columns on large screens, and on small screens, each of them occupies 100% and lines up one below the other.</p>
                    <footer className='bg-slate-100 p-2 mt-2 '>
                        <Link to='/' className='flex items-center justify-center text-blue-700'>Enquire Nowright-arrow  <GrNext/></Link>
                    </footer>
                </div>
            </div>
        </div>
     </div>
     <div className="max-w-5xl m-auto  px-3">
        <div className="grid-cols-1 grid sm:!grid-cols-2 gap-3">
            <div className='w-full'>
                <h1 className='text-2xl font-semibold'>Skills Required to Become a Successful Full Stack Developer</h1>
                <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
                    <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
                    bottom-1.5 animation-myfirst'></div>
                </div>
                <p>Full Stack Developer works on all the steps of web application development as a part of the development team. To excel at the Full Stack Developer role, one not only requires a formal degree but also extensive knowledge of various skills. Diversity is the crucial point to perfection and success in the Full Stack Development profession. Here are the top skills required to be a successful Full Stack Developer:</p>
                <div className="grid gap-2 grid-cols-4 mt-3">
                    <div className='text-center w-20 h-20'>
                        <img src={html} alt="html"  className='font-medium font-sans'/>
                        <p className='whitespace-nowrap text-ellipsis truncate'>HTML/CSS</p>
                    </div>
                    <div className='text-center w-20 h-20'>
                        <img src={java} alt="java"  className='font-medium font-sans'/>
                        <p className='whitespace-nowrap text-ellipsis truncate'>JavaScript</p>
                    </div>
                    <div className='text-center w-20 h-20'>
                        <img src={hub} alt="hub" className='font-medium font-sans' />
                        <p className='whitespace-nowrap text-ellipsis truncate'>Git/GitHub</p>
                    </div>
                    <div className='text-center w-20 h-20'>
                        <img src={webico} alt="webico" className='font-medium font-sans' />
                        <p className='whitespace-nowrap text-ellipsis truncate'>Web Architecture</p>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <h1 className='text-2xl font-semibold'>Pros of Hiring Full Stack Developers</h1>
                <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
                    <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
                    bottom-1.5 animation-myfirst'></div>
                </div>
                <p>Full Stack Developer works on all the steps of web application development as a part of the development team. To excel at the Full Stack Developer role, one not only requires a formal degree but also extensive knowledge of various skills. Diversity is the crucial point to perfection and success in the Full Stack Development profession. Here are the top skills required to be a successful Full Stack Developer:</p>
                <div className="mt-3 grid gap-3">
                    <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100 w-3/4" >
                            75%
                        </div>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="bg-green-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100 w-3/5" >
                            60%
                        </div>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="bg-yellow-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100 w-4/5" >
                            80%
                        </div>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="bg-red-600 p-0.5 text-center text-xs font-medium leading-none text-primary-100 w-11/12" >
                            91%
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div className="max-w-5xl m-auto  px-3">
        <h1 className='text-2xl font-semibold'>Why Choose Us</h1>
        <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
            <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
            bottom-1.5 animation-myfirst'></div>
        </div>
        <p>We help you quench your thirst for knowledge by providing you with our specially tailored certifications. Our highly qualified instructors, dedicated staff, and 24/7 available helpline are the main reasons why we're the go-to training provider for you.</p>

        <div className="grid-cols-1 grid sm:!grid-cols-4 mt-3 gap-3">
            <div className='border p-3 w-full'>
                <div>
                    <ImPriceTags className='m-auto text-center text-5xl mb-3' />
                </div>
                    <p><strong>Best Price Guarantee</strong></p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='border p-3 w-full'>
                <div>
                    <FaRunning className='m-auto text-center text-5xl mb-3'/> 
                </div>
                <p><strong>Guaranteed to Run</strong></p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='border p-3 w-full'>
                <div>
                    <FaRegAddressCard className='m-auto text-center text-5xl mb-3'/> 
                </div>
                <p><strong>Highly Experienced Staff</strong></p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='border p-3 w-full'>
                <div>
                    <TbAward className='m-auto text-center text-5xl mb-3'/>
                </div>
                <p><strong>Award-Winning Training Material</strong></p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
        </div>
     </div>
     <div className="max-w-5xl m-auto  px-3">
        <div className="grid-cols-1 grid sm:!grid-cols-2 gap-3">
            <div className='w-full'>
                <h1 className='text-4xl'>Why Should You Become a Full Stack Developer?</h1>
                <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
                    <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
                    bottom-1.5 animation-myfirst'></div>
                </div>
                <p>Being a Full Stack Developer demonstrates that you have technical knowledge of crucial development elements like the front-end, back-end, database management, version control, etc. Full Stack Web Development is a desirable career choice nowadays as many organisations require developers who have good specialisation in various development elements. Full Stack Developer in a team makes the difference in product development plus delivery, and they are lucrative choices as project managers in various organisations. Here are the reasons why you should opt to become a Full Stack Developer:</p>
                <div className="mt-3">
                    <p className='flex items-center'><GiMoebiusStar className='animate-spin text-2xl mr-2'/> To building innovative proprietary software products.</p>
                    <p className='flex items-center'><GiMoebiusStar className='animate-spin text-2xl mr-2'/> To possess a vast arsenal of web technologies to ensure cutting-edge product development.</p>
                    <p className='flex items-center'><GiMoebiusStar className='animate-spin text-2xl mr-2'/> To understand Full Stack offers rapid growth in the job role.</p>
                </div>                   
            </div>
            <div className='mt-3 w-full'>
                <h1 className='text-4xl'>Top Tools for Full Stack Web Development</h1>
                <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
                    <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
                    bottom-1.5 animation-myfirst'></div>
                </div>
                <div>
                    <img src={tools} alt="tools" />
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Home
