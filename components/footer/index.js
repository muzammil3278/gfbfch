import React from 'react'
import Social from '../about/comp/right/social'
import Link from 'next/link'

export default function index () {
  return (
    <div className="footer-bg pt-60 pb-50">
    <div className="container">
        <div className='row'>
            <div className='col-lg-12 '>
            <div className='footer-inner justify-content-center align-items-center text-center'>
                <div className='logo text-center'>
                    <img src="/logo.png" height={100} width={200} />
                </div>
                <div className='menu d-flex justify-content-center'>
                    <ul className='d-flex text-white'>
                    <li><Link className='ml-10 fs-16' href="/">Home</Link></li>
                    <li><Link className='ml-10 fs-16' href="/about">About</Link></li>
                    <li><Link className='ml-10 fs-16' href="/contact">Contact</Link></li>
                    <li><Link className='ml-10 fs-16' href="/service">Service</Link></li>
                    <li><Link className='ml-10 fs-16' href="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
                <div className='d-flex justify-content-center'><Social /></div>
                <div className='copyright text-center text-gray fs-14'>
                    <p>Copyright ©2022 All rights reserved | Muhammad Muzammil Safdar</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
