let globalProjectId = 0;

class Project {
  constructor(projectTitle, projectDescription) {
    this.id = globalProjectId;
    this.title = projectTitle;
    this.description = projectDescription;
    globalProjectId += 1;
  }

  get getTitle() { return this.title; }

  get getDescription() { return this.description; }

  set setTitle(value) { this.title = value; }

  set setDescription(newDescription) { this.description = newDescription; }
}

// export default project;
// exports.project = project;
module.exports = Project;