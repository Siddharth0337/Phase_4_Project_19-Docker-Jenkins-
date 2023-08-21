pipeline {
    agent any
    tools {
        // Specify the name of the Git installation configured in Jenkins
        git 'MyGitInstallation'
   
        // Specify the name of the Node.js installation
        nodejs 'NodeJS 14.20.1'
    }

    stages {
        stage('Source') {
            steps {
                // Get the source code from the git repo
                checkout scm
                // Run npm install for the node modules
                sh "npm install"
                sh "npm audit fix --force"
                echo 'Source Stage Finished'
            }
        }

        stage('Build') {
            steps {
                // Run build to create the dist directory
                sh "npm install -g @angular/cli@13.0.4"
                sh "ng build"
                echo 'Build Stage Finished'
            }
        }
    }
}
