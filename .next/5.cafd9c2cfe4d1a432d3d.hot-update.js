webpackHotUpdate(5,{

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(741);

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = __webpack_require__(438);

var _routes = __webpack_require__(474);

var _choices = __webpack_require__(1193);

var _choices2 = _interopRequireDefault(_choices);

var _factory = __webpack_require__(1194);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(528);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Acres\\DappGainmers\\pages\\betting\\betting-form.js?entry';


var MyBets = function (_Component) {
    (0, _inherits3.default)(MyBets, _Component);

    function MyBets() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MyBets);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyBets.__proto__ || (0, _getPrototypeOf2.default)(MyBets)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8: false,
            checked9: false,
            checked10: false,
            checked11: false,
            checked12: false,
            checked1Contribution: '',
            checked2Contribution: '',
            checked3Contribution: '',
            checked4Contribution: '',
            checked5Contribution: '',
            checked6Contribution: '',
            checked7Contribution: '',
            checked8Contribution: '',
            checked9Contribution: '',
            checked10Contribution: '',
            checked11Contribution: '',
            checked12Contribution: '',
            errorMessage: '',
            loading: false,
            tryValue: ''

        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                event.preventDefault();

                                _this.setState({ loading: true,
                                    errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaing(_this.state.tryValue).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _routes.Router.pushRoute('/');

                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message.split("\n")[0] });

                            case 14:
                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.toggle = function () {
            return _this.setState({
                checked1: false,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                checked7: false,
                checked8: false,
                checked9: false,
                checked10: false,
                checked11: false,
                checked12: false
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MyBets, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {

            var items = this.props.campaigns.map(function (address) {

                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        }
                    }, ' Detalles de Campa\xF1a')),
                    fluid: true //para que se alargue
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            });
        }
    }, {
        key: 'renderBets',
        value: function renderBets() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.List, { divided: true, relaxed: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, this.state.checked1 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked1Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked1Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked1: !_this3.state.checked1,
                            checked1Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, '0'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, '0')))) : null, this.state.checked2 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked2Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked2Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked2: !_this3.state.checked2,
                            checked2Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, '0'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, '1')))) : null, this.state.checked3 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked3Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked3Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked3: !_this3.state.checked3,
                            checked3Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, '0'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, '2')))) : null, this.state.checked4 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked4Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked4Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked4: !_this3.state.checked4,
                            checked4Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            }, '1'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }, '0')))) : null, this.state.checked5 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked5Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked5Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked5: !_this3.state.checked5,
                            checked5Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 275
                }
            }, '1'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280
                }
            }, '1')))) : null, this.state.checked6 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 292
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 293
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked6Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked6Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 294
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked6: !_this3.state.checked6,
                            checked6Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 300
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 312
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 313
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 314
                }
            }, '1'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 319
                }
            }, '2')))) : null, this.state.checked7 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 331
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 332
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked7Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked7Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 333
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked7: !_this3.state.checked7,
                            checked7Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 339
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 351
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 352
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 353
                }
            }, '2'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 358
                }
            }, '0')))) : null, this.state.checked8 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 370
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 371
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked8Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked8Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 372
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked8: !_this3.state.checked8,
                            checked8Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 378
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 390
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 391
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 392
                }
            }, '2'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 397
                }
            }, '1')))) : null, this.state.checked9 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 409
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 410
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked9Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked9Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 411
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked9: !_this3.state.checked9,
                            checked9Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 417
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 429
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 430
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 431
                }
            }, '2'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 436
                }
            }, '2')))) : null, this.state.checked10 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 448
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 449
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked10Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked10Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 450
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked10: !_this3.state.checked10,
                            checked10Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 456
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 468
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 469
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 470
                }
            }, 'Wins Left Team')))) : null, this.state.checked11 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 482
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 483
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked11Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked11Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 484
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked11: !_this3.state.checked11,
                            checked11Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 490
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 502
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 503
                }
            }, _react2.default.createElement('span', {
                style: { color: 'gray',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 504
                }
            }, 'TIED')))) : null, this.state.checked12 ? _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 516
                }
            }, _react2.default.createElement(_semanticUiReact.List.Content, { floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 517
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'Value in Ether',
                value: this.state.checked12Contribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        checked12Contribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 518
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick() {
                    _this3.setState(function (prevState, props) {
                        return {
                            checked12: !_this3.state.checked12,
                            checked12Contribution: ''
                        };
                    });
                },
                icon: 'close', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 524
                }
            })), _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 536
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 537
                }
            }, _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 538
                }
            }, 'Wins Right Team')))) : null, _react2.default.createElement(_semanticUiReact.List.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 549
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 550
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { indeterminate: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 551
                }
            }, 'Procesando Transaccion')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit,
                error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 553
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 555
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 556
                }
            }, 'Minimo aporte ')), _react2.default.createElement(_semanticUiReact.Input, {
                action: {
                    color: 'teal',
                    labelPosition: 'left',
                    icon: 'thumb tack',
                    content: 'Crear' },

                actionPosition: 'left',
                placeholder: 'Value in Wei',
                value: this.state.tryValue,
                onChange: function onChange(event) {
                    return _this3.setState({
                        tryValue: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 559
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!',
                content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 573
                }
            })))), _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 578
                }
            }, _react2.default.createElement(_semanticUiReact.Header, {
                block: true,
                color: 'teal',
                as: 'h5',

                style: {
                    fontSize: '1.3em',
                    fontWeight: 'normal',
                    marginTop: '1.5em'
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 579
                }
            }, 'Total bet:', _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 590
                }
            }, ' ', +this.state.checked1Contribution + +this.state.checked2Contribution + +this.state.checked3Contribution + +this.state.checked4Contribution + +this.state.checked5Contribution + +this.state.checked6Contribution + +this.state.checked7Contribution + +this.state.checked8Contribution + +this.state.checked9Contribution + +this.state.checked10Contribution + +this.state.checked11Contribution + +this.state.checked12Contribution)), _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this3.setState({ checked10: !_this3.state.checked10 });
                },
                checked: this.state.checked10,
                label: 'Accept terms and conditions',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 606
                }
            }), _react2.default.createElement(_routes.Link, { href: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 615
                }
            }, _react2.default.createElement('a', { target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 616
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                primary: true,
                disabled: !this.state.checked10,

                size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 617
                }
            }, 'Place bet NOW!')))));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var panes = [{ menuItem: 'Bet', render: function render() {
                    return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 651
                        }
                    }, _this4.renderBets());
                } }, { menuItem: 'My Bets', render: function render() {
                    return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 654
                        }
                    }, _this4.renderCampaigns());
                } }];
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 657
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 658
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 659
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 660
                }
            }, '02 SELECT YOUR POSSIBLE RESULT AND BET:')), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 665
                }
            }, _react2.default.createElement(_choices2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 666
                }
            })), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 669
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', color: 'teal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 670
                }
            }, 'RUSSIA 2018 - GROUP STAGE', _react2.default.createElement('p', { style: { fontSize: '15px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 672
                }
            }, ' ROOM N\xB015'))), _react2.default.createElement(_semanticUiReact.Grid.Row, { columns: '2', divided: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 677
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 678
                }
            }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 679
                }
            }, _react2.default.createElement(_semanticUiReact.Flag, { name: 'eg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 680
                }
            }), 'Egypt', _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 681
                }
            }, '   VS'), _react2.default.createElement(_semanticUiReact.Flag, { style: { padding: '10px' }, name: 'sa', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 682
                }
            }), '   Saudi Arabia', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 682
                }
            }), _react2.default.createElement(_semanticUiReact.Icon, { name: 'calendar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 683
                }
            }), '14 Jun 2018', _react2.default.createElement(_semanticUiReact.Icon, { style: { padding: '0 10px' }, name: 'clock', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 684
                }
            }), '18:00 GTM-5')), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 688
                }
            }, _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 689
                }
            }, 'TOTAL POOL 9 ETH'))), _react2.default.createElement(_semanticUiReact.Grid.Row, { columns: '2', divided: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 696
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 697
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { columns: '3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 699
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 701
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 702
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 703
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked1: !_this4.state.checked1 });
                },
                checked: this.state.checked1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 704
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 711
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 712
                }
            }, '0'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 717
                }
            }, '0')))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 726
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 727
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked2: !_this4.state.checked2 });
                },
                checked: this.state.checked2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 728
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 735
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 736
                }
            }, '0'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 741
                }
            }, '1')))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 750
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 751
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked3: !_this4.state.checked3 });
                },
                checked: this.state.checked3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 752
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 759
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 760
                }
            }, '0'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 765
                }
            }, '2'))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 775
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 776
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 777
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked4: !_this4.state.checked4 });
                },
                checked: this.state.checked4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 778
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 785
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 786
                }
            }, '1'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 791
                }
            }, '0')))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 800
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 801
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked5: !_this4.state.checked5 });
                },
                checked: this.state.checked5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 802
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 809
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 810
                }
            }, '1'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 815
                }
            }, '1')))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 824
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 825
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked6: !_this4.state.checked6 });
                },
                checked: this.state.checked6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 826
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 833
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 834
                }
            }, '1'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 839
                }
            }, '2'))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 849
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 850
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 851
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked7: !_this4.state.checked7 });
                },
                checked: this.state.checked7, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 852
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 859
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 860
                }
            }, '2'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 865
                }
            }, '0')))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 874
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 875
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked8: !_this4.state.checked8 });
                },
                checked: this.state.checked8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 876
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 883
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 884
                }
            }, '2'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 889
                }
            }, '1')))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 898
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 899
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked9: !_this4.state.checked9 });
                },
                checked: this.state.checked9, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 900
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 907
                }
            }, _react2.default.createElement('span', {
                style: { color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 908
                }
            }, '2'), '-', _react2.default.createElement('span', { style: {
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 913
                }
            }, '2'))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 923
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 924
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 925
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked10: !_this4.state.checked10 });
                },
                checked: this.state.checked10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 926
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 933
                }
            }, _react2.default.createElement('span', {
                style: {
                    fontSize: 12,
                    color: 'blue',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 934
                }
            }, 'Wins Left Team')))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 946
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 947
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked11: !_this4.state.checked11 });
                },
                checked: this.state.checked11, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 948
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 955
                }
            }, _react2.default.createElement('span', {
                style: { color: 'gray',
                    marginRight: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 956
                }
            }, 'TIED')))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 966
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 967
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, {
                style: { float: 'right' },
                onChange: function onChange() {
                    _this4.setState({ checked12: !_this4.state.checked12 });
                },
                checked: this.state.checked12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 968
                }
            }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 975
                }
            }, _react2.default.createElement('span', { style: {
                    fontSize: 12,
                    color: 'red',
                    marginLeft: '5px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 977
                }
            }, 'Wins Right Team')))))), _react2.default.createElement(_semanticUiReact.Button, {
                style: { marginTop: '15px' },
                floated: 'right',
                onClick: this.toggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 988
                }
            }, 'Uncheck all')), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 997
                }
            }, _react2.default.createElement(_semanticUiReact.Tab, {
                menu: {
                    inverted: true,
                    compact: true
                },
                panes: panes, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 998
                }
            })))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context2.sent;
                                return _context2.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return MyBets;
}(_react.Component);

