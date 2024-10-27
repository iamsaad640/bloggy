export default function error(err, req, res, next) {
  //TODO: Log the exception
  return res.status(500).send(new Error("unexpected error occured"));
  // unhandled rejected promises exception handled
}
