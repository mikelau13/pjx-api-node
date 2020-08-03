pipeline {
  agent any
  stages {
    stage('Build and Deploy') {
      steps {
        echo 'Let\'s Start \\( ^ ^ )/'
        sh 'docker-compose up --build &'
        cleanWs(cleanWhenSuccess: true)
      }
    }

    stage('Check server') {
      steps {
        sh 'curl http://localhost:8081/api/1/cities'
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