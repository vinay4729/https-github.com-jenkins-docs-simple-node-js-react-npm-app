
# 🚀 DoorFeed CI/CD Pipeline with Security & Monitoring

## Overview
A secure CI/CD pipeline for deploying a full-stack Node.js + React app using GitHub Actions, Docker, ECR, and ECS Fargate. Includes Trivy for image scanning, SonarQube for code analysis, and Prometheus + Grafana for monitoring.

## Key Tools
- GitHub Actions
- Docker
- Amazon ECR/ECS
- Trivy
- SonarQube
- Prometheus + Grafana

## CI/CD Flow
1. Code pushed to GitHub
2. GitHub Actions:
   - Lint, test, scan with SonarQube
   - Build and scan Docker image with Trivy
   - Push to Amazon ECR
   - Trigger ECS deployment

## Monitoring
- `/metrics` endpoint exposed by `prom-client`
- Prometheus scrapes the metrics
- Grafana visualizes the metrics

## Secrets Required
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`, `ECR_REPO_URL`
- `SONAR_TOKEN`
