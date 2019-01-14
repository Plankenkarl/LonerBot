const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("message", (message) => {
    if(message.content === "Step 1") {
      message.channel.send("Welcome to Army Of LoneStars");
      message.channel.send("Known as LONE");
      message.channel.send("OG Crew Color  Neon Purple");
      message.channel.send("To Join you must Be active in-game. social on chat. helpful and stay hustlin!!");
      message.channel.send("HOW TO JOIN");
      message.channel.send("Click on the link below and request to join. Once you requested, let us know so we can accept it.");
      message.channel.send("https://socialclub.rockstargames.com/crew/army_of_lonestars/wal");
    }
    if(message.content === "Step 2") {
      message.channel.send("1. 16+ ps4 crew only.");
      message.channel.send("2. No crew killing.");
      message.channel.send("3. No fighting.");
      message.channel.send("4. Respect one another.");
      message.channel.send("5. Must help other members after you been helped.");
      message.channel.send("6. LONE must be set as your active crew.");
      message.channel.send("7. Psn must be linked/visible to crew+friends.");
      message.channel.send("8. Use your psn as your line messenger display name.");
      message.channel.send("9. Add any picture to your profile. Nothing racist or offensive.");
      message.channel.send("10. Communicate with members on chat when you're online.");


    }
    if(message.content === "Step 3") {
      message.channel.send("Link Your PSN to your Social Club Account. Ask an Admin if you need Screenshits");
    }
    if(message.content === "Step 4") {
        message.channel.send("PLEASE add all COMMISSIONERS to your friend's list on PS4 if you haven’t already");
        message.channel.send("US-Marines1995 - Crew Leader");
        message.channel.send("MiniNinja_94 - Admin");
        message.channel.send("FatherDoomLBC - Admin");
        message.channel.send("Sapphire_Wins - Admin");
        message.channel.send("I_Gamer4Life_I - Admin");
        message.channel.send("Its__Fr0zty - Admin");
      }
      if(message.content === "Social Club") {
        message.channel.send("https://socialclub.rockstargames.com/crew/army_of_lonestars/wall");
      }
      if(message.content === "YouTube Channels") {
        message.channel.send("US-Marines1995 - https://www.youtube.com/channel/UC_cOqD-gXfR64wJJpm-5eDA");
        message.channel.send("Sapphire_Wins - https://www.youtube.com/channel/UC7a308DirYoA6pf0tgQZg0g");
        message.channel.send("ModdingEnd-BO3- https://www.youtube.com/channel/UCdD6I01MBNbyRE7AnTDWtGQ");
      }
      if(message.content === "Closed Matchmaking") {
        message.channel.send("Pause Menu > Online > Options > Matchmaking Closed");
      }
      if(message.content === "Appear Offline") {
        message.channel.send("Hold PSN Button > Online Status > Appear Offline");
      }
      if(message.content === "Targeting Priority") {
        message.channel.send("1. You must have that crew member added to your friend's list on ps4.");
        message.channel.send("2. Press and hold down your interaction button and scroll down till you see target priority.");
        message.channel.send("3. Set it to strangers and this will prevent you from locking on to crew members.");
      }
      if(message.content === "Vote to kick") {
        message.channel.send("Pause > Online > Players > Players Name or Level > Kick");
      }
      if(message.content === "nocommand") {
        message.channel.send("roflmaotntpmp");
      }
      if(message.content === "nocommand") {
        message.channel.send("roflmaotntpmp");
      }
      const swearWords = ["fuck you", "Fuck you", "Asshole", "asshole", "cunt", "Cunt", "Bitch", "bitch", "Rape", "Sex", "rape", "sex", "Olbz", "OLbz", "OLBz", "oLbz", "oLBz", "oLBZ", "olBZ", "olBz", "olbZ", "STFU Dude", "stfu dude", "wtf"];
      if( swearWords.some(word => message.content.includes(word)) ) {
        message.reply("Let me remind you that fighting with a crew member can get you kicked");
        message.reply("So please no fighting :) ")
        message.delete("");
        // Or just do message.delete();
      }
      
  });

bot.login('NTMwNDI0Njk2ODIzNjExMzky.Dw_bTQ.17ocXfG9m_Tz7mEIMgtGz4zJCtY');
