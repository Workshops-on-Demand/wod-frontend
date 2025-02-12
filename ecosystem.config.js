module.exports = {
  apps: [
    {
      name: "wod-frontend",
      script: "npm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};
