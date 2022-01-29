import content from '@/config/content.json';

export const getContent = (language: string, input: string[]): string => {
  let branch: any = content;
  for (const o of input) {
    branch = branch[o];
  }
  return branch && branch[language] ? branch[language] : '[content-not-found!]';
};
