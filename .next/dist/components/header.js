'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\MSI\\DappGainmers\\components\\header.js';


var trigger = _react2.default.createElement('span', {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 7
    }
}, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
        fileName: _jsxFileName,
        lineNumber: 8
    }
}), ' CapitanGafio');
var options = [{
    key: 1,
    text: '',
    value: 1,
    content: _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'cogs', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement(_routes.Link, { route: '/configuration', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, ' Configuration')))
}, {
    key: 2,
    text: 'Configuration123',
    value: 2,
    content: _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'currency', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }), _react2.default.createElement(_routes.Link, { route: '/mybets', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, ' My Bets')))
}];

exports.default = function () {
    var firstAcc = " ";

    _web2.default.eth.getAccounts().then(function (e) {
        firstAcc = e;
        document.querySelector(".account").innerHTML = firstAcc;
    });

    return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, secondary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { src: 'https://farm1.staticflickr.com/826/42126573832_d2c8ab7203_m.jpg', size: 'tiny', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    })), _react2.default.createElement(_routes.Link, { route: '/betting', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('a', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, 'GAINMERS')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement(_semanticUiReact.Dropdown, { item: true, text: 'Language', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, 'English'), _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, 'Spanish')))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }, _react2.default.createElement('span', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, 'Wallet |'), _react2.default.createElement(_semanticUiReact.Button, { className: 'account', primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    })), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, _react2.default.createElement(_semanticUiReact.Dropdown, { trigger: trigger, options: options, item: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RWxlbWVudCIsIk1lbnUiLCJEcm9wZG93biIsIkltYWdlIiwiSWNvbiIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJMaW5rIiwiUm91dGVzIiwid2ViMyIsInRyaWdnZXIiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiY29udGVudCIsImZpcnN0QWNjIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJ0aGVuIiwiZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUyxBQUFNLEFBQVUsQUFBTyxBQUFLLEFBQU87O0FBQzVDLEFBQVEsQUFBSyxBQUFhOztBQUMxQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLDBCQUNGLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLENBQUEsa0JBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7a0JBQVg7b0JBREYsQUFDRTtBQUFBO0lBRk4sQUFDSTtBQUtGLElBQU07U0FDSixBQUNPLEFBQ0w7VUFGRixBQUVRLEFBQ047V0FIRixBQUdTLEFBQ1A7NkJBQVUsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDLHVDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtzQkFBWjt3QkFBQSxBQUNBO0FBREE7dUJBQ0EsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BUkYsQUFDZCxBQUlZLEFBRUksQUFDQTtBQVBoQixBQUNFLENBRlk7U0FZZCxBQUNPLEFBQ0w7VUFGRixBQUVRLEFBQ047V0FIRixBQUdTLEFBQ1A7NkJBQVUsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDLHVDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFESixBQUNJLEFBQ0E7QUFEQTt3QkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtzQkFBWjt3QkFBQSxBQUNBO0FBREE7dUJBQ0EsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BbkJsQixBQUFnQixBQVlkLEFBSVksQUFFSSxBQUNBLEFBT3BCO0FBZEksQUFDRTs7a0JBYVMsWUFBSyxBQUNoQjtRQUFJLFdBQUosQUFBYyxBQUVkOztrQkFBQSxBQUFLLElBQUwsQUFBUyxjQUFULEFBQXVCLEtBQUssYUFBSyxBQUM3QjttQkFBQSxBQUFTLEFBQ0w7aUJBQUEsQUFBUyxjQUFULEFBQXVCLFlBQXZCLEFBQ0MsWUFERCxBQUNXLEFBQ2xCO0FBSkQsQUFRQTs7MkJBQ0ksQUFBQyx1Q0FBSyxPQUFPLEVBQUMsV0FBZCxBQUFhLEFBQVksVUFBVSxXQUFuQztzQkFBQTt3QkFBQSxBQUNBO0FBREE7S0FBQSxrQkFDQyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0E7QUFEQTtBQUFBLHVCQUNBLEFBQUMsd0NBQU0sS0FBUCxBQUFXLG1FQUFrRSxNQUE3RSxBQUFrRjtzQkFBbEY7d0JBRkEsQUFDQSxBQUNBLEFBRUk7QUFGSjt5QkFFSSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtzQkFBWjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTtzQkFBYjt3QkFBQTtBQUFBO09BTFIsQUFJSSxBQUNJLEFBRUosOEJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtzQkFBcEI7d0JBQUEsQUFDSTtBQURKO3VCQUNLLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQywyQ0FBUyxNQUFWLE1BQWdCLE1BQWhCLEFBQXFCO3NCQUFyQjt3QkFBQSxBQUNBO0FBREE7dUJBQ0MsY0FBRCwwQkFBQSxBQUFVOztzQkFBVjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSyxjQUFELDBCQUFBLEFBQVU7O3NCQUFWO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSw0QkFBQyxjQUFELDBCQUFBLEFBQVU7O3NCQUFWO3dCQUFBO0FBQUE7QUFBQSxPQUxaLEFBQ0ksQUFDSSxBQUNBLEFBRUksQUFLUiwrQkFBQyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBLDZCQUFBLEFBQUMseUNBQU8sV0FBUixBQUFrQixXQUFXLFNBQTdCO3NCQUFBO3dCQVpSLEFBVUksQUFFSSxBQUdKO0FBSEk7eUJBR0gsY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLDJDQUFTLFNBQVYsQUFBbUIsU0FBVSxTQUE3QixBQUFzQyxTQUFTLE1BQS9DO3NCQUFBO3dCQXhCaEIsQUFDSSxBQU9JLEFBZUksQUFDSSxBQVFuQjtBQVJtQjs7QUFuQ3BCIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9NU0kvRGFwcEdhaW5tZXJzIn0=