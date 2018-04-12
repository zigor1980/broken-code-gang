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
    return getUser(db,session.userId);
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
 * @param {String} userId
 * @param {String} sid
 *
 * @returns {Promise<User>}
 */
async function setCurrentUser(db, {userId,sid}) {
    if(!userId){
        throw new Error('User id required');
    }

    if(!sid){
        throw new Error('Session id required');
    }

    const session = {
        userId:userId,
        sid:sid,
    };
    await saveSessionInfo(db, session);
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
    setCurrentUser,
};
