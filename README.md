# Full-Stack DevOps Project: An Observable & Automated CI/CD Pipeline

This repository contains the source code for my personal portfolio, but its primary purpose is to serve as a live, production-grade demonstration of a complete DevOps lifecycle.

**Live Portfolio URL:** [Click](https://portfolio-five-lemon-yoqaqn1pf0.vercel.app/)  
(Not working) **Live Grafana Dashboard:** [Click](#) (Currently working on a way to let others have secure access without any malicious risk.)

---

## Project Overview

This project goes beyond a simple CI/CD pipeline. It's a fully containerized, multi-service application stack deployed on a DigitalOcean Droplet, featuring a complete observability suite with **Prometheus and Grafana**. The entire system—from code commit to live deployment and monitoring—is automated.

The goal was to build a system that mirrors a modern, cloud-native production environment, demonstrating skills in automation, containerization, security, and monitoring.

### Architecture Diagram

<pre>
+----------+      +----------------+      +----------------------------+            +-----------------+
| Git Push |----->| GitHub Actions |----->| Build & Push to Docker Hub |   ----->   |  SSH to Droplet |
+----------+      +----------------+      +----------------------------+            +-----------------+
                                                                                           |
                                                                                           v
                                                                                 +--------------------+
                                                                                 | Docker Compose Up  |
                                                                                 +--------------------+
                                                                                           |
                                                             +-----------------------------+------------------------------+
                                                             |                             |                              |
                                                             v                             v                              v
                                                 +-----------------+               +----------------------+        +-------------+
                                                 |   Nginx Proxy   |   ------>     |      Grafana         |        | Next.js App |
                                                 | (Password Auth) |               |      (:3001)         |        |    (:80)    |
                                                 +-----------------+               +----------------------+        +-------------+
                                                                                           ^                              |
                                                                                           |                              v
                                                                                 +----------------------+         +----------------------+
                                                                                 | Collects Metrics From| ----->  |   Prometheus (:9090) |
                                                                                 +----------------------+         +----------------------+
</pre>

## Key Features & Technologies

- **Automated CI/CD Pipeline:** Every `git push` to the `main` branch automatically builds, tests, and deploys the entire stack using **GitHub Actions**.
- **Containerization & Orchestration:** The application and all its services (Nginx, Prometheus, Grafana) are fully containerized. **Docker Compose** is used on the server to manage the multi-container environment.
- **Optimized Docker Image:** Implemented a **multi-stage Dockerfile**, which reduced the final production image size from **1.88GB to ~850MB**, leading to faster deployments and a smaller security footprint.
- **Infrastructure Monitoring (Observability):**
  - **Prometheus** is configured to actively scrape a custom `/api/metrics` endpoint from the live Next.js application.
  - **Grafana** provides a dashboard for visualizing key application and system metrics in real-time.
- **Secure Access:** The Grafana dashboard is not exposed to the public. An **Nginx reverse proxy** is configured to require password authentication (`.htpasswd`) for access, with the password securely managed via **GitHub Secrets**.
- **Automated Server Maintenance:** The deployment script automatically prunes old Docker images (`docker image prune -f`) after each run to prevent disk space exhaustion.

---

## The Deployment Workflow

The pipeline is defined in `.github/workflows/deploy.yml` and follows these steps:

1.  **Trigger:** A `git push` to the `main` branch kicks off the workflow.
2.  **Build:** GitHub Actions builds a new, optimized Docker image using a multi-stage `Dockerfile`.
3.  **Publish:** The new image is tagged and pushed to Docker Hub.
4.  **Deploy:**
    - The workflow securely SSHs into the DigitalOcean Droplet.
    - It runs `git pull` to fetch the latest `docker-compose.yml`.
    - It securely creates the `.htpasswd` file for Nginx using a **Base64-encoded GitHub Secret** to handle special characters safely.
    - `docker-compose down` and `docker-compose up -d` are run to gracefully restart the stack with the new application image.
    - `docker image prune -f` cleans up the old, dangling image.
5.  **Live:** Within minutes, the new version of the application is live, and the monitoring stack is scraping its metrics.

---

## Future Improvements

This project is a strong foundation, but the next steps to make it even more robust would be:

- **Infrastructure as Code (IaC):** Use **Terraform** to codify and automate the provisioning of the DigitalOcean Droplet and its firewall rules.
- **Log Aggregation:** Add **Loki** to the stack to aggregate logs from all containers, making them searchable and visualizable in Grafana.
- **Migrate to Kubernetes:** As a final step, migrate this entire Docker Compose stack to a managed **Kubernetes** cluster (like DOKS or AWS EKS) to learn container orchestration at scale.

---
## Let's Connect

* **[LinkedIn](https://www.linkedin.com/in/vansh-sharma-4a6882245/)**
* **[Email](mailto:shenlong.codes@gmail.com)** 