const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

try {
  // `jobId` input defined in action metadata file
  const jobId = core.getInput("jobId");

  fs.writeFileSync("/tmp/carbonrunner-github-run_id", jobId);

  const runnerId = "not-yet-filled-in"
  core.setOutput("runnerId", runnerId);

  //   const time = (new Date()).toTimeString();
  //   // Get the JSON webhook payload for the event that triggered the workflow
  //   const payload = JSON.stringify(github.context.payload, undefined, 2)
  //   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
