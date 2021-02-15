const express = require('express');
const router = express.Router();
const Adapter = require('../DAL/adapter.js');

let adapter = {};

(async () => {
    try {
      adapter = await new Adapter().initialize();
      adapter.initCollections();
    } catch (e) {
      console.log(e);
    }
  })();

const addAdapter = (req, res, next) => {
    req.adapter = adapter;
    next();
};

router.use(addAdapter);

exports.globalAdapter = router;
