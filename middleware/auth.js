import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) res.status(401).send("Access Denied");
  try {
    const decoded = jwt.verify(token, "jwtPrivateKey");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
}
