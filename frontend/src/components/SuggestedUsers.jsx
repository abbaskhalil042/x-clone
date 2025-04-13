import React from "react";

const SuggestedUsers = () => {
  // Mock data for suggested users
  const suggestedUsers = [
    {
      id: 1,
      name: "Jane Cooper",
      username: "@janecooper",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      isFollowing: false
    },
    {
      id: 2,
      name: "John Smith",
      username: "@johnsmith",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      isFollowing: true
    },
    {
      id: 3,
      name: "Alex Morgan",
      username: "@alexmorgan",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      isFollowing: false
    }
  ];

  return (
    <div className=" bg-[#1e1e1e] p-4 rounded-xl">
      <h2 className="text-xl font-bold text-white mb-4">Suggested for you</h2>
      
      <div className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-medium">{user.name}</p>
                <p className="text-gray-400 text-sm">{user.username}</p>
              </div>
            </div>
            
            <button
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                user.isFollowing 
                  ? "bg-transparent text-white border border-gray-600 hover:border-red-500 hover:text-red-500" 
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {user.isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
      
      <button className="text-blue-500 hover:text-blue-400 text-sm mt-4 w-full text-left">
        Show more
      </button>
    </div>
  );
};

export default SuggestedUsers;