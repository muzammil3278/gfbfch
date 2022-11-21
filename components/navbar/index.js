// import React from "react";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function index() {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);

//   return (
//     <>
//       <nav class="navbar pt-8 pb-8 social-bg relative">
//         <div class="container d-flex justify-content-between">
//           <Link class="pt-8 fs-24 fw-700" href="/">
//             <Image src="/logo.png" height={50} width={150} alt="logo" />
//           </Link>
//           <div className="menu d-lg-block d-md-none d-sm-none d-sx-none">
//             <ul class="d-xl-flex d-lg-flex">
//               <li class=" mr-20">
//                 <Link href="/">
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li class=" mr-20">
//                 <Link href="/service">
//                   <span>Services</span>
//                 </Link>
//               </li>
//               <li class=" mr-20">
//                 <Link href="/portfolio">
//                   <span>Portfolio</span>
//                 </Link>
//               </li>
//               <li class=" mr-20">
//                 <Link href="/about">
//                   <span>About</span>
//                 </Link>
//               </li>
//               <li class=" mr-20">
//                 <Link href="/contact">
//                   <span>Contact</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <button
//             class="d-lg-none mt-8 pt-6 pb-6 pl-4 pr-4"
//             type="button"
//             id="oi-menu"
//             onClick={() => {
//               setIsNavExpanded(!isNavExpanded);
//             }}
//           >
//             Menu
//           </button>
//         </div>
//       </nav>
//       <div
//         className={
//           isNavExpanded
//             ? "navigation-menu expanded relative"
//             : "fixed bg-danger absolute navigation-menu d-lg-none d-md-none d-sm-none d-sx-none w-50"
//         }
//       >
       
//         <ul class="overlay d-md-block vh-100 bg-danger text-white w-50  mt-52 ">
//               <li class="pt-20 pb-10 pl-10">
//                 <Link href="/">
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li class="pt-20 pb-10 pl-10">
//                 <Link href="/service">
//                   <span>Services</span>
//                 </Link>
//               </li>
//               <li class="pt-20 pb-10 pl-10">
//                 <Link href="/portfolio">
//                   <span>Portfolio</span>
//                 </Link>
//               </li>
//               <li class="pt-20 pb-10 pl-10">
//                 <Link href="/about">
//                   <span>About</span>
//                 </Link>
//               </li>
//               <li class="pt-20 pb-10 pl-10">
//                 <Link href="/contact">
//                   <span>Contact</span>
//                 </Link>
//               </li>
//             </ul>
//       </div>
//     </>
//   );
// }
