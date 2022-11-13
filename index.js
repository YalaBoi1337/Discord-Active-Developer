const { createInterface } = require('node:readline');
const { Client, REST, Routes, GatewayIntentBits, Partials } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { Users, Messages, GuildMember, ThereadMembers } = Partials;

const token = "HURFUIHEIRUFHEWIURFHIEUHRFUIHEFUIRHEUIRFH";//Add your bot token here

const client = new Client({
  intents: [Guilds, GuildMember, GuildMessages], 
  partials: [Users, Messages, GuildMember, ThereadMembers]
});

const YalaBoi = createInterface({ input: process.stdin, output: process.stdout });

client.on('interactionCreate', (interaction) => {
  interaction.reply(`API Latency is ${Math.round(client.ws.ping)}ms`);  
});

const question = (q) => new Promise((resolve) => YalaBoi.question(q, resolve));
(async ()=>{

  await client.login(token).catch((err) => {
    throw err
  });

  const rest = new REST({ version: '10' }).setToken(token);
  client.user.setActivity(`with ${client.guilds.cache.size} guilds!`);
  await rest.put(Routes.applicationCommands(client.user.id), { body: [
    {
      name: 'ping',
      description: 'Latency Of Bot'
    }
  ] });

  console.log(`Client logged in as ${client.user.username}`);
})();

/**
 * Made By @YalaBoi.#2466
 */
