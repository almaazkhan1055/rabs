const express = require("express");
const app = express();
const port = 5173;

// Sample data
const navData = [
  {
    logo: "path-to-logo.png",
    navigationList: [
      { text: "Home", url: "#" },
      { text: "Services", url: "#" },
      { text: "Our Approach", url: "#" },
      { text: "About us", url: "#" },
      { text: "FAQ", url: "#" },
    ],
    contact: "+91 98336 36916",
  },
];

// Endpoints to serve data
app.get("/navdata", (req, res) => {
  res.json(navData);
});

// More endpoints can be created for heroData, serviceCardsData, etc.

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
