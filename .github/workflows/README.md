# 🚀 GitHub Actions Workflows

This directory contains GitHub Actions workflows for the UmuhinziLink project to ensure code quality, security, and deployment readiness.

## 📋 Available Workflows

### 1. 🚀 CI/CD Pipeline (`ci.yml`)

**Triggers:** Push/PR to `web_fro` branch, manual dispatch

**What it does:**

- ✅ **Code Quality Checks** - TypeScript, ESLint, Prettier
- 🏗️ **Build & Test** - Next.js build verification, test execution
- 🔒 **Security Audit** - Dependency vulnerability scanning
- 🚀 **Deployment Readiness** - Final validation for production

**Jobs:**

1. `code-quality` - Linting and type checking
2. `build-and-test` - Application build and testing
3. `security-audit` - Security vulnerability scanning
4. `deployment-check` - Final deployment validation

### 2. 🧹 Code Quality (`code-quality.yml`)

**Triggers:** Push/PR to `web_fro` or `main` branches

**What it does:**

- 🎯 TypeScript compilation check
- 🧹 ESLint analysis
- 💅 Prettier formatting validation

### 3. 🔒 Security Audit (`security.yml`)

**Triggers:** Push/PR to `web_fro`, daily at 2 AM UTC, manual dispatch

**What it does:**

- 🔒 NPM security audit (critical/high/moderate vulnerabilities)
- 📋 Dependency analysis and outdated package detection
- 🔍 Dependency review for PRs
- 📊 Security reporting and alerts

## 🎯 Benefits

### For Developers:

- **Early Error Detection** - Catch TypeScript/ESLint errors before merge
- **Consistent Code Quality** - Automated formatting and linting checks
- **Security Awareness** - Immediate alerts for vulnerable dependencies
- **Fast Feedback** - Quick validation of changes

### For the Project:

- **Production Safety** - Ensures only quality code reaches production
- **Security Compliance** - Regular vulnerability scanning
- **Build Reliability** - Verified deployable builds
- **Documentation** - Clear status reporting

## 📊 Workflow Status Badges

Add these badges to your main README.md:

```markdown
![CI/CD Pipeline](https://github.com/EchoSols/UmuhinziLink_Fro/workflows/🚀%20CI/CD%20Pipeline/badge.svg?branch=web_fro)
![Code Quality](https://github.com/EchoSols/UmuhinziLink_Fro/workflows/🧹%20Code%20Quality/badge.svg?branch=web_fro)
![Security Audit](https://github.com/EchoSols/UmuhinziLink_Fro/workflows/🔒%20Security%20Audit/badge.svg?branch=web_fro)
```

## 🔧 Configuration

### Branch Protection Rules (Recommended)

To enforce quality gates, configure branch protection for `web_fro`:

1. Go to **Settings** → **Branches**
2. Add rule for `web_fro`
3. Enable:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Required status checks:
     - `code-quality`
     - `build-and-test`
     - `security-audit`

### Environment Variables

No additional environment variables required. All workflows use:

- Node.js 18
- NPM for package management
- Standard Next.js build process

## 🚨 Handling Failures

### Code Quality Failures:

- **TypeScript errors** - Fix compilation issues
- **ESLint errors** - Address linting violations
- **Prettier issues** - Run `npx prettier --write .`

### Build Failures:

- Check build logs in GitHub Actions
- Verify all dependencies are properly installed
- Ensure environment variables are set correctly

### Security Issues:

- **Critical/High vulnerabilities** - Update affected packages immediately
- **Moderate vulnerabilities** - Plan updates in next sprint
- **Outdated dependencies** - Regular maintenance updates

## 🔄 Manual Triggers

All workflows support manual triggering:

1. Go to **Actions** tab in GitHub
2. Select the workflow
3. Click **Run workflow**
4. Choose branch and run

## 📈 Monitoring

### Workflow Runs:

- Monitor in GitHub **Actions** tab
- Check status badges in README
- Review security audit reports

### Notifications:

- GitHub will notify on workflow failures
- Security alerts appear in **Security** tab
- PR checks show inline status

## 🛠️ Maintenance

### Regular Tasks:

- Review security audit results weekly
- Update outdated dependencies monthly
- Monitor workflow performance and adjust as needed

### Troubleshooting:

- Check workflow logs for detailed error messages
- Verify Node.js and NPM versions
- Ensure all required files are committed

---

**Need Help?** Check the workflow logs in GitHub Actions or contact the development team.
