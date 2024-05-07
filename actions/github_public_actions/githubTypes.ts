import { z } from 'zod';

interface URL_PARAMS {
    owner: string;
    repo: string;
}
export const GITHUB_REPO_BASE_URL = ({owner, repo}: URL_PARAMS) => `https://api.github.com/repos/${owner}/${repo}`;

const ownerSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  site_admin: z.boolean(),
});

const licenseSchema = z.object({
  key: z.string(),
  name: z.string(),
  spdx_id: z.string(),
  url: z.string(),
  node_id: z.string(),
});

export const githubRepoResponseSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  full_name: z.string(),
  private: z.boolean(),
  owner: ownerSchema,
  html_url: z.string(),
  description: z.string(),
  fork: z.boolean(),
  url: z.string(),
  forks_url: z.string(),
  keys_url: z.string(),
  collaborators_url: z.string(),
  teams_url: z.string(),
  hooks_url: z.string(),
  issue_events_url: z.string(),
  events_url: z.string(),
  assignees_url: z.string(),
  branches_url: z.string(),
  tags_url: z.string(),
  blobs_url: z.string(),
  git_tags_url: z.string(),
  git_refs_url: z.string(),
  trees_url: z.string(),
  statuses_url: z.string(),
  languages_url: z.string(),
  stargazers_url: z.string(),
  contributors_url: z.string(),
  subscribers_url: z.string(),
  subscription_url: z.string(),
  commits_url: z.string(),
  git_commits_url: z.string(),
  comments_url: z.string(),
  issue_comment_url: z.string(),
  contents_url: z.string(),
  compare_url: z.string(),
  merges_url: z.string(),
  archive_url: z.string(),
  downloads_url: z.string(),
  issues_url: z.string(),
  pulls_url: z.string(),
  milestones_url: z.string(),
  notifications_url: z.string(),
  labels_url: z.string(),
  releases_url: z.string(),
  deployments_url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  pushed_at: z.string(),
  git_url: z.string(),
  ssh_url: z.string(),
  clone_url: z.string(),
  svn_url: z.string(),
  homepage: z.string(),
  size: z.number(),
  stargazers_count: z.number(),
  watchers_count: z.number(),
  language: z.string(),
  has_issues: z.boolean(),
  has_projects: z.boolean(),
  has_downloads: z.boolean(),
  has_wiki: z.boolean(),
  has_pages: z.boolean(),
  has_discussions: z.boolean(),
  forks_count: z.number(),
  mirror_url: z.null(),
  archived: z.boolean(),
  disabled: z.boolean(),
  open_issues_count: z.number(),
  license: licenseSchema.nullable(),
  allow_forking: z.boolean(),
  is_template: z.boolean(),
  web_commit_signoff_required: z.boolean(),
  topics: z.array(z.string()),
  visibility: z.string(),
  forks: z.number(),
  open_issues: z.number(),
  watchers: z.number(),
  default_branch: z.string(),
  temp_clone_token: z.null(),
  custom_properties: z.record(z.any()),
  organization: ownerSchema,
  network_count: z.number(),
  subscribers_count: z.number(),
});

export type GithubRepoResponse = z.infer<typeof githubRepoResponseSchema>;
export type Owner = z.infer<typeof ownerSchema>;
export type License = z.infer<typeof licenseSchema>;


// ******************* CONTRIBUTIONS ******************* //

export const GITHUB_CONTRIBUTIONS = (props: URL_PARAMS) => `${GITHUB_REPO_BASE_URL(props)}/contributors`;

const contributorSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  site_admin: z.boolean(),
  contributions: z.number().optional(),
});

export const contributorsSchema = z.array(contributorSchema);

export type Contributor = z.infer<typeof contributorSchema>;


// ******************* LOGIN PROFILE ******************* //

export const GITHUB_LOGIN_PROFILE = (login: string) => `https://api.github.com/users/${login}`;

export const userGithubSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  site_admin: z.boolean(),
  name: z.string().nullable(),
  company: z.string().nullable(),
  blog: z.string().nullable(),
  location: z.string().nullable(),
  email: z.string().nullable(),
  hireable: z.boolean().nullable(),
  bio: z.string().nullable(),
  twitter_username: z.string().nullable(),
  public_repos: z.number(),
  public_gists: z.number(),
  followers: z.number(),
  following: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type User = z.infer<typeof userGithubSchema>;


// ******************* COMMITS ******************* //

export const GITHUB_COMMITS = (props: URL_PARAMS) => `${GITHUB_REPO_BASE_URL(props)}/commits`;

const commitObjUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  site_admin: z.boolean(),
});

const commitAuthorSchema = commitObjUserSchema.extend({
  name: z.string(),
  email: z.string(),
  date: z.string(),
});

const commitCommitterSchema = commitObjUserSchema.extend({
  name: z.string(),
  email: z.string(),
  date: z.string(),
});

const commitVerificationSchema = z.object({
  verified: z.boolean(),
  reason: z.string(),
  signature: z.string().nullable(),
  payload: z.string().nullable(),
});

