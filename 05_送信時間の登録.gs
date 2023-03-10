/**
 * メールの送信時間を登録してみよう
 */
function sendEmail5() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const mailDataRange = sheet.getRange(3, 1, sheet.getLastRow() - 2, sheet.getLastColumn());
  const mailValues = mailDataRange.getValues();
  for (const mailData of mailValues) {
    const sendTarget = mailData[0];
    const recipient = mailData[1];
    const subject = mailData[2];
    const body = mailData[3];
    if (!sendTarget || !recipient || !subject || !body) {
      continue;
    }
    const sentDate = new Date();
    Logger.log(`送信対象：${sendTarget}\n送信先メールアドレス：${recipient}\nメール件名：${subject}\nメール本文：${body}\n送信時間：${sentDate.toLocaleString("ja-JP")}`);
    // GmailApp.sendEmail(recipient, subject, body);
    
    // 演習5-1. メールデータの送信時間に現在時刻を設定してください。

    // 演習5-2. メールデータの送信対象をOFFにしてください。
    
  }
  // 演習5-3. 更新したメールデータ(mailValues)でスプレッドシートを上書きしてください。
  
}