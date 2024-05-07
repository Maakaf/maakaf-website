import { NextResponse } from 'next/server';
import { dbConnect } from './mongoConnect';
import  User  from './users';

export const GET = async (req: any, res: any) => {
    try {
        await dbConnect();
        console.log('Connected to database');
        const users = await User.find({});
        res.statusCode = 200;
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.error(); 
    }
};

export const POST = async (req: any, res: any) => {
    try {
        await dbConnect();
        console.log('Connected to database');
        const { user_id, password } = req.body;
        const user = new User({ user_id, password });
        await user.save();
        res.statusCode = 200;
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.error(); 
    }
};
