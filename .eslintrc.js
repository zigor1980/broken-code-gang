module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-underscore-dangle": 0,
        "max-len": ["error", { "code": 120 }],
        "one-var": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "react/prop-types": 0,
        "func-names": 0,
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "no-plusplus": 0,
        "global-require": 0,
        "import/no-dynamic-require": 0,
        "react/jsx-no-bind": 0,
        "import/prefer-default-export": 0
    }
};
