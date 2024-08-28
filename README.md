
`CDC-Homepage` is a base for creating modern product landing pages. Built with Next.js and Tailwind CSS, it offers a modern foundation for quickly launching homepages for your products.

https://github.com/codesign-cloud/cdc-homepage/

### Clone from base repo

``````
# Clone the base repo for a new homepage
git clone https://github.com/codesign-cloud/cdc-homepage.git projectX
cd projectX
``````

``````
# Change the origin to the new project's repo
git remote set-url origin https://github.com/userX/projectX.git
``````

``````
# Add this base repo as a secondary remote named 'base'
git remote add base https://github.com/codesign-cloud/cdc-homepage
``````

### Pull updates from base repo
`````
# Fetch updates from the base repo
git fetch base
`````

`````
# Merge the updates
git merge base/main

# If you encounter a "fatal: refusing to merge unrelated histories" error, 
# you may merge with the --allow-unrelated-histories flag 
# [[IMP]] Do this at your own risk; this will cause merge conflicts
git merge base/main --allow-unrelated-histories
# To accept incoming changes from base:
git merge -X theirs base/main --allow-unrelated-histories

`````

------------------------------------

## Prerequisites
- Make sure GitHub Pages is enabled for your repository (GitHub > Settings > Pages > Build and deployment > Source > GitHub Actions)

## Setting paths for deploying on GH Pages
If you're using `img` tag for images with say, `/assets/` from your public dir. 

Repo > Settings > Secrets and variables > Actions > Repository secrets > New repository secret
Add a new secret named `BASE_PATH` with the value `https://username.github.io/your-repo-name`

This can be used in your code like so:
```html
import { basePath } from '@/app/basePath';
...
..
    <img src={`${basePath}/assets/logo.svg`} alt="Logo" />
```

------------------------------------ 

### Getting Started

First, run the development server:

```bash
npm run dev || yarn dev || pnpm dev || bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
