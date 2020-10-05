const Discord = require('discord.js');
const menus = require("./menu.json");
const token = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'günün-menüsü') {
      rnd = Math.floor(Math.random()*31);
      const menuTable = new Discord.MessageEmbed()
      .setTitle("Günün Menüsü")
      .setDescription(`
      **Başlangıç**: ${menus[rnd][0]}
      **Ana Yemek I**: ${menus[rnd][1]}
      **Ana Yemek II**: ${menus[rnd][2]}
      **Tatlı**: ${menus[rnd][3]}
      `);
    msg.reply(menuTable);
  }
});

client.login(token.token);