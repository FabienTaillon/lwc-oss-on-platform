import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class UsersList extends NavigationMixin(LightningElement) {

    @api users;

    navigateToUser(event) {
        // Prevent href
        event.preventDefault();

        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'User_Detail__c'
            },
            state: {
                recordId: event.currentTarget.dataset.id
            }
        });
    }

    handleFollow() {
        window.open('https://twitter.com/FabienTaillon', '_blank').focus();
    }
}