export interface IContact {
    id: string
    name: string
    email: string
    phone: number
    imageUrl: string
}

export interface ContactMutation {
    name: string
    email: string
    phone: number
    imageUrl: string
}

export type ApiContact = Omit<ContactMutation, 'id'>


export interface ContactList {
    [id: string]: ContactMutation
}

