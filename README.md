# react-scroll-to-component
Smooth srolls to react component via reference

## `scrollToComponent(ref, <options>)`

##### Valid options:

>
###### offset : *number* 
> Add an offset to the final position. if > 0 then page is moved to the bottom otherwise the page is moved to the top.
###### align : *string*
> Alignment of the element. Can be one of `'top'`, `'middle'` or `'bottom'`. Defaulting to `'middle'`.
###### ease : *string*
> Easing function defaulting to "out-circ" (view [ease](https://github.com/component/ease) for more)
###### duration : *number*
> Animation duration defaulting to `1000`

## Example
```js
import scrollToComponent from 'react-scroll-to-component';

// without options
scrollToComponent(this.refs.name);

//with options
scrollToComponent(this.refs.name, {
	offset: 1000,
	align: 'top',
	duration: 1500
});
```





