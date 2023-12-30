import { Button, Screen, Text } from "@components";
import { AppScreenProps } from "@routes";
import React from "react";


export function HomeScreen(props: AppScreenProps<'HomeScreen'>) {

    function goToSettings() {
        props.navigation.navigate('SettingsScreen')
    }

    return (
        <Screen>
            <Text preset="headingLarge">Home Screen</Text>
            <Button title="Settings" onPress={goToSettings} />
        </Screen>
    )
}