const fs = require("fs");

module.exports = {
  name: "clips",
  description: "Listar todos los clips",
  execute(message) {
    fs.readdir("./sounds", function(err, files) {
      if (err) return console.log("No se puede leer el directorio: " + err);

      let clips = [];

      files.forEach(function(file) {
        clips.push(file.substring(0, file.length - 4));
      });

      message.reply(`${clips.join(" ")}`).catch(console.error);
    });
  }
};
