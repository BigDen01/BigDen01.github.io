# Mechanical engineering portfolio

## Publish on GitHub Pages

1. Create a repository for the portfolio. Upload the contents of this folder so that `index.html`, `assets/`, and `.nojekyll` sit at the repository root. Keep the folder structure inside `assets/`.
2. In the repository, open **Settings → Pages**. Under **Source**, choose **Deploy from a branch**. Select **main** and **/(root)**, then click **Save**.
3. Open the site URL shown under **Settings → Pages** after deployment. [GitHub Pages setup instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch)

`.nojekyll` tells GitHub Pages to serve the static files directly. If your upload skips the dotfile, add a file named `.nojekyll` at the repository root.

## Update the published site

- Open `index.html` locally to preview edits. Change your bio, profile links, résumé, background, headshot, and project entries in `content.js`. Change the accent color in `styles.css`.
- Put new photos, videos, and PDFs in `assets/`. In `content.js`, use paths like `assets/rocket.jpg` with forward slashes and the same capitalization as the filenames. Add an optional `caption` to a project image to show text below it in the gallery.
- Upload or push the edited files and any new assets to the publishing branch. GitHub Pages deploys updates from that branch.
