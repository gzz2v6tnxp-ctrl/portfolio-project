# Deployment Instructions

This project is a Next.js application configured for deployment on Vercel.

## Prerequisites
- A GitHub account
- A Vercel account (can login with GitHub)

## Deployment Steps

1. **Push to GitHub**
   Your changes are committed locally. Push them to your GitHub repository:
   ```bash
   git push origin main
   ```
   (If you haven't set up the remote origin yet, do so: `git remote add origin https://github.com/YOUR_USERNAME/portfolio-project.git`)

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository (`portfolio-project`).
   - Vercel will auto-detect the framework (Next.js).
   - Click **Deploy**.

3. **CI/CD Pipeline**
   - A GitHub Action is configured in `.github/workflows/ci.yml`.
   - Every time you push to `main` or open a Pull Request, it will run `npm run lint` and `npm run build` to verify your code is correct.
   - Vercel automatically triggers a deployment for every push to `main`.

## Customization
- Update `components/Hero.tsx` with your personal bio.
- Update `components/Skills.tsx` with your specific tools.
- Update `components/Projects.tsx` with your real projects and images.
- Update `components/Experience.tsx` with your work history.
