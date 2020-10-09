const Discord = require('discord.js');
const menus = require("./menu.json");
const token = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  // Tek tek yemekler kategorileri gelecek [X]
  // Tarif                                 []
  // Kalori                                []

client.on('message', msg => {
  if (msg.content === 'günün-menüsü') {
      rnd = randomGenerator();
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
  else if (msg.content == 'çorba'){
    rnd = randomGenerator();
    const corbaTable = new Discord.MessageEmbed()
    .setTitle("İşte enfes bir çorba")
    .setDescription(`**Çorba:** ${menus[rnd][0]}`);
    msg.reply(corbaTable);
  }else if (msg.content == 'ana-yemek'){
    rnd = randomGenerator();
    const anaYemekTable = new Discord.MessageEmbed()
    .setTitle("İşte enfes bir yemek")
    .setDescription(`**Yemek:** ${menus[rnd][1]}`);
    msg.reply(anaYemekTable);
  }else if (msg.content == 'tatlı'){
    rnd = randomGenerator();
    const tatlıTable = new Discord.MessageEmbed()
    .setTitle("İşte leziz bir tatlı")
    .setDescription(`**Tatlı:** ${menus[rnd][3]}`);
    msg.reply(tatlıTable);
  }else if (msg.content == 'yardımcı-yemek'){
    rnd = randomGenerator();
    const tamamlayıcıTable = new Discord.MessageEmbed()
    .setTitle("Bak işte bu yanında iyi gider")
    .setDescription(`**Yemek:** ${menus[rnd][2]}`);
    msg.reply(tamamlayıcıTable);
  }else if (msg.content === 'yardım'){
    const helpTable = new Discord.MessageEmbed()
    .setTitle("Komutlar")
    .setDescription(
      `Günün Menüsünü Görmek İçin: **günün-menüsü** 
      \nEnfes Çorbalar İçin: **çorba** 
      \nEnfes Yemekler İçin: **ana-yemek** 
      \nYani bu da yanında gider baklar için: **tamamlayıcı-yemek** 
      \nVe Kapanışı Leziz Bir Tatlıyla Yapmak İçin: **tatlı**`);
    msg.reply(helpTable);
  }
});

function randomGenerator(){
  return Math.floor(Math.random()*31);
}

client.login(token.token);