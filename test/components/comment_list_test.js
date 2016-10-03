import { renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {

  let component; // undefined global variable

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    component = renderComponent(CommentList, null, props); // change definition to rendering of 'CommentList'
  });

  it('shows an LI for each comment', () => {
    expect( component.find('li').length ).to.equal( 2 );
  });

  it('shows each comment that is provided', () => {
    expect( component ).contain('New Comment');
    expect( component ).contain('Other New Comment');
  });

});
