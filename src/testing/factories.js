import { Factory } from 'rosie'
import { fromJS } from 'immutable'

// monkey patch a built factory to apply immutable
function immute(factory) {
  const newFactory = factory
  const origBuild = newFactory.build
  newFactory.build = function buildFactory(...args) {
    return fromJS(origBuild.apply(this, args))
  }
  return newFactory
}

// provided an array of factory built objects,
// spit out the immutable "state object" (links id property to object)
export const toState = (objects) => {
  const state = {}
  objects.forEach((obj) => { state[obj.get('id')] = obj })
  return fromJS(state)
}

export const Game = immute(new Factory()
  .sequence('id', (i) => i.toString())
  .attr('createdDate', () => Date.parse(new Date()))
)

export const Guess = immute(new Factory()
  .sequence('id', (i) => i.toString())
  .sequence('text', (i) => `t${i}`)
  .attr('correctLetters', null)
  .attr('correctPlacement', null)
  .attr('createdDate', () => Date.parse(new Date()))
)
