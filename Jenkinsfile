pipeline {
  agent any
  environment {
    IMAGE = "portfolio-app"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          def tag = "${env.BUILD_NUMBER}"
          sh "docker build -t ${IMAGE}:${tag} ."
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          def tag = "${env.BUILD_NUMBER}"
          // stop old container
          sh 'docker ps -q -f name=portfolio | xargs -r docker stop || true'
          sh 'docker ps -aq -f name=portfolio | xargs -r docker rm || true'
          // run new one
          sh "docker run -d --name portfolio -p 3000:3000 ${IMAGE}:${tag}"
        }
      }
    }
  }
  post {
    success {
      echo "✅ Deployment successful! Visit http://<server-ip>:3000"
    }
    failure {
      echo "❌ Build failed. Check Jenkins logs."
    }
  }
}
