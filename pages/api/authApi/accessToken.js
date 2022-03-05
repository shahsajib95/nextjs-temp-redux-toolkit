/* eslint-disable import/no-anonymous-default-export */
import jwt from "jsonwebtoken";
import { createAccessToken } from "../../../utils/generateToken";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await accessToken(req, res);
      break;
  }
};

const accessToken = async (req, res) => {
  try {
    // const rf_token = req.cookies.refreshtoken;
    const token = req.headers.authorization;


    if (!token)
      return res.status(400).json({
        success: false,
        message: "You are Unauthorized, Please login.",
        error_code: 1205,
        data: {},
      });
    const result = jwt.verify(ad_token, process.env.REFRESH_TOKEN_SECRET);

    if (!result)
      return res.status(400).json({
        success: false,
        message: "Your session is invalid",
        error_code: 1202,
        data: {},
      });

    const access_token = createAccessToken({ user_id: user_id });
    res.status(201).json({
      success: true,
      message: "Successfully get user details.",
      data: {
        user: {
          // user_id,
          // email,
          // full_name,
          // username,
          // gender,
          // avatar,
          // dob,
          // about,
          // role,
        },
        access_token,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: ["Server Error"],
      error_code: 1000,
      data: {},
    });
  }
};
