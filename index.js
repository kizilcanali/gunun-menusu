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
  else if (msg.content === 'yardım'){
    const helpTable = new Discord.MessageEmbed()
    .setTitle("Komutlar")
    .setDescription(`Günün Menüsünü Görmek İçin: günün-menüsü `);
    msg.reply(helpTable);
  }else if (msg.content == 'çorba'){
    const corbaTable = new Discord.MessageEmbed()
    .setTitle("İşte enfes bir çorba")
    .setDescription(`**Çorba:** ${menus[rnd][0]}`);
    msg.reply(corbaTable);
  }else if (msg.content == 'ana-yemek'){
    const anaYemekTable = new Discord.MessageEmbed()
    .setTitle("İşte enfes bir yemek")
    .setDescription(`**Yemek:** ${menus[rnd][1]}`);
    msg.reply(anaYemekTable);
  }else if (msg.content == 'tatlı'){
    const tatlıTable = new Discord.MessageEmbed()
    .setTitle("İşte leziz bir tatlı")
    .setDescription(`**Tatlı:** ${menus[rnd][3]}`);
    msg.reply(tatlıTable);
  }else if (msg.content == 'tamamlayıcı-yemek'){
    const tamamlayıcıTable = new Discord.MessageEmbed()
    .setTitle("Bak işte bu yanında iyi gider")
    .setDescription(`**Yemek:** ${menus[rnd][2]}`);
    msg.reply(tamamlayıcıTable);
  }
  // Tek tek yemekler kategorileri gelecek [X]
  // Tarif                                 []
  // Kalori                                []
  
});

client.login(token.token);