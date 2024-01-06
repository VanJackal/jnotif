const crypto = require("crypto");
const db = require("./db.json")

function getNewKey() {
    return crypto.randomUUID()
}

function getUserFromKey(key) {
    return db.users.find((i) => {
        return i.key === key
    })
}

module.exports = {
    getUserFromKey
}