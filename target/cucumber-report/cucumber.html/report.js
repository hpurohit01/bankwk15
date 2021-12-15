$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "\r\nAs a user I want to verify xyz bank account functionalities",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 35385900,
  "error_message": "java.lang.NullPointerException\r\n\tat com.bank.drivermanager.ManageDriver.selectBrowser(ManageDriver.java:29)\r\n\tat com.bank.cucumber.Hooks.openBrowser(Hooks.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 59,
  "name": "User as customer should be able to to deposit money to the account",
  "description": "",
  "id": "bank-test;user-as-customer-should-be-able-to-to-deposit-money-to-the-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I enter First name3 \"Hemal\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I enter Last Name3 \"Purohit\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter Postcode3 \"WD17 9AP \" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I select1 \"Hemal Purohit\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I select3 \"Hemal Purohit\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I should able to verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStep.iAmOnHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnAddCustomerTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    },
    {
      "val": "Hemal",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iEnterFirstNameToFirstNameField(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    },
    {
      "val": "Purohit",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iEnterLastNameToLastNameField(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "WD17 9AP ",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterPostcodeToPostcodeField(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStep.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnOpenAccountTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Hemal Purohit",
      "offset": 11
    }
  ],
  "location": "MyStepdefs.iSelectCustomerNameWhichAddedBefore(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStep.iSelectCurrency(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnProcessButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStep.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnHomeButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnCustomerLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "Hemal Purohit",
      "offset": 11
    }
  ],
  "location": "MyStepdefs.iSelectCustomerNameWhichAddedBefore(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnDepositTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "BankStep.iEnterAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnDepositButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 33
    }
  ],
  "location": "BankStep.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9983900,
  "error_message": "java.lang.NullPointerException\r\n\tat com.bank.utility.Utility.getScreenshot(Utility.java:248)\r\n\tat com.bank.cucumber.Hooks.tearDown(Hooks.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3861100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.bank.drivermanager.ManageDriver.selectBrowser(ManageDriver.java:29)\r\n\tat com.bank.cucumber.Hooks.openBrowser(Hooks.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 86,
  "name": "User as a customer should be able to withdraw money successfully",
  "description": "",
  "id": "bank-test;user-as-a-customer-should-be-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 85,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "I click on Bank Manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I enter First name4 \"Hemal\" to First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I enter Last Name4 \"Purohit\" to Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I enter Postcode4 \"WD17 9AP\" to Postcode Field",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I click on Add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I am able to see popup display with \"Customer added successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click on Open Account tab",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "I select4 \"Hemal Purohit\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I click on Process button",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I am able to see popup display with \"Account created successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "I should be able to click OK button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click on Customer Login button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I select4 \"Hemal Purohit\" customer name which added before",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I enter amounts \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I should able to verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I click on Withdraw tab",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "I enter amount \"50\" in amount to be withdrawn field",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I click Withdraw tab",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I should able to verify withdrawn message \"Transaction successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStep.iAmOnHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnAddCustomerTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    },
    {
      "val": "Hemal",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iEnterFirstNameToFirstNameField(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    },
    {
      "val": "Purohit",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iEnterLastNameToLastNameField(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    },
    {
      "val": "WD17 9AP",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterPostcodeToPostcodeField(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 37
    }
  ],
  "location": "BankStep.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnOpenAccountTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "Hemal Purohit",
      "offset": 11
    }
  ],
  "location": "MyStepdefs.iSelectCustomerNameWhichAddedBefore(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankStep.iSelectCurrency(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnProcessButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 37
    }
  ],
  "location": "BankStep.iAmAbleToSeePopupDisplayWithMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iShouldBeAbleToClickOKButtonOnPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnHomeButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnCustomerLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "Hemal Purohit",
      "offset": 11
    }
  ],
  "location": "MyStepdefs.iSelectCustomerNameWhichAddedBefore(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnDepositTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterAmounts(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnDepositButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 33
    }
  ],
  "location": "BankStep.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickOnWithdrawTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    }
  ],
  "location": "BankStep.iEnterAmountInAmountToBeWithdrawnField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankStep.iClickWithdrawTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 43
    }
  ],
  "location": "BankStep.iShouldAbleToVerifyWithdrawnMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 574800,
  "error_message": "java.lang.NullPointerException\r\n\tat com.bank.utility.Utility.getScreenshot(Utility.java:248)\r\n\tat com.bank.cucumber.Hooks.tearDown(Hooks.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});