const HomePage = () => {
  // Sample post data
  const posts = [
    {
      id: 1,
      user: {
        name: "Jane Cooper",
        username: "@janecooper",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        verified: true
      },
      content: "Just launched our new product! Check it out at example.com #excited",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      stats: {
        likes: 24,
        comments: 5,
        shares: 3,
        time: "2h"
      },
      isLiked: false
    },
    {
      id: 2,
      user: {
        name: "Alex Morgan",
        username: "@alexmorgan",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        verified: false
      },
      content: "Beautiful day for a hike in the mountains! Nature always helps me clear my mind. 🏔️ #outdoors #adventure",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      stats: {
        likes: 142,
        comments: 28,
        shares: 7,
        time: "5h"
      },
      isLiked: true
    }
  ];

  return (
    <div className="relative max-w-2xl mx-auto bg-white dark:bg-gray-900">
      {/* Your original sticky border - unchanged */}
      <div className="sticky top-0 z-50 h-px bg-gray-300 dark:bg-gray-700"></div>
      
      {/* Create Post Section - Enhanced */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-3">
          <img 
            src="https://randomuser.me/api/portraits/men/1.jpg" 
            alt="Profile"
            className="w-11 h-11 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <textarea
              placeholder="What's happening?"
              className="w-full p-3 bg-transparent border-b border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 resize-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-lg"
              rows="2"
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-4">
                <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 p-1 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 p-1 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed - Enhanced */}
      {posts.map((post) => (
        <div key={post.id} className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
          <div className="flex justify-between items-start gap-3">
            <div className="flex gap-3 flex-1">
              <img 
                src={post.user.avatar} 
                alt={post.user.name}
                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900 dark:text-white truncate">{post.user.name}</span>
                  {post.user.verified && (
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                    </svg>
                  )}
                  <span className="text-gray-500 dark:text-gray-400 text-sm truncate">{post.user.username}</span>
                  <span className="text-gray-500 dark:text-gray-400">·</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{post.stats.time}</span>
                </div>
                <p className="mt-1 text-gray-900 dark:text-gray-100 whitespace-pre-line">{post.content}</p>
                
                {post.image && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src={post.image} 
                      alt="Post content"
                      className="w-full h-auto max-h-96 object-cover"
                    />
                  </div>
                )}
                
                <div className="flex justify-between mt-3 text-gray-500 dark:text-gray-400 max-w-md">
                  <button className={`flex items-center gap-1 group ${post.isLiked ? 'text-red-500' : 'hover:text-red-500'}`}>
                    <div className="p-1.5 rounded-full group-hover:bg-red-50 dark:group-hover:bg-red-900/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={post.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={post.isLiked ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span>{post.stats.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 group">
                    <div className="p-1.5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <span>{post.stats.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 dark:hover:text-green-400 group">
                    <div className="p-1.5 rounded-full group-hover:bg-green-50 dark:group-hover:bg-green-900/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <span>{post.stats.shares}</span>
                  </button>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;