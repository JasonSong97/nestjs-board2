import { User } from 'src/entity/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';


export default class UserSeeder implements Seeder{
     async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise <any> {
          // data mapper 패턴
          const repository = dataSource.getRepository(User);
          await repository.insert([
               {
                 username: 'fastcampus',
                 name: 'hong gildong',
                 password: 'fastcampus1234',
               },
          ]);
     }
}