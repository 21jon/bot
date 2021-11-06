const Discord = require("discord.js");
const config = require("./config.json");
const chalk = require("chalk");
const client = new Discord.Client();
const disbut = require("discord-buttons");
disbut(client);

const prefix = config.prefix;

// Functions
function getTime() {
  var date = new Date();
  var time =
    "[" +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    "] ";
  return time;
}

function printReady() {
  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );
  console.log("");
  console.log("");
  console.log(
    chalk.cyan(getTime() + "Eingeloggt als " + client.user.tag + ".")
  );
  console.log(chalk.magenta(getTime() + "Made with <3 by HxliosS#0001."));
  console.log("");
  console.log(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );
}

function sendCreateTicketMessage() {
  const ticketchannel = client.channels.cache.get(config.ticketchannel);

  console.log(client.channels.cache.get(config.ticketchannel));

  if (client.channels.cache.get(config.ticketchannel) === undefined) return;

  client.channels.cache
    .get(config.ticketchannel)
    .bulkDelete(100, true)
    .then(
      console.log(chalk.green(getTime() + "System erfolgreich gestartet."))
    );

  const embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Ticket erstellen")
    .setAuthor(
      "StationV - Ticketsystem",
      "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
      ""
    )
    .setThumbnail(
      "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
    )
    .setDescription(
      "Erstelle per Klick auf die Schaltfläche ein beliebiges Ticket."
    )
    .setTimestamp()
    .setFooter(
      "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
      "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
    );

  //        let option = new disbut.MessageMenuOption()
  //            .setLabel('Allgemeinsupport')
  //            .setEmoji('📩')
  //            .setValue('menuid')
  let option2 = new disbut.MessageMenuOption()
    .setLabel("Allgemeinsupport")
    .setEmoji("📩")
    .setValue("menuid2")
    .setDescription("Nutze den allgemeinen Support!");

  let option3 = new disbut.MessageMenuOption()
    .setLabel("Entbannungen")
    .setEmoji("📩")
    .setValue("menuid3")
    .setDescription("Anticheat Fehlbans / Allgemeine Entbannungen");

  let option4 = new disbut.MessageMenuOption()
    .setLabel("Spenden")
    .setEmoji("📩")
    .setValue("menuid4")
    .setDescription("Erhalte Informationen zum Thema Donations");

  let option5 = new disbut.MessageMenuOption()
    .setLabel("Rückerstattungen")
    .setEmoji("📩")
    .setValue("menuid5")
    .setDescription("Stelle eine Anfrage auf Rückerstattungen (Clips only)");

  let option6 = new disbut.MessageMenuOption()
    .setLabel("Teamanliegen")
    .setEmoji("📩")
    .setValue("menuid6")
    .setDescription("Teambewerbungen / Teambeschwerden einreichen");

  let option7 = new disbut.MessageMenuOption()
    .setLabel("Fraktionsanliegen")
    .setEmoji("📩")
    .setValue("menuid7")
    .setDescription("Konzepte einreichen / Fraktionssupport");

  //        let optionno = new disbut.MessageMenuOption()
  //            .setLabel('Keine Kategorie')
  //            .setEmoji('✉️')
  //            .setValue('menuidno')
  //            .setDescription("Dient dem Zurücksetzen des Menüs")

  let select = new disbut.MessageMenu()
    .setID("customid")
    .setPlaceholder("Ticket öffnen")
    .setMaxValues(1)
    .setMinValues(1)
    //            .addOption(option)
    //          .addOption(optionno)
    .addOption(option2)
    .addOption(option3)
    .addOption(option4)
    .addOption(option5)
    .addOption(option6)
    .addOption(option7);

  ticketchannel.send(embed, select);
}

