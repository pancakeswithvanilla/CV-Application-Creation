import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Section from './components/Section';

function App() {
  
  const initializeFormData = (fields, formData = {}) => {
    const initialValues = {};
    fields.forEach((field) => {
      initialValues[field.for] = formData[field.for] || "";
    });
    console.log("Initial values", initialValues);
    return initialValues;
  };

  const [showGeneral, setShowGeneral] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showWork, setShowWork] = useState(true);

  const showForm = (sectionType)=>{
    if(sectionType ==="general"){
      setShowGeneral(true);
    } else if(sectionType ==="education"){
      setShowEducation(true);
    }else if(sectionType ==="work"){
      setShowWork(true);
    }
  };
  const handleFormSubmit = (data, formType) => {
    if (formType === 'general') {
      setGeneralData(data);
      setShowGeneral(false);
    } else if (formType === 'education') {
      setEducationData(data);
      setShowEducation(false);
    } else if (formType === 'work') {
      setWorkData(data);
      setShowWork(false);
    }
  };


   const formatData = (data, fields) => {
    return fields.map((field) => ({
      label: field.name,
      value: data[field.for] || '', 
    }));
  };

  const ffields = [
    { for: "fullname", type: "text", id: "fullname", name: "Your full name: " },
    { for: "email", type: "email", id: "email", name: "Your email: " },
    { for: "phone", type: "tel", id: "phone", name: "Your phone number: " },
  ];

  const sfields = [
    { for: "schoolname", type: "text", id: "schoolname", name: "Your school name: " },
    { for: "tstudy", type: "text", id: "tstudy", name: "Your title of study: " },
    { for: "fromd", type: "date", id: "fromd", name: "Date when you started studying: " },
    { for: "untild", type: "date", id: "untild", name: "Date when you finished studying: " },
  ];

  const tfields = [
    { for: "cname", type: "text", id: "cname", name: "Your company name: " },
    { for: "postitle", type: "text", id: "postitle", name: "Your position title: " },
    { for: "fromd", type: "date", id: "fromd", name: "Date when you started working: " },
    { for: "untild", type: "date", id: "untild", name: "Date when you finished working: " },
  ];

  const [generalData, setGeneralData] = useState(() =>
    initializeFormData(ffields)
  );
  const [educationData, setEducationData] = useState(() =>
    initializeFormData(sfields)
  );
  const [workData, setWorkData] = useState(() =>
    initializeFormData(tfields)
  );
  console.log("General data:", generalData);

  return (
    <div id="content">
      <h3>Create your own CV Application!</h3>
      <div id = "cvappforms">
      {showGeneral && (
        <div class = "form">
          <h3>Add general information:</h3>
          <Form fields={ffields} formData={generalData} setFormData={setGeneralData} onSubmit={(data) => handleFormSubmit(data, 'general')} />
        </div>
      )}
      {!showGeneral && (
        <Section
          title="General Information"
          submittedData={formatData(generalData, ffields)} 
          type="general"
          showForm={showForm}
        />
      )}

      {showEducation && (
        <div class = "form">
          <h3>Add educational experience:</h3>
          <Form fields={sfields} formData={educationData} setFormData={setEducationData} onSubmit={(data) => handleFormSubmit(data, 'education')} />
        </div>
      )}
      {!showEducation && (
        <Section
          title="Educational Experience"
          submittedData={formatData(educationData, sfields)} 
          type="education"
          showForm={showForm}
        />
      )}

      {showWork && (
        <div class = "form">
          <h3>Add practical experience:</h3>
          <Form fields={tfields} formData={workData} setFormData={setWorkData} onSubmit={(data) => handleFormSubmit(data, 'work')} />
        </div>
      )}
      {!showWork && (
        <Section
          title="Practical Experience"
          submittedData={formatData(workData, tfields)} 
          type="work"
          showForm={showForm}
        />
      )}
      </div>
    </div>
  );
}

export default App;