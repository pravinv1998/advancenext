// export default function enable(req, res) {
//   res.setPreviewData({});
//   res.status(200).json({ name: "pravin" });
// }

const enable = (req, res) => {
  res.setPreviewData({});
  res.status(200).json({ name: "this is arrow function  " });
};

export default enable;
