# React Hook Form

## Nested Objects

You can also nest the default values in the react hook form

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age:'',
    social: { // New field
        facebook: "".
        twitter: "",
    },
}
})

<input type="text" {...form.register("social.facebook")} />

<input type="text" {...form.register("social.twitter")} />

```

## Array

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""], // New field
}
})


<input type="text" {...form.register("phoneNumber.0")} /> {/*Cannot use [0] because of typescript*/}

<input type="text" {...form.register("phoneNumber.1")} /> {/*Cannot use [1] because of typescript*/}

```

## Dynamic Array

```js
import { useForm, useFieldArray } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}], // New field
}
})

const {fields , append, remove} = useFieldArray({
    name:"mobileNumbers",
    control
})

{/* Render the dynamic array of fields */}
<div>
    <p> List of Mobile Number Fields </p>
    <div>
        {fields.map((field, index) => {
            return (
                <div key={field.id}> {/* use field.id instead of index to avoid rerenders */}
                    <input type="text" {...form.register(`mobileNumbers.${index}.number`)} />
                    {index> 0 && <button onClick={() => remove(index)}>REMOVE</button>}
                    {/* Show remove button if number of fields are greater than 1 */}
                </div>
            )
        })}
        <button onClick={() => append({number:""})}>ADD</button>
    </div>
</div>

```

## Numeric and Dates

```js
import { useForm, useFieldArray } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
}
})

<input type="age" {...form.register("age", { valueAsNumber: true })} />

<input type="date" {...form.register("date", { valueAsDate: true })} />

```

## watch

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
}
})


const watch = form.watch(["name", "age"]) // To watch multiple fields

const watchOne = form.watch("name") // To watch only one field

// The above will cause rerender. To optimize it we can use subscribe and useEffect

useEffect(() => {
    const subscription = form.watch((value) => {
        console.log(value);
    })
    return () => subscription.unsubscribe()

}, [watch])

```

## getValues

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
}
})

console.log("getValues", form.getValues("name")); // To get only one value

console.log("getValues", form.getValues(["name", "social.twitter"])); // To get multiple values

```

## setValue

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
}
})

console.log("getValues", form.setValue("name", "")); // To set only name value

// You can also pass few more options
console.log("getValues", form.setValue("name", "", {
    shouldValidate : true,
    shouldDirty : true,
    shouldTouch : true,
})); // To set only name value


```

## formState

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
}
})

const { errors // object of errors of the fields.
, touchedFields, // It gives the object of fields that are touched.
dirtyFields, // It gives the object of fields that are dirty.
isDirty,  // It gives the form status whether the form is filled or not.
isValid, // Form is valid or not.
isSubmitting, // False before clicking submission, true when clicked on submitted, false again once
// the form is submitted
isSubmitted, // To track whether the form is submitted, false only after form is reset.
isSubmitSuccessful, // run time errors
submitCount, // To track number of submits are done
} = form.formState()

```

## Disabling form fields

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
}
})

// general way of disabling the fields
<input type="text" {...form.register("social.twitter")} disabled={true} />

// Based on the other form state
<input type="text" {...form.register("social.twitter", {disabled: watch("channel") === "" })} />
```

## Error Handling

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
}
})

const onSubmit = (values) => {
    console.log(values);
}

const onError = (errors) => {
    console.log(errors);
}


<form onSubmit={form.handleSubmit(onSubmit, onError)}>
</form>

```

## Async validation

You could make a async fetch call to verify the fields filled. Like Email is already registered or
not.

## Validation Mode

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
},
mode:"onBlur || onTouched || onChange || all", // When the validation should occur
})

```

## Manual validation

```js
import { useForm } from "react-hook-form"

const form = useForm({
defaultValues {
    name: '',
    age: 0, // New field
    date: new Date(), // New field
    social: {
        facebook: "".
        twitter: "",
    },
    phoneNumbers: ["", ""],
    mobileNumbers: [{number: ""}],
},
})

{/* To trigger validations manually */}
<button type="validate" onClick={() => form.trigger()}> {/* Triggers validation for all fields*/}
    Validate
</button>

<button type="validate" onClick={() => form.trigger("name")}> {/* Triggers validation for name field */}
    Validate
</button>

```
