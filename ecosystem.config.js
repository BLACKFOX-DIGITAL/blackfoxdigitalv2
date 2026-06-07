module.exports = {
  apps: [
    {
      name: "blackfoxdigital",
      script: "node_modules/.bin/next",
      args: "start -p 3010",
      instances: 2,
      exec_mode: "cluster",
      max_memory_restart: "400M",
      env: {
        NODE_ENV: "production",
        PORT: 3010,
      },
    },
  ],
};
