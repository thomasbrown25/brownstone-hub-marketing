import { products } from "@/data/products";
import React from "react";
import Image from "next/image";
export default function Products() {
  return (
    <div className="container">
      <div className="row mb-70 mb-sm-50">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
          <h2 className="section-title mb-30 mb-sm-20">
            <span className="text-gray">Our</span> Products
            <span className="text-gray">.</span>
          </h2>
          <div className="text-gray">
            The same color can evoke different emotions, or have various
            meanings to different individuals and cultures.
          </div>
        </div>
      </div>
      <div className="row mt-n40">
        {/* Team item */}
        <div className="col-md-2"></div>
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mt-40">
            <div className="team-item">
              <div className="team-item-image">
                <Image
                  src={product.image}
                  width={625}
                  height={767}
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                  alt={`Image of ${product.name}`}
                />
                <div className="team-item-detail">
                  <div className="team-social-links">
                    {product.socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener nofollow"
                      >
                        <div className="visually-hidden">{social.name}</div>
                        <i className={`fa-${social.name.toLowerCase()}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="team-item-descr">
                <div className="team-item-name">{product.name}</div>
                <div className="team-item-role">{product.description}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-2"></div>
        {/* End Team item */}
      </div>
    </div>
  );
}
