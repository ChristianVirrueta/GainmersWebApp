'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../../components/layout1');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../../routes');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Acres\\GainmersWebApp\\pages\\login\\faqs.js?entry';


var Faqs = function (_Component) {
    (0, _inherits3.default)(Faqs, _Component);

    function Faqs() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Faqs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Faqs.__proto__ || (0, _getPrototypeOf2.default)(Faqs)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: 2 }, _this.handleClick = function (e, titleProps) {
            var index = titleProps.index;
            var activeIndex = _this.state.activeIndex;

            var newIndex = activeIndex === index ? -1 : index;

            _this.setState({ activeIndex: newIndex });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Faqs, [{
        key: 'render',
        value: function render() {
            var activeIndex = this.state.activeIndex;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_semanticUiReact.Header, {

                color: 'teal',
                as: 'h2',
                content: 'FAQ\'s',
                style: {
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement(_semanticUiReact.Accordion, { fluid: true, styled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 0, index: 0, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'What do I need to play ?'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.')), _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 1, index: 1, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Installing Metamask'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.'), _react2.default.createElement(_semanticUiReact.Embed, { style: { marginBottom: 10 },
                icon: '',
                id: '6Gf_kRE4MJU',
                placeholder: 'https://farm1.staticflickr.com/830/28305627398_ae4c376da8_z.jpg',
                source: 'youtube',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 2, index: 2, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Why is Metamask Locked ?'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.')), _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 3, index: 3, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'How to get Ether?'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.')), _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 4, index: 4, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, 'How to send Ether to metamask?'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.'))));
        }
    }]);

    return Faqs;
}(_react.Component);

exports.default = Faqs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb2dpblxcZmFxcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJBY2NvcmRpb24iLCJIZWFkZXIiLCJCdXR0b24iLCJFbWJlZCIsIkljb24iLCJTZWdtZW50IiwiRGl2aWRlciIsIk1lbnUiLCJGYXFzIiwic3RhdGUiLCJhY3RpdmVJbmRleCIsImhhbmRsZUNsaWNrIiwiZSIsInRpdGxlUHJvcHMiLCJpbmRleCIsIm5ld0luZGV4Iiwic2V0U3RhdGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7QUFDbEIsQUFBUSxBQUFVLEFBQU8sQUFBUSxBQUFPLEFBQU0sQUFBUyxBQUFTOzs7Ozs7O0ksQUFHMUQ7Ozs7Ozs7Ozs7Ozs7OzRNLEFBQ0YsUUFBUSxFQUFFLGFBQUYsQUFBZSxBLFcsQUFFdkIsY0FBYyxVQUFBLEFBQUMsR0FBRCxBQUFJLFlBQWU7Z0JBQUEsQUFDckIsUUFEcUIsQUFDWCxXQURXLEFBQ3JCO2dCQURxQixBQUVyQixjQUFnQixNQUZLLEFBRUEsTUFGQSxBQUVyQixBQUNSOztnQkFBTSxXQUFXLGdCQUFBLEFBQWdCLFFBQVEsQ0FBeEIsQUFBeUIsSUFBMUMsQUFBOEMsQUFFOUM7O2tCQUFBLEFBQUssU0FBUyxFQUFFLGFBQWhCLEFBQWMsQUFBZSxBQUM5QjtBOzs7OztpQ0FFTTtnQkFBQSxBQUNHLGNBQWdCLEtBRG5CLEFBQ3dCLE1BRHhCLEFBQ0csQUFFUjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzt1QkFBRCxBQUVXLEFBQ1A7b0JBSEosQUFHTyxBQUNIO3lCQUpKLEFBSVksQUFDUjs7OEJBQU8sQUFDUSxBQUNY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