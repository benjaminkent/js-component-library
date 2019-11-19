import { storiesOf } from '@storybook/vue'
import JsNumberFact from './JsNumberFact'

storiesOf('JsNumberFact', module)
  .add('math', () => ({
    components: { JsNumberFact },
    template: '<js-number-fact :factType="type" />',
    data: () => ({
      type: 'math',
    }),
  }))
  .add('trivia', () => ({
    components: { JsNumberFact },
    template: '<js-number-fact :factType="type" />',
    data: () => ({
      type: 'trivia',
    }),
  }))
