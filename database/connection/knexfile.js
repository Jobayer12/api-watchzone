'use strict'
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DATABASE_HOST,
            port: 5432,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        },
        pool: {
            min: 10,
            max: 30,
            idleTimeoutMillis: 60000,
        },
        acquireConnectionTimeout: 20000,
        migrations: {
            tableName: 'migrations',
            directory: __dirname + '/../migrations',
            loadExtensions: ['.js']
        },
        seeds: {
            directory: __dirname + '/../seeds',
            loadExtensions: ['.js']
        },
    },
    production: {
        client: "pg",
        connection: "postgres://rmhgeteyoazdqd:b3f240b26bf37365047814dee2a93d097c64da0d94f232978dd9c75eba94d44b@ec2-46-137-124-19.eu-west-1.compute.amazonaws.com:5432/db18o9hs1il6po",
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tablename: "migrations",
            directory: __dirname + '/../migrations',
        },
        seeds: {
            tablename: "migrations",
            directory: __dirname + '/../seeds',
        }
    }
}