export const EnvVals = process.env;

export enum EnvTypes {
    LOCAL = 'local',
    TEST = 'testing',
    DEV = 'dev',
    PROD = 'prod',
}
export interface ServerConfigs {
    ENV: EnvTypes,
    PORT: number,
    // ======================= Paging =======================
    MAX_QUERY_LIMIT: number,
    // ======================= Super Admin =======================
    ADMIN_NAME: string,
    ADMIN_EMAIL: string,
    ADMIN_PLAIN_PASSWORD: string,
    ADMIN_ROLE_NAME: string,
    // ======================= Token Related =======================
    TOKEN_SECRET_KEY: string,
    TOKEN_ACCESS_EXPIRE_TIME: number,
    TOKEN_REFRESH_EXPIRE_TIME: number,
}

const Configs: ServerConfigs = {
    ENV: EnvVals.ENV as any,
    PORT: +EnvVals.PORT || 4500,
    // ======================= Paging =======================
    MAX_QUERY_LIMIT: +EnvVals.MAX_QUERY_LIMIT || 20,
    // ======================= Super Admin =======================
    ADMIN_NAME: process.env.ADMIN_NAME || 'Super Admin',
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@gmail.com',
    ADMIN_PLAIN_PASSWORD: process.env.ADMIN_PLAIN_PASSWORD || 'admin',
    ADMIN_ROLE_NAME: 'Super Admin',
    // ======================= Token Related =======================
    TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY || 'token_secret_key',
    TOKEN_ACCESS_EXPIRE_TIME: +process.env.TOKEN_ACCESS_EXPIRE_TIME || 60 * 24, // Minites
    TOKEN_REFRESH_EXPIRE_TIME: +process.env.TOKEN_REFRESH_EXPIRE_TIME || 60 * 24 * 30, // Minites
}

// ======================= Validate Env Variables =======================
function throwEnvValueError(fieldName: string, message: string) {
    console.error(`ERROR env variable "${fieldName}": ${message}`);
    process.exit(1);
}

function validateEnvVals() {
    // Requied
    for (const key in Configs) {
        if (Configs.hasOwnProperty(key)) {
            const item = Configs[key];
            if (!item) throwEnvValueError(key, 'must be provided.');
        }
    }

    // Valid
    if (!Object.values(EnvTypes).includes(Configs.ENV)) throwEnvValueError('ENV', `must be enum ${JSON.stringify(Object.values(EnvTypes))}`)
}

validateEnvVals();

export default Configs;