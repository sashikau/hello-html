import AbstractView from '../AbstractView.js';

export default class extends AbstractView {

  constructor() {
    super();
    this.setTitle('Sashika | Contact me');
  }

  getHtml() {
    return 'contact-me/contact-me-component.html';
  }

}
