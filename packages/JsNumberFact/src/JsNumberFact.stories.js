import { storiesOf } from '@storybook/vue'
import JsNumberFact from './JsNumberFact'

storiesOf('JsNumberFact', module).add('math', () => ({
  components: { JsNumberFact },
  template: '<js-number-fact :factType="math" />',
}))

storiesOf('JsNumberFact', module).add('trivia', () => ({
  components: { JsNumberFact },
  template: '<js-number-fact :factType="trivia" />',
}))
