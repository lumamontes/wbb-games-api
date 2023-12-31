const { getSchedule: getScheduleNcaaw } = require("../services/ncaaw");
const { getSchedule: getScheduleWnba } = require("../services/wnba");

exports.getSchedule = async (req, res) => {
  const {
    year,
    month,
    day,
    groups,
    seasontype,
    limit,
    league = "ncaaw",
  } = req.query;

  let results;
  try {
    switch (league) {
      case "ncaaw":
        results = await getScheduleNcaaw({
          year,
          month,
          day,
          groups,
          seasontype,
          limit,
        });
        break;
      case "wnba":
        results = await getScheduleWnba({
          year,
          month,
          day,
          groups,
          seasontype,
          limit,
        });
        break;
      default:
        throw new Error("Invalid league");
    }
    res.json(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
