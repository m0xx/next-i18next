"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var NextStaticProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NextStaticProvider, _React$Component);

  function NextStaticProvider() {
    (0, _classCallCheck2.default)(this, NextStaticProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NextStaticProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(NextStaticProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tReady = _this$props.tReady;
      return tReady ? children : null;
    }
  }]);
  return NextStaticProvider;
}(_react.default.Component);

NextStaticProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  tReady: _propTypes.default.bool.isRequired
};

var _default = (0, _reactI18next.withNamespaces)()(NextStaticProvider);

exports.default = _default;