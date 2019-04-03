exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msg = await message.channel.send('<@'+message.author.id+'>');

    let embed = new client.Embed('normal', {
      title: 'Ping',
      description: `Message Trip: ${msg.createdTimestamp - message.createdTimestamp}ms
Websocket Heartbeat: ${Math.floor(client.pings[0])}ms
Avrage Websocket Heartbeat: ${Math.floor(client.pings.avrage())}ms`
    });

    msg.edit(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'ping',
  category: 'General',
  description: 'Returns CytrusBot\'s ping',
  usage: 'ping'
};
