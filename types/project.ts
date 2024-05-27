import { z } from "zod";

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

const dateToString = z.coerce.date().or(z.string());

// Define the summary schema using Zod
const SummarySchema = z.object({
  timestamp: z.string(),
  item: z.object({
    name: z.string(),
    owner: z
      .object({
        id: z.string(),
        login: z.string(),
        avatarUrl: z.string(),
      })
      ,
    description: z.string().nullable(),
    url: z.string(),
    stargazerCount: z.number(),
    languages: z.array(z.string()),
    contributors: z
      .array(
        z
          .object({
            login: z.string(),
            avatarUrl: z.string(),
          })
          ,
      ),
    createdAt: dateToString,
    updatedAt: dateToString,
  }),
  errorsData: z
    .array(
      z
        .object({
          type: z.string(),
          message: z.string(),
        })
        ,
    )
    ,
});

export const SummaryProjectType = SummarySchema;

// Infer the TypeScript type from the summary schema
export type Project = z.infer<typeof SummarySchema>;


// export type Project = {
//   _id: string;
//   timestamp: Date;
//   item: Item;
//   error: null;
//   meta: Meta;
//   __v: number;
// };

// export type Item = {
//   data: Data;
// };

// export type Data = {
//   repository: Repository;
// };

// export type Repository = {
//   name: string;
//   owner: Owner;
//   openGraphImageUrl: string;
//   description: string;
//   url: string;
//   createdAt: Date;
//   updatedAt: Date;
//   stargazerCount: number;
//   languages: Languages;
//   collaborators: null;
//   contributors: Contributors;
// };

// export type Contributors = {
//   edges: ContributorsEdge[];
// };

// export type ContributorsEdge = {
//   node: ContributorNode;
// };

// export type ContributorNode = {
//   avatarUrl: string;
//   login: string;
// };

// export type Languages = {
//   edges: LanguagesEdge[];
// };

// export type LanguagesEdge = {
//   node: LanguageNode;
// };

// export type LanguageNode = {
//   name: string;
// };

// export type Owner = {
//   id: string;
//   login: string;
//   avatarUrl: string;
// };

// export type Meta = {
//   link: string;
// };
