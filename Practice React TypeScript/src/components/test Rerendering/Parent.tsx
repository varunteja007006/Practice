import { useState } from "react";
import Child from "./Child";
import { Button } from "@/components/ui/button";

function Parent() {
  const [lastNameValue, setLastNameValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");

  const handleLastnameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLastNameValue(e.target.value);
    console.log(lastNameValue);
  };

  const handleFirstnameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFirstNameValue(e.target.value);
    console.log(firstNameValue);
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const formData = Object.fromEntries(form);

    const formDataByState = {
      firstName: firstNameValue,
      lastName: lastNameValue,
    };
    console.log(formData);
    console.log(formDataByState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>form</h1>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        onChange={handleFirstnameChange}
        value={firstNameValue}
      />
      <Child
        lastname={lastNameValue}
        handleChange={handleLastnameChange}
      ></Child>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Parent;
