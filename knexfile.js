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
        connection: "postgres://rlibaojipupkkk:f3531e9e8b333b000ea00ad0c7d7b5ff8f14ccde01ec8b90f0ad30fc3460bea3@ec2-54-75-244-161.eu-west-1.compute.amazonaws.com:5432/d946juh433t2vl",
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tablename: "migrations",
            directory: __dirname + '/./database/migrations',
        },
        seeds: {
            tablename: "migrations",
            directory: __dirname + '/./database/seeds',
        }
    }
}