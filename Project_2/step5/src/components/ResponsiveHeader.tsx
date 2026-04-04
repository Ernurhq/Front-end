import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ResponsiveHeader({ title, leftAction, rightAction }: any) {
  const insets = useSafeAreaInsets(); // Получаем отступы безопасной зоны [cite: 26, 186]
  const { width } = useWindowDimensions(); // Получаем ширину экрана [cite: 12, 187]
  const isTablet = width >= 768; // Проверка на планшет [cite: 191]

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0066cc" translucent={Platform.OS === 'android'} />
      <View style={[
        styles.header,
        { 
          paddingTop: Platform.OS === 'android' ? insets.top : 0, // Обработка Android [cite: 207]
          height: 56 + (Platform.OS === 'android' ? insets.top : 0) // Динамическая высота [cite: 208]
        }
      ]}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            {leftAction && (
              <TouchableOpacity onPress={leftAction.onPress} style={styles.headerButton}>
                <Text style={styles.headerIcon}>{leftAction.icon}</Text>
              </TouchableOpacity>
            )}
          </View>
          
          <View style={styles.headerCenter}>
            <Text style={[styles.headerTitle, isTablet && styles.headerTitleTablet]} numberOfLines={1}>
              {title}
            </Text>
          </View>

          <View style={styles.headerRight}>
            {rightAction && (
              <TouchableOpacity onPress={rightAction.onPress} style={styles.headerButton}>
                <Text style={styles.headerIcon}>{rightAction.icon}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#0066cc' },
  header: { backgroundColor: '#0066cc', elevation: 4, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 },
  headerContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 8, height: 56 },
  headerLeft: { width: 48, alignItems: 'flex-start' },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerRight: { width: 48, alignItems: 'flex-end' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  headerTitleTablet: { fontSize: 22 }, // Увеличенный шрифт для планшетов [cite: 335]
  headerButton: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  headerIcon: { fontSize: 20, color: '#fff' }
});