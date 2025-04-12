// TweetCard.jsx
import React, { useEffect, useState } from "react";
import { Tweet, enrichTweet } from "react-tweet";
import { getTweet } from "react-tweet/api";

const TweetCard = ({ tweetId }) => {
  const [tweet, setTweet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const rawTweet = await getTweet(tweetId);
        const enriched = enrichTweet(rawTweet);
        setTweet(enriched);
      } catch (err) {
        setError("Failed to fetch tweet.");
        console.error("Tweet fetch error:", err);
      }
    };

    if (tweetId) {
      fetchTweet();
    }
  }, [tweetId]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

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
