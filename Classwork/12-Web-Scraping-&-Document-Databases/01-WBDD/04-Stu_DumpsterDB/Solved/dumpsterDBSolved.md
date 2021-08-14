# Queries for MongoDB

    <!-- Creating the new database -->
    use Dumpster_DB
    
    <!-- Creating the collection in which we will store all the documents (aka: rows) -->
    db.createCollection("divers")

    <!-- Insert 1 -->
    db.divers.insert({"name": "Maria", "yearsDiving": 10, "stillDiving": true,
                        "bestFinds": ["Gold Nugget", "Shark Teeth", "Antique Clock"]})
    
    <!-- Insert 2 -->
    db.divers.insert({"name": "Jake", "yearsDiving": 18, "stillDiving": true,
                        "bestFinds": ["Paul", "BaseBall gear", "Pirate Gold"]})

    <!-- Insert 3 -->
    db.divers.insert({"name": "Ryan", "yearsDiving": 5, "stillDiving": true,
                        "bestFinds": ["Happy Meals", "Winning Lottery Ticket"]})

    <!-- Update all the rows by 1 for "yearsDiving"  -->
    db.divers.updateMany({},{$inc: {"yearsDiving": 1 }})

    <!-- Set "stillDiving" to false to one of the documents (Ryan) -->
    db.divers.update({"name":"Ryan"}, {$set: {"stillDiving" : false}})

    <!-- Push a new value into the arrow Jakes array of "bestFinds" -->
    db.divers.update({"name": "Jake"}, {$push: {"bestFinds": "Sofa"}})

    <!-- Remove the "bestFinds" from lowest person in the Collection: Ryan (RIP - Lottery Ticket) -->
    db.divers.remove({"name": "Ryan"})
 