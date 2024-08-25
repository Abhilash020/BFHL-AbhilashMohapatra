const express = require("express");
const cors = require("cors");

const app = express();



app.use(cors({
  origin: ['https://front-master-rosy.vercel.app',"http://localhost:3001"] 
}));

app.use(express.json());
app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {

    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

  for (const item of data) {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (item.length === 1 && isNaN(item)) {
      if (item >= 'a' && item <= 'z') {
        alphabets.push(item);
        if (!highest_lowercase_alphabet || item > highest_lowercase_alphabet) {
          highest_lowercase_alphabet = item;
        }
      }
    }
  }

    res.json({
      is_success: true,
      user_id: "abhilash_mohapatra_05022004",
      email: "abhilash.mohapatra2021@vitbhopal.ac.in",
      roll_number: "21BEC10436",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
    });
  });

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
