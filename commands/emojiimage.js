//https://cdn.discordapp.com/emojis/id.png
const { Attachment } = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    let id = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/.exec(args[1]);
    
    if (!id) return message.reply('You did\'nt input a valid emoji or it is a default Discord emoji!');
    switch (args[0]) {
      case 'animated':
        message.channel.send(new Attachment('https://cdn.discordapp.com/emojis/' + id + '.gif'));
        break;
      case 'static':
        message.channel.send(new Attachment('https://cdn.discordapp.com/emojis/' + id + '.png'));
        break;
      default:
        message.reply('You need to supply the type of emoji it is!');
        break;
    }
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['emoteimage', 'ei', 'eimage', 'emojii', 'emotei'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'emojiimage',
  category: 'Fun',
  description: 'Returns the image of your desired emoji',
  usage: 'emojiimage <static/animated> <emoji>'
};
