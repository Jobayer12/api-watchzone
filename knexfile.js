'use strict'
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DATABASE_HOST,
            port: +process.env.DATABASE_PORT,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        },
        pool: {
            min: +process.env.DATABASE_MAX,
            max: +process.env.DATABASE_MIN,
            idleTimeoutMillis: +process.env.DATABASE_IDLETIME,
        },
        acquireConnectionTimeout: +process.env.DATABASE_CONNECTIONTIMEOUT,
        migrations: {
            tableName: process.env.DATABASE_TABLENAME,
            directory: __dirname + '/./database/migrations',
            loadExtensions: ['.js']
        },
        seeds: {
            directory: __dirname + '/./database/seeds',
            loadExtensions: ['.js']
        },
    },
    production: {
        client: "pg",
        connection: process.env.PRODUCTION_DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        ssl: true,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        migrations: {
            tablename: process.env.DATABASE_TABLENAME,
            directory: __dirname + '/./database/migrations',
        },
        seeds: {
            tablename: process.env.DATABASE_TABLENAME,
            directory: __dirname + '/./database/seeds',
        }
    }
}