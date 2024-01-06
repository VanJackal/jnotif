const {Client, Events, GatewayIntentBits, EmbedBuilder} = require('discord.js')
class Bot {
    constructor(token) {
        this.client = new Client({ intents:[GatewayIntentBits.Guilds]})
        this.initEvents()
        this.client.login(token)
    }

    initEvents = () => {
        this.client.once(Events.ClientReady, (readyClient) => {
            console.log(`Logged in as ${readyClient.user.tag}`)
        })
    }

    send = async (userid,msg,service) => {
        const embed = new EmbedBuilder()
            .setColor('#BB4488')
            .setTitle(service)
            .addFields({name:"Message",value:msg})
            .setTimestamp()
        const user = await this.client.users.fetch(userid)
        await user.send({embeds:[embed]})
    }
}

module.exports={
    Bot
}