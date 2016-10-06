import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('contact');
	},

	actions: {
		sendMessage(newMessage) {
			let responseMessage = `Your Mail has been send. Response will be send to ${newMessage.get('email')}`;
			newMessage.save().then(() => {
				this.controller.set('responseMessage', responseMessage);
			});
		},

		willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
	}
});
