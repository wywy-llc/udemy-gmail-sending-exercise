/**
 * スプレッドシートからメール一覧を取得してみよう
 */
function sendEmail2() {
  // 演習2-1. 現在アクティブなシートを取得してください。
  const sheet = 'アクティブなシート';

  // 演習2-2. メールシートからメールデータの範囲(Range)を取得してください。
  const mailDataRange = 'メールデータの範囲(Range)';
  
  // 演習2-3. メールデータの範囲からメールデータ配列を取得してください。
  const mailValues = 'メールデータ配列';

  // 演習2-4. メールデータ配列の各値をログに出力してください。
  for (const mailData of mailValues) {
    const sendTarget = '送信対象'
    const recipient = '送信先メールアドレス';
    const subject = 'メール件名';
    const body = 'メール本文'
    Logger.log(`送信対象：${sendTarget}\n送信先メールアドレス：${recipient}\nメール件名：${subject}\nメール本文：${body}`);
    // GmailApp.sendEmail(recipient, subject, body);
  }
}
