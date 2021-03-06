const Discord = require('discord.js')

module.exports = {
    name: "재개",
    description: "노래를 재개해요.",
    async execute(message, args, client, track, interaction) {
        const queue = client.player.getQueue(message.guild.id);
        if (!message.member || !message.member.voice.channel) return message.reply('<a:x_:941623055703236639> 먼저 음성 채널에 가입하세요')
        const paused = queue.setPaused(false);
          let pausedembed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle("⏯️ 재개 ⏯️")
          .setDescription(`<a:o_:941623085788975206>\`${queue.current.title}\`(이)가 재개 되고 있습니다`)
          .addField("요청자", `${message.author}`, true)
            message.channel.send({ embeds: [pausedembed] })
            console.log(`${message.author.tag}명령어 호출 - 재개`)
    }
}