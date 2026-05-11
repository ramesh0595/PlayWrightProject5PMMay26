const { format } = require("node:path");

module.exports={
    default:{
        paths:[
            "./Features/*.feature"
        ],
        require:[
            "./Stepdefinition/*.js",
            "./Hooks/*.js"
        ],
        format:[
            "progress",
            "json:reports/cucumber-jsonReport.json",
              "html:reports/cucumber-htmlReport.html",
               "junit:reports/cucumber-junitReport.xml"
        ]
    }
}