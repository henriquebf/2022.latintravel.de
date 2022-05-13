import content from '@/config/content.json';

// Return text
export const getContent = (language: string, input: string[]): string => {
  let branch: any = content;
  for (const o of input) {
    branch = branch[o];
  }

  return typeof branch === 'string'
    ? branch
    : branch && branch[language]
    ? branch[language]
    : '[ERROR: content not found!]';
};

// Returns array of text (to iterate)
export const getParagraphs = (language: string, input: string[]): string[] => {
  let branch: any = content;
  for (const o of input) {
    branch = branch[o];
  }

  return branch && branch[language]
    ? branch[language]
    : ['[ERROR: content not found!]'];
};

// Returns array of image urls (to iterate)
export const getImages = (input: string[]): string[] => {
  let branch: any = content;
  for (const o of input) {
    branch = branch[o];
  }

  return branch ? branch : ['[ERROR: content not found!]'];
};

export const getThumb = (section: string, thumb: string): string => {
  return `/${section}/${thumb}/thumb.jpg`;
};
