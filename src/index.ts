import config from './config';
import { getLatestLog } from './logReader';
import { createIssue } from './github';

async function main() {
    try {
        console.log('Looking for the latest log file...');
        const logData = await getLatestLog();
        
        if (logData) {
            console.log(`Found log file: ${logData.filePath}`);
            console.log('Creating GitHub issue...');
            await createIssue(logData.content, logData.filePath);
            console.log('✅ Issue created successfully with the latest log content.');
        } else {
            console.log('❌ No log files found in the logs directory.');
            console.log('Please make sure log files with .log extension exist in the logs folder.');
        }
    } catch (error) {
        console.error('❌ Error occurred:', error);
        process.exit(1);
    }
}

main();