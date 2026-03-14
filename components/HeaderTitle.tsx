import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface HeaderTitleProps {
  title: string;
  center?: boolean;
  showBack?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
  style?: StyleProp<ViewStyle>;
  transparent?: boolean;
  showTitle?: boolean;
}

export const HeaderTitle = ({ 
  title, 
  center = true, 
  showBack = false, 
  rightIcon, 
  onRightPress,
  style,
  transparent = false,
  showTitle = true
}: HeaderTitleProps) => {
  const router = useRouter();

  const containerStyles = [
    styles.container,
    showBack || rightIcon ? styles.row : null,
    !center && styles.leftAligned,
    transparent && styles.transparent,
    style
  ];

  return (
    <View style={containerStyles}>
      {showBack ? (
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
      ) : (
        (rightIcon || (showBack && center)) && <View style={styles.placeholder} />
      )}
      
      <Text style={[styles.title, !center && styles.largeTitle]} numberOfLines={1}>
        {showTitle ? title : ""}
      </Text>

      {rightIcon ? (
        <TouchableOpacity style={styles.iconBtn} onPress={onRightPress}>
          <Ionicons name={rightIcon} size={24} color={Colors.text} />
        </TouchableOpacity>
      ) : (
        showBack && center && <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 24,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftAligned: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    marginTop: 0,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  largeTitle: {
    fontSize: 24,
  },
  transparent: {
    backgroundColor: 'transparent',
    marginTop: 0,
  }
});

export default HeaderTitle;
