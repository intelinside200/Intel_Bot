module.exports = {
	name: 'list_help_mod',
	description: 'List some help on how to moderate on the Intel Bot 1.1 Alpha',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('**The avaibliable commands for moderation at the moment are**: "intel_pls_ban @(someone you want to ban) - ban people with a simple command"          "intel_pls_purge (number between 2 and 350) - makes the bot delete messages instantly. Just select a value!  ');
		return message.channel.send(`**The avaibliable commands for moderation at the moment are**: "intel_pls_ban @(someone you want to ban) - ban people with a simple command"          "intel_pls_purge (number between 2 and 350) - makes the bot delete messages instantly. Just select a value!  `);
	},
};