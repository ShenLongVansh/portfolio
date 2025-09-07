This repository contains the source code for my personal portfolio website, but it also serves a second, more important purpose: **it is the core application for my hands-on CI/CD automation project.**

### **Live Demo URL [here](https://portfolio-five-lemon-yoqaqn1pf0.vercel.app/)**

---

## The DevOps Project: An Automated CI/CD Pipeline

This portfolio isn't just a static site; it's the live payload for a complete, zero-touch CI/CD pipeline that I architected and implemented.

When a recruiter clicks the link, they are viewing the final product of this automated workflow:

### The Pipeline Workflow

1.  **Code Commit:** Any `git push` to the `main` branch of this repository automatically triggers the entire pipeline.
2.  **GitHub Webhook:** A webhook notifies my self-hosted **Jenkins** server that new code is available.
3.  **Pipeline-as-Code:** **Jenkins** reads the `Jenkinsfile` in this repo and begins the pipeline.
4.  **Multi-Stage Docker Build:** Jenkins executes the multi-stage `Dockerfile`:
    * **Stage 1 (Build):** A `node.js` image is used to install all dependencies (`npm install`) and create an optimized, static production build of the Next.js application.
    * **Stage 2 (Serve):** The static files from Stage 1 are copied into a lightweight, secure **Nginx** server image, dramatically reducing the final image size and attack surface.
5.  **Deployment:** Jenkins runs a shell script that stops the old, running Docker container and starts a new container from the freshly built image, deploying the update to the live server.

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
