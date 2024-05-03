// App controller
class AppController {
  static getHomepage(request, response) {
    // returns a 200 status and
    // the message Hello Holberton School!
    response.status(200).send('Hello Holberton School!');
  }
}
export default AppController;
