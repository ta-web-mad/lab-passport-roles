module.exports = {
  checkLoggedIn: (req, res, next) =>
    req.isAuthenticated()
      ? next()
      : res.render("auth/login", { errorMsg: "Login" }),

  checkBoss: (req, res, next) =>
    req.user.role === "BOSS"
      ? next()
      : { errorMsg: "You don't have enough credentials" },

  checkEmployee: (req, res, next) =>
    req.user.role === "TA" || req.user.role === "DEV"
      ? next()
      : { errorMsg: "You don't have enough credentials" },
}