module.exports = {
	name: 'purge',
	description: 'Delete the last messages in all chats.',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('Please provide the number of messages to delete. (max 350)')
		}
        

		if (!deleteCount || deleteCount < 2 || deleteCount > 350)
			return message.reply('Please provide a number between 2 and 350 for the number of messages to delete');

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`I couldn't delete the messages because of: ${error}`));
	},
};