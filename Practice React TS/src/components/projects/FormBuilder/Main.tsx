import { FormEvent, useEffect, useRef, useState } from "react";
import { PageBody } from "../../custom";
import CustomInputs, { TypeInputBuild } from "./CustomInputs";
import { nanoid } from "nanoid";

type myFormStruct = {
  id: string;
  name: string;
  createdOn: Date;
  formObj: TypeInputBuild[];
  isDone: boolean;
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

// Form to take the basic details name
const initialInputForm: TypeInputBuild[] = [
  {
    type: "text",
    name: "nameOfTheForm",
    label: "Name of the Form?",
    placeholder: `Eg: Student Form`,
    required: true,
    disabled: true,
    defaultValue: "",
    value: "",
  },
  {
    type: "select",
    name: "selectNoOfFields",
    label: "How many fields?",
    placeholder: `Eg: 1,2,3...`,
    required: true,
    disabled: true,
    defaultValue: "",
    value: "",
    options: [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
    ],
  },
];
// Form to iterate over and get the fields
const initialFieldsInputForm: TypeInputBuild[] = [
  {
    type: "text",
    name: "labelOfTheField",
    label: "What should the label of the field be?",
    placeholder: `Eg: First Name, Full Name, etc..`,
    required: true,
    disabled: false,
    defaultValue: "",
    value: "",
  },
];
const myForms = "MyForms";

function Main() {
  const [newItem, setNewItem] = useState(true);
  const initialRender = useRef(true);
  const [inputForm, setInputForm] = useState([...initialInputForm]);
  const [createdForms, setCreatedForms] = useState<any>([]);
  const [stepCount, setStepCount] = useState(1);
  const [currentFormID, setCurrentFormID] = useState(nanoid());
  const toggleNewItem = () => {
    setNewItem(!newItem);
  };

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
      console.table(createdForms);
    }
  }, [createdForms]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = Object.fromEntries(formData);
    // In step 1 we just take form name, date , fields it needs to have
    if (stepCount === 1) {
      let fieldCount = 1;
      if (typeof form.selectNoOfFields === "string") {
        fieldCount = parseInt(form.selectNoOfFields);
      }
      const myform = {
        id: currentFormID,
        name: form.nameOfTheForm,
        date: new Date(),
        noOfFields: fieldCount,
        formObj: [],
        isDone: false,
      };
      setCreatedForms((oldState) => {
        const newState = [...oldState, myform];
        return newState;
      });
      setStepCount(stepCount + 1);
      setInputForm(initialFieldsInputForm);
    }
    if (stepCount === 2) {
      const myCurrentForm = createdForms.find(
        (item) => item.id === currentFormID,
      );
      console.log(myCurrentForm);
    }
  };

  const DynamicForm = ({ stepCount }: { stepCount: number }) => {
    switch (stepCount) {
      case 1:
        return (
          <>
            {inputForm.map((item) => {
              return <CustomInputs key={nanoid()} data={item} />;
            })}
            <button type="submit" className="btn mt-5">
              Next
            </button>
          </>
        );
      case 2:
        return (
          <>
            {inputForm.map((item) => {
              return <CustomInputs key={nanoid()} data={item} />;
            })}
            <button type="submit" className="btn mt-5">
              Next
            </button>
          </>
        );
      default:
        return (
          <>
            <button type="submit" value="finish" className="btn mt-5">
              Finish
            </button>
          </>
        );
    }
  };

  return (
    <PageBody PageTitle="Form Builder">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3 px-5">
          <button className="btn w-1/3" onClick={toggleNewItem}>
            {newItem ? "New" : "Close"}
          </button>
          {!newItem && (
            <div className="card w-full bg-white text-primary-content">
              <div className="card-body">
                <p className="text-sm text-gray-500">Step: {stepCount}</p>
                <h2 className="card-title">What do you want in the form?</h2>
                <p>Select the appropriate options</p>
                <div>
                  <form onSubmit={handleOnSubmit}>
                    <DynamicForm stepCount={stepCount} />
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>Hello</div>
      </div>
    </PageBody>
  );
}

export default Main;
