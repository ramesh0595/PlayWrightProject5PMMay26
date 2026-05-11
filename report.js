const reporter=require("cucumber-html-reporter")

const options={
    theme:'bootstrap',
    jsonFile:'reports/cucumber-jsonReport.json',
    output:'reports/custom-report.html',
    reportSuiteAsScenarios:true,
    launchReport:true,
    metadata:{
        "TesterName":"Ramesh",
        "Test Environment":"QA",
        "Browser":"Chromium",
        "Platform":"Windows",
        "Exceuted":"Local"
    }
}

reporter.generate(options);