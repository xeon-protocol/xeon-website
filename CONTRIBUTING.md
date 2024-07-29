# Contributing

## Pre Requisites

You will need the following software on your machine:

[![git](https://img.shields.io/badge/git-any-darkgreen)](https://git-scm.com/downloads) [![node](https://img.shields.io/badge/node.js->_14.2.4-darkgreen)](https://nodejs.org/en/download/) [![npm](https://img.shields.io/badge/npm->=_6-darkgreen)](https://npmjs.com/)

## Pull Requests

All work should be done on it's own branch. Once you are done working on a branch, create a pull request to merge it back into `main`.

When making a pull request, ensure that:

- Code coverage remains the same or greater.
- All new code adheres to the style guide:
  - All lint checks pass
  - Code is thoroughly commented with NatSpec where relevant.
- A descriptive summary of the PR has been provided.
- Assign reviewers to the PR and request a **code review**.
- Address any feedback or requested changes promptly.

## Additional Guidelines

In order to maintain high quality code that is easy to collaborate on, please make sure to stick to best practices. Expectations for code management are listed below.

## Branching Strategy

- Always create a new branch from `main` for any new feature or bug fix.
- To avoid merge conflicts, each branch should only serve a single purpose.
- Use descriptive branch names that clearly indicate the purpose of the branch, such as:

```shell
`feature/galxe-leaderboard`
`page/add-analytics`
`bugfix/fix-login-issue`
```

## Code Reviews

- Reviewers should provide constructive feedback and look for potential issues or improvements.
- Make sure to test the changes locally before approving the PR.
- Only approve PRs that meet our quality standards and follow our coding guidelines.

## Merging

- Once the PR is approved and all checks pass, squash and merge into `main`.
  - Use **squash and merge** to keep the commit history clean (unless the branch contains logically distinct commits that should be preserved).

## Maintaining a Clean Codebase

- Regularly pull the latest changes from `main` into your working branches to avoid conflicts.
- After merging a branch, delete it to keep the repo clean.
- Document any significant changes or new features in our project documentation (`README.md` and associated files).

## Commit Guidelines

We use conventional commits in our codebases, more information [here](commit-guidelines.md)

- **Commit Messages:** Write clear and concise commit messages that accurately describe the changes made. Use the imperative mood and present tense (e.g., `"feat: add leaderboard to Galxe page"`).
- **Coding Standards:** Follow our coding standards and style guides to ensure consistency across the codebase. Refer to the project's documentation for specific guidelines.
- **Documentation:** Keep the documentation up-to-date with any code changes. This includes comments within the code, as well as external documentation like the `README.md` and any additional guides.

## Notice

These guidelines apply to all code in the Xeon Protocol codebase, with slight differences depending on the scope of the code. Please see the `CONTRIBUTING.md` file that accompanies every repository in the organization.
