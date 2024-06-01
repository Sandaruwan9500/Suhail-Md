const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94756705218";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_16_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDgzLFxuICAgICAgICA2MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICA3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA2OCxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibGR3czh4eUZ0QlNiSmQ1ZDkrU3NldnRzd0d0WmhHZHZUTFZjUEtVNkVBcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MjU5OTAxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkQ2NjA5QjlBNEQyRjA0QkMwRTM5RjdBMEIxOTJCQ0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MjQ0MTgxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDI1OTkwMTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBRUFDNDRDMzc1MkE4MTU5MDlFNTNDQzVDMjQ1QzM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzI0NDE4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFS0NpM3lkNFRBTzdkUHE5OUV1RUpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2ODRkMzRlLTBlNDktNGMxYy1hOGUxLWE2NWVjOThlYTczN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICA3OSxcbiAgICAgIDE2OSxcbiAgICAgIDIwOCxcbiAgICAgIDYwLFxuICAgICAgMjQsXG4gICAgICA4NCxcbiAgICAgIDE5NyxcbiAgICAgIDExMyxcbiAgICAgIDk0LFxuICAgICAgMTQ0LFxuICAgICAgMjQ5LFxuICAgICAgMjQ0LFxuICAgICAgMTA5LFxuICAgICAgMzIsXG4gICAgICAxNjQsXG4gICAgICAxMzksXG4gICAgICAxNjYsXG4gICAgICAxODIsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTc0LFxuICAgICAgMjgsXG4gICAgICA5NyxcbiAgICAgIDE3MCxcbiAgICAgIDIwNCxcbiAgICAgIDc2LFxuICAgICAgMjA0LFxuICAgICAgMixcbiAgICAgIDMyLFxuICAgICAgMjQzLFxuICAgICAgMTUxLFxuICAgICAgODUsXG4gICAgICAzMCxcbiAgICAgIDEzNixcbiAgICAgIDE2NCxcbiAgICAgIDEsXG4gICAgICAxOSxcbiAgICAgIDQ0LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQzR0FCNlhKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MjU5OTAxNDoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIml0J3MgbmV3XCIsXG4gICAgXCJsaWRcIjogXCIzNTQ3MjMzNjI4NTc5MzoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL3E1UElCRUpHaTdMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllhdkxSZGZTUXk5RTJxd1FPSHV0K0V6OVZ6UHBEcExIMXUreW9hSTdneEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1E4dUZnaFdwOTB3REVrU2k3Q01Xelh6d3FaZ2RGL1FBVm9nZnA3OTVnalREYmVJT1AzbzdVQmgrYTZPNkpCU3dWcWF3T2VQSi9YZzVGVkZQd1UxRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHRsdXYrYlFqRHJJVGJLMkp3ZmdnOU9IalUvYWJYRmk1bEtUdi8xM2VtdzJNSDJ1eGE5OGtFYnVjSElyMjQwZmx4V3NuMnpLZXR3eWlWMnpuNzQ2RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDI1OTkwMTQ6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzI0NDE3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ1UVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDVRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQTl1TGRSM3pPNHJWOUhvTkN0T1BSVHpMZkpTOVR3VUZKWStQMXRUR3IyUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MDkxNjI4NzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzI0NDE4MTU1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
