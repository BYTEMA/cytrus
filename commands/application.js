exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    client.fetchApplication('@me').then(app => {
      let embed = new client.Embed('blend', {
        title: app.name,
        thumbnail: app.iconURL,
        description: app.description,
        fields: [
          {
            title: 'ID',
            text: app.id,
            inline: true
          },
          {
            title: 'Public',
            text: app.botPublic,
            inline: true
          },
          {
            title: 'Created At',
            text: app.createdAt
          },
          {
            title: 'Owner',
            text: app.owner.tag
          }
        ]
      });

      message.channel.send(embed);
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['app'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'application',
  category: 'General',
  description: 'Returns a Cytrus\'s OAuth2 application',
  description: 'Returns Cytrus\'s OAuth2 application',
  usage: 'application'
};