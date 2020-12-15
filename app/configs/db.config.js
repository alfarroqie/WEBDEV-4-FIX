module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "thehunter1",
    DB: "Webdev-4-Fix",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };