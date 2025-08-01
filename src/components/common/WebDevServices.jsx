import React from "react";
import custom from "../../assets/images/custom.jpg";
import responsive from "../../assets/images/responsive.png";
import webappdev from "../../assets/images/webappdev.jpg";
import cart from "../../assets/images/cart.jpg";
import speed from "../../assets/images/speed.png";
import security from "../../assets/images/security.jpg";
import seo from "../../assets/images/seo.png";
import design from "../../assets/images/design.jpg";

const WebDevServices = () => {
  return (
    <section className="section-7">
      <div className="container py-5">
        <h1 className="text-center mt-3">Web Development Services</h1>
        <div className="row g-4 pt-4">
          <div className="col-md-3">
            <div className="card border-0 h-100">
              <img src={custom} class="card-img-top" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">Custom Website Development</h5>
                <p className="card-text">
                  Tailored websites built from scratch to match your brand,
                  goals, and audience. Whether it's a sleek business site or a
                  powerful web app, I deliver clean, scalableand responsive
                  code.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 h-100">
              <img src={responsive} class="card-img-top" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">Responsive Design</h5>
                <p className="card-text">
                  Mobile-first, responsive designs that look and perform great
                  on all devices - from desktops to tablets to smartphones.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 h-100">
              <img src={webappdev} class="card-img-top" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">Web App Development</h5>
                <p className="card-text">
                  Development of interactive and dynamic web applications with a
                  strong focus on performance, usability, and maintainability.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 h-100">
              <img src={cart} class="card-img-top" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">E-commerce Solutions</h5>
                <p className="card-text">
                  Custom e-commerce platforms or store integrations using
                  Shopify, WooCommerce, or custom-built solutions. Secure,
                  scalable, and optimized for conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 pt-4">
          <div className="col-md-3">
            <div className="card border-0 h-100">
              <img src={speed} class="card-img-top" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">Performance Optimization</h5>
                <p className="card-text">
                  Speed matters. I optimize load times, reduce bounce rates, and
                  ensure your site runs efficiently using best practices in
                  performance engineering.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 h-100">
              <img src={security} class="card-img-top" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">Website Maintenance & Security</h5>
                <p className="card-text">
                  Ongoing support to keep your website up to date, secure, and
                  bug-free. Includes regular backkups, updates, and security
                  checks.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 h-100">
              <img src={seo} class="card-img-top" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">SEO & Analytics Integration</h5>
                <p className="card-text">
                  Technical SEO implementation and integration with tools like
                  Google Analytics and Search Console to track and enhance
                  visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 h-100">
              <img src={design} class="card-img-top" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">UI/UX Design</h5>
                <p className="card-text">
                  Intuitive, user-friendly interfaces design to engage and
                  retain users. Collaboration with designers or direct
                  deliveryof front-end prototypes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
