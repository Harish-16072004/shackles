# 🚀 AWS Amplify Deployment Guide for shackles.online

## Deployment Status
✅ **READY FOR DEPLOYMENT**
- Frontend-only deployment branch: `frontend_deploy`
- Repository: `Harish-16072004/shackles`
- Domain: `shackles.online`
- Build system: Vite + React

## 📋 Pre-Deployment Checklist
✅ Clean deployment branch created (`frontend_deploy`)
✅ Backend files removed for clean deployment
✅ AWS Amplify configuration file (`amplify.yml`) created
✅ Production environment variables configured
✅ `.gitignore` file configured for security
✅ Branch pushed to GitHub repository

## 🌐 AWS Amplify Deployment Steps

### Step 1: Access AWS Amplify Console
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Sign in to your AWS account
3. Click **"New app"** → **"Host web app"**

### Step 2: Connect Repository
1. Select **GitHub** as your Git provider
2. Authorize AWS Amplify to access your GitHub account
3. Select repository: **`Harish-16072004/shackles`**
4. Select branch: **`frontend_deploy`** ⚠️ IMPORTANT: Use frontend_deploy, not master!

### Step 3: Configure Build Settings
Amplify will automatically detect the `amplify.yml` file. Verify these settings:

```yaml
Build Command: npm run build
Base Directory: shackles-symposium/frontend
Artifact Directory: shackles-symposium/frontend/dist
Cache Directory: shackles-symposium/frontend/node_modules
```

### Step 4: Advanced Settings (Optional)
- Environment Variables: Pre-configured in `.env.production`
- Build timeout: 10 minutes (sufficient for Vite builds)
- Enable auto-deployment on `frontend_deploy` branch updates

### Step 5: Domain Configuration
1. After successful deployment, go to **"Domain management"**
2. Click **"Add domain"**
3. Enter: **`shackles.online`**
4. Configure subdomains:
   - `shackles.online` → Main site
   - `www.shackles.online` → Redirect to main site

### Step 6: SSL & Security
- ✅ SSL certificate: Auto-provisioned by AWS
- ✅ HTTPS redirect: Enabled by default
- ✅ Security headers: Configured in build

## 🔧 Build Configuration Details

### Base Directory
```
shackles-symposium/frontend
```

### Build Commands (Automated via amplify.yml)
```bash
npm install
npm run build
```

### Output Directory
```
shackles-symposium/frontend/dist
```

## 🌍 Expected URLs After Deployment
- **Primary**: https://shackles.online
- **WWW**: https://www.shackles.online (redirects to primary)
- **Amplify URL**: https://[app-id].amplifyapp.com (backup)

## 📁 Repository Structure (Deployment Branch)
```
shackles/
├── README.md                          # This deployment guide
├── amplify.yml                        # AWS build configuration
└── shackles-symposium/
    └── frontend/                      # React application
        ├── .env.production           # Production environment vars
        ├── .gitignore               # Git exclusions
        ├── package.json             # Dependencies
        ├── vite.config.js          # Build configuration
        ├── index.html              # Entry point
        └── src/                    # React source code
```

## ⚡ Performance Optimizations
- **Vite Build**: Optimized production builds
- **Code Splitting**: Automatic chunk splitting
- **Asset Optimization**: Images and fonts optimized
- **CDN**: AWS CloudFront integration
- **Gzip Compression**: Enabled by default

## 🔍 Troubleshooting

### Common Issues and Solutions

**Build Failure:**
- Check that `frontend_deploy` branch is selected
- Verify `shackles-symposium/frontend` as base directory
- Ensure all dependencies are in `package.json`

**Domain Not Working:**
- DNS propagation can take 24-48 hours
- Verify domain ownership in Route 53
- Check SSL certificate status

**404 Errors:**
- Ensure SPA routing is configured
- Check that `index.html` is in the dist folder
- Verify Vite build output

### Build Commands Reference
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📞 Next Steps After Deployment
1. **Test the live site**: Verify all pages and features work
2. **Mobile testing**: Check responsive design on various devices
3. **Performance audit**: Use Google PageSpeed Insights
4. **Analytics setup**: Configure Google Analytics (optional)
5. **Backend integration**: When ready, integrate with backend API

## 🔗 Important Links
- **AWS Amplify Console**: https://console.aws.amazon.com/amplify/
- **GitHub Repository**: https://github.com/Harish-16072004/shackles
- **Deployment Branch**: https://github.com/Harish-16072004/shackles/tree/frontend_deploy
- **Domain Management**: AWS Route 53 Console

---

**Deployment prepared by:** GitHub Copilot Assistant  
**Date:** October 3, 2025  
**Repository:** Harish-16072004/shackles  
**Branch:** frontend_deploy  
**Domain:** shackles.online

🎉 **Ready to deploy! Follow the AWS Amplify steps above to go live.**