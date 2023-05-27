var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { peopleStateTypeMap } from "../types";
var cx = classnames.bind(styles);
var PeopleList = function (_a) {
    var data = _a.data, setData = _a.setData;
    var peopleEls = data.map(function (e, i) {
        var type = peopleStateTypeMap[e.state];
        var handleClick = function () {
            setData(function (prev) { return prev.map(function (e, j) {
                if (i === j) {
                    if (e.state === 'NOMAL')
                        return { state: 'HEAD', value: e.value };
                    else if (e.state === 'HEAD')
                        return { state: 'EXCEPT', value: e.value };
                    else
                        return { state: 'NOMAL', value: e.value };
                }
                else
                    return e;
            }); });
        };
        return (_jsx("li", __assign({ className: cx('cell', type), onClick: handleClick }, { children: i + 1 }), i + 1));
    });
    return (_jsx("ul", __assign({ className: cx('listArea') }, { children: peopleEls })));
};
export default PeopleList;
