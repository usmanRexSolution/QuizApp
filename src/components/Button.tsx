import React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, Image, ViewStyle, ImageSourcePropType } from 'react-native'
import { H3 } from '.'
import { ColorSet, Fonts, FamilySet, ScreenSize } from '../styles'
import { buttonShadow } from '../styles/shadows'

interface ButtonProps {
  style?: TextStyle | undefined
  containerStyle?: ViewStyle | undefined
  onPress?: (() => void) | undefined
  icon?: ImageSourcePropType | undefined
  disable?: boolean
}

const Button: React.FC<ButtonProps> = props => {
  const { style, disable, containerStyle, onPress, icon } = props

  return (
    <TouchableOpacity
      disabled={disable}
      style={[
        {
          ...styles.container,
          ...containerStyle

        }, disable ? styles.disabled : null]}
      onPress={onPress}>
      {icon !== undefined && (
        <Image style={{ ...styles.image }} source={icon} />
      )}
      <H3 style={{ ...styles.label, ...style }}>{props.children}</H3>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorSet.secondary,
    width: ScreenSize.screenWidth.width80,
    paddingHorizontal: 8,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...buttonShadow
  },
  disabled: {
    backgroundColor: ColorSet.secondaryLight,
  },
  image: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
  },
  label: {
    color: ColorSet.white,
    ...Fonts.size.medium,
    fontFamily: FamilySet.extraBold,
  },
})

export default Button
