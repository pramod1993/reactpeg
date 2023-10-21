import React from 'react'
import aboutimg from '../img/web.png';
import {GiMoebiusStar} from 'react-icons/gi';
import benefit from '../img/benefit.png';
import ring from '../img/ring.svg';
import Accordion from 'react-bootstrap/Accordion'
import Aboutbg from '../img/About.png';
import Alldata from './data.json'
const About = () => {
  return (
    <>
      <div className='p-3' style={{background:`url(${Aboutbg})`,backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
        <div className=' pt-12 max-w-5xl m-auto mb-3'>
            <h1 className="text-center text-4xl m-0 text-white font-semibold font-sans">About US</h1>
            <ul className="flex gap-2  text-white text-1xl font-semibold font-sans">
              <li><a href="/">Home</a></li>
              <li>/</li>
              <li>About US</li>
            </ul>        
          </div>
      </div>
      <div className="max-w-5xl m-auto grid grid-cols-2 gap-3">
        <div>
          <img src={aboutimg} alt="aboutimg" />
        </div>
        <div>
          <h1 className='text-3xl'>Technical Skills Required to Become a Full Stack Development Expert</h1>
          <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
            <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
            bottom-1.5 animation-myfirst'></div>
          </div>
          <div>
            <div className='flex mt-3'>
              <div className='w-12 h-12 items-center mt-2'>
                <GiMoebiusStar className='animate-spin mr-2 text-2xl'/>
              </div> 
              <p> Programming Languages: Full Stack Developers need to have expertise in the language syntax and be skilled in various programming languages, such as JAVA, C#, Ruby, and PHP.</p></div>
            <div className='flex mt-3'>
              <div className='w-12 h-12 items-center mt-2'>
                <GiMoebiusStar className='animate-spin mr-2 text-2xl'/>
              </div> 
              <p>Development Frameworks and Third-Party Libraries: Another crucial requirement for a Full Stack Development expert is to know development frameworks like Node.Js, Express.Js, Hibernate, Python Django, Java Spring, etc. and third-party libraries.</p></div>
            <div className='flex mt-3'>
              <div className='w-12 h-12 items-center mt-2'>
                <GiMoebiusStar className='animate-spin mr-2 text-2xl'/>
              </div> 
              <p>Front-End Technology: Full Stack Development experts must understand front end technologies, such as HTML5, CSS3, and JavaScript. They should also possess good command over frameworks like SASS, JQuery, LESS, AngularJS, or REACT.</p></div>
            <div className='flex mt-3'>
              <div className='w-12 h-12 items-center mt-2'>
                <GiMoebiusStar className='animate-spin mr-2 text-2xl'/>
              </div> 
              <p>Database and Cache: They should have in-depth knowledge of databases like MongoDB, MySQL, Redis, Oracle, etc., and how to interact with them smoothly.</p></div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl m-auto grid grid-cols-2 gap-3">
        <div>
            <h1 className='text-3xl'>Benefits of Onsite Training</h1>
            <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
              <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
              bottom-1.5 animation-myfirst'></div>
            </div>
            <p>Onsite training is provided to the employees of an organisation at their worksite, or location provided or preferred by the organisation. Onsite training gives an excellent balance to corporates between flexibility and cost-effectiveness. We are the world's leading organisation for providing the best Onsite training. Mentioned below are benefits of Onsite Training:</p>

            <p className='flex'><img src={ring} alt="ring" className='animate-spin mr-2' /> It keeps employees up to date on modern company practices.</p>
            <p className='flex'><img src={ring} alt="ring" className='animate-spin mr-2' /> Employees have access to training that works around their schedule.</p>
            <p className='flex'><img src={ring} alt="ring" className='animate-spin mr-2' /> It boosts employee productivity and profits organisations.</p>
            <p className='flex'><img src={ring} alt="ring" className='animate-spin mr-2' /> It is cost efficient, as the cost of travelling is reduced for each delegate.</p>
        </div>
        <div>
        <h1 className='text-3xl'>Technology Stacks that are Key to Software Development</h1>
          <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
            <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
            bottom-1.5 animation-myfirst'></div>
          </div>
          <img src={benefit} alt="benefit" />
        </div>
      </div>
      <div className='bg-teal-500 py-4'>
        <div className="max-w-5xl m-auto"> 
            <h1 className='text-3xl text-center text-white'>Frequently Asked Questions</h1>
            <div className='m-auto relative border-2 w-28 h-2 border-orange-700 mt-3'>
              <div className='h-3.5 w-3.5 rounded-full bg-orange-600 relative 
              bottom-1.5 animation-myfirst'></div>
            </div>
            <div className="grid-cols-2 grid gap-3 mt-3">
              <div>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0"  className='mb-2 !rounded-none'>
                    <Accordion.Header className='!rounded-none'>Who is Full Stack Developer?</Accordion.Header>
                    <Accordion.Body  className='text-black'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='mb-2'>
                    <Accordion.Header>What does the UX/UI Design Jumpstart Training course focus on?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='mb-2'>
                    <Accordion.Header>What are the benefits of attending Full Stack Web Development Training courses?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className='mb-2'>
                    <Accordion.Header>Why choosing this Full-Stack App Development Training with Meteor course will be beneficial for me?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className='mb-2'>
                    <Accordion.Header>Can you customise training and course material according to our company requirements?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5" className='!rounded-none'>
                    <Accordion.Header>Can The Knowledge Academy deliver the training to more than 1000 delegates of my company?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div>
              <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="6" className='mb-2 !rounded-none'>
                    <Accordion.Header className='!rounded-none'>I am unable to find the course that I am looking for.</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7" className='mb-2'>
                    <Accordion.Header>What will I learn in JavaScript and JQuery Masterclass course?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8" className='mb-2'>
                    <Accordion.Header>What will be the influence of the C# Programming (C Sharp) training course on my career?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="9" className='mb-2'>
                    <Accordion.Header>Will these training courses can help me to get a better job with a high salary package?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="10" className='mb-2'>
                    <Accordion.Header>Can The Knowledge Academy deliver corporate/in-house training?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="11" className='!rounded-none'>
                    <Accordion.Header>Which delivery methods I can choose for the Full Stack Web Development Training?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
        </div>
      </div>
      <div className='max-w-5xl m-auto'>
          <div className=' grid grid-cols-4 gap-3 mt-3'>
            {Alldata.map((alldata, i) =>{
              return(
                <div className='bg-slate-100' key={i}>
                  <img src={alldata.imgUrl} alt="img" className='w-full h-36' />
                  <div className='p-2'>
                    <span className='text-sm text-slate-400'>{alldata.news}</span>
                    <h2 className='text-xl gap-1 font-semibold'><a href="/">{alldata.title}</a></h2>
                    <p className='text-base'>{alldata.discription}</p>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
      
    </>
  )
}

export default About
