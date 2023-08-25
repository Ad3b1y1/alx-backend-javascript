/**
 * Contains the miscellaneous route handlers.
 * @author Adebiyi Adeyemi <https://github.com/Ad3b1y1>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
