import { createContext, useContext, useState } from "react";
import { IContact } from "./IContact";

export type ContactContextState = { contacts: IContact[]; addContact: (n: IContact) => void };

const initialState: ContactContextState = {
    contacts: [],
    addContact: () => undefined
}

export function createContactContext() {
    return createContext(initialState);
} 