import React from 'react';

function Section({ submittedData,title, type, showForm}) {
    if (!Array.isArray(submittedData)) {
        return <div></div>;
    }
    function handleClick(){
        showForm(type);
        
    }
    return (
        <div>
            <h2>{title}</h2>
            {submittedData.map((entry, index) => (
                <h3 key={index}>{entry.label}{entry.value}</h3>
            ))}
            <button id = "editbtn" type = "button" onClick = {handleClick}>Edit</button>
        </div>
    );
}

export default Section;