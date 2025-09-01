"use client";
import { useState } from "react";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";

export default function Header5({ links }) {
  const [productsOpen, setProductsOpen] = useState(false);

  const handleProductsClick = (e) => {
    // On touch devices, first tap opens the menu; second tap follows the link
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      e.preventDefault();
      setProductsOpen((v) => !v);
    }
  };

  return (
    <div className="main-nav-sub full-wrapper d-flex align-items-center">
      {/* Left: Logo */}
      <div className="nav-logo-wrap local-scroll me-3">
        <a href="#top" className="logo font-alt">
          <Image
            src="/assets/images/demo-elegant/logo-white-3.png"
            alt="Your Company Logo"
            width={170}
            height={12}
            priority
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>

      {/* Center: Nav */}
      <div className="inner-nav desktop-nav flex-grow-1">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks d-flex justify-content-center align-items-center mb-0">
          {/* Your existing links */}
          <Nav links={links} />

          {/* Products with dropdown */}
          <li
            className={`nav-item has-dropdown ${productsOpen ? "is-open" : ""}`}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <a
              href="/products"
              className="nav-link"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              onClick={handleProductsClick}
            >
              Products <span className="caret" aria-hidden="true" />
            </a>

            <ul className="dropdown-menu" role="menu">
              <li role="none">
                <a role="menuitem" href="/products/landlord" className="dropdown-link">
                  Landlord App
                </a>
              </li> 
            </ul>
          </li>
        </ul>
      </div>

      {/* Right: CTA */}
      <a
        href="https://themeforest.net/user/ib-themes/portfolio"
        className="opacity-1 no-hover ms-auto d-none d-lg-inline-block"
        target="_blank"
      >
        <span
          className="btn btn-mod btn-small btn-border-w btn-circle"
          data-btn-animate="y"
        >
          <span className="btn-animate-y">
            <span className="btn-animate-y-1">Get a Proposal</span>
            <span className="btn-animate-y-2" aria-hidden="true">
              Get a Proposal
            </span>
          </span>
        </span>
      </a>
    </div>
  );
}
