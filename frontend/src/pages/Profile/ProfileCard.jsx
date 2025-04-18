import { Button } from "@/components/ui/button"; // or use your own button if needed

const ProfileCard = () => {
  

  return (
    <div className="bg-black text-white rounded-2xl p-4 w-80 m-5 relative" style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}>
      {/* Following button */}
      <div className="absolute top-4 right-4">
        <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-full px-4 py-1 text-sm">
          Following
        </Button>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mt-2">
        <img
          src="https://pbs.twimg.com/profile_images/1383810385581465602/8Z6MFHQA_400x400.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-white"
        />
      </div>

      {/* Name and Username */}
      <div className="text-center mt-3">
        <div className="font-bold text-lg">Anand Nasastik ( Urvish )</div>
        <div className="text-sm text-gray-400">@ak8344941</div>
        <div className="text-xs bg-gray-700 text-gray-200 rounded-full px-2 py-0.5 inline-block mt-1">
          Follows you
        </div>
      </div>

      {/* Bio */}
      <p className="text-center text-sm mt-3 px-2">
        अगर आपकी खुशी किसी के दुख के कारण है तो
        <br />
        बेशक ज्यादा दिन नहीं चलने वाली।
      </p>

      {/* Stats */}
      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div>
          <span className="font-bold">52</span> Following
        </div>
        <div>
          <span className="font-bold">5</span> Followers
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
