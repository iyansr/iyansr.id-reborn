import allWork from 'src/content/portfolio.json';

import { WorkType } from '../type';
import { getBase64ImageUrl } from '../utils/getBase64url';

export default async function getWork(): Promise<WorkType[]> {
  let newWork: WorkType[] = [];

  for (const work of allWork) {
    const blurDataURL = await getBase64ImageUrl(work.image);
    const temp = {
      ...work,
      blurDataURL,
    };
    newWork.push(temp);
  }

  return newWork;
}
