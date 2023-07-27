import express from "express";
const app = express();
app.use(express.json());
app.use(express.static("public"));
//app.get("/", (req, res) => {
//res.send("FIRST API I CREATED");
//});

app.get("/api", (req, res) => {
  res.json({ message: "Helloo my friend" });
});
const greetings = {
  english: "Hello",
  zulu: "Sawubona",
  xhosa: "Molo",
  tswana: "Dumela",
};

app.get("/api/greet", (req, res) => {
  const username = req.query.username;
  const language = req.query.language;

  if (!greetings[language]) {
    return res.json({
      error: "Opps did not find  language in my books",
    });
  }

  const greeting = greetings[language];
  res.json({
    message: `${greeting} ,${username}`,
  });
});

app.get("/api/greet", (req, res) => {
  console.log(req.query);
  const username = req.query.username;
  res.json({ message: ` Helloo my friend ${username}` });
});

app.post("/api/greet", (req, res) => {
  const language = req.body.language;
  greetings[language] = req.body.greeting;

  res.json({
    message: `Hello , ${username}`,
  });
});

app.get("/api/greet/:username", (req, res) => {
  console.log(req.params);
  const username = req.params.username;
  res.json({ message: ` Helloo my cousin ${username}` });
});

app.post("/api/greet", (req, res) => {
  res.json(req.body);
});

const PORT = process.env.PORT || 4999;
app.listen(PORT, () => {
  console.log(`app strated on port ${PORT}`);
});
