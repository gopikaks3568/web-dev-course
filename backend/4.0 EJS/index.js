import express from "express";
import ejs from "ejs";

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const date = new Date(" May 18, 2025 01:15:00");
  const today = date.getDay();
  let weekday = "weekday";
  let msg = "its time to work";
  if (today === 0 || today === 6) {
    weekday = "weekend";
    msg = "Enjoy your day";
  }
  res.render("index.ejs", { todaydate: weekday, adv: msg });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
