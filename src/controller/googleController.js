const sheets = require('../api/GoogleSheets');
require('dotenv').config();

class GoogleController {
  
  async getPriceMatrix(req, res) {
    try {
      const data = await sheets.read({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: process.env.PRICE_MATRIX,
      });
      res.status(200).json(data);
    } catch (error) {
      console.log({ success: false, error });
    }
  }
  
  async getPriceSchwarzkopf(req, res) {
    try {
      const data = await sheets.read({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: process.env.PRICE_SCHWARZKOPF,
      });
      res.status(200).json(data);
    } catch (error) {
      console.log({ success: false, error });
    }
  }
  
  async getPriceDavines(req, res) {
    try {
      const data = await sheets.read({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: process.env.PRICE_DAVINES,
      });
      res.status(200).json(data);
    } catch (error) {
      console.log({ success: false, error });
    }
  }
  
  async getDecompose(req, res) {
    try {
      const data = await sheets.read({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: process.env.DECOMPOSE,
      });
      res.status(200).json(data);
    } catch (error) {
      console.log({ success: false, error });
    }
  }
  
}

module.exports = new GoogleController();
