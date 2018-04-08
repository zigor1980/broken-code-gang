const { ObjectId } = require('mongodb');

const { getSessionInfo, saveSessionInfo } = require('./session');
const { pageableCollection, insertOrUpdateEntity } = require('./helpers');
const faker = require('faker');

const TABLE = 'users';

/**
 * @typedef {{
 *  [_id]: string,
 *  name: string,
 *  email: string,
 *  phone: string,
 *  [status]: boolean
 * }} User
 */

/**
 * @param {Db} db
 * @param {string} sid Session ID
 *
 * @returns {Promise<User>}
 */
async function findUserBySid(db, sid) {
    const session = await getSessionInfo(db, sid);

    if (!session.userId) {
    // Create fake user

        let user = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
        };

        user = await saveUser(db, user);

        session.userId = user._id;

        await saveSessionInfo(db, session);

        return user;
    }
    return db.collection(TABLE).findOne({ _id: session.userId });
}

/**
 * @param {Db} db
 * @param {string} userId
 *
 * @returns {Promise<User>}
 */
async function getUser(db, userId) {
    return db.collection(TABLE).findOne({ _id: ObjectId(userId.toString()) });
}

/**
 * @param {Db} db
 * @param {User} user
 *
 * @returns {Promise<User>}
 */
async function saveUser(db, user) {
    return insertOrUpdateEntity(db.collection(TABLE), user);
}

/**
 * @param {Db} db
 * @param {{}} [filter]
 *
 * @return {Promise<Pagination<User>>}
 */
async function getUsers(db, filter) {
    return pageableCollection(db.collection(TABLE), filter);
}

/**
 * @param {Db} db
 * @param {string} email
 * @param {string} password
 *
 * @return {Promise<Message>}
 */
async function addUser(db, {email, password}) {
    if (!email) {
        throw new Error('User email required');
    }

    if (!password) {
        throw new Error('User password required');
    }

    const userEntity = {
        email: email,
        password: password,
    };
    const result = await db.collection(TABLE).insertOne(userEntity);
    userEntity._id = result.insertedId;

    return userEntity;
}

module.exports = {
    findUserBySid,
    getUsers,
    getUser,
    addUser,
};
