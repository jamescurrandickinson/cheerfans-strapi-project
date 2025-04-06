export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),split(','),
  },
});

// APP_KEYS=b9136267502e7463b79fc1f0622afb362f673f9a7992d29e28ebf0f54aab15cc791f0bb1ce2cd59f75675a2a8ffbeb32c434e65c90b558149b07a767525edf22,793542e0be1c15077c99e575b9a8e2c34fcb006fa5d895a6271ecb9abf9ee0a7fbcdf3415d1a1909caf23ca55d0b572cbbb151a42e6fbabdbcef940369aee7d4