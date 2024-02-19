import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
  });
  await client.connect();
  try {
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error)    
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
