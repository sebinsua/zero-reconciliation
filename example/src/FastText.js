import React, { Component } from 'react';
import { connect } from 'react-redux';

class FastText extends Component {

  currentValue = this.props.value;
  nextFrameId;

  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) {
      if (this.el) {
        this.nextValue = nextProps.value;
        if (this.currentValue !== this.nextValue) {
          this.nextFrameId = window.requestAnimationFrame(
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
        {value || 0}
      </span>
    );
  }
}

export { FastText }
export default connect(state => ({ value: state.value }))(FastText);
