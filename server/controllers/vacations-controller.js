const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
  let pics = [
    'https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__480.jpg',
    'https://cdn.pixabay.com/photo/2019/10/06/08/57/architecture-4529605__340.jpg',
    'https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055__480.jpg',
    'https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616__340.jpg',
    'https://cdn.pixabay.com/photo/2020/03/13/14/06/dead-sea-4927978__480.jpg',
  ];
  try {
    let mockVacations = [
      {
        id: 1,
        destination: 'Paris',
        price: 1000,
        amountOfFollowers: 3,
        isFollowed: 0,
        imageUrl: pics[0],
        startDate: '2022-05-02',
        endDate: '2022-07-02',
      },
      {
        id: 2,
        destination: 'Rome',
        price: 900,
        amountOfFollowers: 5,
        isFollowed: 0,
        imageUrl: pics[1],
        startDate: '2022-05-02',
        endDate: '2022-07-02',
      },
      {
        id: 3,
        destination: 'London',
        price: 600,
        amountOfFollowers: 2,
        isFollowed: 1,
        imageUrl: pics[2],
        startDate: '2022-05-02',
        endDate: '2022-07-02',
      },
      {
        id: 4,
        destination: 'New-York',
        price: 1500,
        amountOfFollowers: 6,
        isFollowed: 0,
        imageUrl: pics[3],
        startDate: '2022-05-02',
        endDate: '2022-07-02',
      },
      {
        id: 5,
        destination: 'Israel',
        price: 1500,
        amountOfFollowers: 6,
        isFollowed: 0,
        imageUrl: pics[4],
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
