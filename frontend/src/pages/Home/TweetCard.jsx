// TweetComponent.jsx
import React, { useEffect, useState } from "react";
import { Tweet, enrichTweet } from "react-tweet";
import { getTweet } from "react-tweet/api";

const TweetCard= ({ tweetId }) => {
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const rawTweet = await getTweet(tweetId);
        const enriched = await enrichTweet(rawTweet);
        setTweet(enriched);
      } catch (error) {
        console.error("Failed to fetch tweet:", error);
      }
    };

    fetchTweet();
  }, [tweetId]);

  return (
    <div className="p-4">
      {tweet ? (
        <Tweet tweet={tweet} />
      ) : (
        <p className="text-gray-500">Loading tweet...</p>
      )}
    </div>
  );
};

export default TweetCard;
