import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";



export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [binDuplicate,SetBinDuplicate] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const obje = {
      name: name,
      phone: phone,
      email: email
    };
    //window.alert(`${props.contactsArray[0].name}`)
    if(!binDuplicate){
      props.addContact(obje)
      setName("")
      setPhone("")
      setEmail("")
    }else{
      window.alert("This contact name already exists")
    }

    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };
  
  

  useEffect(()=>{
    if(props.contactsArray.find(item => item.name === name)){
      SetBinDuplicate(true)
    }
  })
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section >
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList Array={props.contactsArray} />
      </section>
    </div>
  );
};
