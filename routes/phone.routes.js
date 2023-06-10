
const Phones = require('../models/Phones.model')
const router = require("express").Router();

router.get("/phones", (req, res, next) => {
  Phones.find()
  .then((allPhones)=>{
    res.json(allPhones)
  })
  .catch((err)=>res.json(err))
});

router.get("/phones/:id", (req, res, next) => {
    const {id} = req.params
    Phones.findById(id)
    .then((phone)=>{
      res.json(phone)
    })
    .catch((err)=>res.json(err))
  });

module.exports = router;
