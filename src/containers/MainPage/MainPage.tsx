import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {fetchContacts} from "../../store/thunks/contactThunk.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";
import Contacts from "../../components/Contacts/Contacts.tsx";
import {hideDetails} from "../../store/slices/contactsSlice.ts";
import Modal from "../../components/Modal/Modal.tsx";

const MainPage = () => {
    const dispatch = useAppDispatch();
    const contacts = useAppSelector((state) => state.contacts.contacts)
    const loading = useAppSelector((state) => state.contacts.isLoading)
    const selectedContact = useAppSelector((state) => state.contacts.details)
    const [showModal, setShowModal] = useState<boolean>(false)

    const fetchingContacts = useCallback( async() => {
       await dispatch(fetchContacts())
    }, []);

    useEffect(() => {
        void fetchingContacts()
    }, [fetchingContacts]);

    const handleCloseModal = () => {
        setShowModal(false)
        dispatch(hideDetails())
    }

    useEffect(() => {
        if (selectedContact) {}
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
                    <div>
                        <h1>{selectedContact.name}</h1>
                        <img src={selectedContact.imageUrl} alt={selectedContact.imageUrl} />
                        <p>Phone: {selectedContact.phone}</p>
                        <p>Email: {selectedContact.email}</p>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default MainPage;