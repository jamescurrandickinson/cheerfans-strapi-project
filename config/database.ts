export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "cheerfans-strapi-postgres-db-server.c3zqbhmlfgzz.eu-west-2.rds.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "cheerfans-strapi-postgres-db-server"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "rqr<<x9*.)W>]lPi*:oeojvUfV?A"),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    useNullAsDefault: false,
  },
});