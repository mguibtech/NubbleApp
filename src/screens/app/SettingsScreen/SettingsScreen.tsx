import React from "react";
import { Button, Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "src/routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;


export function SettingsScreen({ navigation }: ScreenProps) {
    return (
        <Screen canGoBack>
            <Text preset="headingLarge">Settings Screen</Text>
        </Screen>
    )
}