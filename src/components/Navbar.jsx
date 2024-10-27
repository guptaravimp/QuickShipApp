import React from 'react'

function Navbar() {
  return (
    <div>
    <nav  class="bg-white border-b border-gray-200 dark:bg-gray-900  text-xl">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* <!-- Logo --> */}
        
  
        {/* <!-- Navigation Links --> */}
        <div class="hidden md:flex md:items-center md:space-x-8">
          <a href="#" class="text-gray-900 py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home</a>
          <a href="#" class="text-gray-900 py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About</a>
          <a href="#" class="text-gray-900 py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Services</a>
          <a href="#" class="text-gray-900 py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pricing</a>
          <a href="#" class="text-gray-900 py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact</a>
        </div>
        <a href="#" class="flex items-center  ">
          <img className='h-[40px] w-[170px]' src="https://www.clinikally.com/cdn/shop/files/Clinikally_LOGO_for_Website_240x.png?v=1672654638" class="h-8" alt="Clinikally Logo" />
        </a>
        {/* <!-- Action Buttons --> */}
        <div class="flex items-center space-x-4">
          {/* <!-- Newsletter Button --> */}
        
  
          {/* <!-- Login Link --> */}
          <a href="/account/login" class="flex items-center p-2 text-gray-600 hover:text-gray-800" aria-label="Login">
            <svg class="w-4 h-5" fill="none" viewBox="0 0 14 19">
              <path d="M0.334 18.333C0.334 16.565 1.036 14.87 2.287 13.619 3.537 12.369 5.233 11.667 7.001 11.667 8.769 11.667 10.464 12.369 11.715 13.619 12.965 14.87 13.667 16.565 13.667 18.333H12C12 17.007 11.474 15.735 10.536 14.798 9.599 13.86 8.327 13.333 7.001 13.333 5.675 13.333 4.403 13.86 3.465 14.798 2.527 15.735 2.001 17.007 2.001 18.333H0.334zM7.001 10.833C4.238 10.833 2.001 8.596 2.001 5.833 2.001 3.071 4.238 0.833 7.001 0.833 9.763 0.833 12.001 3.071 12.001 5.833 12.001 8.596 9.763 10.833 7.001 10.833zM7.001 9.167C8.842 9.167 10.334 7.675 10.334 5.833 10.334 3.992 8.842 2.5 7.001 2.5 5.159 2.5 3.667 3.992 3.667 5.833 3.667 7.675 5.159 9.167 7.001 9.167z" fill="currentColor"></path>
            </svg>
            <span class="ml-1">Login</span>
          </a>
  
          {/* <!-- Cart Link --> */}
          <a href="/cart" class="flex items-center p-2 text-gray-600 hover:text-gray-800" aria-label="Cart">
            {/* <svg class="w-5 h-5" fill="none" viewBox="0 0 18 20">
              <path d="M468.575 449.94C468.575 460.796 459.787 469.58 448.965 469.58L429.262 469.58V489.318c.185 6.99-3.607 13.699-9.803 17.353C413.351 510.339 405.766 510.339 399.568 506.687c-6.095-3.648-9.795-10.357-9.703-17.463L389.856 469.58h-19.703c-7.123.197-13.784-3.554-17.388-9.673C349.154 446.092 349.154 439.372 352.762 433.85c3.609-3.12 9.269-6.31 17.376-6.208l19.703-.001V410.563c.278-10.658 8.974-19.244 19.704-19.244s19.704 8.586 20 19.244l.001 19.64h19.703c10.824 0 19.707 8.779 19.614 19.635zM468.575 142.815L468.575 331.808c.185 7.105-3.515 13.816-9.712 17.467C452.757 352.829 445.079 352.829 438.974 349.276c-6.197-4.248-9.897-10.959-10.002-18.065L429.262 162.454h-39.404l-39.404 58.691c-.07 10.856-8.873 19.639-19.788 19.639s-19.694-8.783-19.694-19.639V162.454h-39.404V469.58h208.112c10.825 0 19.707-8.779 19.707-19.635 0-10.856-8.882-19.639-19.707-19.639H43.343C32.522 508.957 23.641 500.174 23.641 489.318V142.815c0-10.857 8.879-19.639 19.705-19.639h59.034c8.77-64.349 65.473-115.964 124.925-115.964s116.149 51.615 124.925 115.964h59.034C459.787 123.076 468.575 131.958 468.575 142.815zM349.155 123.077C341.477 77.679 302.071 44.322 256.005 44.322S170.533 77.679 162.855 123.077z" fill="#8C30F5"></path>
            </svg> */}
           <svg className='h-15 w-15' xmlns="http://www.w3.org/2000/svg" width="47.998" height="40.34"><g fill="#1a171b"><path d="M47.273 0h-6.544a.728.728 0 0 0-.712.58L38.63 7.219H.727a.727.727 0 0 0-.7.912l4.6 17.5c.006.021.019.037.026.059a.792.792 0 0 0 .042.094.747.747 0 0 0 .092.135.831.831 0 0 0 .065.068.626.626 0 0 0 .167.107.285.285 0 0 0 .045.029l13.106 5.145-5.754 2.184a4.382 4.382 0 1 0 .535 1.353l7.234-2.746 6.866 2.7A4.684 4.684 0 1 0 27.6 33.4l-5.39-2.113 13.613-5.164c.013-.006.021-.016.033-.021a.712.712 0 0 0 .188-.119.625.625 0 0 0 .063-.072.654.654 0 0 0 .095-.135.58.58 0 0 0 .04-.1.73.73 0 0 0 .033-.084l5.042-24.137h5.953a.728.728 0 0 0 0-1.455zM8.443 38.885a3.151 3.151 0 1 1 3.152-3.15 3.155 3.155 0 0 1-3.152 3.15zm23.1-6.3a3.151 3.151 0 1 1-3.143 3.149 3.155 3.155 0 0 1 3.148-3.152zM25.98 8.672l-.538 7.3H14.661l-.677-7.295zm-.645 8.75-.535 7.293h-9.328l-.672-7.293zM1.671 8.672h10.853l.677 7.3h-9.61zm2.3 8.75h9.362l.677 7.293H5.892zM20.2 30.5 9.175 26.17H31.6zm14.778-5.781h-8.722l.537-7.293h9.7zm1.822-8.752h-9.9l.537-7.295h10.889z"/><circle cx="8.443" cy="35.734" r=".728"/><circle cx="31.548" cy="35.734" r=".728"/></g></svg>
            <span class="ml-1">Cart</span>
            <span class="ml-2 bg-red-500 text-white rounded-full px-2 text-xs">0</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
  

  )
}

export default Navbar
