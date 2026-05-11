const { Before, After, Status } = require("@cucumber/cucumber");
const utils = require("../Utility/BaseClass");

//Normal Hooks

Before(async function () {
  console.log("---------Before Screnario-----------");
  this.browser = await utils.launchBrowser("chromium", false);
  this.context = await utils.launchContext(this.browser);
  this.page = await utils.launchPage(this.context);
  await utils.launchUrl(this.page, "https://www.facebook.com/");
});

After(async function (Scenario) {
  console.log("---------After Screnario-----------");
  // await this.page.screenshot({
  //   path:"tests/Screenshots/"+Date.now()+".png",fullPage:true
  // })
     
//   //get screenshot all passed and failed scenarios
//  const scenarioName= Scenario.pickle.name.trim().replace(/[^a-zA-Z0-9]/g,"_");
//  const filePath=`tests/Screenshots/${scenarioName}.png`;

//  const screenshots=await this.page.screenshot({
//   path:filePath,
//   fullPage:true
//  })
//  await this.attach(screenshots,'image/png')
if(Scenario.result.status===Status.FAILED){
  //get screenshot all failed scenarios
 const scenarioName= Scenario.pickle.name.trim().replace(/[^a-zA-Z0-9]/g,"_");
 const filePath=`tests/Screenshots/${scenarioName}.png`;

 const screenshots=await this.page.screenshot({
  path:filePath,
  fullPage:true
 })
 await this.attach(screenshots,'image/png')
}
  await this.browser.close();
});

//Ordered Hooks
// Before({order:1},async function () {
//   console.log("---------Before Screnario-----------1");
// });

// After({order:2},async function () {
//   console.log("---------After Screnario-----------1");
// });

// Before({order:2},async function () {
//   console.log("---------Before Screnario-----------2");
// });

// After({order:1},async function () {
//   console.log("---------After Screnario-----------2");
// });

// //Tagged HOOKs
// Before({tags:"@smoke or @retest"},async function () {
//   console.log("---------Before Screnario-----------1");
// });

// After({tags:"@smoke or @retest"},async function () {
//   console.log("---------After Screnario-----------1");
// });

// Before(async function () {
//   console.log("---------Before Screnario-----------2");
// });

// After(async function () {
//   console.log("---------After Screnario-----------2");
// });

//Ordered and Tagged HOOKs
// Before({tags:"@smoke or @retest",order:0},async function () {
//   console.log("---------Before Screnario-----------1");
// });

// After({tags:"@smoke or @retest",order:0},async function () {
//   console.log("---------After Screnario-----------1");
// });

// Before({order:1},async function () {
//   console.log("---------Before Screnario-----------2");
// });

// After({order:1},async function () {
//   console.log("---------After Screnario-----------2");
// });

