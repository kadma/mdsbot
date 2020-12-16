const move = require("array-move");
const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "move",
  aliases: ["mv"],
  description: "Mover las canciones en la lista",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("No hay lista.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Uso: ${message.client.prefix}mover <Número de lista>`);
    if (isNaN(args[0]) || args[0] <= 1) return message.reply(`Uso: ${message.client.prefix}mover <Número de lista>`);

    let song = queue.songs[args[0] - 1];

    queue.songs = move(queue.songs, args[0] - 1, args[1] == 1 ? 1 : args[1] - 1);
    queue.textChannel.send(
      `${message.author} 🚚 movido **${song.title}** a ${args[1] == 1 ? 1 : args[1] - 1} en la lista.`
    );
  }
};
