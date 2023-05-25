import { useContext } from "react";
import { ContactContext } from "./ContactProvider";
import { IContact } from "./IContact";

export function ContactInfo ({id, name, phone, email}: IContact) {
    let ctx = useContext(ContactContext);


    return <li className='list-item' key={id}>
        <div>{name}</div>
        <div> {email} </div>
        <button></button>
    </li>
} 