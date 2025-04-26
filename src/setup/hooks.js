const playwright = require("playwright");
const {
  Before,
  After,
  BeforeAll,
  AfterAll,
  ITestCaseHookParameter,
} = require("@cucumber/cucumber");

BeforeAll(async () => {
  console.log("Launch Browser");
  global.browser = await playwright["chromium"].launch({
    headless: false,
    args: ["--disable-features=site-per-process"],
  });
});

AfterAll(async () => {
  console.log("Close Browser");
  await global.browser.close();
});

Before({ timeout: 60 * 1000 }, async (scenario) => {
  console.log("Create new context and page");
  console.log(`🥒 Running cucumber "${scenario.pickle.name}"`);
  global.context = await global.browser.newContext({
    httpCredentials: {
      username: "fwdmmt",
      password: "fwdmmt2@21",
    },
    viewport: { width: 1920, height: 1080},
    recordVideo: {
      dir: "./reports/videos/" + scenario.pickle.name,
    },
  });
  global.page = await global.context.newPage();
});

After(async function () {
  await global.page.close();
  await global.context.close();
});

After(async function (scenario) {
 const scenarioStatus= scenario.result.status
 //console.log(`:cucumber: Failed scenario, Taking screenshot.... "${scenario.pickle.name}"`);
 if(scenarioStatus==='FAILED') {
   var buffer = await global.page.screenshot({ path: `./reports/screenshots/${scenario.pickle.name}.png`, fullPage: true })
   this.attach(buffer, 'image/png');
 }
});