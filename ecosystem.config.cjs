module.exports = {
  apps: [
    {
      name: 'iyansr',
      script: '.output/server/index.mjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 22825,
      },
    },
  ],
};
