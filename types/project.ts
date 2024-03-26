export enum ProjectPaginationFilter {
  ALL = 'all',
  RECENTLY_UPDATED = 'recently_updated',
  MOST_CONTROBUTORS = 'most_contributors',
  RECENTLY_CREATED = 'recently_created',
}

export type IProjectsDataResponse = {
  projects: Project[];
  total: number;
  languages: string[];
  pageLanguages: string[];
  timestamp: Date;
};

export type Project = {
  _id: string;
  timestamp: Date;
  item: Item;
  error: null;
  meta: Meta;
  __v: number;
};

export type Item = {
  data: Data;
};

export type Data = {
  repository: Repository;
};

export type Repository = {
  name: string;
  owner: Owner;
  openGraphImageUrl: string;
  description: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  stargazerCount: number;
  languages: Languages;
  collaborators: null;
  contributors: Contributors;
};

export type Contributors = {
  edges: ContributorsEdge[];
};

export type ContributorsEdge = {
  node: ContributorNode;
};

export type ContributorNode = {
  avatarUrl: string;
  login: string;
};

export type Languages = {
  edges: LanguagesEdge[];
};

export type LanguagesEdge = {
  node: LanguageNode;
};

export type LanguageNode = {
  name: string;
};

export type Owner = {
  id: string;
  login: string;
  avatarUrl: string;
};

export type Meta = {
  link: string;
};
