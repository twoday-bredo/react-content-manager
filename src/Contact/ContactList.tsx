import React, { useContext, useState } from 'react';
import { ContactInfo } from './ContactInfo';
import { IContact } from './IContact';
import { useContactsContext, useContactsDispatch } from './ContactContext';
import { ContactActionTypes } from './ContactReducer';


function ContactList() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const contacts = useContactsContext();
    const contactDispatch = useContactsDispatch();


    return (
        <div className='center'>
            <div>
                <h1>Add new contact</h1>
                <input
                    placeholder='Name'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder='Email address'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <button onClick={() => contactDispatch({type: ContactActionTypes.Add, name: name, email: email})}>Add</button>
                </div>
            </div>

            <h1>Contacts</h1>
            <ul className='list'>
                {contacts.map((contact) => <ContactInfo id={contact.id} name={contact.name} phone={contact.phone} email={contact.email}></ContactInfo>)}
            </ul>
        </div>
    )
}

export default ContactList;

