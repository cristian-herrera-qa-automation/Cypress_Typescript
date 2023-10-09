pipeline{
       agent any

       parameters{
         string(name: "SPEC_UserHistory", defaultValue: "cypress/e2e/User_History/**",description: "EJECUTANDO LOS TESTS DE LAS USER HISTORY.")
         string(name: "SPEC_Regression", defaultValue: "cypress/e2e/Regression_Testing/**",description: "EJECUTANDO LOS TESTS DE REGRESSION.")
         string(name: "SPEC_Sanaty", defaultValue: "cypress/e2e/Sanaty_Testing/**",description: "EJECUTANDO LOS TESTS DE SANIDAD.")
         string(name: "SPEC_Smoke", defaultValue: "cypress/e2e/Smoke_Testing/**",description: "EJECUTANDO LOS TESTS DE SMOKE.")
         choice(name: "BROWSER", choices:['chrome', 'electron'], description: "ELIJA EL BROWSER")

       }

       options{
          ansiColor('xterm')
       }

       stages{
          stage('Build'){
            steps{
                echo "BUILDING APPLICATTIONS"
            }
          }

        stage("TESTING"){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC_UserHistory}"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC_Regression}"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC_Sanaty}"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC_Smoke}"
            }
        }

        stage("DEPLOY"){
            steps{
                echo "deploy de la aplicacion"
            }
        }

      }

}
       