"use server"

import client from "@/db";
import { NextResponse } from "next/server";

const userSignup = async (email: string, password: string) => {
    try{
        const res = await client.user.create({
            data: {
                email,
                password
            }
        });
        return ({
            message: "User Signed up!"
        });
    }catch(e){
        return false;
    }
}

export default userSignup;