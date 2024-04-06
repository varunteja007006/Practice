import React from "react";
import FooterTag from "./FooterTag";
import contactData from "../../data/contactData";

function FooterMain() {
  return (
    <footer>
      <div className="flex flex-row gap-10 justify-center items-center">
        {contactData.map((item, index) => {
          return (
            <a
              key={index}
              href={item.contact_href}
              data-tip={item.contact_type}
              aria-label={item.contact_href}
              className="text-2xl"
            >
              {<item.contact_icon />}
            </a>
          );
        })}
      </div>

      <FooterTag />
    </footer>
  );
}

export default FooterMain;
