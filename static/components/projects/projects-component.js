import AbstractView from '../AbstractView.js';

export default class extends AbstractView {

  constructor() {
    super();
    this.setTitle('Sashika | Projects');
  }

  getHtml() {
    return 'projects/projects-component.html';
  }

}
