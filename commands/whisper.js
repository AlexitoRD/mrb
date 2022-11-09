const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whisper')
        .setDescription('The bot will send you a direct message.'),
    async execute(interaction) {
        await interaction.user.send('Hello World');
    },
};