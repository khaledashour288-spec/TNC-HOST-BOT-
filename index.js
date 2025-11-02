// استيراد المكتبات
const { Client, IntentsBitField, Partials, EmbedBuilder, PermissionsBitField } = require('discord.js');
require('dotenv').config();

// إعداد عميل Discord
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.GuildMessageReactions, 
    IntentsBitField.Flags.DirectMessageReactions,
  ],
  partials: [
    Partials.Channel,
    Partials.Message, 
    Partials.Reaction, 
    Partials.User
  ]
});

// متغيرات البيئة
const prefix = process.env.prefix || '+'; // افتراضياً '+' إذا لم يتم تحديده
const ALLOWED_ROLE = process.env.AllowedRole; // معرف الرتبة المسموح لها

// دالة للتحقق من صلاحيات الرتبة
function hasAllowedRole(member) {
  if (!ALLOWED_ROLE) return true; // إذا لم يتم تحديد رتبة، السماح للجميع
  return member.roles.cache.has(ALLOWED_ROLE);
}

// حالة البوت عند الجاهزية
client.once("clientReady", () => {
  console.clear();
  console.log("\x1b[36m%s\x1b[0m", "╔═══════════════════════════════════════════════════════════════╗");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[32m%s\x1b[0m", "║                    ████████╗███╗   ██╗ ██████╗               ║");
  console.log("\x1b[32m%s\x1b[0m", "║                    ╚══██╔══╝████╗  ██║██╔════╝               ║");
  console.log("\x1b[32m%s\x1b[0m", "║                       ██║   ██╔██╗ ██║██║                    ║");
  console.log("\x1b[32m%s\x1b[0m", "║                       ██║   ██║╚██╗██║██║                    ║");
  console.log("\x1b[32m%s\x1b[0m", "║                       ██║   ██║ ╚████║╚██████╗               ║");
  console.log("\x1b[32m%s\x1b[0m", "║                       ╚═╝   ╚═╝  ╚═══╝ ╚═════╝               ║");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[33m%s\x1b[0m", "║                  ██╗  ██╗ ██████╗ ███████╗████████╗          ║");
  console.log("\x1b[33m%s\x1b[0m", "║                  ██║  ██║██╔═══██╗██╔════╝╚══██╔══╝          ║");
  console.log("\x1b[33m%s\x1b[0m", "║                  ███████║██║   ██║███████╗   ██║             ║");
  console.log("\x1b[33m%s\x1b[0m", "║                  ██╔══██║██║   ██║╚════██║   ██║             ║");
  console.log("\x1b[33m%s\x1b[0m", "║                  ██║  ██║╚██████╔╝███████║   ██║             ║");
  console.log("\x1b[33m%s\x1b[0m", "║                  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝             ║");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[36m%s\x1b[0m", "╠═══════════════════════════════════════════════════════════════╣");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[32m%s\x1b[0m", "║  🚀 Bot Status         ✅ ONLINE & READY                      ║");
  console.log("\x1b[35m%s\x1b[0m", "║  📌 Version            2.5.0 - Advanced Edition               ║");
  console.log("\x1b[33m%s\x1b[0m", "║  � Bot User           " + client.user.tag.padEnd(37) + "    ║");
  console.log("\x1b[36m%s\x1b[0m", "║  🌐 Servers            " + String(client.guilds.cache.size).padEnd(37) + "    ║");
  console.log("\x1b[32m%s\x1b[0m", "║  � Total Users        " + String(client.users.cache.size).padEnd(37) + "    ║");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[36m%s\x1b[0m", "╠═══════════════════════════════════════════════════════════════╣");
  console.log("\x1b[36m%s\x1b[0m", "║                      🛡️  PROTECTION STATUS                    ║");
  console.log("\x1b[36m%s\x1b[0m", "╠═══════════════════════════════════════════════════════════════╣");
  console.log("\x1b[32m%s\x1b[0m", "║  ✅ Anti-Ban Protection       ENABLED                         ║");
  console.log("\x1b[32m%s\x1b[0m", "║  ✅ Smart Delay System        ACTIVE                          ║");
  console.log("\x1b[32m%s\x1b[0m", "║  ✅ Auto Cooldown             ACTIVE                          ║");
  console.log("\x1b[32m%s\x1b[0m", "║  ✅ Rate Limit Handler        ACTIVE                          ║");
  console.log("\x1b[32m%s\x1b[0m", "║  ✅ Error Recovery            ACTIVE                          ║");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[36m%s\x1b[0m", "╠═══════════════════════════════════════════════════════════════╣");
  console.log("\x1b[36m%s\x1b[0m", "║                     ⚡ ADVANCED FEATURES                       ║");
  console.log("\x1b[36m%s\x1b[0m", "╠═══════════════════════════════════════════════════════════════╣");
  console.log("\x1b[33m%s\x1b[0m", "║  � Embed Broadcasting        ✅ Available                    ║");
  console.log("\x1b[33m%s\x1b[0m", "║  🎯 Role-Based Broadcast      ✅ Available                    ║");
  console.log("\x1b[33m%s\x1b[0m", "║  📊 Statistics System         ✅ Available                    ║");
  console.log("\x1b[33m%s\x1b[0m", "║  🧪 Test Mode                 ✅ Available                    ║");
  console.log("\x1b[33m%s\x1b[0m", "║  ⚙️  Configuration Viewer     ✅ Available                    ║");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[36m%s\x1b[0m", "╠═══════════════════════════════════════════════════════════════╣");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[35m%s\x1b[0m", "║  👨‍💻 Developer: TNC Host                                      ║");
  console.log("\x1b[35m%s\x1b[0m", "║  🔗 Discord: discord.gg/tnc                                   ║");
  console.log("\x1b[35m%s\x1b[0m", "║  📅 Release Date: November 2, 2025                            ║");
  console.log("\x1b[35m%s\x1b[0m", "║  ⚡ Performance: OPTIMIZED                                     ║");
  console.log("\x1b[36m%s\x1b[0m", "║                                                               ║");
  console.log("\x1b[36m%s\x1b[0m", "╚═══════════════════════════════════════════════════════════════╝");
  console.log("");
  console.log("\x1b[32m%s\x1b[0m", "✨ Bot is now ready to receive commands! Type +help for assistance.");
  console.log("\x1b[36m%s\x1b[0m", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("");
  console.log("\x1b[33m%s\x1b[0m", "⚠️  تأكد من تفعيل MESSAGE CONTENT INTENT في Discord Developer Portal!");
  console.log("\x1b[33m%s\x1b[0m", "⚠️  اقرأ ملف INVITE_LINK.txt للتعليمات الكاملة");
  console.log("");
  
  client.user.setActivity(`TNC Host | +help | ${client.guilds.cache.size} Servers`);
  client.user.setStatus("online");
});

// التعامل مع الرسائل والأوامر
client.on('messageCreate', async (message) => {
  if (!message.guild || message.author.bot) return;
  
  // التحقق من صلاحيات البوت في القناة
  const botPermissions = message.channel.permissionsFor(client.user);
  if (!botPermissions.has([
    PermissionsBitField.Flags.SendMessages,
    PermissionsBitField.Flags.AddReactions,
    PermissionsBitField.Flags.ReadMessageHistory
  ])) {
    console.error('⚠️ البوت لا يملك الصلاحيات الكافية في هذه القناة!');
    return;
  }
  
  // أمر ping
  if (message.content === prefix + 'ping') {
    const msg = await message.channel.send("Ping..");
    const timeTaken = msg.createdTimestamp - message.createdTimestamp;
    await msg.delete();
    message.channel.send(`\`\`\`javascript\nDiscord API: ${Math.round(client.ws.ping)} ms\nTime taken: ${timeTaken} ms\n\`\`\``);
  }

  // أمر help
  if (message.content.startsWith(prefix + "help")) {
    const help = new EmbedBuilder()
      .setTitle(`📚 قائمة المساعدة - TNC Host`)
      .setColor("#00ff00")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter({ text: `${message.author.tag} | TNC Host`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
      .setTimestamp()
      .setDescription(`**__الأوامر الأساسية__**  
          ━━━━━━━━━━━━━━━━━━━━━━
          \`${prefix}ping\` - فحص سرعة استجابة البوت
          \`${prefix}support\` - الحصول على سيرفر الدعم
          \`${prefix}version\` - عرض إصدار البوت
          \`${prefix}stats\` - عرض إحصائيات البوت
          \`${prefix}info\` - معلومات البوت
          
          **__أوامر البث__** (تحتاج الرتبة المسموحة)
          ━━━━━━━━━━━━━━━━━━━━━━
          \`${prefix}bc <message>\` - بث لجميع الأعضاء
          \`${prefix}obc <message>\` - بث للأعضاء المتصلين فقط
          \`${prefix}fbc <message>\` - بث للأعضاء غير المتصلين فقط
          \`${prefix}rbc <message>\` - بث بناءً على رتبة معينة
          
          **__المميزات المتقدمة__** (تحتاج الرتبة المسموحة)
          ━━━━━━━━━━━━━━━━━━━━━━
          \`${prefix}embed <title> | <desc>\` - إرسال رسالة مخصصة
          \`${prefix}test\` - اختبار البث (يرسل لك فقط)
          \`${prefix}config\` - عرض إعدادات الحماية
          
          **🛡️ مميزات الحماية:**
          ━━━━━━━━━━━━━━━━━━━━━━
          ✅ نظام الحماية من البان
          ✅ خوارزمية التأخير الذكية
          ✅ استراحة تلقائية (10ث/5رسائل)
          ✅ معالج حد المعدل
          ✅ استرداد الأخطاء المتقدم
          ✅ إحصائيات فورية
          ✅ التحكم بالصلاحيات عبر الرتب
          
          **👨‍💻 المطور:** TNC Host
          **🔗 الدعم:** [discord.gg/tnc](https://discord.gg/tnc)
          
          **💡 ملاحظة:** ضع معرف الرتبة في ملف .env لتقييد أوامر البث`);
    message.channel.send({ embeds: [help] });
  }

  // أوامر البث
  handleBroadcastCommands(message);
  
  // أمر البث بـ Embed
  if (message.content.startsWith(prefix + "embed")) {
    if (!hasAllowedRole(message.member)) {
      return message.reply("❌ ليس لديك الرتبة المطلوبة لاستخدام هذا الأمر.");
    }
    
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return message.channel.send("**ليس لديك الصلاحيات المطلوبة لاستخدام هذا الأمر.**");
    }
    
    const embedArgs = message.content.slice(prefix.length + 5).trim();
    if (!embedArgs.includes('|')) {
      return message.reply(`**الاستخدام:** ${prefix}embed <عنوان> | <وصف>\n**مثال:** ${prefix}embed مرحباً! | هذه رسالة embed`);
    }
    
    const [title, description] = embedArgs.split('|').map(s => s.trim());
    
    const confirmMessage = await message.channel.send(`**معاينة الـ Embed:**`);
    const previewEmbed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description)
      .setColor('#00ff00')
      .setFooter({ text: 'TNC Host' })
      .setTimestamp();
    
    await message.channel.send({ embeds: [previewEmbed] });
    const confirm = await message.channel.send('**تفاعل بـ ✅ لبث هذا الـ embed لجميع الأعضاء، أو ❌ للإلغاء.**');
    await confirm.react("✅");
    await confirm.react("❌");
    
    const filter = (reaction, user) => ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
    const collector = confirm.createReactionCollector({ filter, max: 1, time: 60000 });
    
    collector.on('collect', async (reaction) => {
      if (reaction.emoji.name === "✅") {
        confirm.delete();
        await handleEmbedBroadcast(message, title, description);
      } else {
        confirm.delete();
        message.channel.send("**تم إلغاء بث الـ Embed.**").then(msg => setTimeout(() => msg.delete(), 3000));
      }
    });
  }
  
  // أمر البث بناءً على الرول
  if (message.content.startsWith(prefix + "rbc")) {
    if (!hasAllowedRole(message.member)) {
      return message.reply("❌ ليس لديك الرتبة المطلوبة لاستخدام هذا الأمر.");
    }
    
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return message.channel.send("**ليس لديك الصلاحيات المطلوبة لاستخدام هذا الأمر.**");
    }
    
    const args = message.content.slice(prefix.length + 3).trim().split(/ +/);
    const roleMention = message.mentions.roles.first();
    
    if (!roleMention) {
      return message.reply(`**الاستخدام:** ${prefix}rbc @رتبة <رسالة>\n**مثال:** ${prefix}rbc @الأعضاء مرحباً بالجميع!`);
    }
    
    const roleMessage = args.slice(1).join(' ');
    if (!roleMessage) {
      return message.reply("**يرجى تقديم رسالة للإرسال.**");
    }
    
    await handleRoleBroadcast(message, roleMention, roleMessage);
  }
  
  // أمر الدعم
  if (message.content === `${prefix}support`) {
    const supportEmbed = new EmbedBuilder()
      .setTitle('🔗 TNC Host - سيرفر الدعم')
      .setDescription('**انضم لسيرفر Discord للحصول على الدعم والتحديثات!**\n\n🌐 **Discord:** https://discord.gg/tnc\n\n📧 **المميزات:**\n• دعم على مدار الساعة\n• التحديثات والأخبار\n• الإبلاغ عن الأخطاء\n• طلبات المميزات')
      .setColor('#00ff00')
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter({ text: 'TNC Host | حماية من البان' })
      .setTimestamp();
    message.reply({ embeds: [supportEmbed] });
  }
  
  // أمر الإصدار
  if (message.content === `${prefix}version`) {
    const versionEmbed = new EmbedBuilder()
      .setTitle('📌 TNC Bot - معلومات الإصدار')
      .setDescription(
        '**الإصدار الحالي:** 2.5.0\n' +
        '**تاريخ الإصدار:** 2 نوفمبر 2025\n\n' +
        '**🆕 الجديد في v2.5:**\n' +
        '✨ تصميم UI/UX محسّن\n' +
        '📊 أمر إحصائيات البوت\n' +
        '🔧 عارض الإعدادات\n' +
        '🧪 ميزة اختبار البث\n' +
        '📝 دعم بث Embed\n' +
        '🎯 البث بناءً على الرتب\n' +
        '⚡ تحسينات الأداء\n' +
        '🛡️ نظام حماية محسّن من البان\n\n' +
        '**المميزات السابقة (v2.0):**\n' +
        '🛡️ نظام الحماية من البان\n' +
        '⏱️ خوارزمية التأخير الذكية\n' +
        '🔄 نظام الاستراحة التلقائي\n' +
        '📊 إحصائيات فورية\n\n' +
        '**👨‍💻 مطوّر بواسطة:** TNC Host\n' +
        '**🔗 الدعم:** https://discord.gg/tnc'
      )
      .setColor('#00ff00')
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp();
    message.reply({ embeds: [versionEmbed] });
  }
  
  // أمر الإحصائيات
  if (message.content === `${prefix}stats`) {
    const uptime = Date.now() - botStats.startTime;
    const days = Math.floor(uptime / 86400000);
    const hours = Math.floor(uptime / 3600000) % 24;
    const minutes = Math.floor(uptime / 60000) % 60;
    
    const statsEmbed = new EmbedBuilder()
      .setTitle('📊 إحصائيات البوت - TNC Host')
      .setColor('#00ff00')
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        { name: '⏰ مدة التشغيل', value: `${days}ي ${hours}س ${minutes}د`, inline: true },
        { name: '📡 البينج', value: `${Math.round(client.ws.ping)}ms`, inline: true },
        { name: '🌐 السيرفرات', value: `${client.guilds.cache.size}`, inline: true },
        { name: '📢 إجمالي البث', value: `${botStats.totalBroadcasts}`, inline: true },
        { name: '✅ الرسائل المرسلة', value: `${botStats.totalMessagesSent}`, inline: true },
        { name: '❌ الرسائل الفاشلة', value: `${botStats.totalMessagesFailed}`, inline: true },
        { name: '📅 آخر بث', value: botStats.lastBroadcast || 'أبداً', inline: false }
      )
      .setFooter({ text: 'TNC Host | مشغّل بواسطة Discord.js' })
      .setTimestamp();
    message.reply({ embeds: [statsEmbed] });
  }
  
  // أمر معلومات البوت
  if (message.content === `${prefix}info`) {
    const infoEmbed = new EmbedBuilder()
      .setTitle('ℹ️ معلومات البوت')
      .setColor('#00ff00')
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        '**TNC Host Broadcast Bot**\n' +
        'نظام بث متقدم على Discord مع حماية من البان\n\n' +
        '**🔧 التفاصيل التقنية:**\n' +
        '• Discord.js v14\n' +
        '• Node.js Runtime\n' +
        '• خوارزمية الحماية من البان\n' +
        '• نظام التأخير الذكي\n\n' +
        '**📊 القدرات:**\n' +
        '• البث لجميع الأعضاء\n' +
        '• فلترة المتصلين/غير المتصلين\n' +
        '• الاستهداف بناءً على الرتب\n' +
        '• رسائل Embed مخصصة\n' +
        '• إحصائيات فورية\n\n' +
        '**👨‍💻 المطور:** TNC Host\n' +
        '**🔗 الدعم:** https://discord.gg/tnc'
      )
      .setFooter({ text: 'TNC Host' })
      .setTimestamp();
    message.reply({ embeds: [infoEmbed] });
  }
  
  // أمر عرض الإعدادات
  if (message.content === `${prefix}config`) {
    const configEmbed = new EmbedBuilder()
      .setTitle('⚙️ إعدادات الحماية من البان')
      .setColor('#00ff00')
      .addFields(
        { name: '⏱️ التأخير الأساسي', value: `${antiBanConfig.baseDelay}ms (1ث)`, inline: true },
        { name: '⏱️ التأخير الأقصى', value: `${antiBanConfig.maxDelay}ms (5ث)`, inline: true },
        { name: '⚠️ حد الأخطاء', value: `${antiBanConfig.errorThreshold} أخطاء`, inline: true },
        { name: '🔄 فترة الاستراحة', value: `${antiBanConfig.cooldownPeriod}ms (10ث)`, inline: true },
        { name: '📨 الرسائل لكل دفعة', value: `${antiBanConfig.messagesPerBurst} رسائل`, inline: true },
        { name: '🛡️ حالة الحماية', value: '✅ مفعّلة', inline: true }
      )
      .setDescription('**هذه الإعدادات تحمي البوت من البان بواسطة Discord**\n\nالنظام يعدل التأخير تلقائياً بناءً على الأخطاء ويطبق استراحات لمنع تجاوز الحد.')
      .setFooter({ text: 'TNC Host | حماية متقدمة' })
      .setTimestamp();
    message.reply({ embeds: [configEmbed] });
  }
  
  // أمر الاختبار
  if (message.content === `${prefix}test`) {
    const testEmbed = new EmbedBuilder()
      .setTitle('🧪 رسالة اختبار البث')
      .setDescription('هذه رسالة اختبار بث من TNC Host Bot!\n\nإذا استلمت هذه الرسالة، فإن رسائلك الخاصة مفتوحة والبوت يمكنه إرسال رسائل لك.')
      .setColor('#00ff00')
      .addFields(
        { name: '✅ الحالة', value: 'الاختبار نجح', inline: true },
        { name: '🆔 معرفك', value: message.author.id, inline: true }
      )
      .setFooter({ text: 'TNC Host | وضع الاختبار' })
      .setTimestamp();
    
    message.author.send({ embeds: [testEmbed] })
      .then(() => {
        message.reply('✅ تم إرسال رسالة الاختبار! تفقد رسائلك الخاصة.');
      })
      .catch(() => {
        message.reply('❌ فشل إرسال رسالة الاختبار. يرجى تفعيل الرسائل الخاصة من أعضاء السيرفر.');
      });
  }
});

// دالة لمعالجة أوامر البث
async function handleBroadcastCommands(message) {
  if (!message.channel.guild || message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (["bc", "obc", "fbc"].includes(command) && !hasAllowedRole(message.member)) {
    return message.reply("❌ ليس لديك الرتبة المطلوبة لاستخدام هذا الأمر.");
  }

  if (command === "bc") {
    await handleBcCommand(message, args);
  } else if (command === "obc") {
    await handleObcCommand(message, args);
  } else if (command === "fbc") {
    await handleFbcCommand(message, args);
  }
}

// دالة لمعالجة البث بـ Embed
async function handleEmbedBroadcast(message, title, description) {
  const statsMessage = await message.channel.send("**🚀 بدأ بث Embed...**");
  
  let sentCount = 0;
  let failedCount = 0;
  const members = await message.guild.members.fetch();
  const broadcastMembers = members.filter(member => !member.user.bot);
  const totalMembers = broadcastMembers.size;
  const botCount = members.size - totalMembers;
  
  const updateStats = async (sent, failed) => {
    sentCount = sent;
    failedCount = failed;
    const remaining = totalMembers - sentCount - failedCount;
    const statsEmbed = await createStatsEmbed(totalMembers, sentCount, failedCount, remaining, botCount);
    
    try {
      await statsMessage.edit({ embeds: [statsEmbed], content: "**📨 بث Embed قيد التنفيذ...**" });
    } catch (error) {
      console.error("Error updating stats:", error);
    }
  };
  
  const statsInterval = setInterval(() => updateStats(sentCount, failedCount), 5000);
  
  for (const member of broadcastMembers.values()) {
    try {
      const embedToSend = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor('#00ff00')
        .setFooter({ text: `TNC Host | Sent to ${member.user.tag}` })
        .setTimestamp();
      
      await member.send({ embeds: [embedToSend] });
      sentCount++;
      consecutiveErrors = 0;
    } catch (err) {
      consecutiveErrors++;
      failedCount++;
      console.error(`❌ Failed to send to ${member.user.tag}`);
    }
    
    updateStats(sentCount, failedCount);
    const smartDelay = calculateSmartDelay();
    await new Promise(resolve => setTimeout(resolve, smartDelay));
    
    if (sentCount > 0 && sentCount % antiBanConfig.messagesPerBurst === 0) {
      console.log(`🛡️ Anti-Ban: Taking ${antiBanConfig.cooldownPeriod / 1000}s break...`);
      await new Promise(resolve => setTimeout(resolve, antiBanConfig.cooldownPeriod));
    }
  }
  
  clearInterval(statsInterval);
  await sendFinalStats(statsMessage, totalMembers, sentCount, failedCount, botCount);
  botStats.totalBroadcasts++;
  botStats.totalMessagesSent += sentCount;
  botStats.totalMessagesFailed += failedCount;
  botStats.lastBroadcast = new Date().toLocaleString();
  
  message.channel.send("**✅ اكتمل بث Embed!**");
}

// دالة لمعالجة البث بناءً على الرول
async function handleRoleBroadcast(message, role, messageContent) {
  const confirmMessage = await message.channel.send(
    `**البث للرتبة: ${role.name}**\n` +
    `**الأعضاء بهذه الرتبة: ${role.members.size}**\n` +
    `**الرسالة:** \`\`\`${messageContent}\`\`\`\n` +
    `تفاعل بـ ✅ للتأكيد أو ❌ للإلغاء.`
  );
  
  await confirmMessage.react("✅");
  await confirmMessage.react("❌");
  
  const filter = (reaction, user) => ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
  const collector = confirmMessage.createReactionCollector({ filter, max: 1, time: 60000 });
  
  collector.on('collect', async (reaction) => {
    if (reaction.emoji.name === "✅") {
      confirmMessage.delete();
      
      const statsMessage = await message.channel.send("**🎯 بدأ البث بناءً على الرتبة...**");
      
      let sentCount = 0;
      let failedCount = 0;
      const roleMembers = role.members.filter(member => !member.user.bot);
      const totalMembers = roleMembers.size;
      
      const updateStats = async (sent, failed) => {
        sentCount = sent;
        failedCount = failed;
        const remaining = totalMembers - sentCount - failedCount;
        const statsEmbed = await createStatsEmbed(totalMembers, sentCount, failedCount, remaining, 0);
        
        try {
          await statsMessage.edit({ embeds: [statsEmbed], content: "**🎯 بث الرتبة قيد التنفيذ...**" });
        } catch (error) {
          console.error("Error updating stats:", error);
        }
      };
      
      const statsInterval = setInterval(() => updateStats(sentCount, failedCount), 5000);
      
      for (const member of roleMembers.values()) {
        try {
          await member.send(`${messageContent}\n<@${member.id}>`);
          sentCount++;
          consecutiveErrors = 0;
        } catch (err) {
          consecutiveErrors++;
          failedCount++;
        }
        
        updateStats(sentCount, failedCount);
        const smartDelay = calculateSmartDelay();
        await new Promise(resolve => setTimeout(resolve, smartDelay));
        
        if (sentCount > 0 && sentCount % antiBanConfig.messagesPerBurst === 0) {
          await new Promise(resolve => setTimeout(resolve, antiBanConfig.cooldownPeriod));
        }
      }
      
      clearInterval(statsInterval);
      await sendFinalStats(statsMessage, totalMembers, sentCount, failedCount, 0);
      botStats.totalBroadcasts++;
      botStats.totalMessagesSent += sentCount;
      botStats.totalMessagesFailed += failedCount;
      botStats.lastBroadcast = new Date().toLocaleString();
      
      message.channel.send("**✅ اكتمل البث بناءً على الرتبة!**");
    } else {
      confirmMessage.delete();
      message.channel.send("**❌ تم إلغاء بث الرتبة.**").then(msg => setTimeout(() => msg.delete(), 3000));
    }
  });
}

// معالجة أمر البث لجميع الأعضاء
async function handleBcCommand(message, args) {
  if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
    return message.channel.send("**ليس لديك الصلاحيات المطلوبة لاستخدام هذا الأمر.**");
  }
  if (!args.length) {
    return message.reply("**يرجى تقديم رسالة للإرسال.**");
  }

  // البدء مباشرة بدون تأكيد
  const statsMessage = await message.channel.send("**بدأ البث...**");

  let sentCount = 0;
  let failedCount = 0;
  const members = await message.guild.members.fetch();
  const broadcastMembers = members.filter(member => !member.user.bot);
  const totalMembers = broadcastMembers.size;
  const botCount = members.size - totalMembers;

  // دالة لتحديث الإحصائيات
  const updateStats = async (sent, failed) => {
    sentCount = sent;
    failedCount = failed;
    const remaining = totalMembers - sentCount - failedCount;

    const statsEmbed = await createStatsEmbed(totalMembers, sentCount, failedCount, remaining, botCount);

    try {
      await statsMessage.edit({ embeds: [statsEmbed], content: "**البث قيد التنفيذ...**" });
    } catch (error) {
      if (error.code === 10008) {
        console.warn("Stats message was deleted. Sending a new message with final stats.");
        await message.channel.send({ embeds: [statsEmbed], content: "**البث قيد التنفيذ...**" });
      } else {
        console.error("Error updating stats message:", error);
      }
    }
  };

  // بدء مؤقت لتحديث الإحصائيات كل 5 ثوانٍ
  const statsInterval = setInterval(() => {
    updateStats(sentCount, failedCount);
  }, 5000);

  // إرسال الرسائل
  const { sentCount: totalSent, failedCount: totalFailed } = await sendMessagesToMembers(
    broadcastMembers,
    args.join(' '),
    500,
    updateStats
  );

  clearInterval(statsInterval);

  // إرسال الإحصائيات النهائية
  await sendFinalStats(statsMessage, totalMembers, totalSent, totalFailed, botCount);

  // إضافة رسالة الانتهاء
  await message.channel.send("**✅ تم الانتهاء من البث**");
}

// معالجة أمر البث للأعضاء المتصلين فقط
async function handleObcCommand(message, args) {
  if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
    return message.channel.send("**ليس لديك الصلاحيات المطلوبة لاستخدام هذا الأمر.**");
  }
  if (!args.length) {
    return message.reply("**يرجى تقديم رسالة للإرسال.**");
  }

  // البدء مباشرة بدون تأكيد
  const statsMessage = await message.channel.send("**بدأ البث...**");

  let sentCount = 0;
  let failedCount = 0;
  const members = await message.guild.members.fetch();
  const onlineMembers = members.filter(member => member.presence && member.presence.status !== "offline" && !member.user.bot);
  const totalMembers = onlineMembers.size;
  const botCount = members.size - totalMembers;

  // دالة لتحديث الإحصائيات
  const updateStats = async (sent, failed) => {
    sentCount = sent;
    failedCount = failed;
    const remaining = totalMembers - sentCount - failedCount;

    const statsEmbed = await createStatsEmbed(totalMembers, sentCount, failedCount, remaining, botCount);

    try {
      await statsMessage.edit({ embeds: [statsEmbed], content: "**البث قيد التنفيذ...**" });
    } catch (error) {
      if (error.code === 10008) {
        console.warn("Stats message was deleted.");
        await message.channel.send({ embeds: [statsEmbed], content: "**البث قيد التنفيذ...**" });
      } else {
        console.error("Error updating stats message:", error);
      }
    }
  };

  // بدء مؤقت لتحديث الإحصائيات كل 5 ثوانٍ
  const statsInterval = setInterval(() => {
    updateStats(sentCount, failedCount);
  }, 5000);

  // إرسال الرسائل
  const { sentCount: totalSent, failedCount: totalFailed } = await sendMessagesToMembers(
    onlineMembers,
    args.join(' '),
    500,
    updateStats
  );

  clearInterval(statsInterval);

  // إرسال الإحصائيات النهائية
  await sendFinalStats(statsMessage, totalMembers, totalSent, totalFailed, botCount);

  // إضافة رسالة الانتهاء
  await message.channel.send("**✅ تم الانتهاء من البث**");
}

// معالجة أمر البث للأعضاء غير المتصلين فقط
async function handleFbcCommand(message, args) {
  if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
    return message.channel.send("**ليس لديك الصلاحيات المطلوبة لاستخدام هذا الأمر.**");
  }
  if (!args.length) {
    return message.reply("**يرجى تقديم رسالة للإرسال.**");
  }

  // البدء مباشرة بدون تأكيد
  try {
    const statsMessage = await message.channel.send("**بدأ البث...**");

    let sentCount = 0;
    let failedCount = 0;
    const members = await message.guild.members.fetch();
    const offlineMembers = members.filter(member => (!member.presence || member.presence.status === "offline") && !member.user.bot);
    const totalMembers = offlineMembers.size;
    const botCount = members.size - totalMembers;

    // دالة لتحديث الإحصائيات
    const updateStats = async (sent, failed) => {
      sentCount = sent;
      failedCount = failed;
      const remaining = totalMembers - sentCount - failedCount;

      const statsEmbed = await createStatsEmbed(totalMembers, sentCount, failedCount, remaining, botCount);

      try {
        await statsMessage.edit({ embeds: [statsEmbed], content: "**Broadcast In Progress...**" });
      } catch (error) {
        if (error.code === 10008) { // Unknown Message
          console.warn("Stats message was deleted. Sending a new message with final stats.");
          await message.channel.send({ embeds: [statsEmbed], content: "**Broadcast In Progress...**" });
        } else {
          console.error("Error updating stats message:", error);
        }
      }
    };

    // بدء مؤقت لتحديث الإحصائيات كل 5 ثوانٍ
    const statsInterval = setInterval(() => {
      updateStats(sentCount, failedCount);
    }, 5000); // 5000 ميلي ثانية = 5 ثوانٍ

    // إرسال الرسائل
    const { sentCount: totalSent, failedCount: totalFailed } = await sendMessagesToMembers(
      offlineMembers,
      args.join(' '),
      500, // تأخير 0.5 ثانية بين كل رسالة
      updateStats
    );

    clearInterval(statsInterval); // إيقاف تحديث الإحصائيات

    // إرسال الإحصائيات النهائية
    await sendFinalStats(statsMessage, totalMembers, totalSent, totalFailed, botCount);

    // إضافة رسالة الانتهاء
    await message.channel.send("**✅ تم الانتهاء من البث**");

  } catch (error) {
    console.error("Error in handleFbcCommand:", error);
    await message.channel.send("**حدث خطأ أثناء البث.**");
  }
}

// نظام حماية من البان المتقدم - TNC Host v2.0
const antiBanConfig = {
  baseDelay: 1000,        // تأخير أساسي: 1 ثانية
  maxDelay: 5000,         // تأخير أقصى: 5 ثواني
  errorThreshold: 3,      // عدد الأخطاء المسموح بها قبل زيادة التأخير
  cooldownPeriod: 10000,  // فترة استراحة: 10 ثواني
  messagesPerBurst: 5     // عدد الرسائل قبل الاستراحة
};

let consecutiveErrors = 0;
let messagesSent = 0;

// دالة لحساب التأخير الديناميكي (نظام حماية ذكي)
function calculateSmartDelay() {
  if (consecutiveErrors >= antiBanConfig.errorThreshold) {
    return antiBanConfig.maxDelay;
  }
  return antiBanConfig.baseDelay + (consecutiveErrors * 500);
}

// دالة لإرسال الرسائل إلى الأعضاء مع نظام حماية متقدم من البان
async function sendMessagesToMembers(members, messageContent, delay, updateStats) {
  let sentCount = 0;
  let failedCount = 0;
  consecutiveErrors = 0;
  messagesSent = 0;

  for (const member of members.values()) {
    if (!member.user.bot) {
      try {
        // نظام الاستراحة التلقائي
        if (messagesSent > 0 && messagesSent % antiBanConfig.messagesPerBurst === 0) {
          console.log(`🛡️ Anti-Ban Protection: Taking a ${antiBanConfig.cooldownPeriod / 1000}s break after ${messagesSent} messages...`);
          await new Promise(resolve => setTimeout(resolve, antiBanConfig.cooldownPeriod));
        }

        // بناء الرسالة مع المنشن
        const dmMessage = `${messageContent}\n<@${member.id}>`;
        await member.send(dmMessage);
        sentCount++;
        messagesSent++;
        consecutiveErrors = 0; // إعادة تعيين الأخطاء عند النجاح
        
        console.log(`✅ Message sent to ${member.user.tag} (${sentCount}/${members.size})`);
      } catch (err) {
        consecutiveErrors++;
        
        if (err.code === 50007) { // Cannot send messages to this user
          console.log(`⚠️ Cannot send message to ${member.user.tag} (DMs disabled or bot blocked).`);
        } else if (err.code === 10008) { // Unknown Message
          console.log(`⚠️ Cannot send message to ${member.user.tag}: Unknown Message.`);
        } else if (err.code === 20026) { // Bot flagged by anti-spam
          console.error(`🚨 CRITICAL: Bot flagged by Discord anti-spam! Stopping broadcast...`);
          console.error(`Visit: https://dis.gd/app-quarantine`);
          return { sentCount, failedCount }; // إيقاف البث بدون إيقاف البوت
        } else if (err.code === 429) { // Rate Limited
          console.warn(`⏳ Rate limited! Waiting 60 seconds before continuing...`);
          await new Promise(resolve => setTimeout(resolve, 60000));
          consecutiveErrors = 0; // إعادة المحاولة
          continue;
        } else {
          console.error(`❌ Error sending to ${member.user.tag}:`, err.message);
        }
        failedCount++;
      }
      
      // تحديث الإحصائيات
      updateStats(sentCount, failedCount);
      
      // تأخير ذكي يتكيف مع الأخطاء (نظام حماية من البان)
      const smartDelay = calculateSmartDelay();
      console.log(`⏱️ Waiting ${smartDelay / 1000}s before next message... (Errors: ${consecutiveErrors})`);
      await new Promise(resolve => setTimeout(resolve, smartDelay));
    }
  }

  return { sentCount, failedCount };
}

// دالة لإنشاء Embed بالإحصائيات
async function createStatsEmbed(totalMembers, sentCount, failedCount, remaining, botCount) {
  const embed = new EmbedBuilder()
    .setTitle(`📊 إحصائيات البث`)
    .setColor("#a4c8fd")
    .setDescription(
      `👥 إجمالي الأعضاء: ${totalMembers}\n\n` +
      `📨 الرسائل المرسلة: ${sentCount}\n\n` +
      `❌ الرسائل الفاشلة: ${failedCount}\n\n` +
      `⏳ المتبقي: ${remaining}\n\n` +
      `🤖 البوتات: ${botCount}`
    )
    .setTimestamp();

  return embed;
}

// دالة لإرسال الإحصائيات النهائية
async function sendFinalStats(statsMessage, totalMembers, sentCount, failedCount, botCount) {
  const remaining = totalMembers - sentCount - failedCount;
  const finalEmbed = await createStatsEmbed(totalMembers, sentCount, failedCount, remaining, botCount);
  
  try {
    await statsMessage.edit({ embeds: [finalEmbed], content: "**✅ انتهى البث**" });
  } catch (error) {
    if (error.code === 10008) { // Unknown Message
      console.warn("Stats message was deleted. Sending a new message with final stats.");
      await statsMessage.channel.send({ embeds: [finalEmbed], content: "**✅ انتهى البث**" });
    } else {
      console.error("Error editing final stats message:", error);
    }
  }
}

// متغيرات الإحصائيات
let botStats = {
  totalBroadcasts: 0,
  totalMessagesSent: 0,
  totalMessagesFailed: 0,
  startTime: Date.now(),
  lastBroadcast: null
};

// تسجيل الدخول
client.login(process.env.token);