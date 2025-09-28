import React from "react";
import { openingHours, socials } from "../constants";

const Contact = () => {
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img src="/images/footer-left-leaf.png" alt="" id="f-leaf-leaf" />

      <div className="content">
        <h2>Where to Find us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd , Mumbai , CH Road 789644</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>789651130</p>
          <p>hello@cocktail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((item) => (
            <p key={item.day}>
              {item.day} : {item.time}
            </p>
          ))}
        </div>

        <div className="">
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
