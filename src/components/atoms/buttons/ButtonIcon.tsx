import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface ButtonIconProps {
  placeholder?: string;
  icon?: any;
  onPress: () => void;
  style?: ViewStyle;
  textStyles?: ViewStyle;
  logoStyle?: ImageStyle;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  placeholder,
  icon,
  onPress,
  style,
  textStyles,
  logoStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
      {placeholder && (
        <Text style={[{marginRight: 5, fontFamily: 'monserat'}, textStyles]}>
          {placeholder}
        </Text>
      )}
      {icon && <Image source={icon} style={logoStyle} />}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
