import { DataSourceOptions, DataSource } from 'typeorm';

const { PGHOST, PGUSER, PGPASSWORD, POSTGRES_PORT, PGDATABASE, DEBUG, NODE_ENV } = process.env;

const fileExtensions = NODE_ENV === 'production' ? 'js' : 'ts';

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: PGHOST ?? 'db',
  port: POSTGRES_PORT ? Number(POSTGRES_PORT) : 5432,
  username: PGUSER ?? 'db-admin',
  password: PGPASSWORD ?? 'password',
  database: PGDATABASE ?? 'salary-app-db',
  synchronize: false,
  migrationsRun: true,
  logging: DEBUG === 'true' ?? false,
  entities: [`src/**/*entity.${fileExtensions}`],
  migrations: [`src/migrations/*.${fileExtensions}`],
};

// Create a new DataSource instance with the ormconfig.
const dataSource = new DataSource(ormconfig);

export default dataSource;
