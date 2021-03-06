module.exports = {
    "extends": ["airbnb-base"],
    "settings": {
        "import/resolver": {
            "node": {
                "moduleDirectory": ["node_modules", "src/"]
            }
        }
    },
    "rules": {
        "import/prefer-default-export": 0,
        "no-console": 0,
        "camelcase": 0,
        "func-names": 0,
    }
};