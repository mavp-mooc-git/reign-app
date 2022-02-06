export interface apiHN {
  hits: [
    {
      author: string,
      comment_text: string,
      created_at: string,
      created_at_i: string,
      num_comments?: number,
      objectID: string,
      parent_id: number,
      points?: number,
      story_id: number,
      story_text?: string,
      story_title: string,
      story_url: string,
      title?: string,
      url?: string,
      _highlightResult: {
        title: {
          value: string,
          matchLevel: string,
          matchedWords: [ ]
        },
        url: {
          value: string,
          matchLevel: string,
          matchedWords: [ ]
        },
        author: {
          value: string,
          matchLevel: string,
          matchedWords: [
            string
          ]
        }
      },
      _tags: [
        string
      ]
    },
  ],
  page: number,
  nbHits: number,
  nbPages: number,
  hitsPerPage: number,
  processingTimeMS: number,
  query: string,
  params: string
}
