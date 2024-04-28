export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_URL,
  },
  shaAlgo: {
    sha256: process.env.SHA256_ALGO,
  },
});
