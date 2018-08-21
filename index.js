const Discord = require("discord.js");
const { prefix, token } = require("config.json");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot is active!");
});

/*repeats messages sent by users to console
client.on("message", message => {
  console.log(message.content);
}); */

client.on("message", message => {
  if (message.content === "!isjacobawesome") {
    message.channel.send("Yes Jacob is awesome!");
  }
});

client.on("message", message => {
  if (message.content === "!serverstats") {
    message.channel.send(
      `Server Name: ${message.guild.name}\nNumber of members: ${message.guild
        .memberCount - 1} (not including this bot)`
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(`${prefix}h`)) {
    message.channel.send(
      "List Of Commands: \n !help / !h: Help \n !serverstats : Lists Server Stats \n !about : About the Bot \n !isjacobawesome : Is Jacob Awesome? \n !spicy : Is it spicy??? \n !s-[INSERT STICKER NAME HERE]: Send Stickers"
    );
  }
});

client.on("message", message => {
  if (message.content === "!about") {
    message.channel.send("Made by Jacob Tian");
  }
});

client.on("message", message => {
  if (message.content === "!spicy") {
    message.channel.send("__***BUT IS IT SPICY???***__");
  }
});

/*client.on("message", message => {
  if (message.content === "!s-android_turtle") {
    message.channel.sendFile(
      `https://emojipedia-us.s3.amazonaws.com/thumbs/160/google/80/turtle_1f422.png`
    )
  }
}); */

client.login(token);
