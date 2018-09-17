<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@easyguide/icon](#easyguideicon)
  - [Install](#install)
  - [Usage](#usage)
  - [Specific icon](#specific-icon)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @easyguide/icon

> Icon

[![NPM](https://img.shields.io/npm/v/@easyguide/icon.svg)](https://www.npmjs.com/package/@easyguide/icon) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @easyguide/icon
```

## Usage

```jsx
import React, {Component} from 'react'
import Icon from '@easyguide/icon'

class Example extends Component {
  render() {
    return (
      <div>
        <Icon name="star-with-medal" width={50} height={50} />
      </div>
    )
  }
}
```

## Specific icon

```jsx
import React, {Component} from 'react'
import {StarWithMedal} from '@easyguide/icon'

class Example extends Component {
  render() {
    return (
      <div>
        <StarWithMedal />
      </div>
    )
  }
}
```

## License

MIT © [iamtchelo](https://github.com/iamtchelo)
