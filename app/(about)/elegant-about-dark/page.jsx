import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = true;
import { elegantMultipage, elegantMultipageDark } from "@/data/menu";
import About from "@/components/homes/home-5/About";
import Team from "@/components/homes/home-5/Products";
import MarqueeDark from "@/components/homes/home-5/MarqueeDark";
import Marquee from "@/components/homes/home-5/Marquee";
import { progressData } from "@/data/skills";

export const metadata = {
  title:
    "Elegant About Dark || Brownstone Hub &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "We design scalable, modern platforms for businesses that need more than spreadsheets—vendor portals, admin dashboards, and resilient API integrations.",
};
export default function ElegantAboutPageDark() {
  return (
    <>
      <div className="theme-elegant">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header5 links={elegantMultipageDark} />
            </nav>
            <main id="main">
              <section
                className="page-section bg-dark-alpha-50 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-elegant/section-bg-1.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative pt-20 pt-sm-20 text-center">
                  <h1
                    className="hs-title-3 mb-10 wow fadeInUpShort"
                    data-wow-duration="0.6s"
                  >
                    About Us
                  </h1>
                  <div className="row wow fadeIn" data-wow-delay="0.2s">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                      <p className="section-title-tiny mb-0 opacity-075">
                        Building powerful software solutions that help businesses scale, integrate, and thrive.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={`page-section  scrollSpysection pb-0 ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="about"
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-5 d-flex align-items-center mb-md-50">
                      <div>
                        <div className="wow linesAnimIn" data-splitting="lines">
                          <h2 className="section-title mb-30 mb-sm-20">
                            <span className="text-gray">Our</span> Story
                            <span className="text-gray">.</span>
                          </h2>
                          <div className="text-gray mb-30 mb-sm-20">
                            <p className="mb-4">
                              Brownstone Hub was founded with a simple mission: make technology work for businesses, not against them. We’ve seen firsthand how companies struggle with disconnected tools, manual processes, and outdated systems. That’s why we set out to build modern applications, dashboards, and integrations that bring clarity and efficiency to everyday operations.
                            </p>
                              <p className="mb-0">
                              From startups to established enterprises, we help teams replace spreadsheets and patchwork systems with streamlined solutions that save time, reduce complexity, and unlock growth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <About />
                  </div>
                </div>
              </section>
              <div className="page-section overflow-hidden">
                {dark ? <MarqueeDark /> : <Marquee />}
              </div>
              {/* <section
                className="page-section pt-0 pb-0 bg-dark-1 bg-dark-alpha-80 parallax-6 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-elegant/section-bg-2.jpg)",
                }}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-6 col-xl-5">
                      <div className="call-action-1-images pb-60 pb-md-0 mt-n30 mt-md-70 mb-n30 mb-md-70 mb-sm-0">
                        <div className="call-action-1-image-1 round">
                          <Image
                            src="/assets/images/demo-elegant/call-action-1-image-1.jpg"
                            width={678}
                            height={840}
                            alt="Image Description"
                          />
                        </div>
                        <div className="call-action-1-image-2">
                          <div
                            className="call-action-1-image-2-inner"
                            data-rellax-y=""
                            data-rellax-speed="0.7"
                            data-rellax-percentage="0.427"
                          >
                            <Image
                              src="/assets/images/demo-elegant/call-action-1-image-2.jpg"
                              alt="Image Description"
                              width={300}
                              height={409}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 offset-xl-1 d-flex align-items-center">
                      <div className="row small-section">
                        <div className="col-xl-11">
                          <h2 className="section-title mb-30 mb-sm-20">
                            Looking for digital services?
                          </h2>
                          <div className="text-gray mb-30 mb-sm-20">
                            <p className="mb-0">
                              Product design process the set of strategic and
                              tactical activities, from idea generation to
                              commercialization.
                            </p>
                          </div>
                          <div className="local-scroll">
                            <Link
                              href={`/alegant-services${dark ? "-dark" : ""}`}
                              className="link-hover-anim link-circle-1 align-middle"
                              data-link-animate="y"
                            >
                              <span className="link-strong link-strong-unhovered">
                                View Services{" "}
                                <i
                                  className="mi-arrow-right size-18 align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                className="link-strong link-strong-hovered"
                                aria-hidden="true"
                              >
                                View Services{" "}
                                <i
                                  className="mi-arrow-right size-18 align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
              <section
                className={`page-section pb-0  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="team"
              >
                <Team />
              </section>
              <div className="page-section overflow-hidden">
                {dark ? <MarqueeDark /> : <Marquee />}
              </div>
            </main>
            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
