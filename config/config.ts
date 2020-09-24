import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,

  baseUrl: "https://oneapstg.americanexpress.com/achautostg",

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--start-maximized", "--disable-gpu"],
    },
  },

  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  ignoreUncaughtExceptions: true,

  specs: ["../../features/**/*.feature"],

  onPrepare: () => {
    // browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    Reporter.createDirectory(jsonReports);
  },

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: [
      "../../typeScript/stepdefinitions/**/*.js",
      "../../typeScript/support/**/*.js",
    ],
    strict: true,
    tags:
      "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
  },

  onComplete: () => {
    Reporter.createHTMLReport();
  },
};
