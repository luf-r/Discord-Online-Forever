const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace TOKEN with your bot account's token
const token = process.env.token;

if (!token) {
  console.error("Missing Discord bot token.");
  process.exit(1);
}

const bot = new Eris(token);

bot.on("error", (err) => {
  console.error("An error occurred:", err); // or your preferred logger
});

bot.on("ready", () => {
  console.log("Bot is ready!");
  bot.editStatus("dnd", {
    name: "احبكم كلكم",
    type: 3, // Activity type: playing
    url: "https://discordapp.com", // Optional: a URL to link to
  });
});

bot.connect(); // Get the bot to connect to Discord
