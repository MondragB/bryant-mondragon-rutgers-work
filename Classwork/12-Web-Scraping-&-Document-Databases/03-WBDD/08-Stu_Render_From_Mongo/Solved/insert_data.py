import pymongo

# @TODO: setup mongo connection
conn = 'mongodb://localhost:27017'

# @TODO: connect to mongo db and collection
client = pymongo.MongoClient(conn)

db = client.store_inventory

# Drops collection if available to remove duplicates
db.produce.drop()

db.produce.insert_many(
    [
        {
            "type": "apples",
            "cost": .23,
            "stock": 333
        },
        {
            "type": "bananas",
            "cost": .50,
            "stock": 123
        },
        {
            "type": "cucumbers",
            "cost": .13,
            "stock": 10
        },
        {
            "type": "durian",
            "cost": .34,
            "stock": 500
        },
    ]
)
