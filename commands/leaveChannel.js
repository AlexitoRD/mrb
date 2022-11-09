const {SlashCommandBuilder, ChannelType} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Leaves the voice channel.'),
};
