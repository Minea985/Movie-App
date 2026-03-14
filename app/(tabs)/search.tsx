import { Colors } from "@/constants/Colors";
import { MOCK_MOVIES, Movie } from "@/constants/MockData";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderTitle } from "@/components/HeaderTitle";

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setFilteredMovies([]);
    } else {
      const results = MOCK_MOVIES.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredMovies(results);
    }
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => router.push(`/movie/${item.id}`)}
    >
      <Image source={item.poster} style={styles.listImage} contentFit="cover" />
      <View style={styles.listDetails}>
        <Text style={styles.listTitle} numberOfLines={1}>{item.title}</Text>
        
        <View style={styles.metaRow}>
          <Ionicons name="star" size={14} color={Colors.orange} />
          <Text style={styles.metaTextRating}>{item.rating}</Text>
        </View>

        <View style={styles.metaRow}>
          <Ionicons name="ticket-outline" size={14} color={Colors.textSecondary} />
          <Text style={styles.metaText}>{item.genre}</Text>
        </View>

        <View style={styles.metaRow}>
          <Ionicons name="calendar-outline" size={14} color={Colors.textSecondary} />
          <Text style={styles.metaText}>{item.year}</Text>
        </View>

        <View style={styles.metaRow}>
          <Ionicons name="time-outline" size={14} color={Colors.textSecondary} />
          <Text style={styles.metaText}>{item.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Search" />

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for movies..."
            placeholderTextColor={Colors.textSecondary}
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <Ionicons name="search" size={20} color={Colors.textSecondary} style={styles.searchIcon} />
        </View>

        {searchQuery.trim() === "" ? (
          <View style={styles.placeholder}>
            <Ionicons name="film-outline" size={80} color={Colors.gray} />
            <Text style={styles.placeholderText}>Find your favorite movies</Text>
          </View>
        ) : filteredMovies.length > 0 ? (
          <FlatList
            data={filteredMovies}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.resultsList}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="search-outline" size={80} color={Colors.gray} />
            <Text style={styles.placeholderText}>No movies found for "{searchQuery}"</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
  },
  searchIcon: {
    marginLeft: 10,
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  placeholderText: {
    color: Colors.textSecondary,
    fontSize: 16,
    marginTop: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  resultsList: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  listImage: {
    width: 95,
    height: 120,
    borderRadius: 16,
  },
  listDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  metaText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginLeft: 8,
  },
  metaTextRating: {
    fontSize: 12,
    color: Colors.orange,
    fontWeight: "700",
    marginLeft: 8,
  },
});
