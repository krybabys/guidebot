exports.run = async (client, message, [action, key, ...value], level) => {
    const member = message.mentions.members.first()
    await member.kick()




}

exports.help = {
    name: "Miscellaneous",
    category: "system"


}; 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };