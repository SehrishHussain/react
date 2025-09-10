import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import ConfirmDialog from "../components/ConfirmDialog";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        setShowConfirm(false);
        navigate("/");
      }
    });
  };

  const imgUrl = post?.featuredImage
    ? appwriteService.getFileView(post.featuredImage)
    : "";

  return post ? (
    <div className="py-8 ">
      <Container>
        {/* 🔹 Action buttons at top-right */}
        {isAuthor && (
          <div className="absolute right-6 top-6 flex space-x-3">
            <Link to={`/edit-post/${post.$id}`}>
              <Button
                className="rounded-full px-5 py-2 bg-green-500 text-white 
                           hover:bg-green-600 transition-colors
                           dark:bg-green-600 dark:hover:bg-green-700"
              >
                Edit
              </Button>
            </Link>
            <Button
              onClick={() => setShowConfirm(true)}
              className="rounded-full px-5 py-2 bg-red-500 text-white 
                         hover:bg-red-600 transition-colors"
            >
              Delete
            </Button>
          </div>
        )}

        {/* Blog Image */}
        <div className="w-full flex justify-center mb-4 border rounded-xl p-2">
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={post.title}
              className="w-full h-48 object-cover rounded-xl"
            />
          ) : (
            <p>Loading Image</p>
          )}
        </div>

        {/* Blog Title */}
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>

        {/* Blog Content */}
        <div className="browser-css">{parse(post.content)}</div>

        {/* Confirm Dialog */}
        <ConfirmDialog
          open={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={deletePost}
          message="Are you sure you want to delete this blog? This action cannot be undone."
        />
      </Container>
    </div>
  ) : null;
}
