import * as Device from 'expo-device';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

import {Text, View, Button, Alert} from 'react-native';
import { Color, router } from 'expo-router';
import { Stack } from 'expo-router';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

/*export default function RootLayout() {
  return (
    <Stack>

    </Stack>
  );
}*/

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
        <ThemedView style={styles.helloWorld}>
          <Text style={{color: 'white', paddingBottom: 16}}>Insira os seus dados</Text>
          <TextInput style={{color: 'white'}} placeholder = "Nome"></TextInput>
          <Button title="Realizar Cadastro" onPress={()=> {if (Platform.OS == 'web') {window.alert('Impossível Cadastrar Usuário')} else {Alert.alert('Impossível Cadastrar Usuário')}}}></Button>
          <Button title="Go to ProductScreen" onPress={()=>router.push('/produtos')}></Button>
          <Button title="Go to DetalhesScreen" onPress={()=>router.push('/detalhes')}></Button>
        </ThemedView>
        </ThemedView>
        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  helloWorld: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
