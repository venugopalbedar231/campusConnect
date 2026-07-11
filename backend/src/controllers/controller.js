import config from "../config/config.js";
import userModel from "../models/user.model.js";
import noticeModel from "../models/notice.model.js";
import eventModel from "../models/events.model.js";

export async function register(req, res){
    try{
    const {rollno, name, email, role} = req.body;
    const isAlreadyRegistered = await userModel.findOne({
        $or:[
            {rollno},
            {email}
        ]
    });
    if(isAlreadyRegistered){
        return res.status(409).json({
            message: "Rollno or email already exists"
        })
    }
    const user = await userModel.create({
        rollno, name, email, role
    })
    res.status(201).json({
        message: "user registered successfully:)",
        user:{
            username: user.rollno,
            name: user.name,
            email: user.email,
        }
    })}
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export async function getUser(req, res){
    try{
        const user = await userModel.find();
        res.status(200).json({
            message: "user fetched successfully:)",
            user
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export async function createNotice(req, res){
    try {
        const { title, content, category, author } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        const newNotice = new noticeModel({ title, content, category, author });
        await newNotice.save();
        res.status(201).json(newNotice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function getNotices(req, res){
    try{
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 4;
        const notices = await noticeModel.find().skip((page - 1) * limit).limit(limit);
        res.status(200).json({
            message: "Notices fetched",
            notices
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export async function getEvents(req, res){
    try{
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 2;
        const events = await eventModel.find().skip((page - 1) * limit).limit(limit);        
        res.status(200).json({
            message: "Events fetched",
            events
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}
export async function createEvent(req, res){
    try {
        const { title, description, category, venue, startTime, endTime, organizer } = req.body;
        const newEvent = new eventModel({ title, description, category, venue, startTime, endTime, organizer });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getEventById(req, res) {
    try {
        const { id } = req.params;
        const event = await eventModel.findById(id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function getNoticeById(req, res) {
    try {
        const { id } = req.params;
        const notice = await noticeModel.findById(id);
        if (!notice) {
            return res.status(404).json({ message: "Notice not found" });
        }
        res.status(200).json(notice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// export async function register(req, res){
//     try{
//         const {rollno, name, email, role} = req.body;
//         const isAlreadyRegistered = await userModel.findOne({
//             $or:[
//                 {rollno},
//                 {email}
//             ]
//         });
//         if(isAlreadyRegistered){
//             return res.status(409).json({
//                 message: "Rollno or email already exists"
//             })
//         }
//         const user = await userModel.create({
//             rollno, name, email, role
//         });
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }