'use client'; // Ensure strict mode

import React from 'react';
export default function Home() {
  const handleSendNotification = async () => {
    let permission = await Notification.requestPermission();
    if (permission === 'granted') {
      let notificationOptions = {
        body: 'Some Notification information',
        icon: '/notification-icon.png'
      };
      
      let notif = new Notification('My New Notification', notificationOptions);

      notif.onclick = () => {
        console.log('Notification clicked');
      };
    } else {
      alert('Notification Permission Denied! kindly Allow Permission to send Notification.');
      console.log('Notification permission not granted.');
    }
  };

  // Render the component
  return (
    <div className="text-4xl font-bold text-white">
      {/* Section for displaying images */}
      <div className="flex flex-row justify-center">
     <div className=' text-lg m-3'>Hola!</div>  
      </div>

      <div className="m-2 mt-12">
  <div className="relative">
    <img src="/vs.png" alt="waves around bell" className="m-auto relative size-96" />
    {/* <img src="" alt="Notification" className="m-auto absolute inset-0" /> */}
  </div>
</div>

      <div>
        <p className="font-inter font-semibold text-[29px] text-center text-white mt-6">Lorem Ipsum...</p>
        <p className="font-inter font-normal text-white text-[19px] text-opacity-40 text-center pt-4">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="flex items-center justify-center mt-16 mb-6 ml-10 mr-10">
      <button onClick={handleSendNotification} className="relative w-[327px] h-[42px] rounded-md p-0 shadow-md overflow-hidden bg-[#1D103A] border-2 border-[#6434CE] font-inter font-semibold text-[16px] text-center text-white small-screen md:w-[280px] md:h-[38px] lg:w-[300px] lg:h-[38px]">
  <span className="text-sm">Send Notification</span>
</button>

      </div>

      
    </div>
  );
}
