/**
 * スプレッドシートからメール一覧を取得してみよう
 */
function sendEmail() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const mailDataRange = sheet.getRange(3, 1, sheet.getLastRow() - 2, sheet.getLastColumn());
  const mailValues = mailDataRange.getValues();

  // メール対象があるかチェックする
  const existsTarget = mailValues.filter((value) => {
    const sendTarget = value[0];
    return sendTarget;
  });
  if (existsTarget.length === 0) {
    Browser.msgBox('送信対象を選択してください。', Browser.Buttons.OK);
    return;
  }
  // 演習7-1.  送信する前に、'メールを送信してよろしいでしょうか？'
  // というダイアログボックスをスプレッドシートに表示してください。
  // ダイアログボックスの出力には、Browser.msgBox()を活用してください。
  // 「OK」「キャンセル」ボタンの表示には、Browser.Buttons.OK_CANCELを使ってください。
  // 「キャンセル」が選択された場合は、メール送信しないようにしてください。
  const result = '選択結果'

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
    GmailApp.sendEmail(recipient, subject, body);
    value[4] = sentDate;
    value[0] = false;
  }
  mailDataRange.setValues(mailValues);
}