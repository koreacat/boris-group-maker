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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { useState } from "react";
import Sidebar from "./sidebar";
import PeopleList from "./peopleList";
import GroupList from "./groupList";
var cx = classnames.bind(styles);
var GroupMaker = function () {
    var _a = useState([]), data = _a[0], setData = _a[1];
    var _b = useState('NUMBER'), groupType = _b[0], setGroupType = _b[1];
    var _c = useState(0), groupNumber = _c[0], setGroupNumber = _c[1];
    var _d = useState('LIST'), mode = _d[0], setMode = _d[1];
    var getContents = function () {
        if (data.length === 0)
            return (_jsxs("div", __assign({ className: cx('emptyList') }, { children: [_jsx("em", __assign({ className: cx('title') }, { children: "\uBAA8\uB460 \uB9CC\uB4E4\uAE30" })), _jsx("span", __assign({ className: cx('desc') }, { children: "\uCD1D \uC778\uC6D0 \uC218\uB97C \uC785\uB825\uD558\uACE0 \uBAA8\uB460\uC6D0\uC744 \uD074\uB9AD\uD574\uC8FC\uC138\uC694." }))] })));
        switch (mode) {
            case 'LIST': return _jsx(PeopleList, { data: data, setData: setData });
            case 'RESULT': return _jsx(GroupList, { data: data, groupNumber: groupNumber, groupType: groupType });
        }
    };
    return (_jsx("div", __assign({ className: cx('groupMakerArea') }, { children: _jsxs("div", __assign({ className: cx('groupMakerWrap') }, { children: [_jsx("div", __assign({ className: cx('resultArea') }, { children: getContents() })), _jsx(Sidebar, { data: data, setData: setData, groupType: groupType, setGroupType: setGroupType, groupNumber: groupNumber, setGroupNumber: setGroupNumber, mode: mode, setMode: setMode })] })) })));
};
export default GroupMaker;
