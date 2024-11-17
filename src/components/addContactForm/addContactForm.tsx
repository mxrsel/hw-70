import React, {FormEvent, useState} from 'react';
import {ApiContact, ContactMutation} from "../../types.ts";
import ButtonLoading from "../ButtonLoading/ButtonLoading.tsx";

interface Props {
    addNewContacts: (contact: ApiContact) => void;
    existingContact?: ContactMutation;
    isLoading?: boolean
}

const initialState = {
    name: '',
    phone: '',
    email: '',
    imageUrl: ''
}

const noPhoto = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'

const AddContactForm: React.FC<Props> = ({addNewContacts, existingContact = initialState, isLoading = false}) => {
    const [newContact, setNewContact] = useState<ContactMutation>(existingContact)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setNewContact((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        addNewContacts({
            ...newContact,
        })
    }

    return (
        <>
            <form className='form-control mt-3' onSubmit={onFormSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type='text'
                            name='name'
                            id='name'
                            className='form-control'
                            required
                            value={newContact.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Phone:
                        <input
                            type='text'
                            name='phone'
                            id='phone'
                            className='form-control'
                            required
                            value={newContact.phone}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input
                            type='text'
                            name='email'
                            id='email'
                            className='form-control'
                            required
                            value={newContact.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Photo:
                        <input
                            type='text'
                            name='imageUrl'
                            id='imageUrl'
                            className='form-control'
                            required
                            value={newContact.imageUrl}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <label>
                    Photo Preview:
                <img className='w-auto' src={newContact.imageUrl || noPhoto}
                     alt={newContact.imageUrl}/>
                </label>

                <ButtonLoading text={'Add'} isLoading={isLoading} isDisabled={isLoading} />
            </form>
        </>
    );
};

export default AddContactForm;