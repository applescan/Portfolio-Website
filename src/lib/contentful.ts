import contentful, { type EntryFieldTypes } from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export interface AboutMe {
  contentTypeId: "aboutMe",
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text,
  }
}

export interface Education {
  contentTypeId: "education",
  fields: {
    title: EntryFieldTypes.Text
    period: EntryFieldTypes.Text
    description: EntryFieldTypes.Object,
  }
}

export interface WorkExperience {
  contentTypeId: "workExperience",
  fields: {
    title: EntryFieldTypes.Text
    period: EntryFieldTypes.Text
    descriptionList: EntryFieldTypes.Object,
  }
}

export interface ProjectCard {
  contentTypeId: "projectCard",
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text,
    img: EntryFieldTypes.Text,
    link: EntryFieldTypes.Text
  }
}

export interface Hero {
  contentTypeId: "hero",
  fields: {
    title: EntryFieldTypes.Text,
    subTitle: EntryFieldTypes.Text
    description: EntryFieldTypes.Text,
  }
}

export interface ProjectPages {
  contentTypeId: "projectPages",
  fields: {
    title: EntryFieldTypes.Text,
    subtitle: EntryFieldTypes.Text,
    longDescription: EntryFieldTypes.Text,
    projectDescription: EntryFieldTypes.Object,
    skills: EntryFieldTypes.Text,
    year: EntryFieldTypes.Text,
    problemTitle: EntryFieldTypes.Text,
    problemDescription: EntryFieldTypes.Text,
    processTitle: EntryFieldTypes.Text,
    processDescription: EntryFieldTypes.Text,
    processList: EntryFieldTypes.Object,
    resultsTitle: EntryFieldTypes.Text,
    resultsDescription: EntryFieldTypes.Text,
  }
}



