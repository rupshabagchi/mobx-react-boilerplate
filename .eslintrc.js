module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        'jest': true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": 0,
        "semi": [
            "error",
            "never"
        ]
    }
};