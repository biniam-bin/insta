import React from "react";
import { render } from "react-dom";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imgUrl: "https://img.icons8.com/ios/2x/ffffff/like.png",
    likedImageUrl: "https://img.icons8.com/ios-filled/2x/fa314a/like.png",
  },
  {
    name: "Comment",
    imgUrl:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/2x/ffffff/external-comment-chat-flatart-icons-outline-flatarticons-1.png",
  },
  {
    name: "Share",
    imgUrl:
      "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/ffffff/external-paper-plane-interface-kiranshastry-lineal-kiranshastry.png",
  },
  {
    name: "Save",
    imgUrl: "https://img.icons8.com/windows/2x/ffffff/bookmark-ribbon.png",
  },
];

export default function Post({ post }) {
  return (
    <View
      style={{
        marginTop: 30,
        borderTopColor: "gray",
        borderTopWidth: 1,
      }}
    >
      {/* <Divider width={1} orientation="vertical" /> */}
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 5 }}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
}

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.story} source={{ uri: post.profile_picture }} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "bold" }}>
        {post.user}
      </Text>
    </View>
    <TouchableOpacity>
      {/* <Text style={{ color: "white", fontWeight: "900" }}>
        ...
      </Text> */}
      <Image
        style={{ height: 80, width: 80 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dPupXfKL13rC5T1t5V20rNC2Vm0DDYxbgA&usqp=CAU",
        }}
      />
      {/*remove font size*/}
    </TouchableOpacity>
  </View>
);

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        source={{ uri: post.imgUrl }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
      {/*change "contain" to "cover"*/}
    </View>
  );
};

const PostFooter = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.leftIcons}>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imgUrl} />
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imgUrl} />
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imgUrl} />
      </View>
      <View>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imgUrl} />
      </View>
    </View>
  );
};

const Icon = ({ imgStyle, imgUrl }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
  );
};

const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 4 }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {post.likes.toLocaleString("en")} likes
      </Text>
    </View>
  );
};

const Caption = ({ post }) => {
  return (
    <View style={{ marginTop: 6 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "bold" }}>{post.user} - </Text>
        <Text>{post.caption}</Text>
      </Text>
    </View>
  );
};

const CommentSection = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {!!post.comments.length && (
        <Text style={{ color: "gray" }}>
          View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
          {post.comments.length > 1 ? "comments" : "comment"}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: "row", marginTop: 5}}>
        <Text style={{ color: "white" }}>
          <Text style={{fontWeight: "bold"}}>{comment.user}</Text>
          <Text> {comment.comment}</Text>
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.7,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftIcons: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});
