import dotenv from 'dotenv';

dotenv.config();

const config = {
    githubRepo: process.env.GITHUB_REPO || '',
    githubToken: process.env.GITHUB_TOKEN || '',
};

export default config;