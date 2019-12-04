/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('users', {
        id: {
            type: 'serial',
            notNull: true,
            primaryKey: true,
        },
        firstname: {
            type: 'varchar(255)',
            notNull: true
        },
        lastname: {
            type: 'varchar(255)',
            notNull: true,
        },
        phone_number: {
            type: 'varchar(255)',
            notNull: true
        },
        address: {
            type: 'varchar(255)',
            notNull: true
        },
        password: {
            type: 'varchar(255)',
            notNull: true
        },
        dob: {
            type: 'varchar(255)',
            default: 'Nil'
        },
        bvn: {
            type: 'string',
            default: 'Nil'
        },
        created_at: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp')
        }
    });
};

exports.down = (pgm) => {

};
