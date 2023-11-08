import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import axios from 'axios'
import { AuthContext } from '../hooks/authContext'


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [postingError, setPostingError] = useState('')

  const setIsLoggedIn =  useContext(AuthContext).setIsLoggedIn;

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    await axios.post('http://', {
      email: email.value,
      password: password.value,
      name: name.value
    }).then(res => {
      setIsLoggedIn(true)
    }).catch(err => {
      setPostingError("Something bad happened")
    })

    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Welcome Onboard!</Header>
      <Text style={{marginBottom: 20}}>Lets help you in completing your tasks</Text>
      <View style={styles.input}>
        <Text style={styles.textLabel}>Full name</Text>
        <TextInput
          placeholder="Mary Elliot"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput
          placeholder="mary.elliot@mail.com"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
          placeholder="**********"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.textLabel}>Confirm Password</Text>
        <TextInput
          placeholder="**********"
          returnKeyType="done"
          // value={password.value}
          // onChangeText={(text) => setPassword({ value: text, error: "" })}
          // error={!!password.error}
          // errorText={password.error}
          // secureTextEntry
        />
      </View>
      {postingError && <Text style={styles.error}>{postingError}</Text>}
      <Button mode="contained" onPress={onSignUpPressed}>
        Register
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  error: {
    color: theme.colors.error,
    alignSelf: 'center',
    marginTop: 24
  },
  textLabel:{
    textAlign: "left",
    fontWeight: "bold",
  },
  input: {
    display: "flex",
    width: "100%",
  }
})
