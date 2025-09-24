import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = true;
import { elegantMultipage, elegantMultipageDark } from "@/data/menu";
import MarqueeDark from "@/components/homes/home-5/MarqueeDark";
import Marquee from "@/components/homes/home-5/Marquee";
import { features5 } from "@/data/features";
import { services6 } from '@/data/services';

export const metadata = {
  title:
    "Elegant Services Dark || Brownstone Hub &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Brownstone Hub &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElegantServicesPageDark() {
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
                    SERVICES
                  </h1>
                  <div className="row wow fadeIn" data-wow-delay="0.2s">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                      <p className="section-title-tiny mb-0 opacity-075">
                        Web design that leaves an impression.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <>
                {/* Services Section */}
                <section className="page-section bg-dark-1 light-content pb-0">
                  <div className="container">
                    <div className="row mb-n30">
                      {/* Services Item*/}
                      {services6.map((item, i) => ( 
                        <div key={i} className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                          <div className="services-3-item round text-center">
                            <div
                              className="wow fadeInUpShort"
                              data-wow-offset={50}
                            >
                              <div className="services-3-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={item.width}
                                  height={item.height}
                                  viewBox={`0 0 ${item.width} ${item.height}`}
                                  aria-hidden="true"
                                >
                                  <path d={item.path} />
                                </svg>
                              </div>
                              <h3 className="services-3-title">{item.title}</h3>
                              <div className="services-3-text">
                                {item.text}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* End Services Item*/}
                    </div>
                  </div>
                </section>
                {/* End Services Section */}
                {/* Marquee Section */}
                <div className="page-section overflow-hidden">
                  {dark ? <MarqueeDark /> : <Marquee />}
                </div>
                {/* End Marquee Section */}
                {/* Benefits Section */}
                <section className="page-section bg-dark-1 light-content pt-0">
                  <div className="container position-relative">
                    {/* Grid */}
                    <div className="row">
                      {/* Text */}
                      <div className="col-md-12 col-lg-3 mb-md-50">
                        <h2 className="section-caption mb-xs-10">
                          Primary Benefits
                        </h2>
                        <h3 className="section-title-small mb-40">
                          Why choose Brownstone Hub?
                        </h3>
                        <div className="section-line" />
                      </div>
                      {/* End Text */}
                      {/* Feature Item */}
                      {features5.slice(0, 3).map((elm, i) => (
                        <div
                          key={i}
                          className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30"
                        >
                          <div className="alt-features-item border-left mt-0">
                            <div className="alt-features-icon">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill='none'
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d={elm.svgPath} />
                              </svg>
                            </div>
                            <h4 className="alt-features-title">{elm.title}</h4>
                            <div className="alt-features-descr">
                              {elm.description}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* End Feature Item */}
                    </div>
                    {/* End Grid */}
                  </div>
                </section>
                {/* End Benefits Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Call Action Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Decorative Waves */}
                    <div className="position-relative">
                      <div
                        className="decoration-21 d-none d-lg-block"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="0.35"
                      >
                        <Image
                          src="/assets/images/decoration-3.svg"
                          className="svg-shape"
                          width={148}
                          height={148}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* End Decorative Waves */}
                    <div className="row text-center wow fadeInUp">
                      <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                        <p className="section-descr mb-50 mb-sm-30">
                          We combine technology and strategy to simplify operations, connect systems, and fuel long-term growth.
                        </p>
                        <div className="local-scroll">
                          <Link
                            href={`/elegant-contact`}
                            className="btn btn-mod btn-large btn-circle btn-hover-anim"
                          >
                            <span>Contact us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
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
