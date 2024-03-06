// return object with required format
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promises = [uploadPhoto(), createUser()];

  try {
    const results = await Promise.all(promises);
    const ErrorPresent = results.some((result) => result instanceof Error);
    if (ErrorPresent) {
      return { photo: null, user: null };
    }
    const [photoResponse, userResponse] = results;
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return { photo: null, user: null };
  }
}
