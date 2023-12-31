const validLeagues = ["ncaaw", "wnba"];

exports.validateLeague = (req, res, next) => {
  const { league = "ncaaw" } = req.query;
  if (!validLeagues.includes(league)) {
    throw new Error("Invalid league");
  }
  next();
};
