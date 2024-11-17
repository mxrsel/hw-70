import React from 'react';
import {IContact} from "../../types.ts";
import ContactsItem from "./ContactsItem.tsx";

interface Props {
    contacts: IContact[]
}

const Contacts: React.FC<Props> = ({contacts}) => {


    return (
        <div>
            {contacts.map((contact) => (
                <ContactsItem key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default Contacts;