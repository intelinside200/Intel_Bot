module.exports = {
	name: 'list_help_music',
	description: 'List some help about music with the Intel Bot 1.1 Alpha',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('**The avabiale commands for music are**: "intel_pls_play >youtube url< - allows to play music within a voice channel! Make sure you are in it!", "intel_pls_skip - allows to skip the song that is playing!" and lastly, "intel_pls_stop - stops all songs in a queue immediately! **immediately!**');
		return message.channel.send(`**The avabiale commands for music are**: "intel_pls_play >youtube url< - allows to play music within a voice channel! Make sure you are in it!", "intel_pls_skip - allows to skip the song that is playing!" and lastly, "intel_pls_stop - stops all songs in a queue immediately! **immediately!**`);
	},
};