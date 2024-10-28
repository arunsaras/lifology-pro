import React, { useEffect } from "react"
import { View, Text, ActivityIndicator, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Icon, ListView } from "@/components"
import postStore, { Post } from "@/components/store/postStore"
import { SafeAreaView } from "react-native-safe-area-context"

const PostScreen: React.FC<any> = observer(({ route, navigation }) => {
  const { userInfo } = route.params

  useEffect(() => {
    // fetching posts of specific user by passing id
    postStore.fetchPosts(userInfo["id"])
  }, [])

  // rendering posts
  const renderItems = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
      <View style={styles.spacer} />
      <View style={styles.reactionContainer}>
        <View style={styles.viewContainer}>
          <Icon icon={"views"} size={20} />
          <View style={styles.iconSpacer} />
          <Text style={styles.viewText}>{item.views}</Text>
        </View>
        <View style={styles.reactionIconsContainer}>
          <Icon icon={"likes"} size={20} />
          <View style={styles.iconSpacer} />
          <Text style={styles.reactionText}>{item.reactions.likes}</Text>
          <View style={styles.reactionSpacer} />
          <Icon icon={"dislikes"} size={20} />
          <View style={styles.iconSpacer} />
          <Text style={styles.reactionText}>{item.reactions.dislikes}</Text>
        </View>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Icon onPress={() => navigation.goBack()} icon="caretLeft" size={25} color="#4A628A" />
          <Text style={styles.headerText}>{userInfo["firstName"]}'s posts</Text>
        </View>
        {!postStore.isLoading ? (
          postStore.posts.length != 0 ? (
            <ListView
              data={postStore.posts}
              estimatedItemSize={10}
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No post</Text>
            </View>
          )
        ) : (
          <View style={styles.emptyContainer}>
            <ActivityIndicator color={"#4A628A"} size={50} />
          </View>
        )}
      </View>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    marginLeft: 5,
    color: "#4A628A",
    fontWeight: "bold",
    fontSize: 18,
  },
  centeredContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "#4A628A",
    fontSize: 16,
  },
  postContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#DFF2EB",
  },
  postTitle: {
    color: "#4A628A",
    fontSize: 14,
    fontWeight: "800",
  },
  postBody: {
    textAlign: "justify",
    color: "#333",
  },
  spacer: {
    height: 10,
  },
  reactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reactionIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacer: {
    width: 5,
  },
  reactionSpacer: {
    width: 8,
  },
  viewText: {
    color: "#4A628A",
    fontSize: 14,
    fontWeight: "700",
  },
  reactionText: {
    color: "#4A628A",
    fontSize: 14,
    fontWeight: "700",
  },
})

export default PostScreen
