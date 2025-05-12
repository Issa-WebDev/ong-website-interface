require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("home", {page: "home"}));
app.get("/about", (req, res) => res.render("about", {page: "about"}));
app.get("/services", (req, res) => res.render("services", {page: "services"}));
app.get("/contact", (req, res) => res.render("contact", {page: "contact"}));
// app.get("/*", (req, res) => res.status(404).render("notfound", {page: "notfound"}));

app.listen(PORT, () => {
    console.log(`Serveur started at http://localhost:${PORT}`);
})