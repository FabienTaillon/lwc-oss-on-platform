import { LightningElement } from 'lwc';

export default class UsersListWrapper extends LightningElement {

    users;

    connectedCallback() {

        const endpoint = 'https://jsonplaceholder.typicode.com/users/';
        fetch(endpoint).then(response => response.json()).then(data => {
            this.users = data;
        });
    }
}