import { Octokit } from '@octokit/rest';
import config from './config';
import path from 'path';
import fs from 'fs';

export async function createIssue(logContent: string, logFilePath: string): Promise<void> {
    if (!config.githubToken || !config.githubRepo) {
        throw new Error('GitHub configuration is missing. Please check your .env file.');
    }

    const octokit = new Octokit({
        auth: config.githubToken,
    });

    const [owner, repo] = config.githubRepo.split('/');
    const filename = path.basename(logFilePath);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

    await octokit.issues.create({
        owner,
        repo,
        title: `Log Submission: ${filename} (${timestamp})`,
        body: `### Automatic Log Submission\n\nLog file: ${filename}\nSubmitted: ${new Date().toLocaleString()}\n\n\`\`\`\n${logContent}\n\`\`\``,
    });
}