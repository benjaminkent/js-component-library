import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import JsButton from './JsButton'

storiesOf('JsButton', module).add('default', () => ({
  components: { JsButton },
  template: '<js-button @clicked="handleClick">Click Here</js-button>',
  methods: { handleClick: action('button clicked') },
}))
