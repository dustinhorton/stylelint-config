const patternRegEx = /[a-z]{1}([a-z0-9\-]+)?/;

module.exports = {
  'extends': 'stylelint-config-standard',
  'plugins': [
    'stylelint-order',
    'stylelint-scss',
  ],
  'rules': {
    // disable stylelint-config-standard
    'no-missing-end-of-source-newline': null,

    // override stylelint-config-standard
    'at-rule-empty-line-before': ['always', {
      'except': [
        'blockless-group',
        'first-nested',
      ],
      'ignoreAtRules': [
        'else',
        'if',
      ],
    }],
    'at-rule-name-space-after': 'always',
    'block-opening-brace-space-before': 'always-multi-line',
    'custom-property-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
    'max-empty-lines': 4,
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-pseudo-class-no-unknown': true,

    // stylelint-order
    'order/declaration-block-properties-specified-order': [
      'content',
      'quotes',
      'counter-increment',
      'counter-reset',
      'width',
      'max-width',
      'min-width',
      'height',
      'max-height',
      'min-height',
      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-repeat',
      'background-size',
      'border',
      'border-collapse',
      'border-color',
      'border-spacing',
      'border-style',
      'border-width',
      'border-top',
      'border-top-color',
      'border-top-style',
      'border-top-width',
      'border-right',
      'border-right-color',
      'border-right-style',
      'border-right-width',
      'border-bottom',
      'border-bottom-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-left',
      'border-left-color',
      'border-left-style',
      'border-left-width',
      'border-image',
      'border-image-outset',
      'border-image-repeat',
      'border-image-slice',
      'border-image-source',
      'border-image-width',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'box-shadow',
      'box-sizing',
      'clear',
      'color',
      'columns',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-width',
      'break-before',
      'break-inside',
      'break-after',
      'orphans',
      'widows',
      'cursor',
      'fill',
      'align-content',
      'align-items',
      'align-self',
      'flex',
      'flex-basis',
      'flex-flow',
      'flex-direction',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'justify-content',
      'order',
      'float',
      'font',
      'font-family',
      'font-size',
      'font-smooth',
      'font-style',
      'font-weight',
      'font-variant',
      '-moz-osx-font-smoothing',
      '-webkit-font-smoothing',
      'hyphens',
      'letter-spacing',
      'line-height',
      'list-style',
      'list-style-image',
      'list-style-position',
      'list-style-type',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'object-fit',
      'object-position',
      'opacity',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'overflow',
      'overflow-x',
      'overflow-y',
      '-webkit-overflow-scrolling',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'pointer-events',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'resize',
      'table-layout',
      'text-align',
      'text-align-last',
      'text-decoration',
      'text-ident',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-justify',
      'text-shadow',
      'text-wrap',
      'transform',
      'transform-origin',
      'perspective',
      'user-select',
      'vertical-align',
      'visibility',
      'white-space',
      'word-break',
      'word-wrap',
      'z-index',
      'zoom',
      'will-change',
      'animation',
      'animation-name',
      'animation-delay',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-iteration-count',
      'transition',
      'transition-property',
      'transition-delay',
      'transition-duration',
    ],

    // stylelint-scss
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-function-pattern': patternRegEx,
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-no-argumentless-call-parentheses': true,
    'scss/at-mixin-pattern': patternRegEx,
    'scss/declaration-nested-properties': 'never',
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': patternRegEx,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/percent-placeholder-pattern': patternRegEx,
    'scss/selector-no-redundant-nesting-selector': true,

    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'content',
        'each',
        'else',
        'extend',
        'for',
        'function',
        'if',
        'include',
        'mixin',
        'return',
      ],
    }],
    'at-rule-no-vendor-prefix': true,
    'color-named': 'never',
    'color-no-hex': true,
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': {
      'font-size': ['em'],
    },
    'declaration-property-unit-whitelist': {
      'border': ['px'],
      'border-width': ['px'],
      'border-top-width': ['px'],
      'border-right-width': ['px'],
      'border-bottom-width': ['px'],
      'border-left-width': ['px'],
    },
    'font-family-name-quotes': 'always-where-required',
    'font-weight-notation': 'named-where-possible',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': ['always', {
      'except': ['empty'],
    }],
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-unknown-animations': true,
    'number-max-precision': 4,
    'property-no-vendor-prefix': true,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [patternRegEx, {
      resolveNestedSelectors: true,
    }],
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-no-id': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-case': 'lower',
    'unit-blacklist': [
      'ch',
      'cm',
      'ex',
      'in',
      'mm',
      'pc',
      'pt',
      'q',
    ],
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,
  },
};