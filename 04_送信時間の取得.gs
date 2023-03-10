/**
 * 送信時間を取得してみよう
 */
function sendEmail4() {
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
    // 演習4-1. 現在時刻を取得してください。
    const sentDate = '現在時刻';

    // 演習4-2. 「送信時間：${sentDate}」を"年/月/日 時:分:秒"形式で出力してください。
    // 出力例：「送信時間：2023/3/10 16:05:13」
    Logger.log(`送信対象：${sendTarget}\n送信先メールアドレス：${recipient}\nメール件名：${subject}\nメール本文：${body}\n送信時間：${sentDate}`);
    // GmailApp.sendEmail(recipient, subject, body);
  }
}
