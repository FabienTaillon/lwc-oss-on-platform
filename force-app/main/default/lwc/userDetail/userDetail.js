import { LightningElement, wire } from 'lwc';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';
import getUser from '@salesforce/apex/UsersWireApi.getUser';

export default class UserDetail extends NavigationMixin(LightningElement) {

    userId;
    userDetail;

    @wire(CurrentPageReference)
    pageRef(ref) {
        this.userId = ref.state.recordId;
    }

    @wire(getUser, { id: '$userId'})
    userDetails({ data, error }) {
        this.userDetail = JSON.parse(data);
    }

    navigateHome(event) {
        event.preventDefault();
        this.navigateBack();
    }

    navigateBack() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Home'
            }
        });
    }
}
