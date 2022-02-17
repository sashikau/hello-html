import AbstractView from '../AbstractView.js';

export default class extends AbstractView {

  constructor() {
    super();
    this.setTitle('Sashika | About me');
  }

  getHtml() {
    return 'about-me/about-me-component.html';
  }

}
