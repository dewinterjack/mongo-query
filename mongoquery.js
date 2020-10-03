class MongoQuery {
    constructor(collection)
    {
        this.collection = collection;
        this.query = {};
    }

    limit(amount)
    {
        this.query["$limit"] = amount;
        return this;
    }

    exec()
    {
        return this.collection.aggregate([this.query]);
    }
}

module.exports = MongoQuery;