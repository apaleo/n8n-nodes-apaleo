pipeline {
    agent { label 'nodejs' }
    options {
        buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '5', numToKeepStr: '10'))
    }
    stages {
        stage('Checkout') {
            steps {
                notifyBuild('STARTED')
                checkout scm
            }
        }
        stage('Install') {
            steps {
                withCredentials([[
                    $class: 'UsernamePasswordMultiBinding',
                    credentialsId: 'apabot-github',
                    usernameVariable: 'GIT_USERNAME',
                    passwordVariable: 'GITHUB_TOKEN'
                ]]) {
                    sh '''
                        echo "@apaleo:registry=https://npm.pkg.github.com" > .npmrc
                        echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc
                        npm install
                    '''
                }
            }
        }
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }
        stage('Publish') {
            steps {
                withCredentials([[$class: 'StringBinding', credentialsId: 'npmjs-token', variable: 'NPM_TOKEN']]) {
                    sh '''
                        echo "@apaleo:registry=https://registry.npmjs.org/" > .npmrc
                        echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc
                        echo "Current package.json version:"
                        cat package.json | grep version
                        npm version patch --no-git-tag-version
                        echo "New package.json version:"
                        PACKAGE_VERSION=$(node -p "require('./package.json').version")
                        echo "Version: $PACKAGE_VERSION"
                        echo "Publishing package to npmjs.org..."
                        npm publish
                        echo "Package published successfully!"
                        echo "Package URL: https://www.npmjs.com/package/@apaleo/n8n-nodes-apaleo-official"
                    '''
                }
            }
        }
    }
    post {
        always {
            notifyBuild(currentBuild.result)
        }
    }
}
def notifyBuild(String buildStatus = 'STARTED') {
  buildStatus =  buildStatus ?: 'SUCCESS'
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"
  if (buildStatus == 'STARTED') {
    colorCode = '#FFFF00'
  } else if (buildStatus == 'SUCCESS') {
    colorCode = '#00FF00'
  } else {
    colorCode = '#FF0000'
    if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'release') {
      slackSend (color: colorCode, message: summary, channel: '#dev-front-end-bots')
    }
  }
  slackSend (color: colorCode, message: summary, channel: '#ci')
}