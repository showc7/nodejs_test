exports.index = function(req, res, next, first, second) {
  res.send("hello " + first + " | " + second + "|\n");
  res.end();
}
