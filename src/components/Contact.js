import React, { useState } from 'react'    
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import fullbg from '../img/contact.jpg'
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {MdCall} from 'react-icons/md';
import {MdOutlineMailOutline} from 'react-icons/md'
const Contact = () => {

  const [submitted, setSubmitted] = useState(false);
  const submitForm = (e) =>{
    e.preventDefault();
    try{
      setSubmitted(true);
    } catch{

    }
  };
  const [data, setData] = useState ({
    leadName: "",
    leadMobile: "",
    leadEmail: "",
    leadPassword: "", 
  });
  console.log(data);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if(submitted){
    return (
      <div  className=' py-4' style={{background:`url(${fullbg})`,backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
      <div className="max-w-2xl m-auto bg-[#ffffffd1] rounded-md py-12 relative text-center pt-12 ">
        <p className="font-semibold m-0">
          Thanks for your response,
          <span className="block">expect a call from us soon.</span>
        </p>
        <div className="grid grid-cols-3 text-center ">
          <hr className="m-5" />
          <span className="relative left-0 right-0 m-auto ">OR</span>
          <hr className="m-5" />
        </div>
        <p className="m-0 font-semibold">
          <Link to="#" className="link no-underline text-black ">
            <span className="text-primary">Click Here</span> to
             Call Us Now
          </Link>
        </p>
      </div>
      </div>
    )
  }
  return (
    <>
    <div className=' py-4' style={{background:`url(${fullbg})`,backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
      <div className=' pt-12 max-w-5xl m-auto mb-3'>
        <h1 className="text-center text-4xl m-0 text-white font-semibold font-sans">Contact US</h1>
        <ul className="flex gap-2  text-white text-1xl font-semibold font-sans">
          <li><a href="/">Home</a></li>
          <li>/</li>
          <li>Contact US</li>
        </ul>        
      </div>
      <div className='max-w-3xl m-auto bg-[#ffffffd1] py-3 px-3 rounded-md grid grid-cols-2'> 
          <div className=' grid'>
            <div className='flex items-center gap-3'><AiFillHome/> Kanhai Colony Sector 44, Gurugram, Haryana 122022 </div>
            <div className='flex items-center gap-3'><MdCall/> + 91 1234567809</div>
            <div className='flex items-center gap-3'><MdOutlineMailOutline/> pramod.info@gmail.com</div>
          </div>
          <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="grid grid-cols-2 text-center bg-slate-300">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className='!rounded-none'>LogIn</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className='!rounded-none'>Registrar</Nav.Link>
                  </Nav.Item>
                </Nav>               
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <form action="" onSubmit={submitForm} className='grid gap-3'>
                      <div className='mt-3'>
                        <input type="Email" required  name="leadEmail" placeholder='Your Email' value={data.leadEmail}  className='w-full border px-3 py-2' onChange={ handleInputChange} />
                      </div>
                      <div>
                        <input type="password" required name="leadPassword" placeholder='Your Password' value={data.leadPassword}  onChange={handleInputChange}  className='w-full border px-3 py-2' />
                      </div>
                      <div>
                        <input type="submit" value="Submit" className='bg-primary py-2 px-5 text-white' />
                      </div>                    
                    </form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <form action="" onSubmit={submitForm} className='grid gap-3'>
                        <div className='mt-3'>
                          <input type="text" required name="leadName" placeholder='Your Firs Name' value={data.leadName}  className='w-full border px-3 py-2' onChange={ handleInputChange } />
                        </div>
                        <div>
                          <input type="text" required name="leadMobile" placeholder='Your Mobile Number' value={data.leadMobile} maxLength={10} className='w-full border px-3 py-2' onChange={ handleInputChange} />
                        </div>
                        <div>
                          <input type="Email" required name="leadEmail" placeholder='Your Email' value={data.leadEmail}  className='w-full border px-3 py-2' onChange={handleInputChange} />
                        </div>
                        <div>
                          <input type="password" required name="leadPassword" placeholder='Your Password' value={data.leadPassword}  onChange={handleInputChange}  className='w-full border px-3 py-2' />
                        </div>
                        <div>
                          <input type="submit" value="Submit" className='bg-primary py-2 px-5 text-white' />
                        </div>                    
                      </form>
                  </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>

      <div className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0553110652527!2d77.0769425!3d28.447748999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18951f33772f%3A0x21889d438f81f36c!2sKanhai%20Colony%2C%20Sector%2044%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1697695683572!5m2!1sen!2sin" width='100%' height='300px'  loading="lazy" title="This is a unique title" ></iframe>
      </div>
    </>
  )
}

export default Contact
