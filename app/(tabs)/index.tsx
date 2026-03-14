import { Colors } from "@/constants/Colors";
import { CATEGORIES, MOCK_MOVIES } from "@/constants/MockData";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderTitle } from "@/components/HeaderTitle";

export default function HomeScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const renderFeaturedItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity
      style={styles.featuredCard}
      onPress={() => router.push(`/movie/${item.id}`)}
    >
      <Image source={item.poster} style={styles.featuredImage} contentFit="cover" />
      <Text style={styles.featuredNumber}>{index + 1}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderTitle title="What do you want to watch?" center={false} />

        <View style={styles.searchContainer}>
          <View style={styles.searchInputWrapper}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#67686D"
              style={styles.searchInput}
            />
            <Ionicons name="search-outline" size={20} color="#67686D" />
          </View>
        </View>

        {/* Featured Section */}
        <FlatList
          data={MOCK_MOVIES.slice(0, 5)}
          renderItem={renderFeaturedItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `featured-${item.id}`}
          contentContainerStyle={styles.featuredList}
        />

        {/* Categories Section */}
        <View style={styles.categoriesContainer}>
          <FlatList
            data={CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setActiveCategory(item)}
                style={styles.categoryTab}
              >
                <Text
                  style={[
                    styles.categoryText,
                    activeCategory === item && styles.activeCategoryText,
                  ]}
                >
                  {item}
                </Text>
                {activeCategory === item && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Movie Grid */}
        <View style={styles.gridContainer}>
          {MOCK_MOVIES.map((movie) => (
            <TouchableOpacity
              key={movie.id}
              style={styles.gridItem}
              onPress={() => router.push(`/movie/${movie.id}`)}
            >
              <Image source={movie.poster} style={styles.gridImage} contentFit="cover" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.text,
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gray,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 48,
  },
  searchInput: {
    flex: 1,
    color: Colors.text,
    fontSize: 16,
  },
  featuredList: {
    paddingLeft: 24,
    paddingBottom: 24,
  },
  featuredCard: {
    width: 150,
    height: 220,
    marginRight: 30,
    position: "relative",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  featuredNumber: {
    position: "absolute",
    bottom: -15,
    left: -15,
    fontSize: 100,
    fontWeight: "800",
    color: Colors.primary,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    zIndex: 10,
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesList: {
    paddingHorizontal: 24,
  },
  categoryTab: {
    marginRight: 24,
    paddingBottom: 8,
    position: "relative",
  },
  categoryText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: "500",
  },
  activeCategoryText: {
    fontWeight: "700",
    color: Colors.primary,
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
    justifyContent: "space-between",
  },
  gridItem: {
    width: "31%",
    aspectRatio: 2 / 3,
    marginBottom: 15,
  },
  gridImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  movieCard: {
    width: 100,
    height: 150,
    marginRight: 12,
  },
  movieImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
