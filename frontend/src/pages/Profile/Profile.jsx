import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SlCalender } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    website: "",
    avatar: "",
  });

  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    fetchProfile();
    fetchPosts();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/posts/all");
      const { name, bio, website, avatar } = response.data;
      setProfile({ name, bio, website, avatar });
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      const data = response.data;
      setPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    }
  };

  const handlePostCreate = async () => {
    if (!postContent.trim()) return;
    try {
      await axios.post("http://localhost:5000/api/posts/create ", { content: postContent });
      setPostContent("");
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="p-5">
      <article className="rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25 mx-auto bg-black dark:bg-gray-900">
        <div className="relative">
          <div className="overflow-hidden rounded-t-lg">
            <img
              alt="Profile banner"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2070&q=80"
              className="h-60 w-full object-cover"
            />
          </div>

          {/* <Avatar className="w-24 h-24 absolute -bottom-12 left-4 ring-4 ring-black">
            <AvatarImage src={profile.avatar || "https://github.com/shadcn.png"} />
            <AvatarFallback>{profile.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar> */}

          <Avatar className="w-24 h-24 absolute -bottom-12 left-4 ring-4 ring-black">
  <AvatarImage src={profile.avatar?.trim() || undefined} />
  <AvatarFallback>
    {(profile.name || "NA").slice(0, 2).toUpperCase()}
  </AvatarFallback>
</Avatar>

<Dialog>
              <DialogTrigger asChild>
                <Button variant="outline text-white">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-black text-white p-6 rounded-lg">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col items-center justify-center relative">
                  <Avatar className="w-[10rem] h-[10rem] object-fill">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="relative mt-[-20px] cursor-pointer">
                    <label className="cursor-pointer relative block w-fit mx-auto">
                      <Input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                      />
                      <Camera size={35} color="#EAE1C9" className="relative block" />
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400">Name</label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-black border border-gray-600 rounded-md p-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400">Bio</label>
                    <Textarea placeholder="Type your message here." />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400">Website</label>
                    <Input
                      type="text"
                      placeholder="Enter your website"
                      className="w-full bg-black border border-gray-600 rounded-md p-2 text-white"
                    />
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
        </div>

        <div className="pt-16 px-4 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg text-white font-semibold">{profile.name || "Dr. Codey Avatar"}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{profile.bio || "Frontend Surgeon"}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{profile.website || "hgdh@gmail.com"}</p>
        </div>

        <p className="flex text-m text-gray-500 dark:text-gray-400 m-2">
          <SlCalender className="m-2 mt-1" /> joined at 2020
        </p>

        <div className="flex mb-5">
          <p className="flex text-m text-gray-500 dark:text-gray-400 ml-4 mt-2">
            <span className="text-white mr-1">90</span> followers
          </p>
          <p className="flex text-m text-gray-500 dark:text-gray-400 ml-4 mt-2">
            <span className="text-white mr-1">90</span> followers
          </p>
        </div>

        <div>
          <div className="flex flex-wrap m-5 gap-6 text-m">
            {["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"].map((item) => (
              <span
                key={item}
                className="font-medium text-gray-700 hover:text-white hover:scale-105 transition duration-200 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
          <hr className="border-t border-gray-300" />
        </div>

        <div className="relative mt-5 max-w-2xl mx-auto bg-white dark:bg-gray-900">
          <div className="sticky top-0 z-50 h-px bg-gray-300 dark:bg-gray-700"></div>

          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3">
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <textarea
                  placeholder="What's happening?"
                  className="w-full p-3 bg-transparent border-b border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 resize-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-lg"
                  rows="2"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-4">
                    <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 p-1 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={handlePostCreate}
                    className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!postContent.trim()}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150"
            >
              <div className="flex gap-3">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-gray-900 dark:text-white">{post.user.name}</span>
                    {post.user.verified && (
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6..." />
                      </svg>
                    )}
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.user.username}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">· {post.stats.time}</span>
                  </div>
                  <p className="text-gray-900 dark:text-gray-100 mt-1">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post content"
                      className="mt-3 rounded-xl w-full object-cover border border-gray-200 dark:border-gray-700"
                    />
                  )}
                  <div className="flex gap-6 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.stats.likes} Likes</span>
                    <span>{post.stats.comments} Comments</span>
                    <span>{post.stats.shares} Shares</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
