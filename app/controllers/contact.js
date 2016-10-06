import Ember from 'ember';
const computed = Ember.computed;

export default Ember.Controller.extend({
	mailIsValid: computed.match('model.email', /^.+@.+\..+$/),
	messageIsValid: computed.gte('model.message.length', 5),

	isValid: computed.and('mailIsValid', 'messageIsValid'),
	isDisabled: computed.not('isValid'),

	responseMessage: ''
});
