import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet , Switch } from 'react-native'


export default function Component () {

 const [isEnabled, setIsEnabled] = useState(true);
 const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

 //Initial State of all the Inputs & BmiResult
 const [height, setHeight] = React.useState('');
 const [weight, setWeight] = React.useState('');
 const [bmi, setBmi] = React.useState('');
 const [bmiResult, setbmiResult] = React.useState('');

// Calulation Part using functions.
const calculate = () => {
      var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      result = result.toFixed(2);
      var bmi = '';

      //display result
      setbmiResult (result);

      if(result<18.5){
        bmi = 'Underweight';
      }
      else if(result>=18.5&&result<25){
        bmi = 'Normal';
      }
      else if(result>=25&&result<30){
        bmi = 'overweight';
      }
      else if(result>=30){
        bmi = 'Obese';
      }
      else{
         alert('Incorrect Input!');

      }
      setBmi(bmi);
   }

   const calculateImperial = () => {
     var imperialresult = (parseFloat(weight * 703))/(parseFloat(height)*parseFloat(height));
     imperialresult = imperialresult.toFixed(2);

     var bmi = '';
     //display result
     setbmiResult (imperialresult);

     if(imperialresult<18.5){
       bmi = 'Underweight';
     }
     else if(imperialresult>=18.5&&imperialresult<25){
       bmi = 'Normal';
     }
     else if(imperialresult>=25&&imperialresult<30){
       bmi = 'overweight';
     }
     else if(imperialresult>=30){
       bmi = 'Obese';
     }
     else{
        alert('Incorrect Input!');
     }
     setBmi (bmi);
     }

//Designing of User Interface.
      return (
<View style = {styles.container}>
<Text style={styles.title}>BMI Calculator</Text>
<View style ={styles.switch}>
<Text style = {styles.label}>Standard(Cm/kg)</Text>
<Switch onValueChange = {toggleSwitch} value= {isEnabled}/>
<Text style = {styles.label}>Imperial(lbs/inch)</Text>
</View>
            <Text  style = {styles.label}>Height</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height"
               autoCapitalize = "none"
               onChangeText = {(height) => setHeight(height)}
               values = {height}/>

<Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight"
               autoCapitalize = "none"
               onChangeText = {(weight) => setWeight(weight)}
               values = {weight}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {isEnabled ? calculateImperial: calculate}>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>

<Text style = {styles.output}>{bmi}</Text>
<Text style = {styles.resultText}>{bmiResult}</Text>

</View>
      );
   }
// Styling of User Interface.

const styles = StyleSheet.create({

   container: {
      paddingTop: 40,
   },

   title:{
      paddingTop:30,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      fontFamily: "Times New Roman",
      fontStyle: "italic",
      fontWeight:"bold",
      color: "#056676",
   },

   label:{
      marginLeft: 15,
      fontSize: 20,
      fontFamily: "Times New Roman",
   },

   input: {
      margin: 20,
      height: 40,
      borderWidth: 2,
      padding: 10,
   },

   submitButton: {
      backgroundColor: '#A3D2CA',
      padding: 10,
      margin: 15,
      height: 45,
   },

   submitButtonText:{
      textAlign: "center",
      color: '#318FB5',
      fontFamily: "Times New Roman",
      fontSize: 24,
      fontStyle: "italic",
      fontWeight:"bold",
   },

   output:{
     paddingTop:10,
     paddingBottom:10,
     textAlign: "center",
     fontSize: 30,
     fontFamily: "Times New Roman",
     color: '#318FB5',
   },

   resultText:{
      paddingTop:10,
      textAlign: "center",
      fontSize: 30,
      fontFamily: "Times New Roman",
      color: '#056676'
   },

   switch:{
     flexDirection: "row",
     alignItems: "center",
     margin: 15,
     },
});
