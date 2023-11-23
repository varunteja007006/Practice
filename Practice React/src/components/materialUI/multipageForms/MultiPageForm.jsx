import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormBody from "./components/FormBody";
import InputField from "./components/InputField";
import Box from "@mui/material/Box";

function MultiPageForm() {
  let initialFields = {
    firstname: {
      name: "firstname",
      label: "First Name",
      type: "text",
      value: "",
    },
    lastname: {
      name: "lastname",
      label: "Last Name",
      type: "text",
      value: "",
    },
    age: {
      name: "",
      label: "",
      type: "",
      value: "",
    },
  };

  const [fields, setFields] = useState(initialFields);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    console.log("pressed");

    setPage(page + 1);
  };

  const prevPage = () => {
    console.log("pressed");
    setPage(page - 1);
  };

  const handleOnChange = (e) => {
    console.log("triggered");
    let name = e.target.name;
    let value = e.target.value;
    let newItem = fields[name];
    setFields({ ...fields, [name]: { ...newItem, value: value } });
  };

  const handleSubmit = () => {};
  switch (page) {
    case 0:
      return (
        <FormBody heading={`Multi Page Form ${page}`}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            className="bg-gray-200 grid grid-cols-3 p-5 rounded-md"
          >
            <InputField
              fieldData={fields.firstname}
              handleOnChange={handleOnChange}
            />
            <InputField
              fieldData={fields.lastname}
              handleOnChange={handleOnChange}
            />
            <Button variant="contained" type="button" onClick={nextPage}>
              Next
            </Button>
          </Box>
        </FormBody>
      );
    case 1:
      return (
        <FormBody heading={`Multi Page Form ${page}`}>
          <Button variant="contained" type="button" onClick={prevPage}>
            Previous
          </Button>
          <Button variant="contained" type="button" onClick={nextPage}>
            Next
          </Button>
        </FormBody>
      );
    case 2:
      return (
        <FormBody heading={`Multi Page Form ${page}`}>
          <Button variant="contained" type="button" onClick={prevPage}>
            Previous
          </Button>
          <Button variant="contained" type="button" onClick={nextPage}>
            Next
          </Button>
        </FormBody>
      );
    case 3:
      return (
        <FormBody heading={`Multi Page Form ${page}`}>
          <Button variant="contained" type="button" onClick={prevPage}>
            Previous
          </Button>
          <Button variant="contained" type="submit">
            submit
          </Button>
        </FormBody>
      );
    default:
      return <div className="mt-5">Multi Page Form</div>;
  }
}

export default MultiPageForm;
