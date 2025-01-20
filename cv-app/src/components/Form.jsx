import { useState } from "react";

function Form({ fields, onSubmit, initialData }) {
    // Initialize formData with initialData or with empty values for each field
    console.log("Initial data:", initialData)
    const [formData, setFormData] = useState(() => {
        // Initialize formData with empty values for each field
        const initialValues = {};
        fields.forEach(field => {
            // If initialData is available, use it to set the initial value for each field
            // Use field.for as the key and get the corresponding value from initialData
            initialValues[field.for] = initialData && initialData[field.for] || '';
          });
        console.log("Initial values", initialValues)
        return initialValues;
    });
    console.log("form data:", formData)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData); // Send the raw formData to the parent
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <div key={index}>
                        <label htmlFor={field.for}>{field.name}</label><br />
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.for}
                            value={formData[field.for] || ''}  // Ensuring formData always has a value
                            onChange={handleChange}
                            required
                        /><br />
                    </div>
                ))}
                <input type="submit" id="subbtn" value="Submit" />
            </form>
        </div>
    );
}

export default Form;
