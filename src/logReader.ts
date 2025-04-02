import fs from 'fs';
import path from 'path';

interface LogFile {
    file: string;
    path: string;
    mtime: Date;
}

export const getLatestLog = async (): Promise<{ content: string; filePath: string } | null> => {
    const logsDir = path.join(__dirname, '../logs');
    
    try {
        const files = await fs.promises.readdir(logsDir);
        
        const logFiles = files.filter(file => file.endsWith('.log'));
        
        if (logFiles.length === 0) {
            return null;
        }

        // Find the latest log file by modification time
        let latestLogFile: LogFile = { file: '', path: '', mtime: new Date(0) };
        
        for (const file of logFiles) {
            const filePath = path.join(logsDir, file);
            const stats = await fs.promises.stat(filePath);
            
            if (stats.mtime > latestLogFile.mtime) {
                latestLogFile = { 
                    file, 
                    path: filePath, 
                    mtime: stats.mtime 
                };
            }
        }

        const logContent = await fs.promises.readFile(latestLogFile.path, 'utf-8');
        
        return {
            content: logContent,
            filePath: latestLogFile.path
        };
    } catch (error) {
        console.error('Error reading log files:', error);
        throw error;
    }
};