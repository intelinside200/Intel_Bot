module.exports = {
	name: 'start',
	description: 'What to do with the intel bot! Current version: 1.1 Alpha ',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Welcome to the Intel Bot. The current version of the bot is **1.1 Alpha**. To start with the intel bot, type in intel_pls_help! ');
		return message.channel.send(`Welcome to the Intel Bot. The current version of the bot is **1.1 Alpha**. To start with the intel bot, type in intel_pls_help!`);
	},
};