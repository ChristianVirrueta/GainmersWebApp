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

var _jsxFileName = 'C:\\Users\\Acres\\GainmersWebApp\\pages\\login\\install-metamask.js?entry';


var InstallMetamask = function (_Component) {
    (0, _inherits3.default)(InstallMetamask, _Component);

    function InstallMetamask() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, InstallMetamask);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InstallMetamask.__proto__ || (0, _getPrototypeOf2.default)(InstallMetamask)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: -1 }, _this.handleClick = function (e, titleProps) {
            var index = titleProps.index;
            var activeIndex = _this.state.activeIndex;

            var newIndex = activeIndex === index ? -1 : index;

            _this.setState({ activeIndex: newIndex });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(InstallMetamask, [{
        key: 'render',
        value: function render() {
            var activeIndex = this.state.activeIndex;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'Want to play?'), _react2.default.createElement(_semanticUiReact.Header, {
                block: true,
                color: 'teal',
                as: 'h2',
                content: 'To play at GAINMERS You need a way to link your Ethereum wallet with the web. For that purpose you need to install Metamask addon on your Chrome or Firefox browsers. Your Metamask wallet will work as your login in this platform. Then you need to add some ether in your wallet to play.\r\n',
                style: {
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement(_routes.Link, { href: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('a', { target: '_blank', style: { position: 'relative', top: '-55px', display: 'block' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, size: 'huge', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Install Metamask'))), _react2.default.createElement(_semanticUiReact.Container, { style: { padding: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_semanticUiReact.Embed, { style: { marginBottom: 10 },
                icon: 'hidden',
                id: '6Gf_kRE4MJU',
                placeholder: 'https://farm1.staticflickr.com/830/28305627398_ae4c376da8_z.jpg',
                source: 'youtube',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            })), _react2.default.createElement(_semanticUiReact.Accordion, { fluid: true, styled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 0, index: 0, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'What do I need to play ?'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.')), _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 1, index: 1, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Installing Metamask'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.')), _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 2, index: 2, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'Why is Metamask Locked ?'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.')), _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 3, index: 3, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, 'How to get Ether?'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, 'To add a pre-existing account to MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.')), _react2.default.createElement(_semanticUiReact.Accordion.Title, { active: activeIndex === 4, index: 4, onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, 'How to send Ether to metamask?'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            })))), _react2.default.createElement(_semanticUiReact.Accordion.Content, { active: activeIndex === 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement('p', { style: { fontSize: '1.33em', textAlign: 'justify' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, 'To add a pre-existing account  MetaMask, use the Import Account menu item. Afterward, you can configure MetaMask to use the imported account by selecting it with the Switch Accounts menu item. Warning: Imported accounts are not protected by the seed phrase that was generated when you created your original MetaMask account and are therefore marked as loose. Therefore, back-up all account information for accounts before you import them to MetaMask.'))));
        }
    }]);

    return InstallMetamask;
}(_react.Component);

exports.default = InstallMetamask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsb2dpblxcaW5zdGFsbC1tZXRhbWFzay5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJBY2NvcmRpb24iLCJIZWFkZXIiLCJCdXR0b24iLCJFbWJlZCIsIkljb24iLCJTZWdtZW50IiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIk1lbnUiLCJJbnN0YWxsTWV0YW1hc2siLCJzdGF0ZSIsImFjdGl2ZUluZGV4IiwiaGFuZGxlQ2xpY2siLCJlIiwidGl0bGVQcm9wcyIsImluZGV4IiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpblRvcCIsInBvc2l0aW9uIiwidG9wIiwiZGlzcGxheSIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7QUFDbEIsQUFBUSxBQUFVLEFBQU8sQUFBUSxBQUFPLEFBQU0sQUFBUyxBQUFXLEFBQVM7Ozs7Ozs7SSxBQUdyRTs7Ozs7Ozs7Ozs7Ozs7a09BQ0YsQSxRQUFRLEVBQUUsYUFBYSxDLEFBQWYsQUFBZ0IsVyxBQUV4QixjQUFjLFVBQUEsQUFBQyxHQUFELEFBQUksWUFBZTtnQkFBQSxBQUNyQixRQURxQixBQUNYLFdBRFcsQUFDckI7Z0JBRHFCLEFBRXJCLGNBQWdCLE1BRkssQUFFQSxNQUZBLEFBRXJCLEFBQ1I7O2dCQUFNLFdBQVcsZ0JBQUEsQUFBZ0IsUUFBUSxDQUF4QixBQUF5QixJQUExQyxBQUE4QyxBQUU5Qzs7a0JBQUEsQUFBSyxTQUFTLEVBQUUsYUFBaEIsQUFBYyxBQUFlLEFBQzlCO0E7Ozs7O2lDQUVNO2dCQUFBLEFBQ0csY0FBZ0IsS0FEbkIsQUFDd0IsTUFEeEIsQUFDRyxBQUdSOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxB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QUFHLFNBQVMsS0FBaEUsQUFBcUU7OEJBQXJFO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHVDQUFLLFdBQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtREFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsQUFBQyx1Q0FBTyxNQUFSLEFBQWEsU0FBUSxNQUFyQixBQUEwQjs4QkFBMUI7Z0NBckVYLEFBaUVHLEFBQ0ksQUFFSSxBQUNBLEFBSVI7QUFKUTttQ0FJUCxjQUFELDJCQUFBLEFBQVcsV0FBUSxRQUFRLGdCQUEzQixBQUEyQzs4QkFBM0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxPQUFPLEVBQUUsVUFBRixBQUFZLFVBQVUsV0FBaEMsQUFBVSxBQUFpQzs4QkFBM0M7Z0NBQUE7QUFBQTtlQTNHWixBQUNJLEFBZ0NDLEFBeUVHLEFBQ0ksQUFtQmY7Ozs7O0FBN0l5QixBLEFBK0k5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbnN0YWxsLW1ldGFtYXNrLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FjcmVzL0dhaW5tZXJzV2ViQXBwIn0=