workflow "Build, Test, and Publish" {
  on = "push"
  resolves = ["Publish"]
}

# Filter for a new tag
action "Tag" {
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Test" {
  needs = "Tag"
  uses = "actions/npm@master"
  args = "test"
}

action "Install dependencies" {
  needs = "Test"
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  needs = "Install dependencies"
  uses = "actions/npm@master"
  args = "run build"
}

action "Publish" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}