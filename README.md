
https://github.com/codesign-cloud/cdc-homepage/

`CDC-Homepage` is a base for creating modern product landing pages. Built with Next.js and Tailwind CSS, it offers a modern foundation for quickly launching homepages for your products.

#### Clone from base repo

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
git remote add base https://github.com/your-username/base-homepage.git
``````

#### Pull updates from base repo
`````
# Fetch updates from the base repo
git fetch base
`````

`````
# Merge the updates
git merge base/main
`````


------------------------------------ 


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev || yarn dev || pnpm dev || bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!