import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux"; // assuming you keep user in redux auth state

function Home() {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.user); // your user object

  useEffect(() => {
    appwriteService.getPosts().then((res) => {
      if (res) {
        setPosts(res.documents);
      }
    });

    // Fetch user posts if logged in
    if (authStatus) {
      appwriteService.getUserPosts(authStatus.$id).then((res) => {
        console.log("User posts response:", res);
        if (res) {
          setUserPosts(res.documents);
        }
      });
    }
  }, [authStatus]);

  // Split posts
  const mostReadPosts = posts.slice(0, 4); // placeholder: you can sort by views
  const latestPosts = posts.slice(0, 8);

  // Reusable animation config
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full py-8 mt-4 text-center">
      {/* Header */}
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Welcome to Blogify!!
            </h1>
          </div>
        </div>
      </Container>

      {/* Most Read Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Container>
          <h2 className="text-xl font-semibold mb-4 text-left">
            📈 Most Read Posts
          </h2>
          <div className="flex flex-wrap">
            {mostReadPosts.map((post) => (
              <div
                key={post.$id}
                className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </motion.div>

      {/* Latest Posts Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Container>
          <h2 className="text-xl font-semibold mb-4 text-left">
            🆕 Latest Posts
          </h2>
          <div className="flex flex-wrap">
            {latestPosts.map((post) => (
              <div
                key={post.$id}
                className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </motion.div>

      {/* User's Posts Section */}
      {authStatus && userPosts.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Container>
            <h2 className="text-xl font-semibold mb-4 text-left">
              ✍️ Your Blogs
            </h2>
            <div className="flex flex-wrap">
              {userPosts.map((post) => (
                <div
                  key={post.$id}
                  className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </motion.div>
      )}
    </div>
  );
}

export default Home;
