<p align="center">
  <img src="https://i.imgur.com/9oR2sMc.png" alt="Project Banner">
</p>

<p align="center">
  <a href="https://discord.gg/hdDj4aZTVf">
    <img src="https://img.shields.io/badge/Chat-Join%20us%20on%20Discord-7289da?logo=discord&logoColor=white" alt="Join us on Discord">
  </a>
  <img src="https://img.shields.io/github/downloads/amcgready/timber/total" alt="GitHub all releases">
</p>
# 📋 Log Submission Tool

A lightweight utility that automatically submits the most recent log file from your project as a GitHub issue. Perfect for capturing and tracking application errors with minimal effort.

## 🌟 Features

- Automatically finds the most recent log file in the `logs` directory
- Creates a GitHub issue with the log content
- Configurable through environment variables
- Simple command-line interface

## 📁 Project Structure

```
log-submission-tool
├── src
│   ├── index.ts          # Entry point of the application
│   ├── github.ts         # Function to create GitHub issues
│   ├── logReader.ts      # Function to read the latest log file
│   └── config.ts         # Configuration settings and environment variables
├── logs                  # Directory for log files
│   └── .gitkeep          # Keeps the logs directory in version control
├── .env.template         # Template for environment variables
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone http://github.com/amcgready/timber.git
   cd log-submission-tool
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.template` to `.env` and update the values with your GitHub repository information:
   ```bash
   cp .env.template .env
   ```
   - Edit the `.env` file with your GitHub token and repository name:
   ```
   GITHUB_TOKEN=your_github_token
   GITHUB_REPO=your_username/your_repository
   ```

4. **Build the project:**
   ```bash
   npm run build
   ```

## 📝 Usage

To submit the most recent log file as a GitHub issue:

```bash
npm run submit-log
```

For a one-off submission, you can also run:

```bash
npx ts-node src/index.ts
```

### Adding Log Files

Place your log files in the `logs` directory with a `.log` extension. The tool will automatically find the most recent file by modification date.

## 📋 Example Issue

The created GitHub issue will include:

- A title with the log file name and timestamp
- The complete log content in a code block
- Submission timestamp details

## 🔧 Troubleshooting

- **No log files found**: Ensure `.log` files exist in the `logs` directory
- **Authentication errors**: Verify your GitHub token has the proper permissions
- **Repository not found**: Check that the repository name is correct in the `.env` file

## 📄 License

MIT

## 💡 Contributing

Feel free to submit issues or pull requests to improve the tool.
