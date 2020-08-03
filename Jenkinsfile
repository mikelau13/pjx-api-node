pipeline {
  agent any
  stages {
    stage('Build and Deploy') {
      steps {
        echo 'Let\'s Start \\( ^ ^ )/'
        pwd()
        sh 'docker-compose up --build'
        cleanWs(cleanWhenSuccess: true)
      }
    }

    stage('Check server') {
      steps {
        sh 'curl -Is http://localhost:8081/api/1/cities | head -1'
      }
    }

    stage('Cleanup') {
      steps {
        sh 'docker-compose down'
        sh 'docker system prune -a'
      }
    }

  }
}