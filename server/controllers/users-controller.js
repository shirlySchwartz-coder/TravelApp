const express = require("express");

const router = express.Router();

router.post("/login", async (request, response, next) => {
    try {
        let mockedResponse = {userType: "Customer"}
        response.json(mockedResponse);
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message)
    }
});

module.exports = router;