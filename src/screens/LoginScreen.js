import React, { useContext, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
// import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { AuthContext } from '../hooks/authContext'
import axios from 'axios'


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [postingError, setPostingError] = useState('')

  const setIsLoggedIn =  useContext(AuthContext).setIsLoggedIn;

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    

    await axios.post('http://', {
      email: email.value,
      password: password.value
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
      <Header>Welcome back!</Header>
      <Image
        source={require("../assets/undraw_Access_account_re_8spm.png")}
        style={styles.image}
      />
      <View style={styles.input}>
      <Text style={styles.textStyle}>Email</Text>
      <TextInput
        placeholder="mary.elliot@mail.com"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      </View>
      <View style={styles.input}>
      <Text style={styles.textStyle}>Password</Text>
      <TextInput
        placeholder="**********"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={password.error}
        errorText={password.error}
        secureTextEntry
      />
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      {postingError && <Text style={styles.error}>{postingError}</Text>}
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  textStyle: {
    fontWeight: "bold",
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.primary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  error: {
    color: theme.colors.error,
    alignSelf: "center",
  },
  input: {
    display: "flex",
    width: "100%",
  },
});
