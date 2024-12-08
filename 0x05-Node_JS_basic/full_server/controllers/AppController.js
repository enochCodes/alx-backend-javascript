/**
 * Contains the miscellaneous route handlers.
 * @author henok samson <https://github.com/enochCodes>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
