module.exports = (client) => {
	console.log('Bot Is Online And Ready To Go!');

	client.user.setStatus('online');

	client.user.setActivity('type e!help');
};
