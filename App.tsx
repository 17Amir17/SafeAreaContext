import React, {RefObject, useCallback, useMemo, useRef} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

function App(): JSX.Element {
  const safeAreaModal = useRef<BottomSheetModal>(null);
  const regularModal = useRef<BottomSheetModal>(null);

  const showSafeAreaModal = useCallback(() => {
    safeAreaModal.current?.present();
  }, []);

  const showRegularModal = useCallback(() => {
    regularModal.current?.present();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
            }}>
            <Text>Home</Text>
            <Button
              onPress={showSafeAreaModal}
              title="Bottom Sheet With Safe Area"
            />
            <Button
              onPress={showRegularModal}
              title="Bottom Sheet Without Safe Area"
            />
          </View>
          <BottomSheetWithSafeArea bottomRef={safeAreaModal} />
          <BottomSheetWithoutSafeArea bottomRef={regularModal} />
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

function BottomSheetWithoutSafeArea({
  bottomRef,
}: {
  bottomRef: RefObject<BottomSheetModal>;
}) {
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <BottomSheetModal ref={bottomRef} index={1} snapPoints={snapPoints}>
      <View style={styles.container}>
        <Text>Without Safe Area</Text>
      </View>
    </BottomSheetModal>
  );
}

function BottomSheetWithSafeArea({
  bottomRef,
}: {
  bottomRef: RefObject<BottomSheetModal>;
}) {
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <BottomSheetModal ref={bottomRef} index={1} snapPoints={snapPoints}>
      <SafeAreaView style={styles.container}>
        <Text>With Safe Area</Text>
      </SafeAreaView>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
});

export default App;
