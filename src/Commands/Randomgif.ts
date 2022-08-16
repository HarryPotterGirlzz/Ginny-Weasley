import { EmbedBuilder } from 'discord.js';
import { SlashCommand } from '../Structures';
import { getGinnyGif } from '../Util';

export default new SlashCommand()
    .setName('randomgif')
    .setDescription('Sends a random Ginny gif.')
    .setCallback(async interaction => {
        const gif = await getGinnyGif();

        const embed = new EmbedBuilder()
            .setTitle('Here you go ❤️')
            .setImage(gif)
            .setFooter({ text: 'Use /subscribe to receive daily Ginny gifs in your DMs.' });

        interaction.reply({ embeds: [embed], ephemeral: true });
    });