const commitTreeSchema = z.object({
  sha: z.string(),
  url: z.string(),
});

const commitSchema = z.object({
  sha: z.string(),
  node_id: z.string(),
  commit: z.object({
    author: commitAuthorSchema,
    committer: commitCommitterSchema,
    message: z.string(),
    tree: commitTreeSchema,
    url: z.string(),
    comment_count: z.number(),
    verification: commitVerificationSchema,
  }),
  url: z.string(),
  html_url: z.string(),
  comments_url: z.string(),
  author: commitObjUserSchema,
  committer: commitObjUserSchema,
  parents: z.array(
    z.object({
      sha: z.string(),
      url: z.string(),
      html_url: z.string(),
    })
  ),
});

export const githbuRepoProjectCommitsSchema = z.array(commitSchema);

export type GitHubCommit = z.infer<typeof commitSchema>;

// ******************* PULL REQUESTS ******************* //

export const GITHUB_PULLS = (props: URL_PARAMS) => `${GITHUB_REPO_BASE_URL(props)}/pulls`;

const githubPRUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  site_admin: z.boolean(),
});

const githubPRLicenseSchema = z.object({
  key: z.string(),
  name: z.string(),
  spdx_id: z.string(),
  url: z.string(),
  node_id: z.string(),
});

const repoSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  full_name: z.string(),
  private: z.boolean(),
  owner: githubPRUserSchema,
  html_url: z.string(),
  description: z.string(),
  fork: z.boolean(),
  url: z.string(),
  forks_url: z.string(),
  keys_url: z.string(),
  collaborators_url: z.string(),
  teams_url: z.string(),
  hooks_url: z.string(),
  issue_events_url: z.string(),
  events_url: z.string(),
  assignees_url: z.string(),
  branches_url: z.string(),
  tags_url: z.string(),
  blobs_url: z.string(),
  git_tags_url: z.string(),
  git_refs_url: z.string(),
  trees_url: z.string(),
  statuses_url: z.string(),
  languages_url: z.string(),
  stargazers_url: z.string(),
  contributors_url: z.string(),
  subscribers_url: z.string(),
  subscription_url: z.string(),
  commits_url: z.string(),
  git_commits_url: z.string(),
  comments_url: z.string(),
  issue_comment_url: z.string(),
  contents_url: z.string(),
  compare_url: z.string(),
  merges_url: z.string(),
  archive_url: z.string(),
  downloads_url: z.string(),
  issues_url: z.string(),
  pulls_url: z.string(),
  milestones_url: z.string(),
  notifications_url: z.string(),
  labels_url: z.string(),
  releases_url: z.string(),
  deployments_url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  pushed_at: z.string(),
  git_url: z.string(),
  ssh_url: z.string(),
  clone_url: z.string(),
  svn_url: z.string(),
  homepage: z.string(),
  size: z.number(),
  stargazers_count: z.number(),
  watchers_count: z.number(),
  language: z.string(),
  has_issues: z.boolean(),
  has_projects: z.boolean(),
  has_downloads: z.boolean(),
  has_wiki: z.boolean(),
  has_pages: z.boolean(),
  has_discussions: z.boolean(),
  forks_count: z.number(),
  mirror_url: z.null(),
  archived: z.boolean(),
  disabled: z.boolean(),
  open_issues_count: z.number(),
  license: githubPRLicenseSchema.nullable(),
  allow_forking: z.boolean(),
  is_template: z.boolean(),
  web_commit_signoff_required: z.boolean(),
  topics: z.array(z.string()),
  visibility: z.string(),
  forks: z.number(),
  open_issues: z.number(),
  watchers: z.number(),
  default_branch: z.string(),
});

const linksPRSchema = z.object({
  self: z.object({
    href: z.string(),
  }),
  html: z.object({
    href: z.string(),
  }),
  issue: z.object({
    href: z.string(),
  }),
  comments: z.object({
    href: z.string(),
  }),
  review_comments: z.object({
    href: z.string(),
  }),
  review_comment: z.object({
    href: z.string(),
  }),
  commits: z.object({
    href: z.string(),
  }),
  statuses: z.object({
    href: z.string(),
  }),
});

const pullRequestSchema = z.object({
  url: z.string(),
  id: z.number(),
  node_id: z.string(),
  html_url: z.string(),
  diff_url: z.string(),
  patch_url: z.string(),
  issue_url: z.string(),
  number: z.number(),
  state: z.string(),
  locked: z.boolean(),
  title: z.string(),
  user: githubPRUserSchema,
  body: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  closed_at: z.string().nullable(),
  merged_at: z.string().nullable(),
  merge_commit_sha: z.string().nullable(),
  assignee: githubPRUserSchema.nullable(),
  assignees: z.array(githubPRUserSchema),
  requested_reviewers: z.array(githubPRUserSchema),
  requested_teams: z.array(z.unknown()),
  labels: z.array(z.unknown()),
  milestone: z.unknown().nullable(),
  draft: z.boolean(),
  commits_url: z.string(),
  review_comments_url: z.string(),
  review_comment_url: z.string(),
  comments_url: z.string(),
  statuses_url: z.string(),
  head: z.object({
    label: z.string(),
    ref: z.string(),
    sha: z.string(),
    user: githubPRUserSchema,
    repo: repoSchema,
  }),
  base: z.object({
    label: z.string(),
    ref: z.string(),
    sha: z.string(),
    user: githubPRUserSchema,
    repo: repoSchema,
  }),
  _links: linksPRSchema,
  author_association: z.string(),
  auto_merge: z.unknown().nullable(),
  active_lock_reason: z.string().nullable(),
});

