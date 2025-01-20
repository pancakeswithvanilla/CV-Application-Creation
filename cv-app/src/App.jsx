import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Section from './components/Section';

function App() {
  const [generalData, setGeneralData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [workData, setWorkData] = useState(null);
  const [showGeneral, setShowGeneral] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showWork, setShowWork] = useState(true);
  console.log("General data:" , generalData)
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

   // Function to format formData for the Section component
   const formatData = (data, fields) => {
    return fields.map((field) => ({
      label: field.name,
      value: data[field.for] || '', // Use the field name as the key to access formData
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

  return (
    <>
      {showGeneral && (
        <>
          <h1>Add general information:</h1>
          <Form fields={ffields} initialData={generalData} onSubmit={(data) => handleFormSubmit(data, 'general')} />
        </>
      )}
      {!showGeneral && (
        <Section
          title="General Information"
          submittedData={formatData(generalData, ffields)} // Format data before passing it to Section
          type="general"
          showForm={showForm}
        />
      )}

      {showEducation && (
        <>
          <h1>Add educational experience:</h1>
          <Form fields={sfields} initialData={educationData} onSubmit={(data) => handleFormSubmit(data, 'education')} />
        </>
      )}
      {!showEducation && (
        <Section
          title="Educational Experience"
          submittedData={formatData(educationData, sfields)} // Format data before passing it to Section
          type="education"
          showForm={showForm}
        />
      )}

      {showWork && (
        <>
          <h1>Add practical experience:</h1>
          <Form fields={tfields} initialData={workData} onSubmit={(data) => handleFormSubmit(data, 'work')} />
        </>
      )}
      {!showWork && (
        <Section
          title="Practical Experience"
          submittedData={formatData(workData, tfields)} // Format data before passing it to Section
          type="work"
          showForm={showForm}
        />
      )}
    </>
  );
}

export default App;