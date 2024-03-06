// returns solves promise with object passed
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
}
