/**
 * 送信対象が無い場合にメッセージを出せるようにしよう
 */
function sendEmail6() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const mailDataRange = sheet.getRange(3, 1, sheet.getLastRow() - 2, sheet.getLastColumn());
  const mailValues = mailDataRange.getValues();

  // メール対象があるかチェックする

  // 演習6-1. メール送信対象ONのデータを変数existsTargetに
  // 代入してください。便利メソッドのfilter()を活用してください。
  const existsTarget = "メール送信対象ONのデータ";

  if (!existsTarget) {
    // 演習6-2. '送信対象を選択してください。'というメッセージで
    // スプレッドシートにダイアログボックスを表示させてください。
    // ダイアログボックスの出力には、Browser.msgBox()を活用してください。
    
    return;
  }

  // メール送信
  for (const value of mailValues) {
    const sendTarget = value[0];
    const recipient = value[1];
    const subject = value[2];
    const body = value[3];
    if (!sendTarget || !recipient || !subject || !body) {
      continue;
    }
    const sentDate = new Date();
    Logger.log(`送信対象：${sendTarget}\n送信先メールアドレス：${recipient}\nメール件名：${subject}\nメール本文：${body}\n送信時間：${sentDate.toLocaleString("ja-JP")}`);
    // GmailApp.sendEmail(recipient, subject, body);
    mailData[4] = sentDate;
    mailData[0] = false;
  }
  mailDataRange.setValues(mailValues);
}