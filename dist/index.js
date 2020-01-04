'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _numbro = _interopRequireDefault(require('numbro'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty &&
    Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var DEFAULT_FORMAT = '0,0[.][00]';

var toFormattedString = function toFormattedString(value, format) {
  if (value === undefined || value === null) {
    return '';
  }

  var boxed = (0, _numbro['default'])(value);

  if (isNaN(boxed.value())) {
    return '';
  }

  return boxed.format(format);
};

var toValue = function toValue(value) {
  if (!value) {
    return null;
  }

  var unformatted = (0, _numbro['default'])().unformat(value);
  return unformatted;
};

var normalisedValue = function normalisedValue(value, format) {
  return toValue(toFormattedString(toValue(value), format));
};

var constrainedValue = function constrainedValue(value, min, max) {
  if (value === null) {
    return null;
  }

  if (min !== null && value < min) {
    return min;
  }

  if (max !== null && value > max) {
    return max;
  }

  return value;
};

var NumberInput = (function(_Component) {
  _inherits(NumberInput, _Component);

  function NumberInput(props) {
    var _this;

    _classCallCheck(this, NumberInput);

    _this = _possibleConstructorReturn(
      this,
      _getPrototypeOf(NumberInput).call(this, props)
    );

    _defineProperty(_assertThisInitialized(_this), 'onBlur', function(event) {
      var _this$props = _this.props,
        min = _this$props.min,
        max = _this$props.max,
        format = _this$props.format,
        onBlur = _this$props.onBlur;

      if ('persist' in event) {
        event.persist();
      }

      _this.setState(
        {
          focused: false,
          value: toFormattedString(
            constrainedValue(
              normalisedValue(_this.state.value, format),
              min,
              max
            ),
            format
          ),
        },
        function() {
          return onBlur(event);
        }
      );
    });

    _defineProperty(_assertThisInitialized(_this), 'onFocus', function(event) {
      if ('persist' in event) {
        event.persist();
      }

      var value = toValue(_this.state.value);

      if (typeof value !== 'number') {
        value = '';
      }

      _this.setState(
        {
          focused: true,
          value: '' + value,
        },
        function() {
          return _this.props.onFocus(event);
        }
      );
    });

    _defineProperty(_assertThisInitialized(_this), 'onChange', function(event) {
      var value = event.target.value;
      var _this$props2 = _this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        format = _this$props2.format,
        onChange = _this$props2.onChange;

      if ('persist' in event) {
        event.persist();
      }

      _this.setState(
        {
          value: value,
        },
        function() {
          return onChange(
            constrainedValue(normalisedValue(value, format), min, max),
            event
          );
        }
      );
    });

    var _format = props.format, _value = props.value;
    _this.state = {
      focused: false,
      value: toFormattedString(_value, _format),
    };
    return _this;
  }

  _createClass(NumberInput, [
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!this.state.focused && 'value' in nextProps) {
          this.setState({
            value: toFormattedString(
              nextProps.value,
              nextProps.format || this.props.format || DEFAULT_FORMAT
            ),
          });
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this$state = this.state,
          focused = _this$state.focused,
          value = _this$state.value;

        var _this$props3 = this.props,
          format = _this$props3.format,
          renderer = _this$props3.renderer,
          rest = _objectWithoutProperties(_this$props3, ['format', 'renderer']);

        var displayValue = focused
          ? value
          : toFormattedString(toValue(value), format);

        var props = _objectSpread({}, rest, {
          value: displayValue,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onChange: this.onChange,
        });

        return renderer
          ? renderer(props)
          : _react['default'].createElement('input', props);
      },
    },
  ]);

  return NumberInput;
})(_react.Component);

exports['default'] = NumberInput;

_defineProperty(NumberInput, 'defaultProps', {
  format: DEFAULT_FORMAT,
  type: 'tel',
  onChange: function onChange(value) {
    return value;
  },
  onBlur: function onBlur(value) {
    return null;
  },
  onFocus: function onFocus(value) {
    return null;
  },
});
