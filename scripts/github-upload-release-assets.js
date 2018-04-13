const fs = require("fs");
const octokit = require("@octokit/rest")();

const dist = process.cwd() + "/dist/";
const {
  CIRCLE_PROJECT_USERNAME,
  CIRCLE_PROJECT_REPONAME,
  CIRCLE_TAG,
  GITHUB_TOKEN
} = process.env;

if (!fs.existsSync(dist)) {
  console.error("No build output found");
  process.exit(1);
}

const token = GITHUB_TOKEN;
octokit.authenticate({ type: "token", token });

const promises = [];
const files = fs.readdirSync(dist);

function upload(filename) {
  const owner = CIRCLE_PROJECT_USERNAME;
  const repo = CIRCLE_PROJECT_REPONAME;
  const tag = CIRCLE_TAG;
  const asset = dist + filename;

  return octokit.repos.getReleaseByTag({ owner, repo, tag }).then(release => {
    return octokit.repos.uploadAsset({
      url: release.data.upload_url,
      file: fs.readFileSync(asset, null).buffer,
      contentType: "application/javascript",
      contentLength: fs.statSync(asset).size,
      name: filename
    });
  });
}

files.map(filename => {
  console.info(`Uploading asset ${filename}`);
  promises.push(upload(filename));
});

Promise.all(promises)
  .then(() => {
    console.info(`Upload completed`);
    process.exit();
  })
  .catch(err => {
    console.info(`Upload failed`);
    process.exit(1);
  });