export const pullRequestsSchema = z.array(pullRequestSchema);

export type PullRequest = z.infer<typeof pullRequestSchema>;

// ******************* ISSUES ******************* //


const githubIssuesUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  site_admin: z.boolean(),
});

const issuesLabelSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  url: z.string(),
  name: z.string(),
  color: z.string(),
  default: z.boolean(),
  description: z.string(),
});

const issuesReactionsSchema = z.object({
  url: z.string(),
  total_count: z.number(),
  "+1": z.number(),
  "-1": z.number(),
  laugh: z.number(),
  hooray: z.number(),
  confused: z.number(),
  heart: z.number(),
  rocket: z.number(),
  eyes: z.number(),
});

const issuesPullRequestSchema = z.object({
  url: z.string(),
  html_url: z.string(),
  diff_url: z.string(),
  patch_url: z.string(),
  merged_at: z.string().nullable(),
});

const issueSchema = z.object({
  url: z.string(),
  repository_url: z.string(),
  labels_url: z.string(),
  comments_url: z.string(),
  events_url: z.string(),
  html_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  number: z.number(),
  title: z.string(),
  user: githubIssuesUserSchema,
  labels: z.array(issuesLabelSchema),
  state: z.string(),
  locked: z.boolean(),
  assignee: githubIssuesUserSchema.nullable(),
  assignees: z.array(githubIssuesUserSchema),
  milestone: z.any().nullable(),
  comments: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  closed_at: z.string().nullable(),
  author_association: z.string(),
  active_lock_reason: z.string().nullable(),
  draft: z.boolean().optional(),
  pull_request: issuesPullRequestSchema.optional(),
  body: z.string(),
  reactions: issuesReactionsSchema,
  timeline_url: z.string(),
  performed_via_github_app: z.any().nullable(),
  state_reason: z.string().nullable(),
});

export const githubIssuesSchema = z.array(issueSchema);

export type Issue = z.infer<typeof issueSchema>;


// ******************* CODE REVIEWS ******************* //

export const GITHUB_CODE_REVIEWS = (props: URL_PARAMS) => `${GITHUB_REPO_BASE_URL(props)}/pulls/comments`;


const codeReviewurlSchema = z.string().url();

const codeReviewUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string().url(),
  gravatar_id: z.string(),
  url: z.string().url(),
  html_url: z.string().url(),
  followers_url: z.string().url(),
  following_url: z.string().url(),
  gists_url: z.string().url(),
  starred_url: z.string().url(),
  subscriptions_url: z.string().url(),
  organizations_url: z.string().url(),
  repos_url: z.string().url(),
  events_url: z.string().url(),
  received_events_url: z.string().url(),
  type: z.string(),
  site_admin: z.boolean(),
});

const codeReviewreactionSchema = z.object({
  url: z.string().url(),
  total_count: z.number(),
  '+1': z.number(),
  '-1': z.number(),
  laugh: z.number(),
  hooray: z.number(),
  confused: z.number(),
  heart: z.number(),
  rocket: z.number(),
  eyes: z.number(),
});

const codeReviewlinksSchema = z.object({
  self: z.object({ href: z.string().url() }),
  html: z.object({ href: z.string().url() }),
  pull_request: z.object({ href: z.string().url() }),
});

const commentSchema = z.object({
  url: codeReviewurlSchema,
  pull_request_review_id: z.number(),
  id: z.number(),
  node_id: z.string(),
  diff_hunk: z.string(),
  path: z.string(),
  commit_id: z.string(),
  original_commit_id: z.string(),
  user: codeReviewUserSchema,
  body: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  html_url: z.string().url(),
  pull_request_url: z.string().url(),
  author_association: z.string(),
  _links: codeReviewlinksSchema,
  reactions: codeReviewreactionSchema,
  start_line: z.number().nullable(),
  original_start_line: z.number().nullable(),
  start_side: z.string().nullable(),
  line: z.number().nullable(),
  original_line: z.number().nullable(),
  side: z.string().nullable(),
  in_reply_to_id: z.number().nullable(),
  original_position: z.number().nullable(),
  position: z.number().nullable(),
  subject_type: z.string().nullable(),
});

export const githubCodeReviewsSchema = z.array(commentSchema);


export type CodeReview = z.infer<typeof githubCodeReviewsSchema>;


