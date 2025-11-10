import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    try {
        const {name, email, subject, message} = await req.json();

    if (!name || !email || !subject || !message) {
        console.error("missing one of the required fields.");
        return NextResponse.json({error: "missing required fields"}, {status: 400})
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER_EMAIL!,
            pass: process.env.USER_PASS!,
        }
    })

    transporter.sendMail({
        from: `${name} ${email}`,
        to: process.env.USER_EMAIL!,
        subject: subject,
        text: message
    })

    return NextResponse.json({success: true}, {status: 200})
    } catch (err) {
        console.error(err);
        return NextResponse.json({error: "an error occured"}, {status: 400})
    }

}