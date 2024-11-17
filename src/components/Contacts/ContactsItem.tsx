import React from 'react';
import {IContact} from "../../types.ts";
import {noPhoto} from "../addContactForm/addContactForm.tsx";
import {useAppDispatch} from "../../app/hooks.ts";
import {selectContact} from "../../store/slices/contactsSlice.ts";

interface Props {
    contact: IContact
}

const ContactsItem: React.FC<Props> = ({contact}) => {
    const dispatch = useAppDispatch();
    const imageNoPhoto = noPhoto;

    const handleClick = () => {
        dispatch(selectContact(contact))
    }

    return (
        <div onClick={handleClick} style={{cursor: 'pointer'}}>
            <img src={contact.imageUrl || imageNoPhoto}  alt={contact.imageUrl}/>
            <div>{contact.name}</div>

        </div>
    );
};

export default ContactsItem;