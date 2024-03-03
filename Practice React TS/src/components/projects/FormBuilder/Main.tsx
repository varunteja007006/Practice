import { useEffect, useRef, useState } from "react";
import { PageBody } from "../../custom";
import CustomInputs, { TypeInputBuild } from "./CustomInputs";

type myFormStruct = {
  name: string;
  createdOn: Date;
  formObj: TypeInputBuild[];
};

const initialFormState = {
  type: "",
  label: "",
  required: "",
  disabled: "",
  placeholder: "",
  defaultValue: "",
  value: "",
  options: [],
};

const initialInputForm: TypeInputBuild[] = [
  {
    type: "text",
    label: "What's the label going to be?",
    placeholder: `Eg: FirstName`,
    required: true,
    disabled: true,
    defaultValue: "",
    value: "",
  },
  {
    type: "select",
    label: "What's the 'Type' going to be?",
    placeholder: `Eg: text, number, email, dropdown, etc...`,
    required: true,
    disabled: true,
    defaultValue: "",
    value: "",
    options: [
      { label: "Text", value: "text" },
      { label: "Text Area", value: "textArea" },
      { label: "Number", value: "number" },
    ],
  },
];

const myForms = "MyForms";

function Main() {
  const [newItem, setNewItem] = useState(true);
  const initialRender = useRef(true);
  const toggleNewItem = () => {
    setNewItem(!newItem);
  };
  const [inputForm, setInputForm] = useState([...initialInputForm]);
  const [createdForms, setCreatedForms] = useState<myFormStruct[]>([]);

  useEffect(() => {
    if (initialRender.current) {
      const data = localStorage.getItem(myForms);
      if (data) {
        setCreatedForms(JSON.parse(data));
      }
      initialRender.current = false;
    }
  }, []);

  useEffect(() => {
    if (!initialRender.current) {
      localStorage.setItem(myForms, JSON.stringify(createdForms));
    }
  }, [createdForms]);

  return (
    <PageBody PageTitle="Form Builder">
      <div className="flex flex-col gap-3 px-5">
        <button className="btn w-fit" onClick={toggleNewItem}>
          {newItem ? "New" : "Close"}
        </button>
        {!newItem && (
          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">What do you want in the form?</h2>
              <p>Select the appropriate options</p>
              <div>
                <form>
                  {inputForm.map((item) => {
                    return (
                      <>
                        <CustomInputs data={item} />
                      </>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageBody>
  );
}

export default Main;
