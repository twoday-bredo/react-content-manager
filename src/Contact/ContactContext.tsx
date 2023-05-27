import { createContext, useContext, useReducer, useState } from "react";
import { IContact } from "./IContact";
import { ContactAction, ContactsReducer } from "./ContactReducer";

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

const ContactsContext = createContext<IContact[]>(initContacts);

const ContactsDispatchContext = createContext<React.Dispatch<ContactAction>>(null as any);


export function ContactProvider({children}: React.PropsWithChildren<any>){

    const [contacts, dispatch] = useReducer(ContactsReducer, initContacts)

    return(
        <ContactsContext.Provider value={contacts}>
            <ContactsDispatchContext.Provider value={dispatch}>
                {children}
            </ContactsDispatchContext.Provider>
        </ContactsContext.Provider>
    )
}

export function useContactsContext() {
    return useContext(ContactsContext);
}

export function useContactsDispatch() {
    return useContext(ContactsDispatchContext);
}