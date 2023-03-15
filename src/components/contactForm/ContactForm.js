import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" id="name" value={name} onChange={handleNameChange} required/>
      </label>
      <label>
        Phone:
        <input type="text" id="phone"  value={phone} onChange={handlePhoneChange} required/>
      </label>
      <label>
        Email:
        <input type="text" id="email"  value={email} onChange={handleEmailChange} required/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
