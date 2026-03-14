import { HeaderTitle } from "@/components/HeaderTitle";
import { Colors } from "@/constants/Colors";
import { MOCK_MOVIES } from "@/constants/MockData";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState("About Movie");

  const movie = MOCK_MOVIES.find((m) => m.id === id) || MOCK_MOVIES[0];

  const TABS = ["About Movie", "Reviews", "Cast"];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.backdropContainer}>
          <Image source={movie.backdrop} style={styles.backdropImage} contentFit="cover" />
          <HeaderTitle
            title="Detail"
            showTitle={false}
            showBack={true}
            rightIcon="bookmark-outline"
            transparent={true}
            style={[styles.headerOverlay, { paddingTop: insets.top + 10 }]}
          />

          <View style={styles.posterOverlay}>
            <Image source={movie.poster} style={styles.posterImage} contentFit="cover" />
            <View style={styles.ratingBadge}>
              <Ionicons name="star" size={14} color={Colors.orange} />
              <Text style={styles.ratingText}>{movie.rating}</Text>
            </View>
          </View>

          <Text style={styles.titleBelow}>{movie.title}</Text>
        </View>

        {/* Info Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="calendar-outline" size={16} color={Colors.textSecondary} />
            <Text style={styles.infoText}>{movie.year}</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={16} color={Colors.textSecondary} />
            <Text style={styles.infoText}>{movie.duration}</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoItem}>
            <Ionicons name="ticket-outline" size={16} color={Colors.textSecondary} />
            <Text style={styles.infoText}>{movie.genre}</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        <View style={styles.contentContainer}>
          {activeTab === "About Movie" && (
            <Text style={styles.description}>{movie.description}</Text>
          )}

          {activeTab === "Reviews" && (
            <View>
              {movie.reviews.map((review) => (
                <View key={review.id} style={styles.reviewItem}>
                  <View style={styles.reviewHeader}>
                    <Image source={review.avatar} style={styles.avatar} contentFit="cover" />
                    <View style={styles.authorInfo}>
                      <Text style={styles.authorName}>{review.author}</Text>
                      <Text style={styles.reviewRating}>{review.rating}</Text>
                    </View>
                  </View>
                  <Text style={styles.reviewContent}>{review.content}</Text>
                </View>
              ))}
            </View>
          )}

          {activeTab === "Cast" && (
            <View style={styles.castGrid}>
              {movie.cast.map((person) => (
                <View key={person.id} style={styles.castItem}>
                  <Image source={person.image} style={styles.castImage} contentFit="cover" />
                  <Text style={styles.castName} numberOfLines={2}>{person.name}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.watchNowBtn}>
          <Text style={styles.watchNowBtnText}>Watch Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backdropContainer: {
    height: 350,
    width: "100%",
    position: "relative",
    marginBottom: 60,
  },
  backdropImage: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10,
  },
  posterOverlay: {
    position: "absolute",
    bottom: -40,
    left: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  posterImage: {
    width: 100,
    height: 150,
    borderRadius: 12,
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    color: Colors.orange,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
  },
  titleBelow: {
    position: 'absolute',
    bottom: -30,
    left: 145,
    right: 20,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  infoDivider: {
    width: 1,
    height: 16,
    backgroundColor: Colors.textSecondary,
    marginHorizontal: 15,
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  tab: {
    marginRight: 30,
    paddingBottom: 8,
    position: "relative",
  },
  tabText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: "500",
  },
  activeTabText: {
    fontWeight: "700",
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
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  description: {
    color: Colors.text,
    fontSize: 14,
    lineHeight: 22,
  },
  reviewItem: {
    marginBottom: 24,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
  },
  reviewRating: {
    color: Colors.primary,
    fontSize: 12,
    marginTop: 4,
  },
  reviewContent: {
    color: Colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
  castGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  castItem: {
    width: "48%",
    alignItems: "center",
    marginBottom: 20,
  },
  castImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  castName: {
    color: Colors.text,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
  watchNowBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    marginHorizontal: 24,
    marginBottom: 40,
    alignItems: "center",
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  watchNowBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
