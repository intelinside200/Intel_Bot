module.exports = {
	name: 'list_help_info',
	description: 'List some help about receiving info with the Intel Bot 1.1 Alpha',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Info is currently broken down and Marcel is looking into this situation. The only command in info that is not working was the intel_pls_userinfo but that is broken down. Expect to have it fixed anytime soon! In the meantime, have fun with other commands!');
		return message.channel.send(`Info is currently broken down and Marcel is looking into this situation. The only command in info that is not working was the intel_pls_userinfo but that is broken down. Expect to have it fixed anytime soon! In the meantime, have fun with other commands!`);
	},
};