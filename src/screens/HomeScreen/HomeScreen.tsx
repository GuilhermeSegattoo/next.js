import Box from "@src/components/Box/Box";
import templatePageHOC from "@src/services/template/templatePageHOC";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";
import type { Post } from "@src/services/posts/PostsService";

interface HomeScreenProps {
  posts: Post[];
}

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  console.log(props.posts)
  
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={props.posts}/>
      </Feed>
      <Footer />
    </Box>
  )
}

export default templatePageHOC(HomeScreen, {
  title: "Home",
})
