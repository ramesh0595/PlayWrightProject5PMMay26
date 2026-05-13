
module.exports={
    default:{
       require:[
            "./Stepdefinition/*.js",
            "./Hooks/*.js"
        ],
        format:[
            "progress",
             "junit:reports/cucumber-junitReport.xml",
             "json:reports/cucumber-jsonReport.json"
        ]
    }
}