/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:pqlc5XIPYLT8@ep-damp-scene-a1by2amm.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };