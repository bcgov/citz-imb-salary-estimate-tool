import { DataSourceOptions, DataSource } from 'typeorm';

const { PGHOST, PGUSER, PGPASSWORD, POSTGRES_PORT, PGDATABASE, VERBOSE_DEBUG, NODE_ENV } =
  process.env;

const fileExtensions = NODE_ENV === 'production' ? 'js' : 'ts';

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: PGHOST ?? 'db',
  port: POSTGRES_PORT ? Number(POSTGRES_PORT) : 5432,
  username: PGUSER ?? 'db-admin',
  password: PGPASSWORD ?? 'password',
  database: PGDATABASE ?? 'salary-app-db',
  synchronize: false,
  migrationsRun: true,
  logging: VERBOSE_DEBUG === 'true' ?? false,
  entities: [`src/**/*entity.${fileExtensions}`],
  migrations: [`src/database/migrations/*.${fileExtensions}`],
};

// Create a new DataSource instance with the ormconfig.
export const dataSource = new DataSource(dataSourceConfig);

export default dataSource;
