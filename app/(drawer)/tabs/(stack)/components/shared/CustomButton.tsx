import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'



interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary'
    className?: string;
    variant?: 'contained' | 'text-only';
}

const CustomButton = ({
    children,
    color = 'primary',
    onPress,
    onLongPress,
    className,
    variant = 'contained'
}: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color]

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color];

    if (variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className={`text-center ${textColor} font-work-medium`}>
                    {children}
                </Text>
            </Pressable>
        );
    }

    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className="text-white text-center font-work-medium">
                {children}
            </Text>
        </Pressable>
    );
}

export default CustomButton