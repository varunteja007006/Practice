import FooterTag from "@/components/footer/FooterTag";
import React from "react";
import contactData from "../../data/contactData";

function ContactPage() {
  return (
    <div>
      <div className="min-h-[72vh] flex items-center justify-center">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="text-2xl pb-2 border-b-2">Contact Me</h1>
          {contactData.map((item) => {
            return (
              <a
                key={item.id}
                className={`tooltip capitalize
              }`}
                href={item.contact_href}
                data-tip={item.contact_type}
                aria-label={item.contact_href}
              >
                <span className="flex flex-col justify-center items-center">
                  <span className="flex flex-row items-center gap-2">
                    <span>{<item.contact_icon />}</span>
                    {item.contact_type}
                  </span>
                  <span className="text-xs">{item.contact_value}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
      <FooterTag />
    </div>
  );
}

export default ContactPage;
