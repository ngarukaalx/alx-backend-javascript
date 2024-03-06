//Handle multiple promises
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

//export function
 export default function handleProfileSignup(firstName,lastName, fileName){
    //create an array of all promises
    const promises = [uploadPhoto(fileName), signUpUser(firstName, lastName)];
    return Promise.allSettled(promises)
    .then(results => {
        //map result to deseired structure
        return results.map(results => ({
            status: results.status,
            value: results.status === 'fulfilled' ? results.value : results.reason
        }));
    });
}
