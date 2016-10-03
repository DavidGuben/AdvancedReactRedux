import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

  let component; // undefined

  beforeEach(() => {
    component = renderComponent(CommentBox); // component assigned to result of renderComponent
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a test area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text in the textarea', () => {

    });

    it('when submitted, clears the input', () => {

    });

  });

});
