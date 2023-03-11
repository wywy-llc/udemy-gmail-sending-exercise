/**
 * 送信対象ONのメールを取得してみよう
 */
function sendEmail3() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const mailDataRange = sheet.getRange(3, 1, sheet.getLastRow() - 2, sheet.getLastColumn());
  const mailValues = mailDataRange.getValues();
  for (const mailData of mailValues) {
    const sendTarget = mailData[0];
    const recipient = mailData[1];
    const subject = mailData[2];
    const body = mailData[3];
    // 演習3-1. 「送信対象がOFF」、「送信先が無い」、「件名が無い」、「本文が無い」のいずれかの場合は、
    // if文を使ってメール送信されないようにしてください。

    Logger.log(`送信対象：${sendTarget}\n送信先メールアドレス：${recipient}\nメール件名：${subject}\nメール本文：${body}`);

    // メールを送信する場合はこちらコメントアウトを外してください。
    // GmailApp.sendEmail(recipient, subject, body);
  }
}
