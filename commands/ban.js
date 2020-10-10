const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'ban',
	description: 'Ban a player',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = getUserFromMention(args[0], client);

		if (!member) {
			return message.reply('Please mention the user you would like to ban in order to actually BAN him/her.');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('You do not have permission to ban this user!');
		}

		return message.guild.members.ban(member)
			.then(() => message.reply(`${member.username} was successfully banned.`))
			.catch(error => message.reply('**Unfortuanely, I was not able to ban ${member.username}. This could be for a vareity of reasons... Please try again later.** '));
	},
};