import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 8008;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
      const response = await axios.get("http://20.244.56.144/numbers/primes");
      const result = response.data;
      console.log(result);
    } catch (error) {
      console.error("Failed to make request:", error.message);
    }
  });

  
// app.post("/", async (req, res) => {
//     try {
//       console.log(req.body);
//       const type = req.body.type;
//       const participants = req.body.participants;
//       const response = await axios.get(
//         `http://20.244.56.144/numbers/filter?type=${type}&participants=${participants}`
//       );
//       const result = response.data;
//       console.log(result);
//       res.render("solution.ejs", {
//         data: result[Math.floor(Math.random() * result.length)],
//       });
//     } catch (error) {
//       console.error("Failed to make request:", error.message);
      
//     }
//   });

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });


