// Calling all environment variables from local environment variables using dotenv

require("dotenv").config()

const { Client } = require("discord.js")

const client = new Client({intents : ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"]})

client.on("ready", () => {
    console.log("Bot in")
})

client.on('message', (message)=>{
    if(message.author.bot) return;
    if(message.content == "Hello" || message.content == "Hi"){
        message.channel.send("Hello there @"+message.author.tag)
    }
})

client.login("OTI2ODc3NTU0NzcyNjc2NjA5.YdCD_Q.RMKnwkWlItQ5jTPUkjGvJ1WJ_Lk")
