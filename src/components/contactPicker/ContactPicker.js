import React from "react";

export const ContactPicker = ({contacts=[] , setContact, contact}) => {
  const handleChange = (e)=>{
    setContact(e.target.value)
  }

  return (
    <label>
       Select a contact:
       <select onChange={handleChange} value={contact}>
       <option value="">--Please choose an option--</option>
        {contacts.map((ocontact, index) =>
          <option key = {index} value={ocontact.name}>{ocontact.name}</option>
        )}
       </select>

     </label>
  );
};
