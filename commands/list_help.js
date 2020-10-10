module.exports = {
	name: 'list_help',
	description: 'List some help to get you running with the Intel Bot 1.1 Alpha',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Ha! Please **name** the section you would like to receive help from: Select from "mod for example intel_pls_list_help_mod", "music", "wacky" or "info". I promise more commands are on the way! ');
		return message.channel.send(`Ha! Please **name** the section you would like to receive help from: Select from "mod for example intel_pls_list_help_mod", "music", "wacky" or "info". I promise more commands are on the way!`);
	},
};