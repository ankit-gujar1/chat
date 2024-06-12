import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.SECRET, {
		expiresIn: "15d",
	});

    // res.cookie is used to set a cookie in the HTTP response
    // "jwt" is the name of the cookie
    // token is the value of the cookie, which is the JWT generated earlier

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "None", // CSRF attacks cross-site request forgery attacks
		// secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;