function sendEmbedToTicket(channel) {
  let button = new disbut.MessageButton()
    .setStyle("grey")
    .setLabel("Ticket schließen")
    .setID("closeticket")
    .setEmoji("🔒");

  let row = new disbut.MessageActionRow().addComponents(button);

  const embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Ticket schließen")
    .setAuthor(
      "StationV - Ticketsystem",
      "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
      ""
    )
    .setThumbnail(
      "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
    )
    .setDescription("Bitte teile uns dein Anliegen so genau wie möglich mit!")
    .setTimestamp()
    .setFooter(
      "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
      "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
    );

  channel.send(embed, row);
}

function sendEmbedToTicket2(channel) {
  let button = new disbut.MessageButton()
    .setStyle("grey")
    .setLabel("Ticket schließen")
    .setID("closeticket")
    .setEmoji("🔒");

  let row = new disbut.MessageActionRow().addComponents(button);

  const embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Ticket schließen")
    .setAuthor(
      "StationV - Ticketsystem",
      "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
      ""
    )
    .setThumbnail(
      "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
    )
    .setDescription(
      "Hallo,\nwenn du Fragen zu Bestellungen aus unserem Tebex-Shop hast, dann stell sie einfach in diesem Ticket.\n\nWenn du schon einen Artikel erworben hast, schick bitte die Bestellbestätigung per Screenshot, hier rein.\nUm den Ablauf zu beschleunigen, solltest du direkt deinen Steam Namen und falls du IC bist, deine ID dazu schreiben.\nDeine ID kannst du ingame mit /id herausfinden, den Chat öffnest du mit >T<"
    )
    .setTimestamp()
    .setFooter(
      "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
      "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
    );

  channel.send(embed, row);
}

function sendEmbedToTicket3(channel) {
  let button = new disbut.MessageButton()
    .setStyle("grey")
    .setLabel("Ticket schließen")
    .setID("closeticket")
    .setEmoji("🔒");

  let row = new disbut.MessageActionRow().addComponents(button);

  const embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Ticket schließen")
    .setAuthor(
      "StationV - Ticketsystem",
      "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
      ""
    )
    .setThumbnail(
      "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
    )
    .setDescription(
      "Hallo,\nschreibe uns bitte deinen Entbannungsantrag hier ins Ticket.\nFüg bitte einen Screenshot vom Banscreen ein\nMit folgender Tastenkombination kannst du einen Screenshot machen: (Windows + Umschalt + S)"
    )
    .setTimestamp()
    .setFooter(
      "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
      "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
    );

  channel.send(embed, row);
}

function getUserFromMention(mention) {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    return client.users.cache.get(mention);
  }
}
// End of functions

