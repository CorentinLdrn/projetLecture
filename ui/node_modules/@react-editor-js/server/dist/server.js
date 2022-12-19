import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function ReactEditorJS(_a) {
    var { factory, holder, defaultValue, children, value, onInitialize } = _a, restProps = __rest(_a, ["factory", "holder", "defaultValue", "children", "value", "onInitialize"]);
    const memoizedHolder = React.useRef(holder !== null && holder !== void 0 ? holder : `react-editor-js-${Date.now().toString(16)}`);
    const editorJS = React.useRef(null);
    React.useEffect(() => {
        editorJS.current = factory(Object.assign(Object.assign({ holder: memoizedHolder.current }, (defaultValue && { data: defaultValue })), restProps));
        onInitialize === null || onInitialize === void 0 ? void 0 : onInitialize(editorJS.current);
        return () => {
            var _a;
            (_a = editorJS.current) === null || _a === void 0 ? void 0 : _a.destroy();
        };
    }, []);
    React.useEffect(() => {
        var _a;
        if (value) {
            (_a = editorJS.current) === null || _a === void 0 ? void 0 : _a.render(value);
        }
    }, [value]);
    return children || React.createElement("div", { id: memoizedHolder.current });
}

class ServerEditorCore {
    constructor({ data }) {
        if (data) {
            this._memoizedData = data;
        }
    }
    get dangerouslyLowLevelInstance() {
        return null;
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._memoizedData;
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}

function ReactEditorJSServer(props) {
    const factory = React.useCallback((config) => new ServerEditorCore(config), []);
    return React.createElement(ReactEditorJS, Object.assign({ factory: factory }, props));
}

export { ReactEditorJSServer as default };
