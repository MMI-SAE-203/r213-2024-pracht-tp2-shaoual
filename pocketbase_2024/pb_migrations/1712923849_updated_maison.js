/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2vplymfdqrl854")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a6xeob69",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v2vplymfdqrl854")

  // remove
  collection.schema.removeField("a6xeob69")

  return dao.saveCollection(collection)
})
