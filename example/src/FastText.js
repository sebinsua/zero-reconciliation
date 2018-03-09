import React, { Component, PureComponent } from 'react';

let FastText;
if (process.env.NODE_ENV !== 'production') {
  FastText = class Text extends PureComponent {
    render() {
      const { value } = this.props;
      return (
        <span className="FastText">
          {value}
        </span>
      );
    }
  }
} else {
  FastText = class FastText extends Component {

    currentValue = this.props.value;

    shouldComponentUpdate(nextProps) {
      if (nextProps.value !== this.props.value) {
        if (this.el) {
          this.nextValue = nextProps.value;
          if (this.currentValue !== this.nextValue) {
            window.requestAnimationFrame(
              () => {
                this.el.firstChild.nodeValue = this.nextValue;
                this.currentValue = this.nextValue;
              }
            );
          }
        }
      }
      return false;
    }

    render() {
      const { value } = this.props;
      return (
        <span className="FastText" ref={ref => (this.el = ref)}>
          {value}
        </span>
      );
    }
  }
}

export { FastText }
export default FastText;
