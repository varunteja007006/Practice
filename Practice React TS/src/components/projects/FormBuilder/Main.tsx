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
const initialInputForm: any[] = [
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
const initialFieldsInputForm: any[] = [
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
  const [inputFormTwo, setInputFormTwo] = useState([...initialFieldsInputForm]);
  const [createdForms, setCreatedForms] = useState<any>([]);
  const [stepCount, setStepCount] = useState(1);
  const [activeFieldCount, setActiveFieldCount] = useState(0);
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
      setActiveFieldCount(fieldCount);
      setInputForm([...initialInputForm]);
      setStepCount(stepCount + 1);
    }
    if (stepCount === 2) {
      const myCurrentForm = createdForms.find(
        (item) => item.id === currentFormID,
      );
      const fieldCount = myCurrentForm.noOfFields;
      if (activeFieldCount < fieldCount) {
        setActiveFieldCount(activeFieldCount);
      } else {
        // Proceed with submitting the form
      }
      console.log(myCurrentForm);
    }
  };

  const DynamicForm = ({ stepCount }: { stepCount: number }) => {
    switch (stepCount) {
      case 1:
        return (
          <>
            <h2 className="card-title">Basic Form Details:</h2>
            <p className="mb-3 text-sm text-gray-700">
              Fill out basic details required for before creating the form.
            </p>
            {inputForm.map((item) => {
              return <CustomInputs key={item.name} data={item} />;
            })}
            <button
              type="submit"
              className="btn mt-5 w-1/3 bg-yellow-400 text-black hover:bg-yellow-400/80 hover:shadow-md"
            >
              Next
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="card-title">Form Fields:</h2>
            <p className="mb-3 text-sm text-gray-700">
              Fill out the details related to the fields required in the form.
            </p>
            <div className="flex flex-col gap-3">
              {inputFormTwo.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col gap-3 ${
                      ""
                      // index === activeFieldCount ? "inline-block" : "hidden"
                    }`}
                  >
                    <p className="mb-1 text-sm text-gray-400">
                      Field No: {index}
                    </p>
                    <CustomInputs data={item} />
                  </div>
                );
              })}
              <button
                type="submit"
                className="btn mt-5 w-1/3 bg-yellow-400 text-black hover:bg-yellow-400/80 hover:shadow-md"
              >
                Next
              </button>
            </div>
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
      <div className="m-3 grid grid-cols-2 gap-3 bg-slate-100 p-3">
        <div className="flex flex-col gap-3 p-5 ">
          <h2 className="text-xl underline decoration-solid">
            Create New Form
          </h2>
          <button
            className="btn w-1/3 bg-yellow-400 text-black hover:bg-yellow-400/80 hover:shadow-md"
            onClick={toggleNewItem}
          >
            {newItem ? "New" : "Close"}
          </button>
          {!newItem && (
            <div className="card w-full bg-white text-primary-content">
              <div className="card-body">
                <p className="text-sm text-gray-500">Step: {stepCount}</p>
                <form onSubmit={handleOnSubmit}>
                  <DynamicForm stepCount={stepCount} />
                </form>
              </div>
            </div>
          )}
        </div>
        {/* Not important */}
        <div className="p-5">
          {!newItem ? (
            <>
              <h2 className="text-xl underline decoration-solid">Preview</h2>
            </>
          ) : (
            <>
              <h2 className="text-xl underline decoration-solid">My Forms</h2>
            </>
          )}
        </div>
      </div>
    </PageBody>
  );
}

export default Main;
