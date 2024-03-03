import { FormEvent, useEffect, useRef, useState } from "react";
import { PageBody } from "../../custom";
import CustomInputs, { TypeInputBuild } from "./CustomInputs";
import { nanoid } from "nanoid";

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

const myForms = "MyForms";

function Main() {
  const [newItem, setNewItem] = useState(true);
  const initialRender = useRef(true);
  const toggleNewItem = () => {
    setNewItem(!newItem);
  };
  const [inputForm, setInputForm] = useState([...initialInputForm]);
  const [createdForms, setCreatedForms] = useState<any>([]);
  const [stepCount, setStepCount] = useState(1);
  const [maxStepCount, setMaxStepCount] = useState(1);

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
    if (stepCount === 1) {
      let fieldCount = 1;
      if (typeof form.selectNoOfFields === "string") {
        fieldCount = parseInt(form.selectNoOfFields);
      }
      const myform = {
        name: form.nameOfTheForm,
        date: new Date(),
        noOfFields: fieldCount,
        formObj: [],
      };

      setCreatedForms((oldState) => {
        const newState = [...oldState, myform];
        return newState;
      });
      setStepCount(stepCount + 1);
      setMaxStepCount(fieldCount + maxStepCount);
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
      default:
        return <>next step</>;
    }
  };

  return (
    <PageBody PageTitle="Form Builder">
      <div className="flex flex-col gap-3 px-5">
        <button className="btn w-fit" onClick={toggleNewItem}>
          {newItem ? "New" : "Close"}
        </button>
        {!newItem && (
          <div className="card w-96 bg-white text-primary-content">
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
    </PageBody>
  );
}

export default Main;
