import React, {  useEffect } from 'react';

const About = (props) => {

  
  useEffect(() => {
    document.title = "iNotebook - About"
    props.setProgress(100)
}, [])
  return (
    <div className='container px-4'>
         <h2 className="my-5 pt-0 pb-2 your-notes-heading">About</h2>
         <p>
         Welcome to our Todo iNotebook website! We are dedicated to helping you manage your tasks efficiently and stay organized. With our intuitive and user-friendly interface, you can easily create, organize, and prioritize your to-do lists. Whether it's for personal use, work projects, or daily reminders, our platform provides a seamless experience to help you stay on top of your responsibilities. We understand the importance of productivity and strive to provide you with a tool that enhances your task management process. Join our community of users who have experienced the benefits of streamlined organization and start maximizing your productivity today. Simplify your life with iNotebook!
         </p>
         <h4 className='my-5 your-notes-heading'>Our iNotebook website functionalities:</h4>

            <div>
                <h4 className='mt-4 mb-2 list-title'>1. Easy to Use:</h4>
                <p>Our website features a user-friendly interface, ensuring a seamless and intuitive experience for users of all levels of technical proficiency. We prioritize simplicity and accessibility, allowing you to navigate the site effortlessly.</p>
            </div>
            <div>
                <h4 className='mt-4 mb-2 list-title'>2. Privacy:</h4>
                <p>We understand the importance of data privacy and security. Our website employs robust measures to protect your personal information and ensure that your todo notes remain private and confidential. You can trust that your data is securely stored and accessible only to you.</p>
            </div>
            <div>
                <h4 className='mt-4 mb-2 list-title'>3. Login and Signup Functionality:</h4>
                <p>To provide a personalized experience, we offer login and signup functionality. By creating an account, you gain access to additional features, such as the ability to save and sync your todo notes across multiple devices. Our signup process is quick and straightforward, ensuring a hassle-free onboarding experience.</p>
            </div>
            <div>
                <h4 className='mt-4 mb-2 list-title'>4. Easy to Create Note:</h4>
                <p>Creating a new todo note is a breeze with our platform. With just a few clicks, you can effortlessly jot down your tasks, set due dates, assign priorities, and add any necessary details. We strive to make the note creation process as efficient and straightforward as possible, allowing you to focus on your tasks rather than spending time on complex interfaces.</p>
            </div>
            <div>
                <h4 className='mt-4 mb-2 list-title'>5. Easy to Delete Note:</h4>
                <p>We understand that task lists evolve and change over time. Our website enables you to easily delete unwanted or completed notes. With a simple action, you can remove outdated tasks from your list, ensuring that your workspace remains organized and clutter-free.</p>
            </div>
           <div>
           <h4 className='mt-4 mb-2 list-title'>6. User Friendly Interface:</h4>
                <p>Above all, we prioritize delivering a user-friendly experience. We continually strive to enhance our website's usability, incorporating feedback from our valued users. Our goal is to provide you with an intuitive and enjoyable task management experience, allowing you to focus on your productivity and accomplish your goals effectively.</p>
           </div>
         <h4 className='my-5'>Experience the ease and convenience of our todo website today, and discover a new level of efficiency in managing your tasks. </h4>
         <p className='mb-5'>Note :- "This website has been developed exclusively for project purposes And the information given on this page is just a demo and not real" </p>
    </div>
  );
};

export default About;
