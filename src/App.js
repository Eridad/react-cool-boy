import logo from './logo.png';
import img2 from './Assets/img/img2.jpg';
import img3 from './Assets/img/img3.jpg';
import img4 from './Assets/img/img4.jpg';
 
import React, { useState } from 'react';
import './App.css';

function App() {

    function menuToggle() {
        var mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    };

  function popupTrigger() {
    document.getElementById('popup').classList.remove('hidden');
  };

  function closeUp() {
    document.getElementById('popup').classList.add('hidden');
  };

  return (
 <div>
  <div className="px-10 py-6 text-base max-sm:px-4">
    <div className="flex items-center justify-between w-full bg-white shadow-md shadow-[var(--shadow)] rounded-xl px-5">
      <div className="flex flex-col">
        <img src={logo} alt="" srcset="" className="w-11" />
        {/* <h1 className="font-bold text-[var(--main)] text-base">COOL BOYS</h1>  */}
      </div>
      <div className="flex items-center gap-4 p-5 max-sm:pr-0 max-sm:gap-6">
        <div className="sm:hidden">
          <button className="mt-2 text-xl font-bold" id="menu-toggle"> <i className="text-2xl fi fi-sr-bars-staggered" onClick={menuToggle}></i></button>
        </div>
        <div>
          <img src={img4}alt="" srcset="" className="w-11 rounded-full ring-2 ring-offset-2 ring-[var(--main)]" />
        </div>
        <div className="max-sm:hidden">
          <h1 className="font-bold">Roy Didanie</h1>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>
    </div>
    <div className="flex items-start w-full gap-24 mt-20 max-[800px]:gap-20">
      <div className="bg-[var(--main)] text-white rounded-xl py-9 w-2/12 max-[800px]:w-3/12 max-sm:hidden max-lg:w-3/12">
        <button className="flex items-center px-5 py-2 mb-3 w-44 active-now"><i className="pr-4 text-2xl fi fi-sr-house-blank"></i>Home</button>
        <a href="staff"><button className="nav-button flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-users"></i>Staff</button></a>
        <a href="projects"><button className="nav-button flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-briefcase"></i>Projects</button></a>
        <a href="clients"><button className="nav-button flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-life-ring"></i>Clients</button></a>
        <a href="request"><button className="nav-button flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-code-pull-request"></i>Requests</button></a>
        <a href="chats"><button className="nav-button flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-comment-alt"></i>Chats</button></a>
        <a href="login"><button className="nav-button flex items-center px-5 py-0 mt-24 w-44"><i className="pr-4 text-2xl fi fi-sr-power"></i>Log out</button></a>
      </div>
      <div className="w-9/12 max-sm:w-full ">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">Recent Projects</p>
          <a href="projects"><button className="text-[var(--main)] text-xs">View all</button></a>
        </div>
        <div className="grid w-full grid-cols-3 gap-5 mt-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-[800px]:grid-cols-1">
          <div className="bg-white rounded-xl shadow-md shadow-[var(--shadow)] py-4 px-5 cursor-pointer" id="popup-trigger" onClick={popupTrigger}>
            <div className="flex items-center w-full gap-3">
              <div>
                <button className="bg-[var(--lighter)] w-12 h-12 rounded-xl pt-1"><i className=" text-2xl mx-auto text-[var(--main)] fi fi-sr-briefcase"></i></button>
              </div>
              <div className="truncate">
                <p className="font-medium truncate">Installing at kawanda police station</p>
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-9">
              <div className="flex mt-3 -space-x-1 overflow-hidden">
                <img className="inline-block w-6 h-6 rounded-full ring-2 ring-white" src={img2} alt=""/>
                <img className="inline-block w-6 h-6 rounded-full ring-2 ring-white" src={img3} alt=""/>
                <img className="inline-block w-6 h-6 rounded-full ring-2 ring-white" src={img4} alt=""/>
              </div>
              <div>
                <p className="text-sm text-gray-500"><i className="pr-1 leading-normal fi fi-rr-alarm-clock"></i> 2 Days</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md shadow-[var(--shadow)] py-4 px-5">
            <div className="flex items-center w-full gap-3">
              <div>
                <button className="bg-[var(--lighter)] w-12 h-12 rounded-xl pt-1"><i className=" text-2xl mx-auto text-[var(--main)] fi fi-sr-briefcase"></i></button>
              </div>
              <div className="truncate">
                <p className="font-medium truncate">Project name eywewyeguyhghhgghghwgeuyuyuyuyuyuuwu</p>
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-9">
              <div className="flex mt-3 -space-x-1 overflow-hidden">
                <img className="inline-block w-6 h-6 rounded-full ring-2 ring-white" src={img4} alt=""/>
                <img className="inline-block w-6 h-6 rounded-full ring-2 ring-white"src={img2} alt=""/>
                <img className="inline-block w-6 h-6 rounded-full ring-2 ring-white" src={img3} alt=""/>
              </div>
              <div>
                <p className="text-sm text-gray-500"><i className="pr-1 leading-normal fi fi-rr-alarm-clock"></i> 2 Days</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md shadow-[var(--shadow)] py-4 px-5">
            <div className="flex items-center w-full gap-3">
              <div>
                <button className="bg-[var(--lighter)] w-12 h-12 rounded-xl pt-1"><i className=" text-2xl mx-auto text-[var(--main)] fi fi-sr-briefcase"></i></button>
              </div>
              <div className="w-full truncate">
                <p className="font-medium truncate">Project wandegeya police post</p>
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-9">
              <div className="flex mt-3 -space-x-1 overflow-hidden">
                <img className="inline-block w-6 h-6 rounded-full ring-2 ring-white" src={img4} alt=""/>
                <img className="inline-block w-6 h-6 rounded-full ring-2 ring-white" src={img3} alt=""/>
              </div>
              <div>
                <p className="text-sm text-gray-500"><i className="pr-1 leading-normal fi fi-rr-alarm-clock"></i> 14 Days</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex items-center justify-between mt-14 mb-3">
          <p className="text-lg font-bold">Clients</p>
          <a href="clients"><button className="text-[var(--main)] text-xs">View all</button></a>
        </div>
        <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-1 max-lg:grid-cols-3 max-[800px]:grid-cols-2">
          <div className="px-4 py-4 bg-white rounded-lg shadow-md shadow-gray-200 w-full truncate">
            <div className="flex items-center gap-3 mb-5">
              <img className="h-auto w-9 rounded-full" src="img/img1.png" alt="" srcset="" />
              <div className="w-full truncate">
                <p className="font-medium truncate">Masiko Ratib romion</p>
                <p className="text-xs text-[var(--main)]">Miami</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center mb-2">
                <button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-phone-call"></i></button>
                <p className="text-sm text-gray-600"> +157744469</p>
              </div>
              <div className="flex items-center">
                <div><button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-envelope"></i></button></div>
                <p className="text-sm text-gray-600 truncate"> justinroman@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 bg-white rounded-lg shadow-md shadow-gray-200 w-full truncate">
            <div className="flex items-center gap-3 mb-5">
              <img className="h-auto w-9 rounded-full" src="img/img2.png" alt="" srcset="" />
              <div className="w-full truncate">
                <p className="font-medium truncate">Masiko Ratib romion</p>
                <p className="text-xs text-[var(--main)]">Miami</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center mb-2">
                <button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-phone-call"></i></button>
                <p className="text-sm text-gray-600"> +157744469</p>
              </div>
              <div className="flex items-center">
                <div><button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-envelope"></i></button></div>
                <p className="text-sm text-gray-600 truncate"> myemail@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 bg-white rounded-lg shadow-md shadow-gray-200 w-full truncate">
            <div className="flex items-center gap-3 mb-5">
              <img className="h-auto w-9 rounded-full" src="img/img4.png" alt="" srcset="" />
              <div className="w-full truncate">
                <p className="font-medium truncate">Masiko Ratib romion</p>
                <p className="text-xs text-[var(--main)]">Miami</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center mb-2">
                <button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-phone-call"></i></button>
                <p className="text-sm text-gray-600"> +157744469</p>
              </div>
              <div className="flex items-center">
                <div><button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-envelope"></i></button></div>
                <p className="text-sm text-gray-600 truncate"> myemail@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 bg-white rounded-lg shadow-md shadow-gray-200 w-full truncate">
            <div className="flex items-center gap-3 mb-5">
              <img className="h-auto w-9 rounded-full" src="img/img3.png" alt="" srcset="" />
              <div className="w-full truncate">
                <p className="font-medium truncate">Masiko Ratib romion</p>
                <p className="text-xs text-[var(--main)]">Miami</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center mb-2">
                <button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-phone-call"></i></button>
                <p className="text-sm text-gray-600"> +157744469</p>
              </div>
              <div className="flex items-center">
                <div><button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-envelope"></i></button></div>
                <p className="text-sm text-gray-600 truncate"> myemail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div id="mobile-menu" className="items-start w-full gap-24 mt-20 max-[800px]:gap-20 fixed left-0 z-50 hidden top-14 lg:hidden h-screen px-4">
      <div className="bg-[var(--main)] text-white rounded-xl py-9 w-2/12 max-[800px]:w-full overflow-y-auto h-3/4 flex flex-col justify-between">
        <div>
        <button className="flex items-center px-5 py-2 mb-3 w-44 active-now"><i className="pr-4 text-2xl fi fi-sr-house-blank"></i>Home</button>
        <a href="staff"><button className="flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-users"></i>Staff</button></a>
        <a href="projects"><button className="flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-briefcase"></i>Projects</button></a>
        <a href="clients"><button className="flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-life-ring"></i>Clients</button></a>
        <a href="request"><button className="flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-code-pull-request"></i>Requests</button></a>
        <a href="chats"><button className="flex items-center px-5 py-2 mb-3 w-44"><i className="pr-4 text-2xl fi fi-sr-comment-alt"></i>Chats</button></a>
        </div>
        <a href="login"><button className="flex items-center px-5 py-0 mt-24 w-44"><i className="pr-4 text-2xl fi fi-sr-power"></i>Log out</button></a>
      </div>
  </div>

   {/* pop up */}
  <div id="popup" className="fixed top-0 left-0 flex items-center justify-center hidden w-full h-full bg-black bg-opacity-50">
    <div className="w-8/12 bg-white overflow-y-auto px-7 py-7 rounded-xl max-sm:w-11/12 h-[90%]">
      <div className="flex items-start justify-between">
        <p className="text-xl font-bold w-[80%]">Installing at kawanda police station</p>
        <button id="close-popup" onClick={closeUp} className="rounded-full bg-[var(--lighter)] w-7 h-7 text-xs pt-0.5"><i className="leading-3 fi fi-br-cross"></i></button>
      </div>
      <div className="flex items-start gap-10 mt-8 max-sm:flex-col">
        <div className="w-1/2 max-sm:w-full">
          <h1 className="mb-2 text-base font-bold">Client</h1>
          <div className="px-4 py-4 rounded-lg shadow-lg shadow-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <div>
                <img className="h-auto rounded-full w-9" src="img/img1.png" alt="" srcset="" />
              </div>
              <div>
                <p className="font-medium">Masiko Ratib</p>
                <p className="text-xs text-[var(--main)]">Miami</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center mb-2">
                <button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-phone-call"></i></button>
                <p className="text-gray-600"> +157744469</p>
              </div>
              <div className="flex items-center">
                <button className="bg-[var(--lighter)] text-[var(--main)] text-sm w-7 h-7 rounded-full pt-0.5 leading-none mr-2"><i className="fi fi-rr-envelope"></i></button>
                <p className="text-gray-600"> myemail@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <p className="mb-2 text-base font-bold">What to do</p>
            <p>Select a suitable location, install the AC unit securely, ensure proper 
              electrical connections, and maintain regular maintenance for 
              optimal performance.
            </p>
          </div>
          <div className="mt-7">
            <p className="mb-2 text-base font-bold">Duration</p>
            <p>2 Days</p>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full">
          <p className="mb-2 text-base font-bold">Assignee(s)</p>
          <div className="flex items-start gap-2">
            <div className="w-1/2 px-4 py-4 rounded-lg shadow-lg shadow-gray-200">
              <div className="mb-5 ">
                <div>
                  <img className="h-auto rounded-full w-9" src="img/img4.png" alt="" srcset="" />
                </div>
                <div>
                  <p className="font-medium">Magic Mike</p>
                  <p className="text-xs text-gray-500">Staff</p>
                </div>
              </div>
              <div className="mb-2 ">
                <button className="text-[var(--main)] bg-[var(--lighter)] rounded-lg leading-none mr-2 h-8 w-full">Message</button>
              </div>
            </div>
            <div className="w-1/2 px-4 py-4 rounded-lg shadow-lg shadow-gray-200">
              <div className="mb-5 ">
                <div>
                  <img className="h-auto rounded-full w-9" src="img/img4.png" alt="" srcset="" />
                </div>
                <div>
                  <p className="font-medium">Magic Mike</p>
                  <p className="text-xs text-gray-500">Staff</p>
                </div>
              </div>
              <div className="mb-2 ">
                <button className="text-[var(--main)] bg-[var(--lighter)] rounded-lg leading-none mr-2 h-8 w-full">Message</button>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full gap-5 mt-20">
            <button className="w-1/2 h-10 rounded-lg text-[var(--main)] border border-[var(--main)]">Check list</button>
            <button className="w-1/2 text-white bg-[var(--main)] rounded-lg h-10"><i className="fi fi-rr-file-download"></i> User Manual</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  

</div>
  );
}

export default App;
