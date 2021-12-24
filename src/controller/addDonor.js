const User = require("../models/users");

exports.addDonor = (req, res) => {

  const { firstName, lastName, phoneNumber, state, district, bloodGroup } = req.body;
  const _user = new User({
    firstName,
    lastName,
    phoneNumber,
    state,
    district,
    bloodGroup,
    type: 'donor',
  });

  _user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: err.message });
    }
    if (user) {
      return res
        .status(200)
        .json({ message: "Donor Created Successfully", user: user });
    }
  });
};

exports.getDonors = (req, res) => {
    let { state, district, bloodG } = req.query;
    if (!state || state === "null") state = /^/;
    if (!district || district === "null") district = /^/;
    if (!bloodG || bloodG === "null") bloodG = /^/;

    // console.log(req.query);
    User.find({
      state: state,
      district: district,
      bloodGroup: bloodG,
      type: "donor",
    }).then((data, err) => {
      if (err) return res.status(400).json({ err: err });
      if (data) return res.status(200).json({ data: data });
    });
};

