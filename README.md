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
# Verify remotes
git remote -v
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
