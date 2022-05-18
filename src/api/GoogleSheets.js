const { google } = require('googleapis');

class GoogleSheets {
  
  async auth() {
    const auth = await new google.auth.GoogleAuth({
      keyFile: 'key.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
    await auth.getClient();
    const api = google.sheets({
      version: 'v4', client: 'auth',
    });
    return { auth, api };
  }
  
  async read({ spreadsheetId, range }) {
    const { auth, api } = await this.auth();
    const { data: { values } } = await api.spreadsheets.values.get({
      auth, spreadsheetId, range,
    });
    return values;
  }
  
  // async update() {
  //   await googleSheets.spreadsheets.values.update({
  //     auth,
  //     spreadsheetId: process.env.SPREADSHEET_ID,
  //     range,
  //     valueInputOption: 'USER_ENTERED',
  //     resource: { values: dataToLoad },
  //   });
  // }
  //
  // async append() {
  //   await googleSheets.spreadsheets.values.append({
  //     auth,
  //     spreadsheetId,
  //     range: `${sheetName}!A:AR`,
  //     insertDataOption: 'INSERT_ROWS',
  //     valueInputOption: 'RAW',
  //     resource: { values },
  //   });
  // }
  //
  // async write() {
  //   const { auth, googleSheets } = await authGoogle();
  //
  //   await googleSheets.spreadsheets.values.clear({
  //     auth,
  //     spreadsheetId,
  //     range: `${sheetName}!A1:O`,
  //   });
  // }
  
}

module.exports = new GoogleSheets();
