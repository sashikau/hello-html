import AbstractView from '../AbstractView.js';

export default class extends AbstractView {

  constructor() {
    super();
    this.setTitle('Sashika | Home');
  }

  getHtml() {
    return 'home/home-component.html';
  }

}
