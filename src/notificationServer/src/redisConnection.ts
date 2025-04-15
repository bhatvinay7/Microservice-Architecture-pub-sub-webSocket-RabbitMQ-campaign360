import { Redis } from 'ioredis';
const redisSubscriber = new Redis("rediss://default:AbvWAAIncDE0NDg2ODY1NWFiYmQ0MmE5OTRjNTUxNTVhNGRiZmNhY3AxNDgwODY@ready-wahoo-48086.upstash.io:6379");

const redispublisher = new Redis("rediss://default:AbvWAAIncDE0NDg2ODY1NWFiYmQ0MmE5OTRjNTUxNTVhNGRiZmNhY3AxNDgwODY@ready-wahoo-48086.upstash.io:6379");

export {redisSubscriber,redispublisher}