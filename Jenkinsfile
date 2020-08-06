pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }

      }
    }

    stage('Check server') {
      steps {
        sh 'docker-compose up --no-build -d '
        sleep 10
        sh 'curl http://localhost:8081/api/1/cities'
      }
    }

    stage('Cleanup') {
      steps {
        sh 'docker-compose down'
        sh 'docker system prune --all --force'
      }
    }

  }
  environment {
    registry = 'candkyng/pjx'
    registryCredential = 'dockerhub'
  }
}