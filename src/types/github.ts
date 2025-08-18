export type SearchResultTextMatches = {
  object_url?: string;
  object_type?: string | null;
  property?: string;
  fragment?: string;
  matches?: {
    text?: string;
    indices?: number[];
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}[];
/**
 * How the author is associated with the repository.
 */
export type AuthorAssociation =
  | 'COLLABORATOR'
  | 'CONTRIBUTOR'
  | 'FIRST_TIMER'
  | 'FIRST_TIME_CONTRIBUTOR'
  | 'MANNEQUIN'
  | 'MEMBER'
  | 'NONE'
  | 'OWNER';
/**
 * The type of issue.
 */
export type IssueType = {
  /**
   * The unique identifier of the issue type.
   */
  id: number;
  /**
   * The node identifier of the issue type.
   */
  node_id: string;
  /**
   * The name of the issue type.
   */
  name: string;
  /**
   * The description of the issue type.
   */
  description: string | null;
  /**
   * The color of the issue type.
   */
  color?:
    | 'gray'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'red'
    | 'pink'
    | 'purple'
    | null;
  /**
   * The time the issue type created.
   */
  created_at?: string;
  /**
   * The time the issue type last updated.
   */
  updated_at?: string;
  /**
   * The enabled state of the issue type.
   */
  is_enabled?: boolean;
  [k: string]: unknown;
} | null;
/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
export type GitHubApp = {
  /**
   * Unique identifier of the GitHub app
   */
  id: number;
  /**
   * The slug name of the GitHub app
   */
  slug?: string;
  node_id: string;
  client_id?: string;
  owner: SimpleUser5 | Enterprise;
  /**
   * The name of the GitHub app
   */
  name: string;
  description: string | null;
  external_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  /**
   * The set of permissions for the GitHub app
   */
  permissions: {
    issues: string;
    checks: string;
    metadata: string;
    contents: string;
    deployments: string;
    [k: string]: string;
  };
  /**
   * The list of events for the GitHub app. Note that the `installation_target`, `security_advisory`, and `meta` events are not included because they are global events and not specific to an installation.
   */
  events: string[];
  /**
   * The number of installations associated with the GitHub app. Only returned when the integration is requesting details about itself.
   */
  installations_count?: number;
  [k: string]: unknown;
} | null;

export interface GithubSearchSchema {
  total_count: number;
  incomplete_results: boolean;
  items: IssueSearchResultItem[];
  [k: string]: unknown;
}
/**
 * Issue Search Result Item
 */
export interface IssueSearchResultItem {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  locked: boolean;
  active_lock_reason?: string | null;
  assignees?: SimpleUser[] | null;
  user: null | SimpleUser1;
  labels: {
    id?: number;
    node_id?: string;
    url?: string;
    name?: string;
    color?: string;
    default?: boolean;
    description?: string | null;
    [k: string]: unknown;
  }[];
  sub_issues_summary?: SubIssuesSummary;
  issue_dependencies_summary?: IssueDependenciesSummary;
  issue_field_values?: IssueFieldValue[];
  state: string;
  state_reason?: string | null;
  assignee: null | SimpleUser2;
  milestone: null | Milestone;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  text_matches?: SearchResultTextMatches;
  pull_request?: {
    merged_at?: string | null;
    diff_url: string | null;
    html_url: string | null;
    patch_url: string | null;
    url: string | null;
    [k: string]: unknown;
  };
  body?: string;
  score: number;
  author_association: AuthorAssociation;
  draft?: boolean;
  repository?: Repository;
  body_html?: string;
  body_text?: string;
  timeline_url?: string;
  type?: IssueType;
  performed_via_github_app?: null | GitHubApp;
  reactions?: ReactionRollup;
  [k: string]: unknown;
}
/**
 * A GitHub user.
 */
export interface SimpleUser {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
  [k: string]: unknown;
}
/**
 * A GitHub user.
 */
export interface SimpleUser1 {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
  [k: string]: unknown;
}
export interface SubIssuesSummary {
  total: number;
  completed: number;
  percent_completed: number;
  [k: string]: unknown;
}
export interface IssueDependenciesSummary {
  blocked_by: number;
  blocking: number;
  total_blocked_by: number;
  total_blocking: number;
  [k: string]: unknown;
}
/**
 * A value assigned to an issue field
 */
export interface IssueFieldValue {
  /**
   * Unique identifier for the issue field.
   */
  issue_field_id: number;
  node_id: string;
  /**
   * The data type of the issue field
   */
  data_type: 'text' | 'single_select' | 'number' | 'date';
  /**
   * The value of the issue field
   */
  value: (string | number | number) &
    (
      | ((string | number | number) & null)
      | ((string | number | number) & string)
      | ((string | number | number) & number)
      | ((string | number | number) & number)
    );
  /**
   * Details about the selected option (only present for single_select fields)
   */
  single_select_option?: {
    /**
     * Unique identifier for the option.
     */
    id: number;
    /**
     * The name of the option
     */
    name: string;
    /**
     * The color of the option
     */
    color: string;
    [k: string]: unknown;
  } | null;
  [k: string]: unknown;
}
/**
 * A GitHub user.
 */
export interface SimpleUser2 {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
  [k: string]: unknown;
}
/**
 * A collection of related issues and pull requests.
 */
export interface Milestone {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  /**
   * The number of the milestone.
   */
  number: number;
  /**
   * The state of the milestone.
   */
  state: 'open' | 'closed';
  /**
   * The title of the milestone.
   */
  title: string;
  description: string | null;
  creator: null | SimpleUser3;
  open_issues: number;
  closed_issues: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  due_on: string | null;
  [k: string]: unknown;
}
/**
 * A GitHub user.
 */
export interface SimpleUser3 {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
  [k: string]: unknown;
}
/**
 * A repository on GitHub.
 */
export interface Repository {
  /**
   * Unique identifier of the repository
   */
  id: number;
  node_id: string;
  /**
   * The name of the repository.
   */
  name: string;
  full_name: string;
  license: null | LicenseSimple;
  forks: number;
  permissions?: {
    admin: boolean;
    pull: boolean;
    triage?: boolean;
    push: boolean;
    maintain?: boolean;
    [k: string]: unknown;
  };
  owner: SimpleUser4;
  /**
   * Whether the repository is private or public.
   */
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string | null;
  hooks_url: string;
  svn_url: string;
  homepage: string | null;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  /**
   * The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
   */
  size: number;
  /**
   * The default branch of the repository.
   */
  default_branch: string;
  open_issues_count: number;
  /**
   * Whether this repository acts as a template that can be used to generate new repositories.
   */
  is_template?: boolean;
  topics?: string[];
  /**
   * Whether issues are enabled.
   */
  has_issues: boolean;
  /**
   * Whether projects are enabled.
   */
  has_projects: boolean;
  /**
   * Whether the wiki is enabled.
   */
  has_wiki: boolean;
  has_pages: boolean;
  /**
   * Whether downloads are enabled.
   */
  has_downloads: boolean;
  /**
   * Whether discussions are enabled.
   */
  has_discussions?: boolean;
  /**
   * Whether the repository is archived.
   */
  archived: boolean;
  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;
  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;
  pushed_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  /**
   * Whether to allow rebase merges for pull requests.
   */
  allow_rebase_merge?: boolean;
  temp_clone_token?: string;
  /**
   * Whether to allow squash merges for pull requests.
   */
  allow_squash_merge?: boolean;
  /**
   * Whether to allow Auto-merge to be used on pull requests.
   */
  allow_auto_merge?: boolean;
  /**
   * Whether to delete head branches when pull requests are merged
   */
  delete_branch_on_merge?: boolean;
  /**
   * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
   */
  allow_update_branch?: boolean;
  /**
   * Whether a squash merge commit can use the pull request title as default. **This property is closing down. Please use `squash_merge_commit_title` instead.
   */
  use_squash_pr_title_as_default?: boolean;
  /**
   * The default value for a squash merge commit title:
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
   */
  squash_merge_commit_title?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
  /**
   * The default value for a squash merge commit message:
   *
   * - `PR_BODY` - default to the pull request's body.
   * - `COMMIT_MESSAGES` - default to the branch's commit messages.
   * - `BLANK` - default to a blank commit message.
   */
  squash_merge_commit_message?: 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';
  /**
   * The default value for a merge commit title.
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
   */
  merge_commit_title?: 'PR_TITLE' | 'MERGE_MESSAGE';
  /**
   * The default value for a merge commit message.
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `PR_BODY` - default to the pull request's body.
   * - `BLANK` - default to a blank commit message.
   */
  merge_commit_message?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';
  /**
   * Whether to allow merge commits for pull requests.
   */
  allow_merge_commit?: boolean;
  /**
   * Whether to allow forking this repo
   */
  allow_forking?: boolean;
  /**
   * Whether to require contributors to sign off on web-based commits
   */
  web_commit_signoff_required?: boolean;
  open_issues: number;
  watchers: number;
  master_branch?: string;
  starred_at?: string;
  /**
   * Whether anonymous git access is enabled for this repository
   */
  anonymous_access_enabled?: boolean;
  /**
   * The status of the code search index for this repository
   */
  code_search_index_status?: {
    lexical_search_ok?: boolean;
    lexical_commit_sha?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/**
 * License Simple
 */
export interface LicenseSimple {
  key: string;
  name: string;
  url: string | null;
  spdx_id: string | null;
  node_id: string;
  html_url?: string;
  [k: string]: unknown;
}
/**
 * A GitHub user.
 */
export interface SimpleUser4 {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
  [k: string]: unknown;
}
/**
 * A GitHub user.
 */
export interface SimpleUser5 {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
  [k: string]: unknown;
}
/**
 * An enterprise on GitHub.
 */
export interface Enterprise {
  /**
   * A short description of the enterprise.
   */
  description?: string | null;
  html_url: string;
  /**
   * The enterprise's website URL.
   */
  website_url?: string | null;
  /**
   * Unique identifier of the enterprise
   */
  id: number;
  node_id: string;
  /**
   * The name of the enterprise.
   */
  name: string;
  /**
   * The slug url identifier for the enterprise.
   */
  slug: string;
  created_at: string | null;
  updated_at: string | null;
  avatar_url: string;
  [k: string]: unknown;
}
export interface ReactionRollup {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  confused: number;
  heart: number;
  hooray: number;
  eyes: number;
  rocket: number;
  [k: string]: unknown;
}
