export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large: PostCoverFormat;
      small: PostCoverFormat;
      medium: PostCoverFormat;
      thumbnail: PostCoverFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
};

export type PostCategory = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type PostAuthor = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type PostData = {
  id: number;
  attributes: {
    title: string;
    content: Array<{
      type: string;
      children: Array<{
        text: string;
        type: string;
      }>;
    }>;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: {
      data: PostCategory;
    };
    author: {
      data: PostAuthor;
    };
    cover: {
      data: PostCover;
    };
  };
};

export type PostResponse = {
  data: Array<PostData>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
