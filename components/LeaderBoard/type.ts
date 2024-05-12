export type Welcome = {
    data: Data;
}

export type Data = {
    data?: Array<Array<DatumClass | string>>;
    since?: Date;
    until?: Date;
}

export type DatumClass = {
    name?: string;
    nodeID?: string;
    projectsNames?: ProjectsName[];
    avatarURL?: string;
    score?: number;
    stats?: Stats;
}

export type ProjectsName = {
    url?: URL;
    name?: Name;
}

export enum Name {
    MaakafWebsite = "maakaf-website",
}

export enum URL {
    MaakafMaakafWebsite = "maakaf/maakaf-website",
}

export type Stats = {
    additions?: number;
    deletions?: number;
    commits?: number;
}