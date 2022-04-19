const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
  try {
    let mockVacations = [
      {
        id: 1,
        destination: 'Paris',
        price: 1000,
        amountOfFollowers: 3,
        isFollowed: 0,
        imageUrl:
          'https://www.kindpng.com/picc/m/199-1993094_london-png-transparent-png.png',
        startDate: '2022-05-02',
        endDate: '2022-07-02',
      },
      {
        id: 2,
        destination: 'Rome',
        price: 900,
        amountOfFollowers: 5,
        isFollowed: 0,
        startDate: '',
        endDate: '',
        imageUrl:
          'https://www.kindpng.com/picc/m/199-1993094_london-png-transparent-png.png',
        startDate: '2022-05-02',
        endDate: '2022-07-02',
      },
      {
        id: 3,
        destination: 'London',
        price: 600,
        amountOfFollowers: 2,
        isFollowed: 1,
        imageUrl:
          'https://www.kindpng.com/picc/m/199-1993094_london-png-transparent-png.png',
        startDate: '2022-05-02',
        endDate: '2022-07-02',
      },
    ];
    response.json(mockVacations);
  } catch (e) {
    console.error(e);
    response.status(600).send(e.message);
  }
});

module.exports = router;
