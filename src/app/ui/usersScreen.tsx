import React, { useEffect } from "react"
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { observer } from "mobx-react-lite"
import { Icon, ListView } from "@/components"
import userStore, { User } from "@/components/store/userStore"
import { SafeAreaView } from "react-native-safe-area-context"

const UsersScreen: React.FC<any> = observer(({ navigation }) => {
  useEffect(() => {
    // fetching users
    userStore.fetchUsers()
  }, [])

  // rendering users
  const renderItems = ({ item }: { item: User }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Post", { userInfo: item })}
      activeOpacity={0.7}
      style={styles.userItem}
    >
      <View style={styles.userInfo}>
        <Image style={styles.userImage} source={{ uri: item.image }} />
        <View style={styles.userTextContainer}>
          <Text style={styles.userName}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={styles.userEmail}>{item.email}</Text>
          <View style={styles.companyContainer}>
            <Icon icon="company" size={15} />
            <View style={styles.iconSpacer} />
            <Text>{item.company.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lifology's Users</Text>
        </View>
        {!userStore.isLoading ? (
          userStore.users.length != 0 ? (
            <ListView
              data={userStore.users}
              estimatedItemSize={1}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItems}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No post</Text>
            </View>
          )
        ) : (
          <View style={styles.emptyContainer}>
            <ActivityIndicator color="#4A628A" size={50} />
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
  header: {
    padding: 15,
  },
  headerText: {
    color: "#4A628A",
    fontWeight: "bold",
    fontSize: 18,
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
  userItem: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    backgroundColor: "#DFF2EB",
    padding: 8,
    borderBottomLeftRadius: 150,
    borderTopLeftRadius: 0,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    height: 60,
    width: 60,
    borderTopRightRadius: 35,
    borderWidth: 2,
    borderColor: "#4A628A",
    backgroundColor: "#B9E5E8",
  },
  userTextContainer: {
    width: "100%",
    justifyContent: "center",
    padding: 5,
    marginLeft: 20,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4A628A",
  },
  userEmail: {
    color: "#7AB2D3",
  },
  companyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacer: {
    width: 5,
  },
})

export default UsersScreen
