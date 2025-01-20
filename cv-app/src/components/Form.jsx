
function Form({ fields, onSubmit, formData, setFormData }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData); 
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
                            value={formData[field.for]} 
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
