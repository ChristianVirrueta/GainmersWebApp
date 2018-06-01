'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Acres\\GainmersWebApp\\components\\header1.js';


var trigger = _react2.default.createElement('span', {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 6
    }
}, 'More');
var options = [{
    key: 1,
    text: '',
    value: 1,
    content: _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'medium', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), 'About Gainmers')
}, {
    key: 2,
    text: 'Configuration123',
    value: 2,
    content: _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'law', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), 'User Terms')
}];

exports.default = function () {
    return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '30px' }, secondary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('a', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { src: 'http://gainmers.io/DappGainmers/images/logo.png', size: 'small', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement(_semanticUiReact.Dropdown, { item: true, text: 'Language', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, 'English'), _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, 'Spanish')))), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: 'a', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, 'FAQs'), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: 'a', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, 'Blog'), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement(_semanticUiReact.Dropdown, { trigger: trigger, options: options, item: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlcjEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwiRHJvcGRvd24iLCJJbWFnZSIsIkljb24iLCJCdXR0b24iLCJMaW5rIiwidHJpZ2dlciIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJjb250ZW50IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQVUsQUFBTyxBQUFLOztBQUNyQyxBQUFRLEFBQVc7Ozs7Ozs7QUFFbkIsSUFBTSwwQkFDRixjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsQ0FBQSxFQURKLEFBQ0k7QUFLRixJQUFNO1NBQ0osQUFDTyxBQUNMO1VBRkYsQUFFUSxBQUNOO1dBSEYsQUFHUyxBQUNQOzZCQUFVLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBREosQUFDSTtBQUFBO1FBTkYsQUFDZCxBQUlZO0FBSlosQUFDRSxDQUZZO1NBVWQsQUFDTyxBQUNMO1VBRkYsQUFFUSxBQUNOO1dBSEYsQUFHUyxBQUNQOzZCQUFVLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBREosQUFDSTtBQUFBO1FBZmxCLEFBQWdCLEFBVWQsQUFJWSxBQVFoQjtBQVpJLEFBQ0U7O2tCQVdTLFlBQUssQUFDaEI7MkJBQ0ksQUFBQyx1Q0FBSyxPQUFPLEVBQUMsV0FBZCxBQUFhLEFBQVksVUFBVSxXQUFuQztzQkFBQTt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtzQkFBWjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTtzQkFBYjt3QkFBQSxBQUNBO0FBREE7dUJBQ0EsQUFBQyx3Q0FBTSxLQUFQLEFBQVcsbURBQWtELE1BQTdELEFBQWtFO3NCQUFsRTt3QkFIUixBQUNJLEFBQ0ksQUFDQSxBQUdKO0FBSEk7MEJBR0gsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtzQkFBcEI7d0JBQUEsQUFDSTtBQURKO3VCQUNLLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQywyQ0FBUyxNQUFWLE1BQWdCLE1BQWhCLEFBQXFCO3NCQUFyQjt3QkFBQSxBQUNBO0FBREE7dUJBQ0MsY0FBRCwwQkFBQSxBQUFVOztzQkFBVjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSyxjQUFELDBCQUFBLEFBQVU7O3NCQUFWO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSw0QkFBQyxjQUFELDBCQUFBLEFBQVU7O3NCQUFWO3dCQUFBO0FBQUE7QUFBQSxPQUxaLEFBQ0ksQUFDSSxBQUNBLEFBRUksQUFJUiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxJQUFYLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQVRKLEFBU0ksQUFDQSx5QkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxJQUFYLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQVZKLEFBVUksQUFHQSx5QkFBQyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsMkNBQVMsU0FBVixBQUFtQixTQUFVLFNBQTdCLEFBQXNDLFNBQVMsTUFBL0M7c0JBQUE7d0JBckJoQixBQUNJLEFBTUksQUFhSSxBQUNJLEFBT25CO0FBUG1COztBQXRCcEIiLCJmaWxlIjoiaGVhZGVyMS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BY3Jlcy9HYWlubWVyc1dlYkFwcCJ9