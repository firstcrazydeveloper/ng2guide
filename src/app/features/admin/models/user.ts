import { Property } from './property';
export interface User {
    Id: number;
    firstName: string; // required field with minimum 5 characters
    lastName: string;
    isAdmin: boolean;
    email: string;
    password: string;
    language: string;
    property: Property[]; // user can have one or more property
}