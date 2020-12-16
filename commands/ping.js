module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Show the bot's average ping",
  execute(message) {
    message.reply(`📈 Promedio de ping a API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
