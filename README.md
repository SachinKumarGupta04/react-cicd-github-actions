# React CI/CD GitHub Actions

CI/CD pipeline setup using GitHub Actions for a React application with automated testing, building, and deployment.

## Overview

This repository demonstrates a complete CI/CD pipeline using GitHub Actions for a React application created with Create React App. The pipeline automatically runs tests, builds the application, and optionally deploys it whenever code is pushed to the main branch.

## Features

- **Automated Testing**: Runs tests on every push to ensure code quality
- **Automated Building**: Builds the React application automatically
- **Continuous Integration**: GitHub Actions workflow triggered on every push to main
- **Deployment Ready**: Optional deployment step to GitHub Pages, Netlify, or AWS S3

## Project Structure

```
react-cicd-github-actions/
├── .github/
│   └── workflows/
│       └── main.yml          # GitHub Actions workflow configuration
├── public/                    # Public assets
├── src/                       # React source code
│   ├── App.js                # Main App component
│   ├── App.test.js           # App tests
│   └── index.js              # Entry point
├── package.json              # Dependencies and scripts
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## GitHub Actions Workflow

The CI/CD pipeline is defined in `.github/workflows/main.yml` and includes the following steps:

### Workflow Configuration

1. **Trigger**: Runs on every push to the `main` branch
2. **Environment Setup**: Sets up Node.js environment
3. **Dependencies**: Installs npm packages
4. **Testing**: Runs test suite with `npm test`
5. **Building**: Creates production build with `npm run build`
6. **Deployment** (Optional): Deploys to hosting platform

### Workflow File Structure

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test -- --coverage --watchAll=false
    - name: Build application
      run: npm run build
    - name: Deploy (Optional)
      # Add deployment steps here
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/SachinKumarGupta04/react-cicd-github-actions.git
cd react-cicd-github-actions
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

4. Run tests:
```bash
npm test
```

5. Build for production:
```bash
npm run build
```

## Deployment Options

The workflow can be extended to deploy to various platforms:

### GitHub Pages

Add the following step to the workflow:

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./build
```

### Netlify

Add the following step to the workflow:

```yaml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2.0
  with:
    publish-dir: './build'
    production-branch: main
    github-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-message: "Deploy from GitHub Actions"
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### AWS S3

Add the following step to the workflow:

```yaml
- name: Deploy to S3
  uses: jakejarvis/s3-sync-action@master
  with:
    args: --delete
  env:
    AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    SOURCE_DIR: 'build'
```

## Viewing Workflow Status

1. Navigate to the **Actions** tab in the repository
2. View all workflow runs and their status
3. Click on a specific run to see detailed logs
4. Each step shows its execution time and output

## Understanding the Pipeline

### Continuous Integration (CI)

Every time you push code to the main branch:
- GitHub Actions automatically triggers the workflow
- Code is checked out in a fresh Ubuntu environment
- Dependencies are installed
- Tests are executed to ensure code quality
- Application is built to verify successful compilation

### Continuous Deployment (CD)

If deployment is configured:
- After successful build and tests
- Artifacts are deployed to the specified platform
- Application becomes available at the deployment URL

## Benefits

- **Automated Quality Checks**: Catch bugs before they reach production
- **Consistent Builds**: Same build process every time
- **Fast Feedback**: Know immediately if changes break anything
- **Deployment Automation**: Reduce manual deployment errors
- **Team Collaboration**: Everyone sees the same test results

## Troubleshooting

### Tests Failing in CI but Pass Locally

- Ensure you're using the same Node.js version
- Check for environment-specific dependencies
- Verify test timeouts are sufficient

### Build Failures

- Check the Actions tab for detailed error logs
- Ensure all dependencies are listed in package.json
- Verify Node.js version compatibility

### Deployment Issues

- Verify secrets are properly configured in repository settings
- Check deployment platform credentials
- Review deployment action logs for specific errors

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Create React App Documentation](https://create-react-app.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)

## Author

SachinKumarGupta04
