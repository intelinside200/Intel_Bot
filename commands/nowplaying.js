module.exports = {
	name: 'ping',
	description: 'Get the song that is playing.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Ping for Intel Bot: 1829ms');
		return message.channel.send(`Now playing ${serverQueue.songs[0].title}`);
	},
};