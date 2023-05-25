import React, { useContext, useState } from 'react';
import { IContact } from './IContact';
import { ContactContextState, createContactContext } from './ContactContext';
import ContactList from './ContactList';


const initContacts: IContact[] = [
    {
        id: 1,
        name: "Gert",
        phone: "12345678",
        email: "Gert@mail.dk"
    },
    {
        id: 2,
        name: "Tobias",
        phone: "87654321",
        email: "perfectbacon@mail.dk"
    },
    {
        id: 3,
        name: "Hanne",
        phone: "555-44632",
        email: "ErDetHanne@hils.dk"
    }]

export const ContactContext = createContactContext();

function ContactProvider(){

    const [contacts, setContacts] = useState(initContacts);
    const addContact = (contact: IContact) => setContacts((prevContacts) => {
        if (!ValidateContact(contact)) {
            return prevContacts
        }
        let newId = prevContacts.reduce((newId, contact) => contact.id >= newId ? contact.id+1 : newId , 0);
        return [
            ...prevContacts,
            {
                id: newId,
                name: contact.name,
                email: contact.email
            }]
        });
        
    const contextValue = {contacts: contacts, addContact: addContact} 

    return(
        <ContactContext.Provider value={contextValue}>
            <ContactList />
        </ContactContext.Provider>
    )
}

function ValidateContact(contact: IContact) {
    const regexp = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')

    if(!regexp.test(contact.email)) return false
    if(!contact.name) return false
    return true

}

export default ContactProvider;