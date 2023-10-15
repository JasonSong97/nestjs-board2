import { DataSource } from "typeorm";
import { config } from 'dotenv';

config({ path: '.env.local' }); // env 파일 사용할 수 있게 만듬

export default new DataSource({
     type: 'postgres',
     host: process.env.DB_HOST,
     port: parseInt(process.env.DB_PORT),
     username: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     entities: ['src/**/*.entity{.ts,.js}'], // build 시 js로 변경
     migrations: ['src/database/migrations/*.ts'], // entity 변경사항이 생기는 경우 변경 시점마다 저장되는데 그 경로
     migrationsTableName: 'migrations',
})