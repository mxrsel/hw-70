import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {editingContact, getContactById} from "../../store/thunks/contactThunk.ts";
import {ApiContact} from "../../types.ts";
import AddContactForm from "../addContactForm/addContactForm.tsx";

const EditContact = () => {
    const {contactId} = useParams();
    const dispatch = useAppDispatch();
    const contact = useAppSelector((state) => state.contacts.oneContact)
    const loading = useAppSelector((state) => state.contacts.isLoading);
    const navigate = useNavigate();

    const editContactById = useCallback(async() => {

        if (contactId) {
            dispatch(getContactById(contactId))
        }
    }, [dispatch, contactId]);

    useEffect(() => {
        void editContactById()
    }, [editContactById]);

    const editContact = async(contact: ApiContact) => {
        if (contactId)
        await dispatch(editingContact({contactId: contactId, contact}))
        navigate('/')
    }


    return contact && (
        <div>
            <AddContactForm addNewContacts={editContact} existingContact={contact} isEdit isLoading={loading}/>
        </div>
    );
};

export default EditContact;