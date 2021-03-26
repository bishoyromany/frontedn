import React, { useState } from "react";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/Landingpage.css";
import "./assets/css/animate.min.css";
import "./assets/css/apton-icons.css";
import "./assets/css/responsive.css";
import "./assets/css/fontawesome-all.min.css";
import "swiper/swiper.scss";
import "swiper/components/controller/controller.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/thumbs/thumbs.scss";

import LoginSignup from "../Auth/LoginSignup";
import AccordionItem from "./AccordionItem";
import Banner from "./Banner";
import BlockTitle from "./BlockTitle";
import Clients from "./Clients";
import Contact from "./Contact";
import CTAOne from "./CTAOne";
import CTAThree from "./CTAThree";
import CTATwo from "./CTATwo";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLinks";
import PageHeader from "./PageHeader";
import PostPagination from "./PostPagination";
import Pricing from "./Pricing";
import Services from "./Services";
import Testimonials from "./Testimonials";
import VideoOne from "./VideoOne";
import Popup from "../Helpers/Popups/Popup";
export default function Landingpage() {
  const [showPopup, toggleShowPopup] = useState(false);

  return (
    <div>
      <Popup
        toggleShowPopup={toggleShowPopup}
        showPopup={showPopup}
        component={LoginSignup}
      />
      {/* <Layout pageTitle="Mobilly Invite">
        <Header
          btnClass="main-nav__btn"
          extraClassName="site-header-one__fixed-top"
          toggleShowPopup={toggleShowPopup}
        />
        <MobileMenu />
        <Services />
        <CTAOne />
        <CTATwo />
        <Pricing />
        <Testimonials />
        <Clients />
        <VideoOne />
        <br />
        <br />
        <FAQ />
        <Contact />
        <Footer />
      </Layout> */}

      <Layout pageTitle="Mobilly Invite">
        <Header
          btnClass="main-nav__btn"
          extraClassName="site-header-one__fixed-top"
          toggleShowPopup={toggleShowPopup}
        />
        <MobileMenu />
        <Banner />
        <Services />
        <CTAOne />
        <CTATwo />
        <Pricing />
        <Testimonials />
        <Clients />
        <VideoOne />
        <br />
        <br />
        <FAQ />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}
