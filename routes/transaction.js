const express = require("express");
const router = express.Router();
const tr = [
  {
    id: "5c865784922a7a50a46ad50f",
    index: 0,

    children: [
      {
        id: "5c8657845d3dc63c6d5bb643",
        index: 0,
        age: 36,
        name: "Christa didou",
        email: "jobs@dieture.com",
        phone: "(989) 478-3521",
        connectionInfo: {
          type: "sameGeoInfo",
          confidence: 0.7,
        },
        geoInfo: {
          latitude: 43.903515,
          longitude: 35.924001,
        },
        children: [
          {
            id: "5c86578486f3aa844adf8bba",
            index: 0,
            age: 28,
            name: "Frazier Conrad",
            email: "jobs+2@dieture.com",
            phone: "(948) 443-3884",
            connectionInfo: {
              type: "sameEmail",
              confidence: 0.5,
            },
            geoInfo: {
              latitude: 80.58013,
              longitude: 41.759403,
            },
          },
        ],
      },
    ],
  },
];

router.get("/", async (req, res) => {
  res.send(tr);
});
router.get("/:transactionId/:confidenceLevel", async (req, res) => {
  var reservation = [];

  for (let i = 0; i < tr.length; i++) {
    if (
      tr[i].id == req.params.transactionId &&
      Math.floor(tr[i].children[0].connectionInfo.confidence) ==
        req.params.confidenceLevel &&
      Math.floor(
        Math.floor(tr[i].children[0].children[0].connectionInfo.confidence) ==
          req.params.confidenceLevel
      )
    ) {
      reservation.push(tr[i]);
    }
  }
  if (reservation.length > 0) {
    res.send(reservation);
  } else {
    res.send({
      error: "nothing",
    });
  }
  //const reservation = await Reservation.find({ idLogger: req.params.id });
});
module.exports = router;
