import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {deleteOneContact, fetchContacts} from "../../store/thunks/contactThunk.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";
import Contacts from "../../components/Contacts/Contacts.tsx";
import {hideDetails} from "../../store/slices/contactsSlice.ts";
import Modal from "../../components/Modal/Modal.tsx";
import {NavLink} from "react-router-dom";

const MainPage = () => {
    const dispatch = useAppDispatch();
    const contacts = useAppSelector((state) => state.contacts.contacts)
    const loading = useAppSelector((state) => state.contacts.isLoading)
    const selectedContact = useAppSelector((state) => state.contacts.details)
    const [showModal, setShowModal] = useState<boolean>(false)

    const fetchingContacts = useCallback( async() => {
       await dispatch(fetchContacts())
    }, [dispatch]);

    useEffect(() => {
        void fetchingContacts()
    }, [fetchingContacts]);

    const handleCloseModal = () => {
        setShowModal(false)
        dispatch(hideDetails())
    }

    useEffect(() => {
        setShowModal(true)
    }, [selectedContact]);


    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="row justify-content-between">
                    <div className="col col-md-5 mb-2">
                        {contacts.length > 0 ? (
                            <Contacts contacts={contacts} />
                        ) : (
                            <p>No contacts yet</p>
                        )}
                    </div>
                </div>
            )}

            {selectedContact && (
                <Modal show={showModal} closeModal={handleCloseModal} title="Contact Info">
                    <div key={selectedContact.id}>
                        <h1>{selectedContact.name}</h1>
                        <img src={selectedContact.imageUrl} alt={selectedContact.imageUrl} />
                        <p>Phone: {selectedContact.phone}</p>
                        <p>Email: {selectedContact.email}</p>

                        <NavLink className='btn btn-success me-2' to={`/editContact/${selectedContact.id}`}>Edit</NavLink>
                        <button className='btn btn-danger' type='submit' onClick={() => dispatch(deleteOneContact(selectedContact.id))}>delete</button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default MainPage;