import React, {FormEvent, useState} from 'react';
import {ApiContact, ContactMutation} from "../../types.ts";
import ButtonLoading from "../ButtonLoading/ButtonLoading.tsx";
import {NavLink} from "react-router-dom";

interface Props {
    addNewContacts: (contact: ApiContact) => void;
    existingContact?: ContactMutation;
    isEdit?: boolean;
    isLoading?: boolean
}

const initialState = {
    name: '',
    phone: 0,
    email: '',
    imageUrl: ''
}

export const noPhoto = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'

const AddContactForm: React.FC<Props> = ({addNewContacts, existingContact = initialState, isLoading = false, isEdit = false}) => {
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
            phone: Number(newContact.phone.toString())
        })

        if (!isEdit) {
            setNewContact({
                name: '',
                phone: 0,
                email: '',
                imageUrl: ''
            });
        }

    }


    return (
        <>
            <form className='form-control mt-3' onSubmit={onFormSubmit}>
                <h1>{isEdit ? 'Edit' : 'Add New'} Contact</h1>
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
                            type='tel'
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
                            type='url'
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
                <img className='w-auto mt-3' src={newContact.imageUrl || noPhoto}
                     alt={newContact.imageUrl}/>
                </label>

                <div className='d-flex mt-4'>

                <ButtonLoading text={isEdit ? 'Edit' : 'Add'} isLoading={isLoading} isDisabled={isLoading} />

                <NavLink className='btn btn-danger ms-3' to='/'>Back to Contacts</NavLink>
                </div>
            </form>
        </>
    );
};

export default AddContactForm;