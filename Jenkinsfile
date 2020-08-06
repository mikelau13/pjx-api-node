pipeline {
  agent any
  stages {
    stage('Docker Build') {
      steps {
        echo "${registry}"
        echo "${registryCredential}"
        sh "docker build -t ${BRANCH_NAME}_pjx-api-node:latest ."
      }
    }

    stage('Docker Run and Test') {
      steps {
        sh "docker-compose -p ${BRANCH_NAME} up --no-build -d"
        sleep 10
        sh 'curl http://localhost:8081/healthcheck'
        sh 'curl http://localhost:8081/api/1/cities'
        sh 'curl http://localhost:8081/api/1/city/1'
      }
    }

    stage('Docker Push') {
      steps {
        sh "docker tag ${BRANCH_NAME}_pjx-api-node:latest candkyng/pjx:${BUILD_TAG}"
        withCredentials(bindings: [usernamePassword(credentialsId: 'dockerhub',passwordVariable:'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
          sh "docker login -u ${env.dockerHubUser} -p $env.dockerHubPassword}"
          sh "docker push candkyng/pjx:${BUILD_TAG}"
        }

      }
    }

    stage('Cleanup') {
      steps {
        sh "docker-compose -p ${BRANCH_NAME} down"
        sh 'docker system prune --all --force'
      }
    }

  }
  environment {
    registry = 'candkyng/pjx'
    registryCredential = 'dockerhub'
  }
}