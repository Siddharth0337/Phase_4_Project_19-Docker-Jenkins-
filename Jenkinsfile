pipeline{
    agent any
    stages{
        stage('Source'){
            steps{
                //get the source code from git repo
                git 'https://github.com/Siddharth0337/Estore_Angular.git'
                //run npm install the node modules
                sh "npm install"
                sh "npm audit fix --force"
                echo 'Source Stage Finished'
            }
        }

        stage('Build'){
            steps{
                //run build to create dist directory
                sh "npm run build"
                
                echo 'Build Stage Finished'

            }
        }



    }
}