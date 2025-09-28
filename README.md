**Note:- Working on DataDog and Bugsnag integration. Will update the readme.md accordingly.** 

This repository contains the source code for my personal portfolio website — but more importantly, it also serves as the **live application for my hands-on CI/CD automation project.**

### **Live Demo URL [here](https://portfolio-five-lemon-yoqaqn1pf0.vercel.app/)**

---

## The DevOps Project: Automated CI/CD Pipeline

This portfolio isn’t just a static site; it’s continuously deployed through a zero-touch CI/CD pipeline I designed and implemented using GitHub Actions, Docker, and a DigitalOcean Droplet.

Whenever I update the code and push changes, the pipeline automatically builds, ships, and deploys the latest version to production.

### The Pipeline Workflow

1.  **Code Commit :** Any `git push` to the `main` branch of this repository automatically triggers the entire pipeline.
2.  **Docker Build & Push :**
    * GitHub Actions builds a fresh Docker image using the repo’s `Dockerfile`.
    * The image is tagged and pushed to **Docker Hub.**
3.  **Docker Build & Push :**
    * Using `appleboy/ssh-action`, GitHub Actions securely connects to my DigitalOcean Droplet.
    * The old container is stopped and removed.
    * A new container is started from the freshly built image.
4. **Live Update :** Within ~2–3 minutes, the portfolio is updated on the production server without manual intervention.



---

## How to Run This Portfolio Locally

```bash
# 1. Clone the repository
git clone https://github.com/ShenLongVansh/portfolio
cd portfolio

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

---

## Let's Connect

* **[LinkedIn](https://www.linkedin.com/in/vansh-sharma-4a6882245/)** 
* **[Email](mailto:shenlong.codes@gmail.com)**
