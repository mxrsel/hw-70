import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {ApiContact, ContactList, IContact} from "../../types.ts";
import {RootState} from "../../app/store.ts";

export const fetchContacts = createAsyncThunk<IContact[], void, {state: RootState}>(
    'contacts/fetchContacts',
    async() => {
    const response: {data: ContactList | null} = await axiosApi.get('/contacts.json');
    const contactsList = response.data

        if (contactsList === null) {
            return [];
        }

        const contacts: ContactList = contactsList

        const newContatcs = Object.keys(contactsList).map((contact) => {
            return {
                ...contacts[contact],
                id: contact,
            };
        });
        return newContatcs
    })

export const createNewContact = createAsyncThunk<void, ApiContact>('contacts/createNewContact',
    async(contact) => {
        await axiosApi.post('/contacts.json', {...contact})
})