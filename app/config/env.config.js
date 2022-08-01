module.exports = {
    apps : [
        {
          name: "timer-app",
          script: "./app/app.js",
          watch: true,
          time: true,
          env_production: {
              "PORT": 8000,
              "NODE_ENV": "production",
          }
        }
    ]
  }