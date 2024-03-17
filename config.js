const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="arshithroji@gmail.com"
global.location="Kerala,India"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://chat.whatsapp.com/EGQFDWQZwil3XSmQkRsVfa";
global.website= process.env.GURL|| "https://chat.whatsapp.com/EGQFDWQZwil3XSmQkRsVfa" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919846201004";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_41_03_16_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQVBaanRmbmlxN05GL1pwQ3U5bFlhNTJFaUJTM1RLVDlIVEtYQnhCYnpFZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk9MWDl5aVpSMTU0VTEvY0VRVkV4bHh4RnZiS2o0NkJuRUpLeWhKY1ZWVVE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUhrSCt6SEcvc29CYVFBRXJWZC84NHZLb095WmNZa2tXNW94eWM5NDNFUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk1KUE45bnZVRWUzdklkQnlOVXp1SGtSZCtyOTRpTEkwZFRDUnRBVGtMU2s9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUlKMkkzRVVIcHVZbHBDZmRYbkpTclZTY3ZvWThHMGxGaDlkSzlaVnRtOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInQ4aVF0eFAvLzNDSHkrbHNzRlF4WGVZQXFZamgyaGZxYzRVdXh6TzhxbnM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJvS2g1cmRiQy9DdEl4WE5Qb2N4SUhJVTlMZG1ZaiswM3Q3Q1FLOFF5MlY0PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWUVZc2lYZzliallsRmhOVEp1elRMTnQ5OVU1cjBuNElVYjJVQzZaUDlEYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXdGhZMi9pNzJ4em01NnBvUjdZZ1ZubWZRSWhMZWhYNTZmS3JwMHJ0cmhRYWJiK2pDNGNkeGJsNXNBdUpHczNlS0JqSStGZUR2QTQyek1OV29nby9qZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTU2LFwiYWR2U2VjcmV0S2V5XCI6XCJDVXlmSitYZGRsejZodTk5TE5hY1NtVzRxakF1M0dCZ0hGMG9FMHFHM1hnPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiSDhuRUszV1RRTHExZFVUcUJyYWRpQVwiLFwicGhvbmVJZFwiOlwiNDc4YWVlZDYtNDk2NC00YWFkLTg3M2UtNWM4MjE1NWE0Yjk2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI0Qk1wcmxMWmc5SzV5dTJkWC9nTjVqWTBIclE9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicnA4anlKbGdDNDZkWFQ3c3ZZU0txWjZ3aURjPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIk1MNzRXTkhBXCIsXCJtZVwiOntcImlkXCI6XCI5MTk4NDYyMDEwMDQ6NTVAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiNTIyNTI4NDA2MTE5NzI6NTVAbGlkXCIsXCJuYW1lXCI6XCLigIzigIwgIOKAjCAgICDigIwg4oCMIPCdnpPwnZ6S8J2ZjvCdnpbwnZ6Y8J2Zj/CdnpbigIzigIwgIOKAjFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUGZrN3NrREVOVEYxSzhHR0JJPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiSWRjMlBBYkF0YXI2ZW41ekIxdTdHeDRUZ1RTYUJlL0Z5bHZHdzllQVZEWT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIlBLbU4xUDVkNGlJVU8reE1QYkwySjVlaGZJcGRBblYrSXgySFRBTnhtNzQ0MmpMd2JWcTJNSUo2eFFJMWJjMUloaE5zcHd1U0Fmb0pyOFpKWEYzbURBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiWGhOMkVTU2NXVjBNKytWNWhRZmFLLzlWeVRsSE8zL2hGS0xPVVJlNXBacW0xeVZBY2dsbXVma1lvK2lobksrWG96eXhOUXk5UTNOT1Zkb0NleEpBaVE9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjkxOTg0NjIwMTAwNDo1NUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJTSFhOandHd0xXcStucCtjd2RidXhzZUU0RTBtZ1h2eGNwYnhzUFhnRlEyXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDU2NDA1NSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFBVWRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBVWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzeHhGVjZDRFhpTm4yd2VWVzd5TUlLbjZEWkZ6ZGZVcjh3bHZBbks2SHE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk2MDIxMzYyMyxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMTBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©@𝛥𝑅𝑆𝛨𝛪𝑇𝛨" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝛥𝑅𝑆𝛨𝛪𝑇𝛨",
  packname: process.env.PACK_NAME || "👨🏻‍🎤",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝛥𝑅𝑆𝛨𝛪𝑇𝛨",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "𝛥𝑅𝑆𝛨𝛪𝑇𝛨",



};

























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
 
