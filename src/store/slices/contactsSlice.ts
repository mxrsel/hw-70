import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContact} from "../../types.ts";
import {createNewContact, fetchContacts} from "../thunks/contactThunk.ts";

interface ContactsState {
    contacts: IContact[]
    isLoading: boolean
    isError: boolean
}

const initialState: ContactsState = {
    contacts: [],
    isLoading: false,
    isError: false,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
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
    },
})

export const contactsReducer = contactsSlice.reducer;

export const {} = contactsSlice.actions;