client.on("ready", () => {
  printReady();
  sendCreateTicketMessage();

  client.user.setActivity("StationV", {
    type: "PLAYING",
  });
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  if (command === "claim") {
    let server = client.guilds.cache.get(config.serverid);
    let channeltopic = message.channel.topic;

    if (channeltopic.startsWith("Ticket")) {
      if (message.member.roles.cache.find((r) => r.id === config.teamroleid)) {
        message.channel.updateOverwrite(message.member, {
          VIEW_CHANNEL: true,
        });

        message.channel.updateOverwrite(config.teamroleid, {
          VIEW_CHANNEL: false,
        });

        const embed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setTitle("Ticket übernommen")
          .setAuthor(
            "StationV - Ticketsystem",
            "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
            ""
          )
          .setThumbnail(
            "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
          )
          .setDescription(
            "Das Ticket wurde von <@" + message.author + "> übernommen."
          )
          .setTimestamp()
          .setFooter(
            "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
            "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
          );

        message.channel.send(embed);
      } else {
        message.channel.send(
          "Du besitzt keine ausreichenden Rechte, um diesen Befehl nutzen zu können."
        );
      }
    } else {
      message.channel.send(
        "Dieser Channel ist kein offenes Ticket. Bitte führe den Befehl in einem Ticket-Channel aus."
      );
    }
  }

  if (command === "add") {
    let server = client.guilds.cache.get(config.serverid);
    let channeltopic = message.channel.topic;

    if (channeltopic.startsWith("Ticket")) {
      if (message.member.roles.cache.find((r) => r.id === config.teamroleid)) {
        if (args.length < 1) {
          return message.reply(
            "bitte nutze den Befehl wie folgt: `" +
              config.prefix +
              "add [@User]`."
          );
        }

        var mentioneduser = getUserFromMention(args[0]);

        const embed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setTitle("User zum Ticket hinzugefügt")
          .setAuthor(
            "StationV - Ticketsystem",
            "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
            ""
          )
          .setThumbnail(
            "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
          )
          .setDescription(
            "<@" + mentioneduser + "> wurde zum Ticket hinzugefügt."
          )
          .setTimestamp()
          .setFooter(
            "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
            "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
          );

        message.channel.send(embed);

        message.channel.updateOverwrite(mentioneduser, {
          VIEW_CHANNEL: true,
        });
      } else {
        message.channel.send(
          "Du besitzt keine ausreichenden Rechte, um diesen Befehl nutzen zu können."
        );
      }
    } else {
      message.channel.send(
        "Dieser Channel ist kein offenes Ticket. Bitte führe den Befehl in einem Ticket-Channel aus."
      );
    }
  }

  if (command === "remove") {
    let server = client.guilds.cache.get(config.serverid);
    let channeltopic = message.channel.topic;

    if (channeltopic.startsWith("Ticket")) {
      if (message.member.roles.cache.find((r) => r.id === config.teamroleid)) {
        if (args.length < 1) {
          return message.reply(
            "bitte nutze den Befehl wie folgt: `" +
              config.prefix +
              "remove [@User]`."
          );
        }

        var mentioneduser = getUserFromMention(args[0]);

        const embed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setTitle("User vom Ticket entfernt")
          .setAuthor(
            "StationV - Ticketsystem",
            "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
            ""
          )
          .setThumbnail(
            "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
          )
          .setDescription("<@" + mentioneduser + "> wurde vom Ticket entfernt.")
          .setTimestamp()
          .setFooter(
            "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
            "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
          );
        message.channel.send(embed);

        message.channel.updateOverwrite(mentioneduser, {
          VIEW_CHANNEL: false,
        });
      } else {
        message.channel.send(
          "Du besitzt keine ausreichenden Rechte, um diesen Befehl nutzen zu können."
        );
      }
    } else {
      message.channel.send(
        "Dieser Channel ist kein offenes Ticket. Bitte führe den Befehl in einem Ticket-Channel aus."
      );
    }
  }

  if (command === "close") {
    let server = client.guilds.cache.get(config.serverid);
    let channeltopic = message.channel.topic;

    if (channeltopic.startsWith("Ticket")) {
      if (message.member.roles.cache.find((r) => r.id === config.teamroleid)) {
        const embed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setTitle("Ticket geschlossen")
          .setAuthor(
            "StationV - Ticketsystem",
            "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
            ""
          )
          .setThumbnail(
            "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
          )
          .setDescription(
            "Das Ticket wurde von <@" + message.author + "> geschlossen."
          )
          .setTimestamp()
          .setFooter(
            "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
            "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
          );

        message.channel.send(embed);

        setTimeout(function () {
          message.channel.overwritePermissions([
            {
              id: server.id,
              deny: ["VIEW_CHANNEL"],
            },
          ]);
        }, 2000);

        let button = new disbut.MessageButton()
          .setStyle("grey")
          .setLabel("Ticket löschen")
          .setID("deleteticket")
          .setEmoji("🗑️");

        let row = new disbut.MessageActionRow().addComponents(button);

        const embed2 = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setTitle("Ticket löschen")
          .setAuthor(
            "StationV - Ticketsystem",
            "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
            ""
          )
          .setThumbnail(
            "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
          )
          .setDescription(
            "Du kannst das Ticket jetzt löschen. Klicke dazu einfach auf den Button oder nutze den Befehl `" +
              config.prefix +
              "delete`."
          )
          .setTimestamp()
          .setFooter(
            "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
            "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
          );
        setTimeout(function () {
          message.channel.setParent(config.ticketarchivecategory);

          message.channel.send(embed2, row);
        }, 5000);
      } else {
        message.channel.send(
          "Du besitzt keine ausreichenden Rechte, um diesen Befehl nutzen zu können."
        );
      }
    } else {
      message.channel.send(
        "Dieser Channel ist kein offenes Ticket. Bitte führe den Befehl in einem Ticket-Channel aus."
      );
    }
  }
});

