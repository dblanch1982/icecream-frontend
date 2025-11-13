pipeline {
    agent any

    environment {
        SCANNER_HOME = tool 'sonar-scanner'
        SONAR_TOKEN = credentials('sonar-token')
    }

    stages {

        stage('Code-Analysis') {
            steps {
                withSonarQubeEnv('SonarCloud') {
                    sh '''$SCANNER_HOME/bin/sonar-scanner \
  -Dsonar.organization=dblanch1982 \
  -Dsonar.projectKey=dblanch1982_icecream-frontend '''
                }
            }
        }

        stage('Docker Build And Push') {
            steps {
                script {
                    docker.withRegistry('', 'docker-cred') {
                        def buildNumber = env.BUILD_NUMBER ?: '1'
                        def image = docker.build("dainablanch/icecream-frontend:latest")
                        image.push()
                    }
                }
            }
        }


        stage('Build') {
            steps {
                sh 'ls'
                sh 'npm install'
                sh 'echo N | ng analytics off'
                sh 'ng build'
                sh 'ls'
                sh 'cd dist && ls'
                sh 'cd dist/icecream-frontend/browser && ls'
            }
        }
        stage('S3 Upload') {
            steps {
                withAWS(region: 'eu-central-1', credentials: '4099102c-adbd-47ef-bfc4-b653465e9e95') {
                    sh 'ls -la'
                    sh 'aws s3 cp dist/icecream-frontend/browser/. s3://sk-jenkins-angular-icecream-app/ --recursive'
                }
            }
        }
    }
}