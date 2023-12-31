const axios = require("axios");

module.exports = {
  getSchedule: async function ({ year, month, day, limit = 300 }) {
    let params = {}; // Initialize params before using it
    const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard`;
    if (year && year && day) {
      params.dates = `${year}${
        parseInt(month) <= 9 ? "0" + parseInt(month) : parseInt(month)
      }${parseInt(day) <= 9 ? "0" + parseInt(day) : parseInt(day)}`;
    }

    params.limit = limit;

    const res = await axios.get(baseUrl, {
      params,
    });
    const { events } = res.data;

    return { games: events };
  },
};