exports.default = MyBets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxiZXR0aW5nXFxiZXR0aW5nLWZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJJbnB1dCIsIkRpbW1lciIsIkxvYWRlciIsIkZvcm0iLCJNZXNzYWdlIiwiQ2FyZCIsIkdyaWQiLCJMaXN0IiwiVGFiIiwiSGVhZGVyIiwiRmxhZyIsIkljb24iLCJDb250YWluZXIiLCJDaGVja2JveCIsIkJ1dHRvbiIsIlNlZ21lbnQiLCJMaW5rIiwiUm91dGVyIiwiQ2hvaWNlcyIsImZhY3RvcnkiLCJ3ZWIzIiwiTXlCZXRzIiwic3RhdGUiLCJjaGVja2VkMSIsImNoZWNrZWQyIiwiY2hlY2tlZDMiLCJjaGVja2VkNCIsImNoZWNrZWQ1IiwiY2hlY2tlZDYiLCJjaGVja2VkNyIsImNoZWNrZWQ4IiwiY2hlY2tlZDkiLCJjaGVja2VkMTAiLCJjaGVja2VkMTEiLCJjaGVja2VkMTIiLCJjaGVja2VkMUNvbnRyaWJ1dGlvbiIsImNoZWNrZWQyQ29udHJpYnV0aW9uIiwiY2hlY2tlZDNDb250cmlidXRpb24iLCJjaGVja2VkNENvbnRyaWJ1dGlvbiIsImNoZWNrZWQ1Q29udHJpYnV0aW9uIiwiY2hlY2tlZDZDb250cmlidXRpb24iLCJjaGVja2VkN0NvbnRyaWJ1dGlvbiIsImNoZWNrZWQ4Q29udHJpYnV0aW9uIiwiY2hlY2tlZDlDb250cmlidXRpb24iLCJjaGVja2VkMTBDb250cmlidXRpb24iLCJjaGVja2VkMTFDb250cmlidXRpb24iLCJjaGVja2VkMTJDb250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwidHJ5VmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpbmciLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJzcGxpdCIsInRvZ2dsZSIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInRhcmdldCIsInZhbHVlIiwicHJldlN0YXRlIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJsYWJlbFBvc2l0aW9uIiwiaWNvbiIsImNvbnRlbnQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Ub3AiLCJmbG9hdCIsInBhbmVzIiwibWVudUl0ZW0iLCJyZW5kZXIiLCJyZW5kZXJCZXRzIiwicmVuZGVyQ2FtcGFpZ25zIiwicGFkZGluZyIsImludmVydGVkIiwiY29tcGFjdCIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQU0sQUFBTyxBQUFPLEFBQUssQUFBUSxBQUFLLEFBQUssQUFBSyxBQUFJLEFBQU8sQUFBSyxBQUFLLEFBQVUsQUFBUyxBQUFPOztBQUN2RyxBQUFRLEFBQUssQUFBYTs7QUFDMUIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBR1g7Ozs7Ozs7Ozs7Ozs7OztnTkFRRixBO3NCQUFRLEFBQ00sQUFDVjtzQkFGSSxBQUVNLEFBQ1Y7c0JBSEksQUFHTSxBQUNWO3NCQUpJLEFBSU0sQUFDVjtzQkFMSSxBQUtNLEFBQ1Y7c0JBTkksQUFNTSxBQUNWO3NCQVBJLEFBT00sQUFDVjtzQkFSSSxBQVFNLEFBQ1Y7c0JBVEksQUFTTSxBQUNWO3VCQVZJLEFBVU8sQUFDWDt1QkFYSSxBQVdPLEFBQ1g7dUJBWkksQUFZTyxBQUNYO2tDQWJJLEFBYWlCLEFBQ3JCO2tDQWRJLEFBY2lCLEFBQ3JCO2tDQWZJLEFBZWlCLEFBQ3JCO2tDQWhCSSxBQWdCaUIsQUFDckI7a0NBakJJLEFBaUJpQixBQUNyQjtrQ0FsQkksQUFrQmlCLEFBQ3JCO2tDQW5CSSxBQW1CaUIsQUFDckI7a0NBcEJJLEFBb0JpQixBQUNyQjtrQ0FyQkksQUFxQmlCLEFBQ3JCO21DQXRCSSxBQXNCa0IsQUFDdEI7bUNBdkJJLEFBdUJrQixBQUN0QjttQ0F4QkksQUF3QmtCLEFBQ3RCOzBCQXpCSSxBQXlCUyxBQUNiO3FCQTFCSSxBQTBCSyxBQUNUO3NCQTNCSSxBQTJCSyxBOztBQTNCTCxBQUNKLGlCLEFBK0JSO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FFSDs7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVcsQUFDcEI7a0RBTEYsQUFJSCxBQUFjLEFBQ0k7O2dEQUxmO2dEQUFBO3VDQVF3QixjQUFBLEFBQUssSUFSN0IsQUFRd0IsQUFBUzs7aUNBQTFCO0FBUlAsb0RBQUE7Z0RBQUE7eURBU08sQUFBUSxRQUFSLEFBQ0MsZUFBZSxNQUFBLEFBQUssTUFEckIsQUFDMkIsVUFEM0IsQUFFQzswQ0FDVyxTQVpuQixBQVNPLEFBRU0sQUFDTSxBQUFTO0FBRGYsQUFDQSxpQ0FITjs7aUNBS0E7K0NBQUEsQUFBTyxVQWRkLEFBY08sQUFBaUI7O2dEQWR4QjtBQUFBOztpQ0FBQTtnREFBQTtnRUFpQkM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFBQSxBQUFJLFFBQUosQUFBWSxNQUFaLEFBQWtCLE1BakJoRCxBQWlCQyxBQUFjLEFBQWUsQUFBd0I7O2lDQUd6RDtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQXBCWixBQW9CSCxBQUFjLEFBQVc7O2lDQXBCdEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7bUIsQUFza0JYLFNBQVMsWUFBQTt5QkFBTSxBQUFLOzBCQUFTLEFBQ1gsQUFDVjswQkFGcUIsQUFFWCxBQUNWOzBCQUhxQixBQUdYLEFBQ1Y7MEJBSnFCLEFBSVgsQUFDVjswQkFMcUIsQUFLWCxBQUNWOzBCQU5xQixBQU1YLEFBQ1Y7MEJBUHFCLEFBT1gsQUFDVjswQkFScUIsQUFRWCxBQUNWOzBCQVRxQixBQVNYLEFBQ1Y7MkJBVnFCLEFBVVYsQUFDWDsyQkFYcUIsQUFXVixBQUNYOzJCQVpDLEFBQU0sQUFBYyxBQVlWO0FBWlUsQUFDckIsYUFETztBOzs7OzswQ0E5aUJFLEFBRVQ7O2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFLLG1CQUFXLEFBRS9DOzs7NEJBQU8sQUFDSyxBQUNSO2lEQUNBLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7c0NBQTNCO3dDQUFBLEFBQ0E7QUFEQTtxQkFBQSxrQkFDQSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkcsQUFHSCxBQUNBLEFBR0E7MkJBUEcsQUFPSSxLQVBYLEFBQU8sQUFPUyxBQUVuQjtBQVRVLEFBQ0g7QUFIUixBQUFjLEFBYWQsYUFiYzs7aURBYVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNkO0FBRGM7YUFBQTs7OztxQ0FFSDt5QkFFVDs7bUNBQVEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDUDtBQURPO0FBQUEsYUFBQSxrQkFDUCxBQUFDLHVDQUFLLFNBQU4sTUFBYyxTQUFkOzhCQUFBO2dDQUFBLEFBRUs7QUFGTDtvQkFFSyxBQUFLLE1BQUwsQUFBVywyQkFDTCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0U7QUFERjtBQUFBLGFBQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNLFdBQVEsU0FBZCxBQUFzQjs4QkFBdEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7NkJBQUQsQUFDb0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFGcEIsQUFFMEIsQUFDbEI7MEJBQVcseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsQUFDakM7OENBQXNCLE1BQUEsQUFBTSxPQURqQixBQUFRLEFBQWMsQUFDRTtBQUozQzs7OEJBQUE7Z0NBREosQUFDSSxBQU1BO0FBTkE7QUFDUSxnQ0FLUixBQUFDO3lCQUNTLG1CQUFJLEFBQ1Q7MkJBQUEsQUFBSyxTQUFTLFVBQUEsQUFBQyxXQUFELEFBQWEsT0FBYjs7c0NBQ0QsQ0FBQyxPQUFBLEFBQUssTUFEaUIsQUFDWCxBQUN0QjtrREFGVyxBQUFzQixBQUVYO0FBRlcsQUFDakM7QUFESCxBQUlBO0FBTkwsQUFPRTtzQkFQRixBQU9POzhCQVBQO2dDQVJOLEFBQ0UsQUFPSSxBQVlKO0FBWkk7QUFDQyxpQ0FXSixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sSUFBUixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBO3VCQUNPLEVBQUMsT0FBRCxBQUFPLEFBQ2Q7aUNBRkEsQUFDTyxBQUNLOzhCQUZaO2dDQUFBO0FBQUE7QUFDQSxlQUZKLEFBQ0ksTUFLQSxxQkFBQSxjQUFBLFVBQU07MkJBQU8sQUFDTixBQUNQLEtBRmEsQUFDWjtnQ0FERCxBQUFhLEFBRUY7OEJBRlg7Z0NBQUE7QUFBQTtlQTVCZixBQUNLLEFBb0JFLEFBQ0ksQUFNSSxVQTlCcEIsQUF1Q08sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzs4Q0FBc0IsTUFBQSxBQUFNLE9BRGpCLEFBQVEsQUFBYyxBQUNFO0FBSjNDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOztzQ0FDRCxDQUFDLE9BQUEsQUFBSyxNQURpQixBQUNYLEFBQ3RCO2tEQUZXLEFBQXNCLEFBRVg7QUFGVyxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBRkosQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNOLEFBQ1AsS0FGYSxBQUNaO2dDQURELEFBQWEsQUFFRjs4QkFGWDtnQ0FBQTtBQUFBO2VBNUJoQixBQUNNLEFBb0JFLEFBQ0ksQUFNSSxVQXJFcEIsQUE4RU8sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzs4Q0FBc0IsTUFBQSxBQUFNLE9BRGpCLEFBQVEsQUFBYyxBQUNFO0FBSjNDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOztzQ0FDRCxDQUFDLE9BQUEsQUFBSyxNQURpQixBQUNYLEFBQ3RCO2tEQUZXLEFBQXNCLEFBRVg7QUFGVyxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBRkosQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNOLEFBQ1AsS0FGYSxBQUNaO2dDQURELEFBQWEsQUFFRjs4QkFGWDtnQ0FBQTtBQUFBO2VBNUJoQixBQUNNLEFBb0JFLEFBQ0ksQUFNSSxVQTVHcEIsQUFxSE8sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzs4Q0FBc0IsTUFBQSxBQUFNLE9BRGpCLEFBQVEsQUFBYyxBQUNFO0FBSjNDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOztzQ0FDRCxDQUFDLE9BQUEsQUFBSyxNQURpQixBQUNYLEFBQ3RCO2tEQUZXLEFBQXNCLEFBRVg7QUFGVyxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBRkosQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNOLEFBQ1AsS0FGYSxBQUNaO2dDQURELEFBQWEsQUFFRjs4QkFGWDtnQ0FBQTtBQUFBO2VBNUJoQixBQUNNLEFBb0JFLEFBQ0ksQUFNSSxVQW5KcEIsQUE0Sk8sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzs4Q0FBc0IsTUFBQSxBQUFNLE9BRGpCLEFBQVEsQUFBYyxBQUNFO0FBSjNDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOztzQ0FDRCxDQUFDLE9BQUEsQUFBSyxNQURpQixBQUNYLEFBQ3RCO2tEQUZXLEFBQXNCLEFBRVg7QUFGVyxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBRkosQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNOLEFBQ1AsS0FGYSxBQUNaO2dDQURELEFBQWEsQUFFRjs4QkFGWDtnQ0FBQTtBQUFBO2VBNUJoQixBQUNNLEFBb0JFLEFBQ0ksQUFNSSxVQTFMcEIsQUFtTU8sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzs4Q0FBc0IsTUFBQSxBQUFNLE9BRGpCLEFBQVEsQUFBYyxBQUNFO0FBSjNDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOztzQ0FDRCxDQUFDLE9BQUEsQUFBSyxNQURpQixBQUNYLEFBQ3RCO2tEQUZXLEFBQXNCLEFBRVg7QUFGVyxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBRkosQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNOLEFBQ1AsS0FGYSxBQUNaO2dDQURELEFBQWEsQUFFRjs4QkFGWDtnQ0FBQTtBQUFBO2VBNUJoQixBQUNNLEFBb0JFLEFBQ0ksQUFNSSxVQWpPcEIsQUEwT08sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzs4Q0FBc0IsTUFBQSxBQUFNLE9BRGpCLEFBQVEsQUFBYyxBQUNFO0FBSjNDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOztzQ0FDRCxDQUFDLE9BQUEsQUFBSyxNQURpQixBQUNYLEFBQ3RCO2tEQUZXLEFBQXNCLEFBRVg7QUFGVyxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBRkosQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNOLEFBQ1AsS0FGYSxBQUNaO2dDQURELEFBQWEsQUFFRjs4QkFGWDtnQ0FBQTtBQUFBO2VBNUJoQixBQUNNLEFBb0JFLEFBQ0ksQUFNSSxVQXhRcEIsQUFpUk8sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzs4Q0FBc0IsTUFBQSxBQUFNLE9BRGpCLEFBQVEsQUFBYyxBQUNFO0FBSjNDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOztzQ0FDRCxDQUFDLE9BQUEsQUFBSyxNQURpQixBQUNYLEFBQ3RCO2tEQUZXLEFBQXNCLEFBRVg7QUFGVyxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBRkosQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNOLEFBQ1AsS0FGYSxBQUNaO2dDQURELEFBQWEsQUFFRjs4QkFGWDtnQ0FBQTtBQUFBO2VBNUJoQixBQUNNLEFBb0JFLEFBQ0ksQUFNSSxVQS9TcEIsQUF3VE8sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzs4Q0FBc0IsTUFBQSxBQUFNLE9BRGpCLEFBQVEsQUFBYyxBQUNFO0FBSjNDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOztzQ0FDRCxDQUFDLE9BQUEsQUFBSyxNQURpQixBQUNYLEFBQ3RCO2tEQUZXLEFBQXNCLEFBRVg7QUFGVyxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBRkosQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNOLEFBQ1AsS0FGYSxBQUNaO2dDQURELEFBQWEsQUFFRjs4QkFGWDtnQ0FBQTtBQUFBO2VBNUJoQixBQUNNLEFBb0JFLEFBQ0ksQUFNSSxVQXRWcEIsQUErVk8sQUFFSCxXQUFBLEFBQUssTUFBTCxBQUFXLDRCQUNKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU0sV0FBUSxTQUFkLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs2QkFBRCxBQUNvQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUZwQixBQUUwQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxBQUNqQzsrQ0FBdUIsTUFBQSxBQUFNLE9BRGxCLEFBQVEsQUFBYyxBQUNHO0FBSjVDOzs4QkFBQTtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNRLGdDQUtSLEFBQUM7eUJBQ1MsbUJBQUksQUFDVDsyQkFBQSxBQUFLLFNBQVMsVUFBQSxBQUFDLFdBQUQsQUFBYSxPQUFiOzt1Q0FDQSxDQUFDLE9BQUEsQUFBSyxNQURnQixBQUNWLEFBQ3ZCO21EQUZXLEFBQXNCLEFBRVY7QUFGVSxBQUNqQztBQURILEFBSUE7QUFOTCxBQU9FO3NCQVBGLEFBT087OEJBUFA7Z0NBUk4sQUFDRSxBQU9JLEFBWUo7QUFaSTtBQUNDLGlDQVdKLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ08sRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGQSxBQUNPLEFBQ0s7OEJBRlo7Z0NBQUE7QUFBQTtBQUNBLGVBeEJoQixBQUNNLEFBb0JFLEFBQ0ksQUFDSSx1QkF4WHBCLEFBaVlPLEFBRUgsV0FBQSxBQUFLLE1BQUwsQUFBVyw0QkFDSixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0U7QUFERjtBQUFBLGFBQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNLFdBQVEsU0FBZCxBQUFzQjs4QkFBdEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7NkJBQUQsQUFDb0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFGcEIsQUFFMEIsQUFDbEI7MEJBQVcseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsQUFDakM7K0NBQXVCLE1BQUEsQUFBTSxPQURsQixBQUFRLEFBQWMsQUFDRztBQUo1Qzs7OEJBQUE7Z0NBREosQUFDSSxBQU1BO0FBTkE7QUFDUSxnQ0FLUixBQUFDO3lCQUNTLG1CQUFJLEFBQ1Q7MkJBQUEsQUFBSyxTQUFTLFVBQUEsQUFBQyxXQUFELEFBQWEsT0FBYjs7dUNBQ0EsQ0FBQyxPQUFBLEFBQUssTUFEZ0IsQUFDVixBQUN2QjttREFGVyxBQUFzQixBQUVWO0FBRlUsQUFDakM7QUFESCxBQUlBO0FBTkwsQUFPRTtzQkFQRixBQU9POzhCQVBQO2dDQVJOLEFBQ0UsQUFPSSxBQVlKO0FBWkk7QUFDQyxpQ0FXSixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sSUFBUixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBO3VCQUNPLEVBQUMsT0FBRCxBQUFPLEFBQ2Q7aUNBRkEsQUFDTyxBQUNLOzhCQUZaO2dDQUFBO0FBQUE7QUFDQSxlQXhCaEIsQUFDTSxBQW9CRSxBQUNJLEFBQ0ksYUExWnBCLEFBbWFPLEFBRUgsV0FBQSxBQUFLLE1BQUwsQUFBVyw0QkFDSixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0U7QUFERjtBQUFBLGFBQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNLFdBQVEsU0FBZCxBQUFzQjs4QkFBdEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7NkJBQUQsQUFDb0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFGcEIsQUFFMEIsQUFDbEI7MEJBQVcseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsQUFDakM7K0NBQXVCLE1BQUEsQUFBTSxPQURsQixBQUFRLEFBQWMsQUFDRztBQUo1Qzs7OEJBQUE7Z0NBREosQUFDSSxBQU1BO0FBTkE7QUFDUSxnQ0FLUixBQUFDO3lCQUNTLG1CQUFJLEFBQ1Q7MkJBQUEsQUFBSyxTQUFTLFVBQUEsQUFBQyxXQUFELEFBQWEsT0FBYjs7dUNBQ0EsQ0FBQyxPQUFBLEFBQUssTUFEZ0IsQUFDVixBQUN2QjttREFGVyxBQUFzQixBQUVWO0FBRlUsQUFDakM7QUFESCxBQUlBO0FBTkwsQUFPRTtzQkFQRixBQU9POzhCQVBQO2dDQVJOLEFBQ0UsQUFPSSxBQVlKO0FBWkk7QUFDQyxpQ0FXSixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sSUFBUixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFVBQU07MkJBQU8sQUFDTixBQUNQLEtBRmEsQUFDWjtnQ0FERCxBQUFhLEFBRUY7OEJBRlg7Z0NBQUE7QUFBQTtlQXZCaEIsQUFDTSxBQW9CRSxBQUNJLEFBQ0ksd0JBNWJwQixBQXFjTyxBQUVWLHNCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDbUI7QUFEbkI7QUFBQSwrQkFDbUIsQUFBQyx5Q0FBTyxRQUFRLEtBQUEsQUFBSyxNQUFyQixBQUEyQjs4QkFBM0I7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQVEsZUFBVDs4QkFBQTtnQ0FBQTtBQUFBO2VBRnZCLEFBQ21CLEFBQ0ksQUFFSiw0Q0FBQSxBQUFDLHVDQUFLLFVBQVcsS0FBakIsQUFBc0IsQUFDdEI7dUJBQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQURkLEFBQ29COzhCQURwQjtnQ0FBQSxBQUVBO0FBRkE7K0JBRUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFIQSxBQUVBLEFBQ0EsQUFHQSxvQ0FBQSxBQUFDO3dCQUNlLEFBQ0E7MkJBREEsQUFDTyxBQUNQO21DQUZBLEFBRWUsQUFDZjswQkFIQSxBQUdNLEFBQ047NkJBTGhCLEFBQ2dCLEFBSVMsQUFHakI7O2dDQVJSLEFBUXVCLEFBQ2Y7NkJBVFIsQUFTb0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFWcEIsQUFVMEIsQUFDbEI7MEJBQVcseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsQUFDakM7a0NBQVcsTUFBQSxBQUFNLE9BRE4sQUFBUSxBQUFjLEFBQ1Q7QUFaaEM7OzhCQUFBO2dDQU5BLEFBTUEsQUFjQTtBQWRBO0FBQ1EsZ0NBYVIsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixBQUN0Qjt5QkFBUyxLQUFBLEFBQUssTUFEZCxBQUNvQjs4QkFEcEI7Z0NBaGVULEFBQ1AsQUF1Y0gsQUFJbUIsQUFvQkEsQUFLaEI7QUFMZ0I7bUNBS2hCLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ1E7QUFEUjtBQUFBLCtCQUNRLEFBQUM7dUJBQUQsQUFFSTt1QkFGSixBQUVXLEFBQ1A7b0JBSEosQUFHTyxBQUVIOzs7OEJBQU8sQUFDUSxBQUNYO2dDQUZHLEFBRVMsQUFDWjsrQkFSUixBQUtXLEFBR1E7QUFIUixBQUNIOzhCQU5SO2dDQUFBO0FBQUE7QUFDSSxlQVVBLDhCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNDLE1BQUMsS0FBQSxBQUFLLE1BQVAsQUFBYSx1QkFDWixDQUFDLEtBQUEsQUFBSyxNQURQLEFBQ2EsdUJBQ1osQ0FBQyxLQUFBLEFBQUssTUFGUCxBQUVhLHVCQUNaLENBQUMsS0FBQSxBQUFLLE1BSFAsQUFHYSx1QkFDWixDQUFDLEtBQUEsQUFBSyxNQUpQLEFBSWEsdUJBQ1osQ0FBQyxLQUFBLEFBQUssTUFMUCxBQUthLHVCQUNaLENBQUMsS0FBQSxBQUFLLE1BTlAsQUFNYSx1QkFDWixDQUFDLEtBQUEsQUFBSyxNQVBQLEFBT2EsdUJBQ1osQ0FBQyxLQUFBLEFBQUssTUFSUCxBQVFhLHVCQUNaLENBQUMsS0FBQSxBQUFLLE1BVFAsQUFTYSx3QkFDWixDQUFDLEtBQUEsQUFBSyxNQVZQLEFBVWEsd0JBQ1osQ0FBQyxLQUFBLEFBQUssTUF4Qm5CLEFBQ1EsQUFXSSxBQVlhLEFBSWpCLHlDQUFBLEFBQUM7dUJBQ1UsRUFBQyxPQURaLEFBQ1csQUFBTyxBQUNiOzBCQUFVLG9CQUFLLEFBQ0o7MkJBQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQUEsQUFBSyxNQUFqQyxBQUFjLEFBQXlCLEFBQ2xDO0FBSnJCLEFBS0k7eUJBQVMsS0FBQSxBQUFLLE1BTGxCLEFBS3dCLEFBQ3BCO3VCQU5KLEFBTVU7OzhCQU5WO2dDQTVCUixBQTRCUSxBQVNBO0FBVEE7QUFDSSxnQ0FRSixBQUFDLDhCQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQSxPQUFHLFFBQUgsQUFBVTs4QkFBVjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsQUFBQzt5QkFBRCxBQUVJOzBCQUFVLENBQUMsS0FBQSxBQUFLLE1BRnBCLEFBRTBCLEFBRXRCOztzQkFKSixBQUlTOzhCQUpUO2dDQUFBO0FBQUE7QUFDSSxlQTdnQmIsQUFBUSxBQXFlUCxBQXFDUSxBQUNBLEFBQ0EsQUFjWDs7OztpQ0FpQlc7eUJBQ0o7O2dCQUFNLFdBQ0EsVUFBRixBQUFZLE9BQU8sUUFBUSxrQkFBQTsyQ0FDekIsY0FBRCxxQkFBQSxBQUFLOztzQ0FBTDt3Q0FBQSxBQUNDO0FBREQ7QUFBQSxxQkFBQSxTQUQwQixBQUMxQixBQUNDLEFBQUs7QUFIRyxBQUNWLGlCQUFBLEVBRFUsSUFLUixVQUFGLEFBQVksV0FBVyxRQUFRLGtCQUFBOzJDQUFPLGNBQUQscUJBQUEsQUFBSzs7c0NBQUw7d0NBQUEsQUFBVztBQUFYO0FBQUEscUJBQUEsU0FBTixBQUFNLEFBQVcsQUFBSztBQUx6RCxBQUFjLEFBS1YsQUFFSixpQkFGSTttQ0FHQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxPQUFoQixBQUFzQixRQUFPLFdBQTdCLEFBQXVDOzhCQUF2QztnQ0FBQTtBQUFBO2VBRlIsQUFDSSxBQUNJLEFBS0osNkRBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDOzs4QkFBRDtnQ0FSUixBQU9JLEFBQ0ksQUFHSjtBQUhJO0FBQUEsaUNBR0gsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLE9BQWhCLEFBQXNCOzhCQUF0QjtnQ0FBQTtBQUFBO2VBRUksNkNBQUEsY0FBQSxPQUFHLE9BQU8sRUFBRSxVQUFaLEFBQVUsQUFBVzs4QkFBckI7Z0NBQUE7QUFBQTtlQWRaLEFBV0ksQUFDSSxBQUVJLEFBS1Isb0NBQUMsY0FBRCxzQkFBQSxBQUFNLE9BQUksU0FBVixBQUFrQixLQUFJLFNBQXRCOzhCQUFBO2dDQUFBLEFBQ1E7QUFEUjsrQkFDUyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMsNENBQVUsTUFBWDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx1Q0FBSyxNQUFOLEFBQVk7OEJBQVo7Z0NBREosQUFDSTtBQUFBO2dCQUNBLHlCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSwwQkFBQSxBQUFDLHVDQUFLLE9BQU8sRUFBQyxTQUFkLEFBQWEsQUFBVSxVQUFTLE1BQWhDLEFBQXNDOzhCQUF0QztnQ0FISixBQUdJO0FBQUE7Z0JBQTZEOzs4QkFBQTtnQ0FIakUsQUFHaUUsQUFDN0Q7QUFENkQ7QUFBQSxnQ0FDN0QsQUFBQyx1Q0FBTSxNQUFQLEFBQVk7OEJBQVo7Z0NBSkosQUFJSTtBQUFBO2dCQUNBLCtCQUFBLEFBQUMsdUNBQUssT0FBTyxFQUFDLFNBQWQsQUFBYSxBQUFVLFlBQVUsTUFBakMsQUFBc0M7OEJBQXRDO2dDQUxKLEFBS0k7QUFBQTtnQkFQWixBQUNRLEFBQ0EsQUFTQSxpQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBO0FBQUE7QUFBQSxlQS9CaEIsQUFtQkksQUFXUSxBQUNJLEFBT1osdUNBQUMsY0FBRCxzQkFBQSxBQUFNLE9BQUksU0FBVixBQUFrQixLQUFJLFNBQXRCOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBRUk7QUFGSjtBQUFBLCtCQUVJLEFBQUMsdUNBQUssU0FBTixBQUFjOzhCQUFkO2dDQUFBLEFBRUE7QUFGQTsrQkFFQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt1QkFDTSxFQUFDLE9BRFIsQUFDTyxBQUFPLEFBQ2Q7MEJBQVUsb0JBQUssQUFDWDsyQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLENBQUMsT0FBQSxBQUFLLE1BQWhDLEFBQWMsQUFBd0IsQUFDckM7QUFKTCxBQU1BO3lCQUFTLEtBQUEsQUFBSyxNQU5kLEFBTW9COzhCQU5wQjtnQ0FESixBQUNJLEFBT0E7QUFQQTtBQUNBLGdDQU1BLEFBQUMseUNBQU8sSUFBUixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBO3VCQUNXLEVBQUMsT0FBRCxBQUFPLEFBQ2Q7aUNBRkosQUFDVyxBQUNLOzhCQUZoQjtnQ0FBQTtBQUFBO0FBQ0ksZUFGUixBQUNJLE1BS0EscUJBQUEsY0FBQSxVQUFNOzJCQUFPLEFBQ0gsQUFDTixLQUZTLEFBQ1Q7Z0NBREosQUFBYSxBQUVFOzhCQUZmO2dDQUFBO0FBQUE7ZUFoQmhCLEFBQ0ksQUFDSSxBQVFJLEFBTUksQUFTWix5QkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7dUJBQ00sRUFBQyxPQURSLEFBQ08sQUFBTyxBQUNkOzBCQUFVLG9CQUFLLEFBQ1g7MkJBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxDQUFDLE9BQUEsQUFBSyxNQUFoQyxBQUFjLEFBQXdCLEFBQ3JDO0FBSkwsQUFNQTt5QkFBUyxLQUFBLEFBQUssTUFOZCxBQU1vQjs4QkFOcEI7Z0NBREosQUFDSSxBQU9BO0FBUEE7QUFDQSxnQ0FNQSxBQUFDLHlDQUFPLElBQVIsQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTt1QkFDVyxFQUFDLE9BQUQsQUFBTyxBQUNkO2lDQUZKLEFBQ1csQUFDSzs4QkFGaEI7Z0NBQUE7QUFBQTtBQUNJLGVBRlIsQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNILEFBQ04sS0FGUyxBQUNUO2dDQURKLEFBQWEsQUFFRTs4QkFGZjtnQ0FBQTtBQUFBO2VBeENoQixBQXlCSSxBQUNJLEFBUUksQUFNSSxBQVNaLHlCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt1QkFDTSxFQUFDLE9BRFIsQUFDTyxBQUFPLEFBQ2Q7MEJBQVUsb0JBQUssQUFDWDsyQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLENBQUMsT0FBQSxBQUFLLE1BQWhDLEFBQWMsQUFBd0IsQUFDckM7QUFKTCxBQU1BO3lCQUFTLEtBQUEsQUFBSyxNQU5kLEFBTW9COzhCQU5wQjtnQ0FESixBQUNJLEFBT0E7QUFQQTtBQUNBLGdDQU1BLEFBQUMseUNBQU8sSUFBUixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBO3VCQUNXLEVBQUMsT0FBRCxBQUFPLEFBQ2Q7aUNBRkosQUFDVyxBQUNLOzhCQUZoQjtnQ0FBQTtBQUFBO0FBQ0ksZUFGUixBQUNJLE1BS0EscUJBQUEsY0FBQSxVQUFNOzJCQUFPLEFBQ0gsQUFDTixLQUZTLEFBQ1Q7Z0NBREosQUFBYSxBQUVFOzhCQUZmO2dDQUFBO0FBQUE7ZUFsRWhCLEFBRUEsQUFpREksQUFDSSxBQVFJLEFBTUksQUFVaEIsMEJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7dUJBQ00sRUFBQyxPQURSLEFBQ08sQUFBTyxBQUNkOzBCQUFVLG9CQUFLLEFBQ1g7MkJBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxDQUFDLE9BQUEsQUFBSyxNQUFoQyxBQUFjLEFBQXdCLEFBQ3JDO0FBSkwsQUFNQTt5QkFBUyxLQUFBLEFBQUssTUFOZCxBQU1vQjs4QkFOcEI7Z0NBREosQUFDSSxBQU9BO0FBUEE7QUFDQSxnQ0FNQSxBQUFDLHlDQUFPLElBQVIsQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTt1QkFDVyxFQUFDLE9BQUQsQUFBTyxBQUNkO2lDQUZKLEFBQ1csQUFDSzs4QkFGaEI7Z0NBQUE7QUFBQTtBQUNJLGVBRlIsQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNILEFBQ04sS0FGUyxBQUNUO2dDQURKLEFBQWEsQUFFRTs4QkFGZjtnQ0FBQTtBQUFBO2VBaEJaLEFBQ0ksQUFDQSxBQVFJLEFBTUksQUFTUix5QkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7dUJBQ00sRUFBQyxPQURSLEFBQ08sQUFBTyxBQUNkOzBCQUFVLG9CQUFLLEFBQ1g7MkJBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxDQUFDLE9BQUEsQUFBSyxNQUFoQyxBQUFjLEFBQXdCLEFBQ3JDO0FBSkwsQUFNQTt5QkFBUyxLQUFBLEFBQUssTUFOZCxBQU1vQjs4QkFOcEI7Z0NBREosQUFDSSxBQU9BO0FBUEE7QUFDQSxnQ0FNQSxBQUFDLHlDQUFPLElBQVIsQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTt1QkFDVyxFQUFDLE9BQUQsQUFBTyxBQUNkO2lDQUZKLEFBQ1csQUFDSzs4QkFGaEI7Z0NBQUE7QUFBQTtBQUNJLGVBRlIsQUFDSSxNQUtBLHFCQUFBLGNBQUEsVUFBTTsyQkFBTyxBQUNILEFBQ04sS0FGUyxBQUNUO2dDQURKLEFBQWEsQUFFRTs4QkFGZjtnQ0FBQTtBQUFBO2VBeENaLEFBeUJJLEFBQ0EsQUFRSSxBQU1JLEFBU1IseUJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3VCQUNNLEVBQUMsT0FEUixBQUNPLEFBQU8sQUFDZDswQkFBVSxvQkFBSyxBQUNYOzJCQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFBLEFBQUssTUFBaEMsQUFBYyxBQUF3QixBQUNyQztBQUpMLEFBTUE7eUJBQVMsS0FBQSxBQUFLLE1BTmQsQUFNb0I7OEJBTnBCO2dDQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0EsZ0NBTUEsQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ1csRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGSixBQUNXLEFBQ0s7OEJBRmhCO2dDQUFBO0FBQUE7QUFDSSxlQUZSLEFBQ0ksTUFLQSxxQkFBQSxjQUFBLFVBQU07MkJBQU8sQUFDSCxBQUNOLEtBRlMsQUFDVDtnQ0FESixBQUFhLEFBRUU7OEJBRmY7Z0NBQUE7QUFBQTtlQTVJWixBQTRFQSxBQWlESSxBQUNBLEFBUUksQUFNSSxBQVVaLDBCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3VCQUNNLEVBQUMsT0FEUixBQUNPLEFBQU8sQUFDZDswQkFBVSxvQkFBSyxBQUNYOzJCQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFBLEFBQUssTUFBaEMsQUFBYyxBQUF3QixBQUNyQztBQUpMLEFBTUE7eUJBQVMsS0FBQSxBQUFLLE1BTmQsQUFNb0I7OEJBTnBCO2dDQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0EsZ0NBTUEsQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ1csRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGSixBQUNXLEFBQ0s7OEJBRmhCO2dDQUFBO0FBQUE7QUFDSSxlQUZSLEFBQ0ksTUFLQSxxQkFBQSxjQUFBLFVBQU07MkJBQU8sQUFDSCxBQUNOLEtBRlMsQUFDVDtnQ0FESixBQUFhLEFBRUU7OEJBRmY7Z0NBQUE7QUFBQTtlQWhCWixBQUNJLEFBQ0EsQUFRSSxBQU1JLEFBU1IseUJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3VCQUNNLEVBQUMsT0FEUixBQUNPLEFBQU8sQUFDZDswQkFBVSxvQkFBSyxBQUNYOzJCQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFBLEFBQUssTUFBaEMsQUFBYyxBQUF3QixBQUNyQztBQUpMLEFBTUE7eUJBQVMsS0FBQSxBQUFLLE1BTmQsQUFNb0I7OEJBTnBCO2dDQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0EsZ0NBTUEsQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ1csRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGSixBQUNXLEFBQ0s7OEJBRmhCO2dDQUFBO0FBQUE7QUFDSSxlQUZSLEFBQ0ksTUFLQSxxQkFBQSxjQUFBLFVBQU07MkJBQU8sQUFDSCxBQUNOLEtBRlMsQUFDVDtnQ0FESixBQUFhLEFBRUU7OEJBRmY7Z0NBQUE7QUFBQTtlQXhDWixBQXlCSSxBQUNBLEFBUUksQUFNSSxBQVNSLHlCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt1QkFDTSxFQUFDLE9BRFIsQUFDTyxBQUFPLEFBQ2Q7MEJBQVUsb0JBQUssQUFDWDsyQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLENBQUMsT0FBQSxBQUFLLE1BQWhDLEFBQWMsQUFBd0IsQUFDckM7QUFKTCxBQU1BO3lCQUFTLEtBQUEsQUFBSyxNQU5kLEFBTW9COzhCQU5wQjtnQ0FESixBQUNJLEFBT0E7QUFQQTtBQUNBLGdDQU1BLEFBQUMseUNBQU8sSUFBUixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBO3VCQUNXLEVBQUMsT0FBRCxBQUFPLEFBQ2Q7aUNBRkosQUFDVyxBQUNLOzhCQUZoQjtnQ0FBQTtBQUFBO0FBQ0ksZUFGUixBQUNJLE1BS0EscUJBQUEsY0FBQSxVQUFNOzJCQUFPLEFBQ0gsQUFDTixLQUZTLEFBQ1Q7Z0NBREosQUFBYSxBQUVFOzhCQUZmO2dDQUFBO0FBQUE7ZUF0TlosQUFzSkEsQUFpREksQUFDQSxBQVFJLEFBTUksQUFVWiwwQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt1QkFDTSxFQUFDLE9BRFIsQUFDTyxBQUFPLEFBQ2Q7MEJBQVUsb0JBQUssQUFDWDsyQkFBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBQSxBQUFLLE1BQWpDLEFBQWMsQUFBeUIsQUFDdEM7QUFKTCxBQU1BO3lCQUFTLEtBQUEsQUFBSyxNQU5kLEFBTW9COzhCQU5wQjtnQ0FESixBQUNJLEFBT0E7QUFQQTtBQUNBLGdDQU1BLEFBQUMseUNBQU8sSUFBUixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBO3VCQUNXLEFBQ0g7OEJBREcsQUFDTSxBQUNUOzJCQUZHLEFBRUcsQUFDVjtpQ0FKSixBQUNXLEFBR0s7OEJBSmhCO2dDQUFBO0FBQUE7QUFDSSxlQVpoQixBQUNJLEFBQ0EsQUFRSSxBQUNJLEFBWVIsc0NBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3VCQUNNLEVBQUMsT0FEUixBQUNPLEFBQU8sQUFDZDswQkFBVSxvQkFBSyxBQUNYOzJCQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFBLEFBQUssTUFBakMsQUFBYyxBQUF5QixBQUN0QztBQUpMLEFBTUE7eUJBQVMsS0FBQSxBQUFLLE1BTmQsQUFNb0I7OEJBTnBCO2dDQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0EsZ0NBTUEsQUFBQyx5Q0FBTyxJQUFSLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7dUJBQ1csRUFBQyxPQUFELEFBQU8sQUFDZDtpQ0FGSixBQUNXLEFBQ0s7OEJBRmhCO2dDQUFBO0FBQUE7QUFDSSxlQWxDaEIsQUF1QkksQUFDQSxBQVFJLEFBQ0ksQUFVUiw0QkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7dUJBQ00sRUFBQyxPQURSLEFBQ08sQUFBTyxBQUNkOzBCQUFVLG9CQUFLLEFBQ1g7MkJBQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQUEsQUFBSyxNQUFqQyxBQUFjLEFBQXlCLEFBQ3RDO0FBSkwsQUFNQTt5QkFBUyxLQUFBLEFBQUssTUFOZCxBQU1vQjs4QkFOcEI7Z0NBREosQUFDSSxBQU9BO0FBUEE7QUFDQSxnQ0FNQSxBQUFDLHlDQUFPLElBQVIsQUFBVzs4QkFBWDtnQ0FBQSxBQUVJO0FBRko7K0JBRUksY0FBQSxVQUFNOzhCQUFPLEFBQ0EsQUFDVCxFQUZTLEFBQ1Q7MkJBRFMsQUFFSCxBQUNOO2dDQUhKLEFBQWEsQUFHRTs4QkFIZjtnQ0FBQTtBQUFBO2VBeFJoQixBQUVJLEFBZ09BLEFBMkNJLEFBQ0EsQUFRSSxBQUVJLEFBV2hCLHlDQUFBLEFBQUM7dUJBQ1UsRUFBQyxXQURaLEFBQ1csQUFBVyxBQUNsQjt5QkFGSixBQUVZLEFBQ1I7eUJBQVMsS0FIYixBQUdrQjs4QkFIbEI7Z0NBQUE7QUFBQTtBQUNJLGVBclNSLEFBQ0ksQUFtU0EsQUFTQSxpQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7OzhCQUNNLEFBQ1EsQUFDVjs2QkFITCxBQUNPLEFBRU0sQUFFVjtBQUpJLEFBQ0Y7dUJBRkwsQUFLVTs4QkFMVjtnQ0F0VnBCLEFBQ0ksQUFDSSxBQXNDSSxBQTZTSSxBQUNJLEFBaUJ2QjtBQWpCdUI7QUFDQzs7Ozs7Ozs7Ozs7O3VDQTE5Qkksa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOztpQ0FBMUQ7QTtrRUFFQyxFQUFDLFdBQUQsQUFBWSxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTE4sQSxBQWcvQnJCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJldHRpbmctZm9ybS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BY3Jlcy9EYXBwR2Fpbm1lcnMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Acres\\DappGainmers\\pages\\betting\\betting-form.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Acres\\DappGainmers\\pages\\betting\\betting-form.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/betting\\betting-form")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jYWZkOWMyY2ZlNGQxYTQzMmQzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmV0dGluZy9iZXR0aW5nLWZvcm0uanM/YWUwNzdlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHtJbnB1dCxEaW1tZXIsTG9hZGVyLEZvcm0sTWVzc2FnZSxDYXJkLEdyaWQsTGlzdCxUYWIsSGVhZGVyLEZsYWcsSWNvbixDb250YWluZXIsQ2hlY2tib3gsQnV0dG9uLFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHtMaW5rLFJvdXRlcn0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IENob2ljZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaG9pY2VzJztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeS5qcyc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuXHJcbmNsYXNzIE15QmV0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge2NhbXBhaWduczogY2FtcGFpZ25zfTsvLyBlIGRldnVlbHZlIGNvbW8gcHJvcHNcclxuICAgICAgICAvL3JldHVybiB7Y2FtcGFpZ25zfVxyXG4gICAgfVxyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGNoZWNrZWQxOiBmYWxzZSxcclxuICAgICAgICBjaGVja2VkMjogZmFsc2UsXHJcbiAgICAgICAgY2hlY2tlZDM6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrZWQ0OiBmYWxzZSxcclxuICAgICAgICBjaGVja2VkNTogZmFsc2UsXHJcbiAgICAgICAgY2hlY2tlZDY6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrZWQ3OiBmYWxzZSxcclxuICAgICAgICBjaGVja2VkODogZmFsc2UsXHJcbiAgICAgICAgY2hlY2tlZDk6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrZWQxMDogZmFsc2UsXHJcbiAgICAgICAgY2hlY2tlZDExOiBmYWxzZSxcclxuICAgICAgICBjaGVja2VkMTI6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrZWQxQ29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQyQ29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQzQ29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQ0Q29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQ1Q29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQ2Q29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQ3Q29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQ4Q29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQ5Q29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGNoZWNrZWQxMENvbnRyaWJ1dGlvbjonJyxcclxuICAgICAgICBjaGVja2VkMTFDb250cmlidXRpb246JycsXHJcbiAgICAgICAgY2hlY2tlZDEyQ29udHJpYnV0aW9uOicnLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTonJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICB0cnlWYWx1ZTonJ1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5vblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT57XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmcgOiB0cnVlLFxyXG4gICAgICAgICAgICAgZXJyb3JNZXNzYWdlOicnfSk7XHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcclxuICAgICAgICAgICAgICAgICAgLmNyZWF0ZUNhbXBhaW5nKHRoaXMuc3RhdGUudHJ5VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG5cclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZS5zcGxpdChcIlxcblwiKVswXX0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZyA6IGZhbHNlfSk7XHJcblxyXG4gICAgIH1cclxuICAgICBcclxucmVuZGVyQ2FtcGFpZ25zKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKCBhZGRyZXNzID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgICAgIDxhPiBEZXRhbGxlcyBkZSBDYW1wYcOxYTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSAvL3BhcmEgcXVlIHNlIGFsYXJndWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30vPjtcclxufVxyXG5yZW5kZXJCZXRzKCl7XHJcblxyXG4gICByZXR1cm4oIDxkaXY+XHJcbiAgICA8TGlzdCBkaXZpZGVkIHJlbGF4ZWQgPlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkMSA/IChcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWYWx1ZSBpbiBFdGhlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWQxQ29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudD0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDFDb250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSAsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQxOiAhdGhpcy5zdGF0ZS5jaGVja2VkMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQxQ29udHJpYnV0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj0nY2xvc2UnLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+ICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICkgOiBudWxsIH1cclxuXHJcbiAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkMiA/IChcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWYWx1ZSBpbiBFdGhlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWQyQ29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudD0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDJDb250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSAsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQyOiAhdGhpcy5zdGF0ZS5jaGVja2VkMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQyQ29udHJpYnV0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj0nY2xvc2UnLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+ICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICkgOiBudWxsIH1cclxuXHJcbiAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkMyA/IChcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWYWx1ZSBpbiBFdGhlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWQzQ29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudD0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDNDb250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSAsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQzOiAhdGhpcy5zdGF0ZS5jaGVja2VkMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQzQ29udHJpYnV0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj0nY2xvc2UnLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+ICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICkgOiBudWxsIH1cclxuXHJcbiAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkNCA/IChcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWYWx1ZSBpbiBFdGhlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWQ0Q29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudD0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDRDb250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSAsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ0OiAhdGhpcy5zdGF0ZS5jaGVja2VkNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ0Q29udHJpYnV0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj0nY2xvc2UnLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L0xpc3QuSXRlbT4gICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgXHJcbiAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkNSA/IChcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWYWx1ZSBpbiBFdGhlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWQ1Q29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudD0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDVDb250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSAsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ1OiAhdGhpcy5zdGF0ZS5jaGVja2VkNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ1Q29udHJpYnV0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj0nY2xvc2UnLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L0xpc3QuSXRlbT4gICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgKSA6IG51bGwgfVxyXG5cclxuICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrZWQ2ID8gKFxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBmbG9hdGVkPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1ZhbHVlIGluIEV0aGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2hlY2tlZDZDb250cmlidXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGV2ZW50PT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkNkNvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlICwgcHJvcHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDY6ICF0aGlzLnN0YXRlLmNoZWNrZWQ2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDZDb250cmlidXRpb246ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPSdjbG9zZScvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonYmx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPi1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvTGlzdC5JdGVtPiAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICApIDogbnVsbCB9XHJcblxyXG4gICAgICAge3RoaXMuc3RhdGUuY2hlY2tlZDcgPyAoXHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVmFsdWUgaW4gRXRoZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaGVja2VkN0NvbnRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZXZlbnQ9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ3Q29udHJpYnV0aW9uOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUgLCBwcm9wcyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkNzogIXRoaXMuc3RhdGUuY2hlY2tlZDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkN0NvbnRyaWJ1dGlvbjogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGljb249J2Nsb3NlJy8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50ID5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOidibHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+ICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICkgOiBudWxsIH1cclxuXHJcbiAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkOCA/IChcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWYWx1ZSBpbiBFdGhlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWQ4Q29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudD0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDhDb250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSAsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ4OiAhdGhpcy5zdGF0ZS5jaGVja2VkOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ4Q29udHJpYnV0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj0nY2xvc2UnLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L0xpc3QuSXRlbT4gICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgKSA6IG51bGwgfVxyXG5cclxuICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrZWQ5ID8gKFxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBmbG9hdGVkPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1ZhbHVlIGluIEV0aGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2hlY2tlZDlDb250cmlidXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGV2ZW50PT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOUNvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlICwgcHJvcHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDk6ICF0aGlzLnN0YXRlLmNoZWNrZWQ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDlDb250cmlidXRpb246ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPSdjbG9zZScvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonYmx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPi1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvTGlzdC5JdGVtPiAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICApIDogbnVsbCB9XHJcblxyXG4gICAgICAge3RoaXMuc3RhdGUuY2hlY2tlZDEwID8gKFxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBmbG9hdGVkPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1ZhbHVlIGluIEV0aGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2hlY2tlZDEwQ29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudD0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDEwQ29udHJpYnV0aW9uOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUgLCBwcm9wcyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkMTA6ICF0aGlzLnN0YXRlLmNoZWNrZWQxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQxMENvbnRyaWJ1dGlvbjogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGljb249J2Nsb3NlJy8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50ID5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOidibHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2lucyBMZWZ0IFRlYW0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+ICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICkgOiBudWxsIH1cclxuXHJcbiAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkMTEgPyAoXHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVmFsdWUgaW4gRXRoZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaGVja2VkMTFDb250cmlidXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGV2ZW50PT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkMTFDb250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSAsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQxMTogIXRoaXMuc3RhdGUuY2hlY2tlZDExLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDExQ29udHJpYnV0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj0nY2xvc2UnLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUSUVEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L0xpc3QuSXRlbT4gICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgKSA6IG51bGwgfVxyXG5cclxuICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrZWQxMiA/IChcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWYWx1ZSBpbiBFdGhlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWQxMkNvbnRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZXZlbnQ9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQxMkNvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlICwgcHJvcHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDEyOiAhdGhpcy5zdGF0ZS5jaGVja2VkMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkMTJDb250cmlidXRpb246ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPSdjbG9zZScvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2lucyBSaWdodCBUZWFtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L0xpc3QuSXRlbT4gICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgKSA6IG51bGwgfVxyXG4gXHJcbiA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmd9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciAgaW5kZXRlcm1pbmF0ZT5Qcm9jZXNhbmRvIFRyYW5zYWNjaW9uPC9Mb2FkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9IHt0aGlzLm9uU3VibWl0fSBcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pbmltbyBhcG9ydGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RlYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICd0aHVtYiB0YWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0NyZWFyJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25Qb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdWYWx1ZSBpbiBXZWknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50cnlWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZXZlbnQ9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeVZhbHVlIDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9wcHMhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICA8L0xpc3Q+XHJcbiAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgIGNvbG9yPSAndGVhbCdcclxuICAgICAgICAgICAgICAgIGFzPSdoNSdcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogICcxLjNlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS41ZW0nLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBUb3RhbCBiZXQ6XHJcbiAgICAgICAgICAgICAgICA8c3BhbiA+IHtcclxuICAgICAgICAgICAgICAgICgrdGhpcy5zdGF0ZS5jaGVja2VkMUNvbnRyaWJ1dGlvbikgK1xyXG4gICAgICAgICAgICAgICAgKCt0aGlzLnN0YXRlLmNoZWNrZWQyQ29udHJpYnV0aW9uKSArXHJcbiAgICAgICAgICAgICAgICAoK3RoaXMuc3RhdGUuY2hlY2tlZDNDb250cmlidXRpb24pICtcclxuICAgICAgICAgICAgICAgICgrdGhpcy5zdGF0ZS5jaGVja2VkNENvbnRyaWJ1dGlvbikgK1xyXG4gICAgICAgICAgICAgICAgKCt0aGlzLnN0YXRlLmNoZWNrZWQ1Q29udHJpYnV0aW9uKSArXHJcbiAgICAgICAgICAgICAgICAoK3RoaXMuc3RhdGUuY2hlY2tlZDZDb250cmlidXRpb24pICtcclxuICAgICAgICAgICAgICAgICgrdGhpcy5zdGF0ZS5jaGVja2VkN0NvbnRyaWJ1dGlvbikgK1xyXG4gICAgICAgICAgICAgICAgKCt0aGlzLnN0YXRlLmNoZWNrZWQ4Q29udHJpYnV0aW9uKSArXHJcbiAgICAgICAgICAgICAgICAoK3RoaXMuc3RhdGUuY2hlY2tlZDlDb250cmlidXRpb24pICtcclxuICAgICAgICAgICAgICAgICgrdGhpcy5zdGF0ZS5jaGVja2VkMTBDb250cmlidXRpb24pICtcclxuICAgICAgICAgICAgICAgICgrdGhpcy5zdGF0ZS5jaGVja2VkMTFDb250cmlidXRpb24pICtcclxuICAgICAgICAgICAgICAgICgrdGhpcy5zdGF0ZS5jaGVja2VkMTJDb250cmlidXRpb24pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPiBcclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319XHJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQxMDogIXRoaXMuc3RhdGUuY2hlY2tlZDEwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICBcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZDEwfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0FjY2VwdCB0ZXJtcyBhbmQgY29uZGl0aW9ucydcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPSdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9tZXRhbWFzay9ua2JpaGZiZW9nYWVhb2VobGVmbmtvZGJlZmdwZ2tubj9obD1lbic+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSBcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jaGVja2VkMTB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgUGxhY2UgYmV0IE5PVyFcclxuICAgICAgICAgICAgPC9CdXR0b24+ICBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+ICBcclxuICAgIDwvU2VnbWVudD4gIFxyXG48L2Rpdj5cclxuICAgICk7XHJcblxyXG4gIFxyXG59XHJcbnRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGNoZWNrZWQxOiBmYWxzZSxcclxuICAgICAgICBjaGVja2VkMjogZmFsc2UsXHJcbiAgICAgICAgY2hlY2tlZDM6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrZWQ0OiBmYWxzZSxcclxuICAgICAgICBjaGVja2VkNTogZmFsc2UsXHJcbiAgICAgICAgY2hlY2tlZDY6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrZWQ3OiBmYWxzZSxcclxuICAgICAgICBjaGVja2VkODogZmFsc2UsXHJcbiAgICAgICAgY2hlY2tlZDk6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrZWQxMDogZmFsc2UsXHJcbiAgICAgICAgY2hlY2tlZDExOiBmYWxzZSxcclxuICAgICAgICBjaGVja2VkMTI6IGZhbHNlXHJcbn0pXHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHBhbmVzID0gW1xyXG4gICAgICAgICAgICB7IG1lbnVJdGVtOiAnQmV0JywgcmVuZGVyOiAoKSA9PlxyXG4gICAgICAgICAgICAgPFRhYi5QYW5lID5cclxuICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJldHMoKX1cclxuICAgICAgICAgICAgIDwvVGFiLlBhbmU+IH0sXHJcbiAgICAgICAgICAgIHsgbWVudUl0ZW06ICdNeSBCZXRzJywgcmVuZGVyOiAoKSA9PiA8VGFiLlBhbmU+e3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9PC9UYWIuUGFuZT4gfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDInIGNvbG9yPSd0ZWFsJyB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMiBTRUxFQ1QgWU9VUiBQT1NTSUJMRSBSRVNVTFQgQU5EIEJFVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlcy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgY29sb3I9J3RlYWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJVU1NJQSAyMDE4IC0gR1JPVVAgU1RBR0VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOicxNXB4J319PiBST09NIE7CsDE1PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9JzInIGRpdmlkZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGFnIG5hbWU9eydlZyd9IC8+RWd5cHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICAgVlM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsYWcgc3R5bGU9e3twYWRkaW5nOiAnMTBweCd9fSBuYW1lPXsnc2EnfSAvPiAgIFNhdWRpIEFyYWJpYTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gIG5hbWU9J2NhbGVuZGFyJyAvPjE0IEp1biAyMDE4ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gc3R5bGU9e3twYWRkaW5nOiAnMCAxMHB4J319bmFtZT0nY2xvY2snIC8+MTg6MDAgR1RNLTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVE9UQUwgUE9PTCA5IEVUSFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9JzInIGRpdmlkZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPSczJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDoncmlnaHQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDE6ICF0aGlzLnN0YXRlLmNoZWNrZWQxIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonYmx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQyOiAhdGhpcy5zdGF0ZS5jaGVja2VkMiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonYmx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPiAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkMzogIXRoaXMuc3RhdGUuY2hlY2tlZDMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZDN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPi1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDoncmlnaHQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ0OiAhdGhpcy5zdGF0ZS5jaGVja2VkNCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZDR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPi1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OidyaWdodCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDU6ICF0aGlzLnN0YXRlLmNoZWNrZWQ1IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWQ1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOidibHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OidyaWdodCd9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ2OiAhdGhpcy5zdGF0ZS5jaGVja2VkNiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkNn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonYmx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkNzogIXRoaXMuc3RhdGUuY2hlY2tlZDcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWQ3fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOidibHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOidyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDoncmlnaHQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ4OiAhdGhpcy5zdGF0ZS5jaGVja2VkOCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkOH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonYmx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDoncmlnaHQnfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOTogIXRoaXMuc3RhdGUuY2hlY2tlZDkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZDl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPi1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkMTA6ICF0aGlzLnN0YXRlLmNoZWNrZWQxMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZDEwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZToxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0Oic1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2lucyBMZWZ0IFRlYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDoncmlnaHQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQxMTogIXRoaXMuc3RhdGUuY2hlY2tlZDExIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWQxMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6JzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUSUVEIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OidyaWdodCd9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQxMjogIXRoaXMuc3RhdGUuY2hlY2tlZDEyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWQxMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6MTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDonNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpbnMgUmlnaHQgVGVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDonMTVweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD0ncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmNoZWNrIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhY3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFuZXM9e3BhbmVzfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlCZXRzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9iZXR0aW5nL2JldHRpbmctZm9ybS5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBMUJBO0FBK0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFSQTtBQUFBO0FBU0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFmQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBaUJBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBckJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7QUFza0JBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFYQTs7Ozs7O0FBN2lCQTtBQUNBO0FBREE7QUFDQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQU5BO0FBVUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFEQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQVBBO0FBWUE7QUFaQTtBQUNBOztBQVdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7O0FBWUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBUEE7QUFZQTtBQVpBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTs7QUFZQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBTUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFQQTtBQVlBO0FBWkE7QUFDQTs7QUFXQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBOztBQVlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQVBBO0FBWUE7QUFaQTtBQUNBOztBQVdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7O0FBWUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBUEE7QUFZQTtBQVpBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTs7QUFZQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBTUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFQQTtBQVlBO0FBWkE7QUFDQTs7QUFXQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBOztBQVlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQVBBO0FBWUE7QUFaQTtBQUNBOztBQVdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7O0FBWUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBUEE7QUFZQTtBQVpBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTs7QUFZQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBTUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFQQTtBQVlBO0FBWkE7QUFDQTs7QUFXQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBOztBQVlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQVBBO0FBWUE7QUFaQTtBQUNBOztBQVdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBUEE7QUFZQTtBQVpBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTs7QUFXQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBTUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFQQTtBQVlBO0FBWkE7QUFDQTs7QUFXQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBOztBQVdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFaQTs7QUFBQTtBQWNBO0FBZEE7QUFDQTtBQWNBO0FBREE7QUFLQTtBQUxBO0FBS0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQU5BO0FBQUE7QUFBQTtBQUNBOztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFOQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUNBOzs7O0FBOEJBO0FBQ0E7QUFDQTtBQURBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBTkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFTQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFOQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQVNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQU5BO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBVUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBTkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFTQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFOQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQVNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQU5BO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBVUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBTkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFTQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFOQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQVNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQU5BO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBVUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBTkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBTkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTs7QUFTQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFOQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBRUE7QUFGQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUVBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFRQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUVBO0FBSEE7QUFHQTtBQUxBO0FBaUJBO0FBakJBO0FBQ0E7Ozs7Ozs7Ozs7OztBQTE5QkE7QUFDQTtBQURBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMCtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9