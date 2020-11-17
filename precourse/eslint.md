# ESLint

## How to set it up

## Dealing with .gitignore

- Prempting this issue now will save you a headache later.
```
echo "node_modules/\npackage-lock.json\npackage.json\n.eslintrc.js" >> .gitignore
```

## Installing

```
npm init
npm install eslint --save-dev
npx eslint --init
```

## Adding exceptions

- Change the rules in `.eslintrc.json`.

```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    // "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-unused-vars": "off",
        "max-len": "off",
        "no-param-reassign": "off",
        "no-plusplus": "off"
    }
}
```

## Trouble shooting

### Parsing error: Unexpected token

This happens when using ES6 classes. you can solve it by:

- Adding `"parser": "babel-eslint"` to your `eslintrc.json` file. See it commented out above in the example file shown in the 'Adding exceptions` section.
- Running:
```
npm install babel-eslint --save-dev
or
yarn add -D babel-eslint
```