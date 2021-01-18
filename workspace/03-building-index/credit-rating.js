
// ===================================
// To run this in mongo shell -
// ===================================
// 1. Open the folder containing this file in command prompt.
// 2. Run below command
//    > mongo credit-rating.js
// ===================================
conn = new Mongo();
db = conn.getDB("credit");

for (let i = 0; i < 100000; i++) {
    db.ratings.insertOne({
        "person_id": i + 1,
        "score": Math.random() * 100,
        "age": Math.floor(Math.random() * 70) + 18 
    })
}