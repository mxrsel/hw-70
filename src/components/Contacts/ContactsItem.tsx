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
        <div onClick={handleClick} style={{cursor: 'pointer'}} className='d-flex justify-content-lg-between '>
            <img className='m-2' src={contact.imageUrl || imageNoPhoto}  alt={contact.imageUrl} style={{borderRadius: '8px'}}/>
            <h1 className='text-light ms-5 mt-5 text-uppercase'>{contact.name}</h1>
            </div>

    );
};

export default ContactsItem;