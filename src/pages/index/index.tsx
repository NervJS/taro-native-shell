import { Component } from 'react'
import { View, Text, Button, Video } from '@tarojs/components'
import {scanCode,navigateTo} from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick() {
    scanCode({}).then(console.log)
  }

  handleClick2() {
    navigateTo({
      url: '/pages/index/b'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!!!</Text>
        <Button onClick={this.handleClick}>aaaa</Button>
        <Button onClick={this.handleClick2}>bbbbb</Button>
        <Video autoplay showPlayBtn={false} src='http://wos.anjukestatic.com/nrlKjIhGnEO/video/4a13605e-d2af-11ec-a27e-4ab7ef9771a0.mp4' />
      </View>
    )
  }
}
