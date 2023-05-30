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
var cx = classnames.bind(styles);
var Sidebar = function (_a) {
    var data = _a.data, setData = _a.setData, groupType = _a.groupType, setGroupType = _a.setGroupType, groupNumber = _a.groupNumber, setGroupNumber = _a.setGroupNumber, mode = _a.mode, setMode = _a.setMode;
    var totalNumberValue = "".concat(data.length).replace(/(^0+)/, "");
    var groupNumberValue = "".concat(groupNumber).replace(/(^0+)/, "");
    var handleChangeNumber = function (e) {
        var number = e.target.value > 500 ? 500 : e.target.value;
        setData(new Array(Number(number)).fill({}).map(function (e, i) { return { state: 'NOMAL', value: i + 1 }; }));
    };
    var handleChangeGroupNumber = function (e) {
        var number = e.target.value > 500 ? 500 : e.target.value;
        setGroupNumber(Number(number));
    };
    var creatGroup = function () {
        var newData = __spreadArray([], data, true);
        if (data.length <= 0) {
            alert('인원 수를 입력해주세요!');
            return;
        }
        if (groupNumber <= 0) {
            alert('모둠 수를 입력해주세요!');
            return;
        }
        if (data.length < groupNumber) {
            alert('모둠 수가 총 인원 수보다 많습니다!');
            return;
        }
        if (groupType === 'NUMBER') {
            if (data.filter(function (e) { return e.state === 'HEAD'; }).length > Math.floor(data.length / groupNumber)) {
                alert("\uBAA8\uB460\uC7A5 \uC218\uAC00 \uBAA8\uB460 \uC218\uBCF4\uB2E4 \uB9CE\uC2B5\uB2C8\uB2E4! \uCD5C\uB300 \uAC00\uB2A5\uD55C \uBAA8\uB460\uC7A5\uC758 \uC218\uB294 ".concat(Math.floor(data.length / groupNumber), "\uBA85 \uC785\uB2C8\uB2E4."));
                return;
            }
        }
        if (groupType === 'GROUP') {
            if (data.filter(function (e) { return e.state === 'HEAD'; }).length > groupNumber) {
                alert('모둠장 수가 모둠 수보다 많습니다!');
                return;
            }
        }
        newData.sort(function () { return Math.random() - 0.5; });
        setData(newData);
        setMode('RESULT');
    };
    var handleChangeGroupType = function (e) {
        setGroupType(e.currentTarget.value);
    };
    var reset = function () {
        setData([]);
        setGroupNumber(0);
        setGroupType('NUMBER');
        setMode('LIST');
    };
    return (_jsx("aside", __assign({ className: cx('sidebarArea') }, { children: _jsxs("div", __assign({ className: cx('sidebarWrap', mode) }, { children: [_jsxs("div", __assign({ className: cx('inputArea', mode) }, { children: [_jsx("span", __assign({ className: cx('title') }, { children: "\uCD1D \uC778\uC6D0 \uC218" })), _jsx("div", __assign({ className: cx('inputWrap', { blinking: data.length === 0 }) }, { children: _jsx("input", { className: cx('input'), type: "number", min: 0, max: 500, value: totalNumberValue, onChange: handleChangeNumber, disabled: mode === 'RESULT' }) }))] })), _jsxs("div", __assign({ className: cx('inputArea', mode) }, { children: [_jsx("span", __assign({ className: cx('title') }, { children: "\uBAA8\uB460 \uAD6C\uC131 \uBC29\uC2DD" })), _jsxs("div", __assign({ className: cx('radioArea') }, { children: [_jsxs("label", __assign({ className: cx('radioWrap') }, { children: [_jsx("input", { className: cx('radio'), type: "radio", name: "groupType", value: "NUMBER", onChange: handleChangeGroupType, checked: groupType === 'NUMBER', disabled: mode === 'RESULT' }), _jsx("span", __assign({ className: cx('radioTitle') }, { children: "\uD55C \uBAA8\uB460\uB2F9 \uBAA8\uB460\uC6D0 \uC218" }))] })), _jsxs("label", __assign({ className: cx('radioWrap') }, { children: [_jsx("input", { className: cx('radio'), type: "radio", name: "groupType", value: "GROUP", onChange: handleChangeGroupType, checked: groupType === 'GROUP', disabled: mode === 'RESULT' }), _jsx("span", __assign({ className: cx('radioTitle') }, { children: "\uCD1D \uBAA8\uB460 \uC218" }))] }))] }))] })), _jsxs("div", __assign({ className: cx('inputArea', mode) }, { children: [_jsx("span", __assign({ className: cx('title') }, { children: groupType === 'NUMBER' ? '모둠원 수' : '모둠 수' })), _jsx("div", __assign({ className: cx('inputWrap', { blinking: groupNumber === 0 }) }, { children: _jsx("input", { className: cx('input'), type: "number", min: 0, max: 500, value: groupNumberValue, onChange: handleChangeGroupNumber, disabled: mode === 'RESULT' }) }))] })), _jsxs("div", __assign({ className: cx('buttonWrap', mode) }, { children: [mode === 'LIST' &&
                            _jsx("button", __assign({ type: "button", className: cx('button'), onClick: creatGroup }, { children: "\uB9CC\uB4E4\uAE30" })), mode === 'RESULT' &&
                            _jsx("button", __assign({ type: "button", className: cx('button', 'reset'), onClick: reset }, { children: "\uB2E4\uC2DC \uB9CC\uB4E4\uAE30" }))] })), _jsxs("ol", __assign({ className: cx('descWrap') }, { children: [_jsx("strong", __assign({ className: cx('title') }, { children: "\uB3C4\uC6C0\uB9D0" })), _jsx("li", __assign({ className: cx('desc') }, { children: "1. \uCD1D \uC778\uC6D0 \uC218\uB97C \uC22B\uC790\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694." })), _jsx("li", __assign({ className: cx('desc') }, { children: "2. \uBAA8\uB460 \uAD6C\uC131 \uBC29\uC2DD\uC744 \uC120\uD0DD\uD558\uACE0, \uD55C \uBAA8\uB460\uB2F9 \uBAA8\uB460\uC6D0 \uC218\uB098 \uCD1D \uBAA8\uB460 \uC218\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." })), _jsxs("li", __assign({ className: cx('desc') }, { children: ["3. \uBC88\uD638\uB97C \uD074\uB9AD\uD558\uBA74", ' ', _jsxs("div", __assign({ className: cx('rectTitleWrap') }, { children: [_jsx("div", { className: cx('rect') }), _jsx("span", __assign({ className: cx('title') }, { children: "\uBAA8\uB460\uC6D0" }))] })), "\uC5D0\uC11C", ' ', _jsxs("div", __assign({ className: cx('rectTitleWrap') }, { children: [_jsx("div", { className: cx('rect', 'yellow') }), _jsx("span", __assign({ className: cx('title') }, { children: "\uBAA8\uB460\uC7A5" }))] })), "\uC73C\uB85C \uBC14\uB00C\uACE0, \uD55C \uBC88 \uB354 \uD074\uB9AD\uD558\uBA74 \uBAA8\uB460 \uD3B8\uC131\uC5D0\uC11C", ' ', _jsxs("div", __assign({ className: cx('rectTitleWrap') }, { children: [_jsx("div", { className: cx('rect', 'gray') }), _jsx("span", __assign({ className: cx('title') }, { children: "\uC81C\uC678" }))] })), "\uB429\uB2C8\uB2E4."] })), _jsx("li", __assign({ className: cx('desc') }, { children: "4. \uB9CC\uB4E4\uAE30\uB97C \uD074\uB9AD\uD574\uC8FC\uC138\uC694." }))] })), _jsxs("ol", __assign({ className: cx('mobileDescWrap') }, { children: [_jsxs("div", __assign({ className: cx('rectTitleWrap') }, { children: [_jsx("div", { className: cx('rect') }), _jsx("span", __assign({ className: cx('title') }, { children: "\uBAA8\uB460\uC6D0" }))] })), _jsxs("div", __assign({ className: cx('rectTitleWrap') }, { children: [_jsx("div", { className: cx('rect', 'yellow') }), _jsx("span", __assign({ className: cx('title') }, { children: "\uBAA8\uB460\uC7A5" }))] })), _jsxs("div", __assign({ className: cx('rectTitleWrap') }, { children: [_jsx("div", { className: cx('rect', 'gray') }), _jsx("span", __assign({ className: cx('title') }, { children: "\uC81C\uC678" }))] }))] }))] })) })));
};
export default Sidebar;
