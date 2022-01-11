import { StyleSheet } from 'react-native'
import { ColorSet, FamilySet, ScreenSize } from '../../styles'
import appStyle from '../../styles/appStyle'
import { buttonShadow, cardShadow } from '../../styles/shadows'

export default StyleSheet.create({
    container: {
        // ...appStyle.flex3,
        ...appStyle.aiCenter,
        height: ScreenSize.screenHeight.height80,
        backgroundColor: ColorSet.primary,
        borderRadius: 36,
        ...appStyle.pv30
    },
    image: {
        width: ScreenSize.screenWidth.width50,
        height: ScreenSize.screenWidth.width50,
        resizeMode: 'contain',
    },
    optionContainer: {
        ...appStyle.rowWrap, ...appStyle.jcCenter,
        width: ScreenSize.screenWidth.width60
    },
    optionBox: {
        backgroundColor: ColorSet.white,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 8,
        marginBottom: 12 + 4,
        ...cardShadow,
        minWidth: 80
    },
    answerBox:{
        marginBottom: 0,
    },
    rightAnswerBox:{
        backgroundColor: ColorSet.secondary,
    },
    wrongAnswerBox:{
        backgroundColor: ColorSet.extraRed,
    },
    emotyAnswerBox:{
        backgroundColor: ColorSet.secondaryLight
    },
    enMissingText: {
        textDecorationLine: 'underline',
        fontFamily: FamilySet.black
    },
    deText: {
        borderBottomWidth: 0.7, borderStyle: 'dashed', borderRadius: 0, borderColor: ColorSet.white
    },
    deMissingLine: {
        borderBottomWidth: 2,
        borderBottomColor: ColorSet.white,
        width: 100,
        marginTop: 20
    },
    answer:{
        color: ColorSet.white
    },
    sheet:{
        padding: 25,
        paddingBottom: 50,
        position:'absolute',
        bottom: 0,
        width: ScreenSize.screenWidth.width100,
        backgroundColor: '#fff'
    }

})