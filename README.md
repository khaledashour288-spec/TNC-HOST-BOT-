# 🚀 TNC Host - Discord Broadcast Bot v2.5

```
████████╗███╗   ██╗ ██████╗     ██╗  ██╗ ██████╗ ███████╗████████╗
╚══██╔══╝████╗  ██║██╔════╝     ██║  ██║██╔═══██╗██╔════╝╚══██╔══╝
   ██║   ██╔██╗ ██║██║          ███████║██║   ██║███████╗   ██║   
   ██║   ██║╚██╗██║██║          ██╔══██║██║   ██║╚════██║   ██║   
   ██║   ██║ ╚████║╚██████╗     ██║  ██║╚██████╔╝███████║   ██║   
   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝   
```

## 🌟 Advanced Discord Broadcasting System with Anti-Ban Protection

![Version](https://img.shields.io/badge/version-2.5.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Discord.js](https://img.shields.io/badge/discord.js-v14-blue.svg)
![Status](https://img.shields.io/badge/status-stable-success.svg)
![Developer](https://img.shields.io/badge/developer-TNC%20Host-blueviolet.svg)

## ✨ Features

### 🛡️ Anti-Ban Protection System
- **Smart Delay System**: Dynamically adjusts delays between messages
- **Auto Cooldown**: Takes breaks after sending multiple messages
- **Error Handling**: Intelligent error detection and recovery
- **Rate Limit Protection**: Automatically handles Discord rate limits

### 📨 Broadcasting Commands
- `+bc <message>` - Broadcast to **ALL** members
- `+obc <message>` - Broadcast to **Online** members only
- `+fbc <message>` - Broadcast to **Offline** members only
- `+rbc @role <message>` - Broadcast to specific **Role** members (NEW in v2.5)
- `+embed <title> | <desc>` - Broadcast beautiful **Embed** messages (NEW in v2.5)

### 📊 Statistics & Information
- `+stats` - View bot statistics and performance metrics (NEW in v2.5)
- `+info` - Display detailed bot information (NEW in v2.5)
- `+config` - Show anti-ban protection configuration (NEW in v2.5)
- Real-time broadcast statistics during sending

### ⚙️ General Commands
- `+help` - Display comprehensive help menu
- `+ping` - Check bot latency and API response time
- `+support` - Get support server link with details
- `+version` - Show bot version and changelog
- `+test` - Send test message to verify DM functionality (NEW in v2.5)

## 🔧 Installation

### Prerequisites
- Node.js (v16 or higher)
- Discord Bot Token

### Download Node.js
https://nodejs.org/

### Setup Steps

1. Clone or download the repository
2. Run `install.bat` to install dependencies
3. Configure your `.env` file:
```env
token=YOUR_BOT_TOKEN_HERE
prefix=+
AllowedUser=YOUR_USER_ID
```
4. Run `start.bat` to start the bot

## 🛡️ Anti-Ban Protection Details

The bot includes advanced protection mechanisms:
- **Base Delay**: 1 second between messages
- **Smart Scaling**: Increases delay when errors occur
- **Auto Breaks**: Takes 10-second breaks after every 5 messages
- **Rate Limit Handler**: Automatically waits when rate limited
- **Error Threshold**: Adapts to consecutive errors

## 📞 Support

Join our Discord server for support and updates:
**https://discord.gg/tnc**

## 📝 Version History

### Version 2.5.0 (Latest - November 2, 2025)
- ✨ **NEW:** Embed Broadcasting System
- ✨ **NEW:** Role-Based Broadcasting
- ✨ **NEW:** Bot Statistics Command
- ✨ **NEW:** Configuration Viewer
- ✨ **NEW:** Test Broadcast Feature
- ✨ **NEW:** Info Command
- ✅ Enhanced UI/UX with better embeds
- ✅ Improved console output formatting
- ✅ Persistent statistics tracking
- ✅ Performance optimizations
- ✅ Better error messages and feedback

### Version 2.0.0 (November 2, 2025)
- ✅ Added Anti-Ban Protection System
- ✅ Smart delay mechanism
- ✅ Enhanced error handling
- ✅ Improved statistics display
- ✅ Auto cooldown system
- ✅ Rate limit protection
- ✅ Updated branding to TNC Host

### Version 1.0.0
- Initial release

## 👨‍💻 Developer

**Developed by: Khaled AbuWalid**
**Support Server:** https://discord.gg/tnc

---

© 2026 TNC Host - All Rights Reserved