/*(menu.values[0] == "menuid") {
        let server = client.guilds.cache.get(config.serverid);
        let everyoneRole = server.roles.cache.find(r => r.name === '@everyone');
        let teamrole = server.roles.cache.find(r => r.id === config.teamroleid);
        await menu.clicker.fetch();
        let user = menu.clicker.user;

        let newchannel = await server.channels.create(`allgemein-${menu.clicker.user.username}`, { type: 'text', parent: config.ticketcategory, topic: `Ticket ${menu.clicker.user.username}`, permissionOverwrites: [
            {
              id: everyoneRole,
              deny: ['VIEW_CHANNEL'],
            },
            {
              id: teamrole,
              allow: ['VIEW_CHANNEL'],
            },
            {
              id: user,
              allow: ['VIEW_CHANNEL'],
            },
        ], })
        console.log(chalk.green(getTime() + 'Ticket ' + newchannel.name + ' erstellt.'))

        menu.reply.send("Dein Ticket <#" + newchannel.id +  "> wurde erstellt", true)

        sendEmbedToTicket(newchannel)
    }
    else if */

client.on("clickMenu", async (menu) => {
  if (menu.values[0] == "menuid2") {
    let server = client.guilds.cache.get(config.serverid);
    let everyoneRole = server.roles.cache.find((r) => r.name === "@everyone");
    let plrole = server.roles.cache.find((r) => r.id === config.teamroleid);
    await menu.clicker.fetch();
    let user = menu.clicker.user;

    let newchannel = await server.channels.create(
      `support-${menu.clicker.user.username}`,
      {
        type: "text",
        parent: config.supportcategory,
        topic: `Ticket ${menu.clicker.user.username}`,
        permissionOverwrites: [
          {
            id: everyoneRole,
            deny: ["VIEW_CHANNEL"],
          },
          {
            id: plrole,
            allow: ["VIEW_CHANNEL"],
          },
          {
            id: user,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      }
    );
    console.log(
      chalk.green(getTime() + "Ticket " + newchannel.name + " erstellt.")
    );

    menu.reply.send(
      "Dein Ticket <#" + newchannel.id + "> wurde erstellt",
      true
    );

    sendEmbedToTicket(newchannel);
  } else if (menu.values[0] == "menuidno") {
    menu.reply.send(
      "Dieser Menüpunkt dient nur der Zurücksetzung des Menüs.",
      true
    );
  }
});

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

client.on("clickMenu", async (menu) => {
  if (menu.values[0] == "menuid3") {
    let server = client.guilds.cache.get(config.serverid);
    let everyoneRole = server.roles.cache.find((r) => r.name === "@everyone");
    let plrole = server.roles.cache.find((r) => r.id === config.modroleid);
    await menu.clicker.fetch();
    let user = menu.clicker.user;

    let newchannel = await server.channels.create(
      `entbannung-${menu.clicker.user.username}`,
      {
        type: "text",
        parent: config.entbannungcategory,
        topic: `Ticket ${menu.clicker.user.username}`,
        permissionOverwrites: [
          {
            id: everyoneRole,
            deny: ["VIEW_CHANNEL"],
          },
          {
            id: plrole,
            allow: ["VIEW_CHANNEL"],
          },
          {
            id: user,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      }
    );
    console.log(
      chalk.green(getTime() + "Ticket " + newchannel.name + " erstellt.")
    );

    menu.reply.send(
      "Dein Ticket <#" + newchannel.id + "> wurde erstellt",
      true
    );

    sendEmbedToTicket3(newchannel);
  } else if (menu.values[0] == "menuidno") {
    menu.reply.send(
      "Dieser Menüpunkt dient nur der Zurücksetzung des Menüs.",
      true
    );
  }
});

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

client.on("clickMenu", async (menu) => {
  if (menu.values[0] == "menuid4") {
    let server = client.guilds.cache.get(config.serverid);
    let everyoneRole = server.roles.cache.find((r) => r.name === "@everyone");
    let plrole = server.roles.cache.find((r) => r.id === config.plroleid);
    await menu.clicker.fetch();
    let user = menu.clicker.user;

    let newchannel = await server.channels.create(
      `spenden-${menu.clicker.user.username}`,
      {
        type: "text",
        parent: config.spendencategory,
        topic: `Ticket ${menu.clicker.user.username}`,
        permissionOverwrites: [
          {
            id: everyoneRole,
            deny: ["VIEW_CHANNEL"],
          },
          {
            id: plrole,
            allow: ["VIEW_CHANNEL"],
          },
          {
            id: user,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      }
    );
    console.log(
      chalk.green(getTime() + "Ticket " + newchannel.name + " erstellt.")
    );

    menu.reply.send(
      "Dein Ticket <#" + newchannel.id + "> wurde erstellt",
      true
    );

    sendEmbedToTicket2(newchannel);
  } else if (menu.values[0] == "menuidno") {
    menu.reply.send(
      "Dieser Menüpunkt dient nur der Zurücksetzung des Menüs.",
      true
    );
  }
});

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

client.on("clickMenu", async (menu) => {
  if (menu.values[0] == "menuid5") {
    let server = client.guilds.cache.get(config.serverid);
    let everyoneRole = server.roles.cache.find((r) => r.name === "@everyone");
    let plrole = server.roles.cache.find((r) => r.id === config.adminroleid);
    await menu.clicker.fetch();
    let user = menu.clicker.user;

    let newchannel = await server.channels.create(
      `erstattung-${menu.clicker.user.username}`,
      {
        type: "text",
        parent: config.ruckerstattungcategory,
        topic: `Ticket ${menu.clicker.user.username}`,
        permissionOverwrites: [
          {
            id: everyoneRole,
            deny: ["VIEW_CHANNEL"],
          },
          {
            id: plrole,
            allow: ["VIEW_CHANNEL"],
          },
          {
            id: user,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      }
    );
    console.log(
      chalk.green(getTime() + "Ticket " + newchannel.name + " erstellt.")
    );

    menu.reply.send(
      "Dein Ticket <#" + newchannel.id + "> wurde erstellt",
      true
    );

    sendEmbedToTicket(newchannel);
  } else if (menu.values[0] == "menuidno") {
    menu.reply.send(
      "Dieser Menüpunkt dient nur der Zurücksetzung des Menüs.",
      true
    );
  }
});

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

client.on("clickMenu", async (menu) => {
  if (menu.values[0] == "menuid6") {
    let server = client.guilds.cache.get(config.serverid);
    let everyoneRole = server.roles.cache.find((r) => r.name === "@everyone");
    let plrole = server.roles.cache.find(
      (r) => r.id === config.teamleitungroleid
    );
    await menu.clicker.fetch();
    let user = menu.clicker.user;

    let newchannel = await server.channels.create(
      `t-anliegen-${menu.clicker.user.username}`,
      {
        type: "text",
        parent: config.teamcategory,
        topic: `Ticket ${menu.clicker.user.username}`,
        permissionOverwrites: [
          {
            id: everyoneRole,
            deny: ["VIEW_CHANNEL"],
          },
          {
            id: plrole,
            allow: ["VIEW_CHANNEL"],
          },
          {
            id: user,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      }
    );
    console.log(
      chalk.green(getTime() + "Ticket " + newchannel.name + " erstellt.")
    );

    menu.reply.send(
      "Dein Ticket <#" + newchannel.id + "> wurde erstellt",
      true
    );

    sendEmbedToTicket(newchannel);
  } else if (menu.values[0] == "menuidno") {
    menu.reply.send(
      "Dieser Menüpunkt dient nur der Zurücksetzung des Menüs.",
      true
    );
  }
});

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

client.on("clickMenu", async (menu) => {
  if (menu.values[0] == "menuid7") {
    let server = client.guilds.cache.get(config.serverid);
    let everyoneRole = server.roles.cache.find((r) => r.name === "@everyone");
    let plrole = server.roles.cache.find((r) => r.id === config.frakroleid);
    await menu.clicker.fetch();
    let user = menu.clicker.user;

    let newchannel = await server.channels.create(
      `fraktion-${menu.clicker.user.username}`,
      {
        type: "text",
        parent: config.frakcategory,
        topic: `Ticket ${menu.clicker.user.username}`,
        permissionOverwrites: [
          {
            id: everyoneRole,
            deny: ["VIEW_CHANNEL"],
          },
          {
            id: plrole,
            allow: ["VIEW_CHANNEL"],
          },
          {
            id: user,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      }
    );
    console.log(
      chalk.green(getTime() + "Ticket " + newchannel.name + " erstellt.")
    );

    menu.reply.send(
      "Dein Ticket <#" + newchannel.id + "> wurde erstellt",
      true
    );

    sendEmbedToTicket(newchannel);
  } else if (menu.values[0] == "menuidno") {
    menu.reply.send(
      "Dieser Menüpunkt dient nur der Zurücksetzung des Menüs.",
      true
    );
  }
});

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

client.on("clickButton", async (button) => {
  if (button.id == "deleteticket") {
    let server = client.guilds.cache.get(config.serverid);
    await button.clicker.fetch();
    let user = button.clicker.user;
    let member = server.members.cache.get(user.id);

    if (member.hasPermission("ADMINISTRATOR")) {
      const fetchedChannel = server.channels.cache.get(button.channel.id);
      fetchedChannel.delete();
    }
  }

  if (button.id == "closeticket") {
    let server = client.guilds.cache.get(config.serverid);
    await button.clicker.fetch();
    let user = button.clicker.user;
    let channel = button.channel.id;

    button.reply.defer();

    const embed = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setTitle("Ticket geschlossen")
      .setAuthor(
        "StationV - Ticketsystem",
        "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
        ""
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
      )
      .setDescription("Das Ticket wurde von <@" + user + "> geschlossen.")
      .setTimestamp()
      .setFooter(
        "Made with ❤️ by HxliosS#0001 & Checker Duo#0001",
        "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
      );

    button.channel.send(embed);

    setTimeout(function () {
      button.channel.overwritePermissions([
        {
          id: server.id,
          deny: ["VIEW_CHANNEL"],
        },
      ]);
    }, 2000);

    let button2 = new disbut.MessageButton()
      .setStyle("grey")
      .setLabel("Ticket löschen")
      .setID("deleteticket")
      .setEmoji("🗑️");

    let row = new disbut.MessageActionRow().addComponents(button2);

    const embed2 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setTitle("Ticket löschen")
      .setAuthor(
        "StationV - Ticketsystem",
        "https://cdn.discordapp.com/avatars/361105590929588229/9e7b5877d83d1295977ec2dd22fb47eb.png?size=4096",
        ""
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/896415786942464031/903708952540377118/StationV.gif"
      )
      .setDescription(
        "Du kannst das Ticket jetzt löschen. Klicke dazu einfach auf den Button."
      )
      .setTimestamp()
      .setFooter(
        "Made with ❤️ by HxliosS#0001",
        "https://cdn.discordapp.com/avatars/670598870975119379/024b123d9598e2463399cb3046050d8d.png?size=4096"
      );

    setTimeout(function () {
      button.channel.setParent(config.ticketarchivecategory);

      button.channel.send(embed2, row);
    }, 5000);
  }
});

client.login(config.token);
