import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" id="name" value={title} onChange={handleTitleChange} required/>
      </label>
      <label>
        Date:
        <input type="date" id="date"  min={getTodayString()} value={date} onChange={handleDateChange} required/>
      </label>
      <label>
        Time:
        <input type="time" id="email"  value={time} onChange={handleTimeChange} required/>
      </label>
      <ContactPicker contacts={contacts} setContact={setContact} contact={contact}/>
      <input type="submit" value="Submit" />
    </form>
    
  );
};
