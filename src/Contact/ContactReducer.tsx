import React, { useContext, useState } from 'react';
import { IContact } from './IContact';



export enum ContactActionTypes {
    Add = "add",
    Edit = "edit",
    Delete = "delete"
}

type Add = {type: ContactActionTypes.Add, name: string, email: string, phone?: string}
type Edit = {type: ContactActionTypes.Edit, contact: IContact}
type Delete = {type: ContactActionTypes.Delete, id: number}


export type ContactAction = Add | Edit | Delete;

export function ContactsReducer(
    contacts: IContact[],
    action: ContactAction
) : IContact[] {
    switch (action.type) {
        case ContactActionTypes.Add: 
            return addContact(contacts, {id: 0, name: action.name, email: action.email, phone: action.phone})
        case ContactActionTypes.Edit:
            return editContact(contacts, action.contact)
        case ContactActionTypes.Delete:
            return deleteContact(contacts, action.id)
    }
}

function addContact(contactList: IContact[], newContact: IContact) : IContact[] {
    if (!ValidateContact(newContact)) {
        return contactList
    }
    let newId = contactList.reduce((newId, contact) => contact.id >= newId ? contact.id+1 : newId , 0);
    return [
        ...contactList,
        {
            id: newId,
            name: newContact.name,
            email: newContact.email,
            phone: newContact.phone
        }
    ]
}

function editContact(contactList: IContact[], editContact: IContact) : IContact[] {
    if (!ValidateContact(editContact)) {
        return contactList
    }
    return contactList.map(contact => {
        if (contact.id == editContact.id){
            return editContact;
        }
        return contact;
    })
}

function deleteContact(contactList: IContact[], contactId: number) : IContact[] {
    return contactList.filter(contact => contact.id != contactId)
}

function ValidateContact(contact: IContact) {
    const regexp = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')

    if(!regexp.test(contact.email)) return false
    if(!contact.name) return false
    return true

}