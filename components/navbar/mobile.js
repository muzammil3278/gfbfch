import React from "react";

export default function mobile() {
  return (
    <div
      className={
        isNavExpanded
          ? "navigation-menu expanded"
          : "fixed bg-danger navigation-menu menu d-lg-block d-md-none d-sm-none d-sx-none"
      }
    >
      <ul class="d-xl-flex d-md-block w-60 vh-100 bg-danger ">
        <li class="w-100 pt-10 pb-10 text-center bg-info">
          <a href="#home-section">
            <span>Home</span>
          </a>
        </li>
        <li class=" mr-20">
          <a href="#services-section">
            <span>Services</span>
          </a>
        </li>
        <li class=" mr-20">
          <a href="#projects-section">
            <span>Projects</span>
          </a>
        </li>
        <li class=" mr-20">
          <a href="#about-section">
            <span>About</span>
          </a>
        </li>
        <li class=" mr-20">
          <a href="#testimony-section">
            <span>Testimony</span>
          </a>
        </li>
        <li class=" mr-20">
          <a href="#blog-section">
            <span>Blog</span>
          </a>
        </li>
        <li class=" mr-20">
          <a href="#contact-section">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
