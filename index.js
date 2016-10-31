var ReactDOM = require('react-dom');
var scroll = require('scroll-to');

function calculateScrollOffset(element, offset, alignment) {
  var body = document.body,
      html = document.documentElement;
  var elementRect = element.getBoundingClientRect();
  var clientHeight = html.clientHeight;
  var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                                 html.clientHeight, html.scrollHeight, html.offsetHeight );
  offset = offset || 0; // additional offset to top
  var scrollPosition;
  switch(alignment) {
      case 'top': scrollPosition = elementRect.top; break;
      case 'middle': scrollPosition = elementRect.bottom - clientHeight / 2 - elementRect.height / 2; break;
      case 'bottom': scrollPosition = elementRect.bottom - clientHeight; break;
      default: scrollPosition = elementRect.bottom - clientHeight / 2 - elementRect.height / 2; break; //defaul to middle
    }
  var maxScrollPosition = documentHeight - clientHeight;
  return Math.min(scrollPosition + offset + window.pageYOffset,
                  maxScrollPosition);
}

module.exports = function (ref, options) {
  options = options || {
    offset: 0,
    align: 'middle'
  };
  var element = ReactDOM.findDOMNode(ref);
  if (element === null) return 0;
  return scroll(0, calculateScrollOffset(element, options.offset, options.align), options);
};