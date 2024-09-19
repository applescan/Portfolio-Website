import contentful, { type EntryFieldTypes } from "contentful";

export interface AboutMe {
  contentTypeId: "aboutMe",
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text,
  }
}

export interface ProjectCard {
  contentTypeId: "projectCard",
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text,
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


export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
