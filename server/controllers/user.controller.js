import User from "../models/user.model.js"
import Interview from "../models/interview.model.js"
import Payment from "../models/payment.model.js"

export const getPortfolio = async(req,res) => {
  try
  {
    const userId = req.userId;

    //user
    const user = await User.findById(userId).select("-password");

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    //interview
    const interviews = await Interview.find({ userId })
        .sort({ createdAt: -1 });

    //stats
    const totalInterviews = interviews.length;
    const avgScore =
            interviews.reduce((acc, i) => acc + (i.finalScore || 0), 0) /
            (totalInterviews || 1);

    return res.status(200).json({
            user,
            interviews,
            stats: {
                totalInterviews,
                avgScore: Number(avgScore.toFixed(1))
            }
        });
  } catch(error) 
   {
        console.log(error);
        return res.status(500).json({
            message: `failed to get portfolio ${error}`
        });
    }
};

export const getCurrentUser = async (req,res) => {
    try {
        const userId = req.userId
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({message:"user does not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
         return res.status(500).json({message:`failed to get currentUser ${error}`})
    }
}