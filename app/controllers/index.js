import Ember from 'ember';

export default Ember.Controller.extend({

	headerMessage: 'Coming Soon',
	responseMessage: '',
	emailAddress: '',

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),

	actions: {
		saveInvitation() {
			const email = this.get('emailAddress');

			const newInviation = this.store.createRecord('invitation', { email: email});
			newInviation.save();

			this.set('responseMessage', `Thank you young lad! We are inclined to say, that your email has been saved: ${this.get('emailAddress')}`);
			this.set('emailAddress', '');
		}
	}
});
