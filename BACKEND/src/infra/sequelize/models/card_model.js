const DataTypes = require("sequelize");
const sequelize = require('../config');

const Card = sequelize.define("cards", {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    list: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updateAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
});


const get = async (id) => {
    if (!id)
        return await Card.findAll();

    return await Card.findOne({ where: { id: id } });

}

const remove = async (id) => {
    const result = await Card.destroy({
        where: { id: id }
    }).then(res => {
        console.log(res)
        return get();
    }).catch((error) => {
        console.error(error)
        return null;
    });

    return result
}

const insert = async (id, title, content, list) => {
    const result = await new Promise((resolve) => {
        Card.create({
            id: id,
            title: title,
            content: content,
            list: list,
            updatedAt: new Date(),
            createdAt: new Date()
        }).then(res => {

            resolve(res);
        }).catch((error) => {
            console.error('Failed to create a new record: ', error);
            resolve(null);
        })
    });

    if (!result)
        return null


    return result;
};

const update = async (id, title, content, list) => {

    const result = await new Promise((resolve) => {
        Card.update({
            title: title,
            content: content,
            list: list,
            updatedAt: new Date()
        }, {
            where: { id: id }
        }).then(res => {
            resolve(res);
        }
        ).catch((error) => {
            console.error('Failed to update record: ', error);
            resolve(null);
        })
    });

    if (!result)
        return null

    const card = await get(id);
    return card;
};

module.exports = {
    insert,
    get,
    update,
    remove,
};