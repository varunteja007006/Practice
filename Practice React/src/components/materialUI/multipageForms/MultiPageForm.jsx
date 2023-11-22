import React, { useState } from "react";

function MultiPageForm() {
  let pageState = {
    pageNo: 0,
    fields: {
      personal: { firstname: "", lastname: "", age: 0 },
      address: { doorNo: "", street: "", city: "", country: "" },
    },
  };

  const [content, setContent] = useState(pageState);
  console.log(content);
  const nextPage = () => {
    setContent((content.pageNo += 1));
  };

  const prevPage = () => {
    setContent((content.pageNo -= 1));
  };

  switch (content.pageNo) {
    case 0:
      return (
        <div className="mt-5">
          Multi Page Form {content.pageNo}
          <button className="btn">next</button>
        </div>
      );
    case 1:
      return <div className="mt-5">Multi Page Form {content.pageNo}</div>;
    default:
      return <div className="mt-5">Multi Page Form</div>;
  }
  // return <div className="mt-5">Multi Page Form</div>;
}

export default MultiPageForm;
