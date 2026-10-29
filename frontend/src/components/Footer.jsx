import React from "react";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const trustItems = [
  {
    icon: LocalShippingOutlinedIcon,
    title: "Free Delivery",
    text: "On orders above ₹999",
  },
  {
    icon: VerifiedUserOutlinedIcon,
    title: "Verified Sellers",
    text: "Every vendor is checked",
  },
  {
    icon: AssignmentReturnOutlinedIcon,
    title: "7-Day Returns",
    text: "Easy return, no questions",
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: "24/7 Support",
    text: "We are always here to help",
  },
];

const marketplaceLinks = [
  { label: "All Products", to: "/shop" },
  { label: "Top Vendors", to: "/vendors" },
  { label: "Categories", to: "/categories" },
  { label: "Deals & Offers", to: "/deals" },
  { label: "New Arrivals", to: "/new-arrivals" },
];

const supportLinks = [
  { label: "Track Your Order", to: "/track-order" },
  { label: "Shipping Info", to: "/shipping-info" },
  { label: "Return & Refund Policy", to: "/return-policy" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact Us", to: "/contact" },
];

const vendorLinks = [
  { label: "Vendor Login", to: "/vendor/login" },
  { label: "Seller Guidelines", to: "/seller-guidelines" },
  { label: "Commission & Fees", to: "/seller-fees" },
  { label: "Seller Support", to: "/seller-support" },
];

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: YouTubeIcon, label: "YouTube", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
];

const LinkColumn = ({ title, links, className = "", children }) => (
  <div className={`mt-8 md:mt-0 ${className}`}>
    <h3 className="font-medium lg:text-[15px] text-[12px] text-white">
      {title}
    </h3>

    <ul className="lg:mt-5 mt-3 lg:text-[13px] text-[11px] space-y-2 lg:space-y-3 text-white/70">
      {links.map((item) => (
        <li key={item.label}>
          <Link
            to={item.to}
            className="hover:text-white transition-colors duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>

    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* 1. Trust strip */}
      <div className="border-b border-white/15 lg:px-14 px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 py-6 lg:py-8">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3 lg:gap-4">
              <div className="shrink-0 flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-white/10">
                <Icon sx={{ color: "#fff", fontSize: 22 }} />
              </div>
              <div>
                <p className="text-white font-medium text-[11px] lg:text-[14px]">
                  {title}
                </p>
                <p className="text-white/60 text-[10px] lg:text-[11px]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main footer links */}
      <div className="lg:px-14 px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:gap-10 md:grid-cols-5 py-10 lg:py-14">
          {/* Brand + contact + newsletter + socials */}
          <div className="col-span-2">
            <h1 className="font-semibold text-white text-[16px] lg:text-[22px]">
              GizmoDeck.Co
            </h1>
            <p className="text-white/60 text-[11px] lg:text-[12px] mt-2 max-w-sm">
              One marketplace for gadgets from trusted sellers across India.
              Compare, buy, and track everything in one place.
            </p>

            <ul className="mt-5 space-y-2 text-white/70 text-[11px] lg:text-[12px]">
              <li className="flex items-center gap-2">
                <PlaceOutlinedIcon sx={{ fontSize: 16 }} />
                123 Maple Street, Springfield
              </li>
              <li className="flex items-center gap-2">
                <LocalPhoneIcon sx={{ fontSize: 16 }} />
                <a href="tel:+917665407031" className="hover:text-white">
                  +91 7665407031
                </a>
              </li>
              <li className="flex items-center gap-2">
                <EmailOutlinedIcon sx={{ fontSize: 16 }} />
                <a href="mailto:arman@gmail.com" className="hover:text-white">
                  arman@gmail.com
                </a>
              </li>
            </ul>

            <form className="lg:mt-7 mt-5">
              <label
                htmlFor="footer-newsletter"
                className="lg:text-[14px] text-[11px] block text-white font-medium"
              >
                Get deals from top vendors in your inbox
              </label>

              <div className="mt-4 relative lg:max-w-sm">
                <EmailOutlinedIcon
                  sx={{
                    color: "#eee",
                    fontSize: 16,
                    position: "absolute",
                    left: 2,
                    top: 5,
                  }}
                />
                <input
                  id="footer-newsletter"
                  className="lg:text-[13px] text-white outline-none text-[11px] border-white/60 pl-7 pr-9 w-full py-1 border-b placeholder:text-white/60 focus:border-white"
                  type="email"
                  placeholder="Enter your email..."
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute cursor-pointer right-0 top-1.5 flex justify-center items-center rounded-full "
                >
                  <EastOutlinedIcon sx={{ color: "#fff", fontSize: 16 }} />
                </button>
              </div>
            </form>

            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center h-9 w-9 rounded-full border border-white/25 text-white/80 hover:bg-white hover:text-black transition-colors"
                >
                  <Icon sx={{ fontSize: 17 }} />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Marketplace" links={marketplaceLinks} />
          <LinkColumn title="Customer Care" links={supportLinks} />
          <LinkColumn
            title="Sell With Us"
            links={vendorLinks}
            className="col-span-2 md:col-span-1"
          >
            <Link
              to="/become-a-seller"
              className="mt-6 inline-flex items-center gap-2 bg-white text-black font-medium text-[11px] lg:text-[13px] px-5 py-2 lg:py-2.5 rounded-full hover:bg-white/85 transition-colors"
            >
              <StorefrontOutlinedIcon sx={{ fontSize: 18 }} />
              Become a Seller
            </Link>
          </LinkColumn>
        </div>
      </div>

      <div className="lg:px-14 px-6 border-t border-white/15">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-5 lg:py-6">
          <p className="text-[11px] lg:text-[12px] text-white/60 text-center lg:text-left">
            © {new Date().getFullYear()} GizmoDeck.Co. All rights reserved.
          </p>

          <ul className="flex justify-center gap-5 lg:gap-8 text-[11px] lg:text-[12px] text-white/60">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
