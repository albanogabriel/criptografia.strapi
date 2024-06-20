import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footerContact: Attribute.Component<'elements.footer-contacts', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    buttonLink: Attribute.Component<'elements.button-link'>;
    QAParagraph: Attribute.Component<'elements.qa-paragraph', true>;
    lockImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    macbookImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksMission extends Schema.Component {
  collectionName: 'components_blocks_missions';
  info: {
    displayName: 'Mission';
    description: '';
  };
  attributes: {
    QAParagraph: Attribute.Component<'elements.qa-paragraph', true>;
    card: Attribute.Component<'elements.card-review', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.Component<'elements.title-transparent'>;
    buttonLink: Attribute.Component<'elements.button-link'>;
  };
}

export interface BlocksRowCardReview extends Schema.Component {
  collectionName: 'components_blocks_row_card_reviews';
  info: {
    displayName: 'RowCardReview';
  };
  attributes: {
    cardReview: Attribute.Component<'elements.card-review', true>;
  };
}

export interface BlocksValues extends Schema.Component {
  collectionName: 'components_blocks_values';
  info: {
    displayName: 'Values';
  };
  attributes: {
    titleTransparent: Attribute.Component<'elements.title-transparent'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['ghost', 'bottomLight']>;
  };
}

export interface ElementsCardReview extends Schema.Component {
  collectionName: 'components_elements_card_reviews';
  info: {
    displayName: 'CardReview';
  };
  attributes: {
    name: Attribute.String;
    enterprise: Attribute.String;
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    review: Attribute.Text;
  };
}

export interface ElementsFooterContacts extends Schema.Component {
  collectionName: 'components_elements_footer_contacts';
  info: {
    displayName: 'Footer Contacts';
  };
  attributes: {
    title: Attribute.String;
    contact: Attribute.String;
    contactLink: Attribute.String;
  };
}

export interface ElementsQaParagraph extends Schema.Component {
  collectionName: 'components_elements_qa_paragraphs';
  info: {
    displayName: 'QA Paragraph';
  };
  attributes: {
    headingQuestion: Attribute.String;
    paragraph: Attribute.Text;
  };
}

export interface ElementsTitleTransparent extends Schema.Component {
  collectionName: 'components_elements_title_transparents';
  info: {
    displayName: 'Title Transparent';
  };
  attributes: {
    Heading: Attribute.String;
    paragraph: Attribute.String;
    type: Attribute.Enumeration<['pink', 'white']>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.footer': BlocksFooter;
      'blocks.hero': BlocksHero;
      'blocks.mission': BlocksMission;
      'blocks.row-card-review': BlocksRowCardReview;
      'blocks.values': BlocksValues;
      'elements.button-link': ElementsButtonLink;
      'elements.card-review': ElementsCardReview;
      'elements.footer-contacts': ElementsFooterContacts;
      'elements.qa-paragraph': ElementsQaParagraph;
      'elements.title-transparent': ElementsTitleTransparent;
      'seo.meta-data': SeoMetaData;
    }
  }
}
