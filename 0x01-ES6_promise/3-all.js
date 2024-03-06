//collectively resolve all promises and log
//import uploadphoto & createUser
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {

//create an array of promises
const promises = [uploadPhoto(), createUser()];

//use promise.all to wait for all promises to resolve
Promise.all(promises)
.then(response => {
    const photoResponse = response[0];
    const userResponse = response[1];

    //log values
    console.log(photoResponse.body +' '+ userResponse.firstName+' '+ userResponse.lastName);
})
.catch(error => {
    console.log('Signup system offline');
})
}
