import { StyleSheet, Text, View , Image} from 'react-native';
import Myself from './assets/images/blackanime.png'
import style from './assets/style/style';

export default function App() {
  return (
    <View>
        <View style={style.ImageContainer}>
      <Image style ={style.image} source={Myself} />
    </View> 
    <View style={style.ImageContainer}>
      <Text> style={style.header}Role</Text>
<Text>UX/UI Design</Text>
<Text>Passion</Text>
<Text>My passion that really smart with math</Text>
<Text>Dream career</Text>
<Text>Tech Support</Text>
    </View>
    </View>
  );
}

