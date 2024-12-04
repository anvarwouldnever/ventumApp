import logo from '../assets/logo.png'
import { Image } from 'react-native'

const Logo = () => {
    return <Image style={{width: 133, height: 45, alignSelf: 'center'}} source={logo} resizeMode='contain'/>
}

export default Logo