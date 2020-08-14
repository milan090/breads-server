let db = require('.'),
    Reading = require('./reading');

class Tags {
    constructor(url, tags, user_id) {
        this.url = url
        this.tags = tags
        this.user_id = user_id
    }

    static create(tags) {
        let tagsArray = tags.split('#').filter(tag => tag !== '').map(tag => [tag.trim()]);

        let createdTags = new Promise(function (resolve, reject) {
            db.connection.query('INSERT INTO tags (tag_name) VALUES ? ON DUPLICATE KEY UPDATE count = count + 1', [tagsArray], function (err, results) {
                if (err) reject(err);
                else resolve(results);
            });
        });
        return createdTags;
    }

    static async addToReading(url, tags, user_id) {
        let tagsArray = tags.split('#').filter(tag => tag !== '').map(tag => [tag.trim()]);
        let readingId = await Reading.findIdByUrl(url);
        let tagId;
        let readingTags = await Promise.all(tagsArray.map(async tag => {
            tagId = await this.findIdByTagName(tag);
            return [readingId[0].id, tagId[0].id, parseInt(user_id)];
        }));

        let createdTags = new Promise(function (resolve, reject) {
            db.connection.query('INSERT INTO reading_tags (reading_id, tag_id, user_id) VALUES ?', [readingTags], function (err, results) {
                if (err) reject(err);
                else resolve(results);
            });
        });
        return createdTags;
    }

    static findIdByTagName(tag) {
        let id = new Promise((resolve, reject) => {
            db.connection.query('SELECT id FROM tags WHERE tag_name = ?', tag, function(err, results) {
                if (err) reject(err);
                else resolve(results);
            });
        });
        return id;
    }

    static findTagsByReadingId(reading_id) {
        let tags = new Promise((resolve, reject) => {
            db.connection.query('SELECT id as tag_id, tag_name, reading_tags.reading_id as reading_id, reading_tags.user_id as user_id FROM reading_tags LEFT JOIN tags ON tags.id = reading_tags.tag_id WHERE reading_tags.reading_id = ?', reading_id, function(err, results) {
                if (err) reject(err);
                else resolve(results);
            });
        });
        return tags;
    }

    static findAll() {
        let tags = new Promise((resolve, reject) => {
            db.connection.query('SELECT id, tag_name, reading_tags.reading_id as reading_id, reading_tags.user_id as user_id FROM reading_tags LEFT JOIN tags ON tags.id = reading_tags.tag_id ORDER BY reading_tags.reading_id DESC', function(err, results) {
                if (err) reject(err);
                else resolve(results);
            });
        });
        return tags;
    }
}

module.exports = Tags;