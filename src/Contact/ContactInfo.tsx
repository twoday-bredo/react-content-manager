import { IContact } from "./IContact";

export function ContactInfo ({id, name, phone, email}: IContact) {
    return <li className='list-item' key={id}>
        <div>{name}</div>
        <div> {email} </div>
        <button disabled={true}>Does nothing</button>
    </li>
} 