pipeline {
  agent any
  
  stages {
    
      stage('Run tests in Docker') {
        steps{
          sh 'docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.4.1'
        }
      }
  
  }
}

