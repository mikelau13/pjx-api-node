pipeline {
  agent any
  stages {
    stage('Build and Deploy') {
      steps {
        echo 'Let\'s Start \\( ^ ^ )/'
        sh 'docker-compose build'
      }
    }

    stage('Check server') {
      steps {
        sh 'docker-compose start pjx-api-node -d '
        sleep 10
        sh 'curl http://localhost:8081/api/1/cities'
      }
    }

    stage('Cleanup') {
      steps {
        sh 'docker-compose down'
        sh 'docker system prune -a'
        cleanWs(cleanWhenSuccess: true)
      }
    }

  }
}