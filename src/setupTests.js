import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

configure({ adapter: new Adapter() })

chai.use(chaiImmutable)
