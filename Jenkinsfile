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
                // Use the project-local Angular CLI executable
                def angularCliPath = "${env.WORKSPACE}/node_modules/.bin/ng"
                
                // Display npm and Node.js versions for debugging
                sh "npm --version"
                sh "node --version"
                
                // Display ng version for debugging
                sh "${angularCliPath} version"
                
                // Install the required version of Angular CLI
                sh "npm install -g @angular/cli@13.0.4"
                
                // Display npm list and outdated packages for debugging
                sh "npm list"
                sh "npm outdated"
                
                // Build using the project-local Angular CLI
                sh "${angularCliPath} build"
                
                echo 'Build Stage Finished'
            }
        }
    }
}
