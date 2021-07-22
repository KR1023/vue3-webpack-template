module.exports = {
  root: true,
  env: {
    browser:  true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always", //void: 빈 태그  <img />
          "normal": "never",  //normal: 일반 태그 <div></div>
          "component": "always"
        },
        "svg": "always",
        "math": "always"
    }],

    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 0,
        "allowFirstLine": true
      },      
      "multiline": {
        "max": 0,
        "allowFirstLine": false
      }
    }]   
  }
}