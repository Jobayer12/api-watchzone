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
        connection: "postgres://rlibaojipupkkk:f3531e9e8b333b000ea00ad0c7d7b5ff8f14ccde01ec8b90f0ad30fc3460bea3@ec2-54-75-244-161.eu-west-1.compute.amazonaws.com:5432/d946juh433t2vl",
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