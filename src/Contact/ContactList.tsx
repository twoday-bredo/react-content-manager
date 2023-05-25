import React, { useContext, useState } from 'react';
import { ContactContext } from './ContactProvider';
import { ContactInfo } from './ContactInfo';
import { IContact } from './IContact';


function ContactList() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    let ctx = useContext(ContactContext);
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
                    <button onClick={() => ctx.addContact({id: 0, name: name, email: email})}>Add</button>
                </div>
            </div>

            <h1>Contacts</h1>
            <ul className='list'>
                {ctx.contacts.map((contact) => <ContactInfo id={contact.id} name={contact.name} phone={contact.phone} email={contact.email}></ContactInfo>)}
            </ul>
        </div>
    )
}

export default ContactList;

