exports.run = async (client, message, args, level) => {
    const member = message.mentions.members.first()
    
    message.channel.send('test')
    await member.kick()



}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "Kick",
    category: "Miscellaneous",
    description: ",,,.",
    usage: "m....."
  };
  