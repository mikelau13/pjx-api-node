pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo "${BRANCH_NAME}"
        echo "${JOB_NAME}"
        sh "docker build -t xxx_pjx-api-node:latest ."
      }
    }

    stage('Check server') {
      steps {
        sh 'docker-compose up --no-build -d -p xxx'
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