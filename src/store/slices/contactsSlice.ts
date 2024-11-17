import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContact} from "../../types.ts";
import {createNewContact, fetchContacts} from "../thunks/contactThunk.ts";

interface ContactsState {
    contacts: IContact[]
    details: IContact | null
    isLoading: boolean
    isError: boolean
}

const initialState: ContactsState = {
    contacts: [],
    details: null,
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
    },
})

export const contactsReducer = contactsSlice.reducer;

export const {selectContact, hideDetails} = contactsSlice.actions;