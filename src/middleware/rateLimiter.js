const { userRequests, ipRequests } = require("../utils/store");

const WINDOW_TIME = 60 * 1000;  

function rateLimiter(req, res, next) {
    const userId = req.headers.userid;
    const ip = req.ip;
    const currentTime = Date.now();

     
    if (!userId) {
        return res.status(400).json({ message: "UserId required" });
    }

     
    if (!userRequests[userId]) {
        userRequests[userId] = [];
    }

    userRequests[userId] = userRequests[userId].filter(
        time => currentTime - time < WINDOW_TIME
    );

    if (userRequests[userId].length >= 5) {
        return res.status(429).json({ message: "User limit exceeded" });
    }

    userRequests[userId].push(currentTime);

     
    if (!ipRequests[ip]) {
        ipRequests[ip] = [];
    }

    ipRequests[ip] = ipRequests[ip].filter(
        time => currentTime - time < WINDOW_TIME
    );

    if (ipRequests[ip].length >= 20) {
        return res.status(429).json({ message: "IP limit exceeded" });
    }

    ipRequests[ip].push(currentTime);

    next();
}

module.exports = rateLimiter;