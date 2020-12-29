export function createCollection(db, collectionName, schema) {
    console.log(`in create collection:${collectionName} schema:${schema}`);
    db.createCollection(collectionName, {
        validator: {
            $jsonSchema: schema
        }
    }).then(() => console.log("created"))
        .catch(() => console.log("already exists"))
}

export function deleteCollection(db, colName) {
    db.collection(colName).drop((err, delOK) => {
            if (err)
                throw err;
            if (delOK)
                console.log("Collection deleted");
        });
}
