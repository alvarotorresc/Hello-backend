const { register } = require("../controllers/userController");
const express = require("express");
const multer = require("multer");
const upload = multer();

const router = require("express").Router();

router.post("/register", upload.none(), register);

module.exports = router;
