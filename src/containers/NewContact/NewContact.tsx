import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {createNewContact} from "../../store/thunks/contactThunk.ts";
import {ApiContact} from "../../types.ts";
import {useNavigate} from "react-router-dom";
import AddContactForm from "../../components/addContactForm/addContactForm.tsx";

const NewContact = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.contacts.isLoading);
    const navigate = useNavigate()

    const addNewContact = async (contact: ApiContact) => {
        await dispatch(createNewContact({...contact}))
        navigate('/')
    }
    return (
        <div>
        <AddContactForm addNewContacts={addNewContact} isLoading={loading} />
        </div>
    );
};

export default NewContact;