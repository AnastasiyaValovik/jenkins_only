pipeline {
  agent any
  
  stages {
    
      stage('Init') {
        steps{
          sh 'npm install'
        }
      }
      stage('Build') {
        steps {
          sh 'npm cypress run'
        }
      }
  }
}

