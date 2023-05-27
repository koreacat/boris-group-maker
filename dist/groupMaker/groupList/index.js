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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { peopleStateTypeMap } from "../types";
var cx = classnames.bind(styles);
var Group = function (_a) {
    var index = _a.index, e = _a.e, setArr = _a.setArr;
    var _b = useState("".concat(index + 1, "\uC870")), title = _b[0], setTitle = _b[1];
    var els = __spreadArray([], e, true).map(function (d, j) {
        var type = peopleStateTypeMap[d.state];
        var handleClick = function () {
            setArr(function (prev) { return prev.map(function (e) {
                return e.map(function (people) {
                    if (people.value === d.value) {
                        if (people.state === 'NOMAL')
                            return { state: 'HEAD', value: people.value };
                        else
                            return { state: 'NOMAL', value: people.value };
                    }
                    else
                        return people;
                });
            }); });
        };
        return (_jsx("li", __assign({ className: cx('cell', type), onClick: handleClick }, { children: d.value }), j));
    });
    return (_jsxs("div", __assign({ className: cx('groupWrap') }, { children: [_jsx("div", __assign({ className: cx('inputWrap') }, { children: _jsx("input", { type: "text", className: cx('input'), value: title, onChange: function (e) { return setTitle(e.value); } }) })), _jsx("ul", __assign({ className: cx('groupListArea') }, { children: els }))] })));
};
var GroupList = function (_a) {
    var data = _a.data, groupNumber = _a.groupNumber, groupType = _a.groupType;
    var _b = useState(Array.from(Array(groupNumber), function () { return Array(); })), arr = _b[0], setArr = _b[1];
    useEffect(function () {
        if (data.length < groupNumber) {
            return;
        }
        // 한 모둠당 모둠원 수
        if (groupType === 'NUMBER') {
            var num_1 = Math.floor(data.length / groupNumber);
            var newArr_1 = Array.from(Array(num_1), function () { return Array(); });
            var headIdx_1 = 0;
            data.forEach(function (d) {
                if (d.state === 'HEAD')
                    newArr_1[headIdx_1++].push(d);
            });
            data.forEach(function (d) {
                if (d.state === 'NOMAL')
                    newArr_1[headIdx_1++ % num_1].push(d);
            });
            setArr(newArr_1);
            return;
        }
        // 총 모둠 수
        if (groupType === 'GROUP') {
            var newArr_2 = Array.from(Array(groupNumber), function () { return Array(); });
            var headIdx_2 = 0;
            data.forEach(function (d) {
                if (d.state === 'HEAD')
                    newArr_2[headIdx_2++].push(d);
            });
            data.forEach(function (d) {
                if (d.state === 'NOMAL')
                    newArr_2[headIdx_2++ % groupNumber].push(d);
            });
            setArr(newArr_2);
            return;
        }
    }, [data]);
    var arrEls = arr.map(function (e, index) {
        return _jsx(Group, { index: index, e: e, setArr: setArr }, index);
    });
    return (_jsx("div", __assign({ className: cx('groupArea') }, { children: arrEls })));
};
export default GroupList;
