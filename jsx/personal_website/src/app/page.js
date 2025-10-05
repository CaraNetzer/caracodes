import Image from "next/image";

export default function Home() {
  return (
  <title>
   CaraCodes
  </title>
  <link href="/css/style.css" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono&amp;display=swap" rel="stylesheet"/>
 </head>
 <body>
  <div id="grid-container">
   <ul class="nav">
    <li class="typewriter">
     <h1>
      <a href="/html/main.html" id="home" title="Home">
       CaraCodes
      </a>
     </h1>
    </li>
    <div id="nav-left">
     <li>
      <a href="/html/resume.html">
       Resume
      </a>
     </li>
     <li>
      <a href="/html/library.html">
       Library
      </a>
     </li>
     <li>
      <a href="/html/blog.html">
       Blog
      </a>
     </li>
    </div>
   </ul>
   <div id="main-content">
    <h1 id="subtitle">
     [Placeholder text. Hi, my name is Cara. I am passionate about public sector web development.
     <span id="shuffle">
      🔀
     </span>
     ]
    </h1>
    <hr/>
    <h1>
     Tech Stack
    </h1>
    <div id="svg-logos">
     <div class="logo">
      <svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
       <path d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100" fill="#E44D26">
       </path>
       <path d="M50.093 92.344V7.39h36.048l-6.88 76.811" fill="#F16529">
       </path>
       <path d="M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32" fill="#EBEBEB">
       </path>
       <path d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271" fill="#fff">
       </path>
      </svg>
      <span>
       HTML
      </span>
     </div>
     <div class="logo">
      <svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
       <path d="m94.175 0-8.033 89.99L50.034 100l-36.01-9.996L6 0z" fill="#264DE4">
       </path>
       <path d="m79.265 84.26 6.864-76.9H50.087v84.988z" fill="#2965F1">
       </path>
       <path d="m24.396 40.74.99 11.039h24.702V40.74zm25.692-22.342h-27.68l1.003 11.038h26.676zm-.001 62.495V69.408l-.048.013-12.294-3.32-.786-8.803H25.878l1.547 17.332 22.612 6.277z" fill="#EBEBEB">
       </path>
       <path d="m63.642 51.779-1.281 14.316-12.312 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.27-2.965L77.7 18.398H50.05v11.038h15.555L64.599 40.74H50.05v11.04z" fill="#fff">
       </path>
      </svg>
      <span>
       CSS
      </span>
     </div>
     <div class="logo">
      <svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
       <path d="M100 0H0v100h100z" fill="#F7DF1E">
       </path>
       <path d="M67.175 78.125c2.014 3.29 4.634 5.707 9.27 5.707 3.893 0 6.38-1.946 6.38-4.635 0-3.222-2.555-4.364-6.84-6.238l-2.35-1.008c-6.781-2.89-11.286-6.508-11.286-14.159 0-7.047 5.37-12.413 13.762-12.413 5.975 0 10.27 2.08 13.365 7.524l-7.317 4.699c-1.612-2.89-3.35-4.027-6.048-4.027-2.752 0-4.497 1.746-4.497 4.027 0 2.819 1.746 3.96 5.778 5.706l2.35 1.006c7.983 3.424 12.491 6.915 12.491 14.762 0 8.46-6.646 13.096-15.571 13.096-8.727 0-14.365-4.16-17.124-9.61zm-33.196.815c1.477 2.619 2.82 4.833 6.048 4.833 3.087 0 5.035-1.208 5.035-5.905V45.916h9.397v32.08c0 9.73-5.705 14.158-14.032 14.158-7.524 0-11.881-3.894-14.097-8.583z" fill="#000">
       </path>
      </svg>
      <span>
       Javascript
      </span>
     </div>
     <div class="logo">
      <svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
       <path d="M94.094 29.11c0-1.664-.356-3.136-1.076-4.398-.708-1.242-1.767-2.282-3.188-3.105C78.102 14.844 66.362 8.102 54.637 1.333c-3.16-1.825-6.225-1.758-9.363.093-4.668 2.752-28.04 16.143-35.005 20.177-2.868 1.66-4.264 4.202-4.265 7.504-.004 13.6 0 27.2-.004 40.8 0 1.63.342 3.072 1.03 4.315.708 1.28 1.782 2.349 3.235 3.19 6.965 4.034 30.34 17.424 35.008 20.177 3.139 1.853 6.203 1.919 9.365.094 11.725-6.77 23.466-13.512 35.196-20.275 1.453-.841 2.528-1.91 3.235-3.19.688-1.243 1.03-2.685 1.03-4.314 0 0 0-27.193-.005-40.793" fill="#A179DC">
       </path>
       <path d="M50.184 49.375 7.03 74.222c.708 1.28 1.782 2.349 3.235 3.19 6.965 4.034 30.34 17.424 35.008 20.177 3.139 1.853 6.203 1.919 9.365.094 11.725-6.77 23.466-13.512 35.196-20.275 1.453-.841 2.528-1.911 3.235-3.19z" fill="#280068">
       </path>
       <path d="M94.095 29.11c-.001-1.664-.357-3.136-1.077-4.398L50.184 49.375 93.07 74.22c.688-1.244 1.03-2.686 1.03-4.315 0 0 0-27.193-.005-40.793" fill="#390091">
       </path>
       <path d="M75.592 40.086v4.645h4.644v-4.645h2.323v4.645h4.644v2.322H82.56v4.644h4.644v2.322H82.56v4.645h-2.323v-4.645h-4.644v4.645H73.27v-4.645h-4.644v-2.322h4.644v-4.644h-4.644v-2.322h4.644v-4.645zm4.644 6.967h-4.644v4.644h4.644z" fill="#fff">
       </path>
       <path d="M50.279 16.761c12.114 0 22.69 6.58 28.356 16.358l-.056-.094-14.253 8.207c-2.808-4.754-7.955-7.963-13.861-8.03h-.186c-9.006 0-16.306 7.3-16.306 16.305a16.23 16.23 0 0 0 2.15 8.09c2.81 4.907 8.095 8.217 14.156 8.217 6.099 0 11.413-3.352 14.209-8.31l-.068.118 14.231 8.245c-5.603 9.696-16.034 16.254-28.007 16.385l-.365.002c-12.152 0-22.759-6.62-28.41-16.45a32.6 32.6 0 0 1-4.337-16.297c0-18.085 14.661-32.746 32.747-32.746" fill="#fff">
       </path>
      </svg>
      <span>
       C#
      </span>
     </div>
     <div class="logo">
      <svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
       <path d="M49.64 0C24.254 0 25.839 11.009 25.839 11.009l.028 11.406h24.225v3.424H16.245S0 23.997 0 49.61c0 25.615 14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.18 13.952-14.18H60.62s13.5.219 13.5-13.046V13.273S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 0 1 4.358 4.358 4.356 4.356 0 0 1-6.027 4.028 4.35 4.35 0 0 1-2.69-4.028 4.355 4.355 0 0 1 4.359-4.358" fill="url(#a)">
       </path>
       <path d="M50.36 99.48c25.387 0 23.802-11.009 23.802-11.009l-.028-11.405H49.908V73.64h33.847S100 75.485 100 49.869c0-25.615-14.179-24.706-14.179-24.706H77.36v11.886s.457 14.179-13.952 14.179H39.38s-13.5-.218-13.5 13.047v21.933S23.83 99.48 50.36 99.48m13.359-7.67a4.355 4.355 0 0 1-4.028-6.026 4.35 4.35 0 0 1 4.028-2.69 4.355 4.355 0 0 1 4.027 6.027 4.355 4.355 0 0 1-4.027 2.69" fill="url(#b)">
       </path>
       <defs>
        <lineargradient gradientunits="userSpaceOnUse" id="a" x1="9.61" x2="59.167" y1="8.948" y2="58.01">
         <stop stop-color="#387EB8">
         </stop>
         <stop offset="1" stop-color="#366994">
         </stop>
        </lineargradient>
        <lineargradient gradientunits="userSpaceOnUse" id="b" x1="40.028" x2="93.247" y1="40.453" y2="90.762">
         <stop stop-color="#FFE052">
         </stop>
         <stop offset="1" stop-color="#FFC331">
         </stop>
        </lineargradient>
       </defs>
      </svg>
      <span>
       Python
      </span>
     </div>
     <div class="logo">
      <svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
       <path d="M87.356 20.423 55.83 1.694c-3.73-2.203-8.39-2.203-12.204 0L12.102 20.423C8.372 22.626 6 26.779 6 31.27v37.458c0 4.492 2.288 8.56 6.102 10.847l31.525 18.73c1.864 1.1 3.983 1.694 6.102 1.694 2.118 0 4.237-.593 6.102-1.695l31.525-18.729c3.729-2.203 6.102-6.356 6.102-10.847V31.186c0-4.407-2.288-8.56-6.102-10.763" fill="#fff">
       </path>
       <path d="M87.356 20.423 55.83 1.694C53.966.592 51.847 0 49.729 0s-4.237.593-6.102 1.695L12.102 20.423C8.372 22.626 6 26.779 6 31.27v37.458c0 4.492 2.288 8.56 6.102 10.847l31.525 18.73c1.864 1.1 3.983 1.694 6.102 1.694 2.118 0 4.237-.593 6.102-1.695l31.525-18.729c3.729-2.203 6.102-6.356 6.102-10.847V31.186c0-4.407-2.288-8.56-6.102-10.763M44.729 96.27 13.203 77.542c-3.05-1.865-5-5.255-5-8.899V31.186c0-3.645 1.95-7.12 5-8.899L44.73 3.558c1.525-.932 3.22-1.355 5-1.355s3.474.508 5 1.355l31.525 18.73c2.627 1.525 4.322 4.237 4.83 7.203-1.016-2.204-3.39-2.882-6.186-1.271L55.153 46.694c-3.73 2.203-6.441 4.576-6.441 9.068v36.78c0 2.711 1.101 4.406 2.712 4.915-.509.085-1.102.17-1.695.17-1.695.084-3.475-.424-5-1.357" fill="#2A3238">
       </path>
       <path d="m79.135 72.287-7.881 4.661c-.17.085-.339.255-.339.509v2.034c0 .254.17.339.339.254l7.966-4.83c.17-.085.254-.34.254-.594v-1.78c0-.254-.17-.338-.339-.254" fill="#4DA925">
       </path>
       <path d="M62.356 55c.254-.17.423 0 .508.338v2.712c1.102-.424 2.119-.593 3.051-.339.17.085.254.339.17.593l-.594 2.373-.254.509c-.085.084-.085.084-.17.084-.084 0-.169.085-.254 0-.423-.085-1.356-.339-2.881.509-1.61.847-2.203 2.203-2.119 3.22 0 1.271.678 1.61 2.797 1.61 2.881.085 4.153 1.356 4.237 4.238 0 2.88-1.525 6.017-3.898 7.88l.085 2.713c0 .339-.17.678-.424.847L61 83.22c-.254.17-.424 0-.509-.338v-2.628c-1.356.594-2.712.678-3.644.34-.17-.085-.254-.34-.17-.594l.594-2.457c.085-.17.17-.424.254-.509.085-.085.085-.085.17-.085q.127-.126.254 0c.932.34 2.203.17 3.305-.423 1.526-.763 2.458-2.289 2.458-3.814 0-1.356-.763-1.95-2.543-1.95-2.288 0-4.406-.423-4.491-3.813 0-2.796 1.44-5.678 3.729-7.457V56.78c0-.34.17-.678.423-.848z" fill="#fff">
       </path>
      </svg>
      <span>
       Bash
      </span>
     </div>
     <div class="logo">
      <svg viewbox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
       <path d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z" fill="#F34F29">
       </path>
      </svg>
      <span>
       Git
      </span>
     </div>
     <div class="logo">
      <svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
       <path d="M31.529 81.056C14.013 81.056 0 67.044 0 49.528s14.013-31.529 31.529-31.529H68.47c17.517 0 31.53 14.013 31.53 31.529S85.987 81.056 68.471 81.056zM67.516 69.91c11.465 0 20.382-9.236 20.382-20.382 0-11.465-9.236-20.382-20.382-20.382H32.484c-11.465 0-20.382 9.235-20.382 20.382 0 11.146 9.236 20.382 20.382 20.382z" fill="#C74634">
       </path>
      </svg>
      <span>
       Oracle PL/SQL
      </span>
     </div>
     <div class="logo">
      <svg fill="#000000" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewbox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
       <g id="SVGRepo_bgCarrier" stroke-width="0">
       </g>
       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
       </g>
       <g id="SVGRepo_iconCarrier">
        <rect height="800" id="Icons" style="fill:none;" width="1280" x="-1088" y="-64">
        </rect>
        <g id="Icons1" serif:id="Icons">
         <g id="Strike">
         </g>
         <g id="H1">
         </g>
         <g id="H2">
         </g>
         <g id="H3">
         </g>
         <g id="list-ul">
         </g>
         <g id="hamburger-1">
         </g>
         <g id="hamburger-2">
         </g>
         <g id="list-ol">
         </g>
         <g id="list-task">
         </g>
         <g id="trash">
         </g>
         <g id="vertical-menu">
         </g>
         <g id="horizontal-menu">
         </g>
         <g id="sidebar-2">
         </g>
         <g id="Pen">
         </g>
         <g id="Pen1" serif:id="Pen">
         </g>
         <g id="clock">
         </g>
         <g id="external-link">
         </g>
         <g id="hr">
         </g>
         <g id="info">
         </g>
         <g id="warning">
         </g>
         <g id="plus-circle">
         </g>
         <g id="minus-circle">
         </g>
         <g id="vue">
         </g>
         <g id="cog">
         </g>
         <g id="logo">
         </g>
         <g id="radio-check">
         </g>
         <g id="eye-slash">
         </g>
         <g id="eye">
         </g>
         <g id="toggle-off">
         </g>
         <g id="shredder">
         </g>
         <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]">
         </g>
         <g id="react">
          <circle cx="32.001" cy="31.955" r="4.478" style="fill:#00d8ff;">
          </circle>
          <path d="M32.33,22.516c7.635,0.052 15.965,0.609 21.683,5.708c0.168,0.15 0.33,0.306 0.488,0.467c1.349,1.375 2.054,3.595 0.965,5.422c-2.234,3.751 -7.23,5.387 -12.067,6.394c-7.234,1.506 -14.798,1.518 -22.029,0.192c-4.161,-0.764 -8.416,-2.103 -11.373,-4.904c-1.151,-1.09 -2.135,-2.524 -1.981,-4.12c0.25,-2.582 2.727,-4.239 4.812,-5.361c5.791,-3.116 12.847,-3.813 19.502,-3.798Zm-0.554,1.173c-7.224,0.049 -15.043,0.51 -20.621,5.129c-0.195,0.161 -0.383,0.33 -0.564,0.507c-0.117,0.114 -0.23,0.233 -0.339,0.355c-0.979,1.1 -1.316,2.867 -0.392,4.188c0.93,1.329 2.342,2.288 3.796,3.07c5.438,2.924 11.864,3.443 18.129,3.465c6.343,0.023 12.884,-0.555 18.487,-3.452c2.232,-1.155 4.744,-2.851 4.655,-5.035c-0.082,-2.004 -2.036,-3.242 -3.499,-4.126c-0.396,-0.239 -0.803,-0.46 -1.216,-0.668c-5.562,-2.787 -12.08,-3.447 -18.436,-3.433Z" style="fill:#00d8ff;">
          </path>
          <path d="M42.115,10.703c2.793,0.071 4.24,3.429 4.431,5.909c0.038,0.493 0.052,0.988 0.046,1.483c-0.006,0.536 -0.035,1.072 -0.082,1.606c-0.589,6.612 -3.608,12.909 -7.163,18.724c-3.477,5.688 -7.717,11.36 -13.485,13.996c-1.907,0.872 -4.175,1.41 -5.863,0.437c-2.314,-1.333 -2.567,-4.451 -2.524,-6.816c0.011,-0.581 0.049,-1.162 0.109,-1.741c0.889,-8.56 5.228,-16.669 10.658,-23.655c3.168,-4.076 6.937,-8.119 11.632,-9.583c0.739,-0.231 1.326,-0.371 2.241,-0.36Zm-0.134,1.172c-3.279,0.052 -6.223,2.482 -8.83,5.007c-6.854,6.637 -11.905,15.464 -13.937,24.721c-0.157,0.717 -0.289,1.439 -0.386,2.166c-0.075,0.563 -0.13,1.129 -0.159,1.697c-0.023,0.452 -0.031,0.905 -0.017,1.358c0.01,0.354 0.033,0.708 0.072,1.06c0.029,0.269 0.068,0.537 0.117,0.803c0.037,0.197 0.08,0.393 0.13,0.588c0.041,0.158 0.087,0.315 0.139,0.471c0.409,1.233 1.463,2.411 2.878,2.45c3.301,0.09 6.409,-2.317 9.096,-4.933c4.717,-4.591 8.232,-10.36 10.978,-16.424c2.216,-4.896 4.243,-10.218 3.111,-15.607c-0.043,-0.204 -0.093,-0.406 -0.15,-0.606c-0.047,-0.163 -0.1,-0.324 -0.158,-0.483c-0.44,-1.199 -1.475,-2.271 -2.884,-2.268Z" style="fill:#00d8ff;">
          </path>
          <path d="M22.109,10.747c3.564,0.069 6.765,2.488 9.607,5.197c5.186,4.943 9.011,11.231 11.913,17.849c2.248,5.127 4.316,10.882 2.478,16.292c-0.579,1.705 -2.044,3.265 -3.997,3.305c-3.581,0.072 -6.9,-2.532 -9.78,-5.335c-7.225,-7.034 -12.589,-16.32 -14.427,-26.168c-0.132,-0.704 -0.237,-1.414 -0.309,-2.127c-0.059,-0.582 -0.096,-1.167 -0.106,-1.752c-0.008,-0.472 0.002,-0.944 0.035,-1.414c0.022,-0.314 0.054,-0.626 0.097,-0.937c0.041,-0.292 0.093,-0.583 0.158,-0.871c0.043,-0.191 0.091,-0.38 0.146,-0.568c0.539,-1.843 1.941,-3.485 4.185,-3.471Zm-0.135,1.173c-2.087,0.046 -3.042,2.507 -3.234,4.234c-0.039,0.354 -0.063,0.711 -0.074,1.068c-0.014,0.456 -0.008,0.913 0.015,1.369c0.328,6.599 3.278,12.979 6.838,18.821c3.352,5.5 7.4,10.978 12.968,13.794c1.608,0.813 3.562,1.452 4.951,0.684c1.742,-0.964 1.956,-3.261 2.049,-4.973c0.025,-0.466 0.028,-0.934 0.013,-1.401c-0.018,-0.586 -0.064,-1.171 -0.133,-1.753c-0.642,-5.437 -3.05,-10.582 -5.816,-15.444c-3.442,-6.048 -7.659,-12.076 -13.627,-15.225c-1.236,-0.652 -2.574,-1.185 -3.95,-1.174Z" style="fill:#00d8ff;">
          </path>
         </g>
         <g id="check-selected">
         </g>
         <g id="turn-off">
         </g>
         <g id="code-block">
         </g>
         <g id="user">
         </g>
         <g id="coffee-bean">
         </g>
         <g id="coffee-beans">
          <g id="coffee-bean1" serif:id="coffee-bean">
          </g>
         </g>
         <g id="coffee-bean-filled">
         </g>
         <g id="coffee-beans-filled">
          <g id="coffee-bean2" serif:id="coffee-bean">
          </g>
         </g>
         <g id="clipboard">
         </g>
         <g id="clipboard-paste">
         </g>
         <g id="clipboard-copy">
         </g>
         <g id="Layer1">
         </g>
        </g>
       </g>
      </svg>
      <span>
       React
      </span>
     </div>
    </div>
    <hr/>
    <h1>
     Portfolio
    </h1>
    <div class="portfolio">
     <div class="project project1">
      <div style="font-weight:bold; text-align:center;">
       30 Second Farm
       <br/>
       February 2023
       <br/>
       <a href="https://www.youtube.com/watch?v=s5Cf9bQtLks&amp;ab_channel=CaraNetzer" target="_blank">
        <img alt="30 Second Farm project thumbnail" src="../images/30-Second-Farm-thumbnail.png"/>
       </a>
      </div>
     </div>
     <div class="project project2">
      <div style="font-weight:bold; text-align:center;">
       Sprite[0]
       <br/>
       December 2022
       <br/>
       <a href="https://www.youtube.com/watch?v=fN48v7ZmaWk&amp;ab_channel=CaraNetzer" target="_blank">
        <img alt="sprite[0] project thumbnail" src="../images/Sprite%5B0%5D-thumbnail.png"/>
       </a>
      </div>
     </div>
     <div class="project project3">
      <div style="font-weight:bold; text-align:center;">
       Podcast Recommender
       <br/>
       August 2022
       <br/>
       <a href="https://www.youtube.com/watch?v=1zLuU1YBDWY&amp;ab_channel=CaraNetzer" target="_blank">
        <img alt="podcast recomender project thumbnail" src="../images/Podcast-Recommender-thumbnail.png"/>
       </a>
      </div>
     </div>
    </div>
    <hr/>
    <h1>
     Education
    </h1>
    <h3>
     NewForce - June 2022 - January 2023
    </h3>
    <p>
     Intensive full-time 6-month software development immersive training program focusing on full stack (C#/.NET) development fundamentals and problem solving. The final half of the program is executed in a simulated company environment with Scrum methodology. In Partnership with Mountwest Community Community &amp; Technical College (completed 75 CEUs).
    </p>
    <h3>
     Haverford College -  Class of 2020
    </h3>
    <p>
     B.A., Major in Sociology (Bryn Mawr College)
    </p>
    <h2>
     Relevant Coursework
    </h2>
    <div class="courses">
     <div class="course course1">
      <div>
       <b>
        Embedded Systems Essentials with Arm
       </b>
      </div>
      <div>
       ArmEducation - EdX
       <br/>
       October 2025 - Present
      </div>
     </div>
     <div class="course course2">
      <div>
       <b>
        Nand2Tetris: The Elements of Computing Systems
       </b>
      </div>
      <div>
       University of Jerusalem - Coursera
       <br/>
       November 2023 - September 2024
      </div>
     </div>
     <div class="course course3">
      <div>
       <b>
        Introduction to Software Testing
       </b>
      </div>
      <div>
       University of Minnesota - Coursera
       <br/>
       January 2023 - February 2023
      </div>
     </div>
     <div class="course course4">
      <div>
       <b>
        CS50's Introduction to Game Development
       </b>
      </div>
      <div>
       HarvardX - CS50G
       <br/>
       October 2022 - March 2023
      </div>
     </div>
     <div class="course course5">
      <div>
       <b>
        Discrete Mathematics
       </b>
      </div>
      <div>
       Bryn Mawr College - CMSC-B231
       <br/>
       Spring 2017
      </div>
     </div>
     <div class="course course6">
      <div>
       <b>
        Intro to Data Structures
       </b>
      </div>
      <div>
       Bryn Mawr College - CMSC-B206
       <br/>
       Spring 2017
      </div>
     </div>
     <div class="course course7">
      <div>
       <b>
        Intro to Computer Science
       </b>
      </div>
      <div>
       Haverford College - CMSC-H105
       <br/>
       Fall 2016
      </div>
     </div>
    </div>
    <hr/>
   </div>
   <div id="foot">
    <p>
     <a href="">
      Inspo
      <a>
      </a>
     </a>
    </p>
    <p>
     © Cara 2025
    </p>
   </div>
  );
}
