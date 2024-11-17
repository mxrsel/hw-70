import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiContact, IContact} from "../../types.ts";
import {createNewContact, editingContact, fetchContacts, getContactById} from "../thunks/contactThunk.ts";

interface ContactsState {
    contacts: IContact[]
    details: IContact | null
    oneContact: ApiContact | null
    isLoading: boolean
    isError: boolean
}

const initialState: ContactsState = {
    contacts: [],
    details: null,
    oneContact: null,
    isLoading: false,
    isError: false,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        selectContact (state, action: PayloadAction<IContact>) {
            state.details = action.payload;
        },
        hideDetails(state ) {
            state.details = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchContacts.pending, (state) => {
                    state.isLoading = true
                    state.isError = false
                })
            .addCase(
                fetchContacts.fulfilled, (state, action: PayloadAction<IContact[]> ) => {
                    state.isLoading = false
                    state.contacts = action.payload
                })
            .addCase(
                fetchContacts.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
            .addCase(
                createNewContact.pending, (state) => {
                    state.isLoading = true
                    state.isError = false
                })
            .addCase(
                createNewContact.fulfilled, (state ) => {
                    state.isLoading = false
                })
            .addCase(
                createNewContact.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
            .addCase(
                getContactById.pending, (state) => {
                    state.isLoading = true
                    state.oneContact = null
                })
            .addCase(
                getContactById.fulfilled, (state, action: PayloadAction<ApiContact | null> ) => {
                    state.isLoading = false
                    state.oneContact = action.payload
                })
            .addCase(
                getContactById.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })

            .addCase(
                editingContact.pending, (state) => {
                    state.isLoading = true
                })
            .addCase(
                editingContact.fulfilled, (state) => {
                    state.isLoading = false
                    state.oneContact = null
                })
            .addCase(
                editingContact.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
    },
})

export const contactsReducer = contactsSlice.reducer;

export const {selectContact, hideDetails} = contactsSlice.actions;