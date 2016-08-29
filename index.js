'use strict'

var React = require('react')

var PropTypes = React.PropTypes
var el = React.createElement

var requiredStringOrElement = PropTypes.oneOfType([
  React.PropTypes.string.isRequired,
  React.PropTypes.element.isRequired
])

var optionalStringOrNumber = PropTypes.oneOfType([
  React.PropTypes.string,
  React.PropTypes.number
])

var FloatingSuffix = React.createClass({
  displayName: 'FloatingSuffix',

  propTypes: {
    content: requiredStringOrElement,
    suffix: requiredStringOrElement,
    width: optionalStringOrNumber,
    textOverflow: PropTypes.string,
    style: PropTypes.object
  },

  floatingSuffixStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'inherit'
  },

  getDefaultProps: function () {
    return {
      width: '100%',
      textOverflow: 'ellipsis',
      style: {
        display: 'inline-block',
        float: 'left',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'white'
      }
    }
  },

  shouldFloatSuffix: function () {
    var refs = this.refs
    if (refs.content && refs.suffix) {
      var boundary = refs.container.offsetWidth - refs.suffix.offsetWidth - 10
      return refs.content.offsetWidth >= boundary
    }
  },

  componentDidMount: function () {
    var refs = this.refs

    if (this.shouldFloatSuffix()) {
      var contentWidth = refs.container.offsetWidth - refs.suffix.offsetWidth
      refs.content.style.width = contentWidth + 'px'
      Object.assign(refs.suffix.style, this.floatingSuffixStyle)
    } else {
      refs.content.style.width = 'auto'
      Object.assign(refs.suffix.style, {
        position: 'relative',
        top: '',
        right: ''
      })
    }
  },

  render: function () {
    const width = this.props.width
    const textOverflow = this.props.textOverflow

    const containerProps = {
      ref: 'container',
      style: Object.assign({},
        { width: width },
        FloatingSuffix.getDefaultProps().style,
        this.props.style)
    }

    const contentProps = {
      key: 'content',
      ref: 'content',
      style: {
        display: 'inline-block',
        float: 'left',
        whiteSpace: 'nowrap',
        textOverflow: textOverflow,
        WebkitTextOverflow: textOverflow,
        overflow: 'hidden'
      }
    }

    const suffixProps = {
      key: 'suffix',
      ref: 'suffix',
      style: {}
    }

    if (this.shouldFloatSuffix()) {
      var refs = this.refs
      var contentWidth = refs.container.offsetWidth - refs.suffix.offsetWidth
      refs.content.style.width = contentWidth + 'px'
      suffixProps.style = this.floatingSuffixStyle
    }

    return (
      el('div', containerProps, [
        el('span', contentProps, this.props.content),
        el('span', suffixProps, this.props.suffix)
      ])
    )
  }
})

module.exports = FloatingSuffix
