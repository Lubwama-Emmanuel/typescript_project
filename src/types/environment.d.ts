export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            ENV: string;
            DATABASE_URL: string;
            DATABASE_PASSWORD: string;
        }
    }
}