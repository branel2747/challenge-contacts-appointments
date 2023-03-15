import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import "./App.css";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contact, setContact] = useState([
    {
      name: "Brian",
      phone: "0993032735",
      email: "bdqs_2747@hotmail.com"
    },
    {
      name: "dan",
      phone: "092959292",
      email: "asdawasdawwd"
    }
  ]);
  const [appointment, setAppointment] = useState([{

  }]);
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };
  const addContact = (contInfo) =>{
    setContact(contact => [...contact, contInfo])
  }
  const addAppointment = (appoiInfo) =>{
    setAppointment(appointment => [...appointment, appoiInfo])
  }

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contactsArray={contact} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointment} addAppointment={addAppointment} contacts={contact}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
