const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "remove",
  aliases: ["rm"],
  description: "Quitar la canción de la lista",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("No hay lista.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Uso: ${message.client.prefix}eliminar <Número de la lista>`);
    if (isNaN(args[0])) return message.reply(`Uso: ${message.client.prefix}eliminar <Número de la lista>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ removido**${song[0].title}** de la lista.`);
  }
};
