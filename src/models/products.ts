export interface IProduct {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  product_cat: number[];
  product_tag: any[];
  aioseo_notices: any[];
  _links: Links;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  replies: Reply[];
  "wp:attachment": WpAttachment[];
  "wp:featuredmedia": WpMedia[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface WpMedia {
  embeddable: boolean;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}
