module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json"
        ],
        "createDefaultProgram": true
      },
      "extends": [
        "eslint:recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        "@angular-eslint/component-selector": [
          "error",
          {
            "prefix": "medes",
            "style": "kebab-case",
            "type": "element"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "prefix": "medes",
            "style": "camelCase",
            "type": "attribute"
          }
        ],
        // disable the base no-unused-vars rule as it can report incorrect errors because it does not understand typesecript
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {"args": "none"}],
        "@typescript-eslint/explicit-module-boundary-types": [
          "warn",
          {
            //Allow standard Angular lifecycle method to not define return type void
            "allowedNames": ["ngOnInit", "ngOnDestroy", "ngAfterViewInit", "ngOnChanges"]
          }
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {}
    }
  ]
}