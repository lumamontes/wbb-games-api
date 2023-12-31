const axios = require("axios");
/**
 * Operations for WBB.
 *
 * @namespace wbb
 */
module.exports = {
  /**
   * Gets the Women's College Basketball schedule data for a specified date if available.
   * @memberOf wbb
   * @async
   * @function
   * @param {*} year - Year (YYYY)
   * @param {*} month - Month (MM)
   * @param {*} day - Day (DD)
   * @param {number} group - Group is 50 for Division-I, 51 for Division-II, 52 for Division-III
   * @param {number} seasontype - Pre-Season: 1, Regular Season: 2, Postseason: 3, Off-season: 4
   * @param {number} limit - Limit on the number of results @default 300
   * @returns json
   * @example
   * const result = await sdv.wbb.getSchedule(
   * year = 2021, month = 02, day = 15, group=50
   * )
   */
  getSchedule: async function ({
    year,
    month,
    day,
    groups = 50,
    seasontype = 2,
    limit = 300,
  }) {
    const baseUrl = `http://cdn.espn.com/core/womens-college-basketball/schedule`;
    if (year && month && day) {
      let params = {}; // Initialize params before using it
      params.dates = `${year}${
        parseInt(month) <= 9 ? "0" + parseInt(month) : parseInt(month)
      }${parseInt(day) <= 9 ? "0" + parseInt(day) : parseInt(day)}`;
    }
    const params = {
      groups: groups,
      seasontype: seasontype,
      limit: limit,
      xhr: 1,
      render: false,
      device: "desktop",
      userab: 18,
    };

    const res = await axios.get(baseUrl, {
      params,
    });
    return res.data.content.schedule;
  },
};
