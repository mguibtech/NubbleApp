import { Button, Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { AppStackParamList } from "src/routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;


export function HomeScreen({ navigation }: ScreenProps) {

    function goToSettings() {
        navigation.navigate('SettingsScreen')
    }

    return (
        <Screen>
            <Text preset="headingLarge">Home Screen</Text>
            <Button title="Settings" onPress={goToSettings} />
        </Screen>
    )
}