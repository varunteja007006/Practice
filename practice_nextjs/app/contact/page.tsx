import React from "react";
import contactData from "../../data/contactData";

function ContactPage() {
  return (
    <section id="contact" className="mt-16">
      {/* <div className="flex items-center justify-center"> */}
      <h1 className="text-2xl pb-2 mb-5">Contact Me</h1>
      <div className="grid grid-cols-3 gap-10">
        {contactData.map((item) => {
          return (
            <a
              key={item.id}
              className={`tooltip
              }`}
              href={item.contact_href}
              data-tip={item.contact_type}
              aria-label={item.contact_href}
            >
              <span className="flex flex-col justify-center items-start gap-3">
                <span className="flex flex-row items-center gap-3 capitalize">
                  <span className="text-base">{<item.contact_icon />}</span>
                  {item.contact_type}
                </span>
                <span className="text-sm">{item.contact_value}</span>
              </span>
            </a>
          );
        })}
      </div>
      {/* </div> */}
      {/* <FooterTag /> */}
    </section>
  );
}

export default ContactPage;
