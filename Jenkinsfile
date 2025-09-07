pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/ShenLongVansh/portfolio.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t portfolio-app .'
      }
    }

    stage('Run Container') {
      steps {
        sh '''
          docker stop portfolio-app || true
          docker rm portfolio-app || true
          docker run -d -p 3000:3000 --name portfolio-app portfolio-app
        '''
      }
    }
  }
}
