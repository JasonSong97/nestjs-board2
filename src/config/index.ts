import { ConfigModule } from "@nestjs/config";
import configuration from "./configuration";

export default ({} = {}) => ConfigModule.forRoot({
     isGlobal: true,
     // nestjs -> dev, local 같은 환경 설정파일
     envFilePath: `.env.local`, 
     load: [configuration]
});