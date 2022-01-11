import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Alert } from 'react-native'

import { Images } from '../../constants/assets/images'
import appStyle from '../../styles/appStyle'
import style from './style'
import { Button, H1, H2, H3, H5 } from '../../components'
import database from '@react-native-firebase/database'
import firestore from '@react-native-firebase/firestore';

const QuizScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [questionEn, setQuestionEn] = useState([{ before: '' }, { after: '' }, { missing: '' }])
  const [questionDe, setQuestionDe] = useState([])
  const [options, setOptions] = useState([])
  const [currentQuestionStatus, setCurrentQuestionStatus] = useState<boolean>()
  const [checkAnswer, setCheckAnswer] = useState<boolean>(false)
  const [answer, setAnswer] = useState('')
  const [allowAnswer, setAllowAnswer] = useState<boolean>(false)
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false)
  // const [canChangeAnswer, setCanChangeAnswer] = useState<boolean>(false)
  // const quizCollection = firestore().collection('quiz-1');

  // useEffect(() => {
  //   userData()
  // }, [])

  useEffect(() => {
    const subscriber = firestore()
      .collection('quiz-db-1')
      .doc('ESnKwpqOskQmIDvoqqZZ')
      .collection('quiz-1')
      .doc('nAq37NSsWoCJ45KBke3O')
      .onSnapshot(documentSnapshot => {
        var data = documentSnapshot.data()
        
        if (data) {
          setQuestionsData(data.question)
        }

        var optionsObj = [];
        if (data.options != null || data.options != undefined) {
          Object.values(data.options).forEach((obj) => {
            // console.log('----------', obj);
            optionsObj.push(obj);
          });
          setTimeout(() => {
            setOptionsData(optionsObj)
          }, 2000);
        }
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);


  const setQuestionsData = (questionType: any) => {
    setQuestionEn(questionType.en)
    // console.log('User data:== yes---ho', questionEn);
    setQuestionDe(questionType.de)
  }

  const setOptionsData = (items: any) => {
    setOptions(items)
    // console.log('data===15-===-', options);
  }

  const handleSelectedOption = (item) => {
    setCheckAnswer(false)
    setShowBottomSheet(false)
    // console.log('----status', status);
    if (item.status) {
      setAllowAnswer(true)
      setAnswer(item.value)
      // Alert.alert('right answer')
      setCurrentQuestionStatus(true)
    }
    else {
      setCurrentQuestionStatus(false)
      setAllowAnswer(true)
      setAnswer(item.value)
      // Alert.alert('wrong answer')
    }
  }

  const handleCheckQuestion = () => {
    setShowBottomSheet(true)
    setCheckAnswer(true)
    // setCurrentQuestionStatus(false)

    // if (currentQuestionStatus) {
    //   // Alert.alert('right answer')
    // }
    // else {
    //   Alert.alert('wrong answer')
    // }
  }

  const handleChangeQuestion = () => {
    setShowBottomSheet(false)
    setAnswer('')
    const subscriber = firestore()
    .collection('quiz-db-1')
    .doc('ESnKwpqOskQmIDvoqqZZ')
    .collection('quiz-2')
    .doc('WlZybTdaUiaGVpM0N6mj')
    .onSnapshot(documentSnapshot => {
      var data = documentSnapshot.data()
      if (data) {
        setQuestionsData(data.question)
      }

      var optionsObj = [];
      if (data.options != null || data.options != undefined) {
        Object.values(data.options).forEach((obj) => {
          // console.log('----------', obj);
          optionsObj.push(obj);
        });
        setTimeout(() => {
          setOptionsData(optionsObj)
        }, 2000);
      }
    });

  // Stop listening for updates when no longer required
  return () => subscriber();
  }

  return (
    <>
      <SafeAreaView style={appStyle.safeContainer}>
        <View style={appStyle.wrapper}>
          <View style={style.container}>
            <View style={[appStyle.pt20, appStyle.flex1]}>
              <View style={[appStyle.aiCenter]}>
                <H5>Fill in the missing word.</H5>
              </View>
              <View style={[appStyle.aiCenter]}>

                <View style={[appStyle.pt20, appStyle.rowWrap]}>
                  <H1>{questionEn?.before}</H1>
                  <H1 style={style.enMissingText}>{' '}{questionEn?.missing}{' '}</H1>
                  <H1>{questionEn?.after}</H1>
                </View>
                <View style={[appStyle.pt30, appStyle.rowWrap, appStyle.aiCenter]}>
                  <H2 style={style.deText}>{questionDe?.before}</H2>
                  <View style={[appStyle.jcFlexEnd, appStyle.ph10]}>
                    {answer !== '' &&
                      <View style={[style.optionBox, style.answerBox, checkAnswer && (currentQuestionStatus ? style.rightAnswerBox : style.wrongAnswerBox)]}
                      >
                        <H3 style={checkAnswer && style.answer}>{answer}</H3>
                      </View>
                    }
                    {answer == '' &&
                      <View style={style.deMissingLine} />
                    }

                  </View>
                  <H2 style={style.deText}>{questionDe?.after}</H2>
                </View>
              </View>
              <View style={[appStyle.aiCenter, appStyle.mt50]}>
                <View style={style.optionContainer}>
                  {options?.map((item, key) => {
                    return (
                      <View key={key}>
                        <TouchableOpacity style={[style.optionBox, answer == item.value ? style.emotyAnswerBox : null]}
                          onPress={() => handleSelectedOption(item)}
                        >
                          <H3>{answer == item.value ? '' : item.value}</H3>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                  }
                </View>

              </View>
            </View>
            <View>
              <Button disable={answer !== '' ? false : true} onPress={handleCheckQuestion}>
                Continue
              </Button>
            </View>
          </View>
        </View>
        {showBottomSheet &&
          <View style={style.sheet}>
            <View style={appStyle.pb15}>
              <H3>{currentQuestionStatus ? 'Great Job!' : 'Wrong Answer!'}</H3>
            </View>
            <Button onPress={handleChangeQuestion}>
              Continue
            </Button>
          </View>
        }
      </SafeAreaView>
    </>
  )
}


export default QuizScreen
