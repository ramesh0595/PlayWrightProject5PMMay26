
module.exports={
    default:{
       require:[
            "./Stepdefinition/*.js",
            "./Hooks/*.js"
        ],
        format:[
            "progress",
           "json:reports/cucumber-jsonReport.json",
            "html:reports/cucumber-htmlReport.html",
             "junit:reports/cucumber-junitReport.xml",
             "json:reports/cucumber-jsonReport.json"

        ]
    }
}