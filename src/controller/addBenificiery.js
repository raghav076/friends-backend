const User = require("../models/users");

exports.addBenificiery = (req, res) => {
  const { firstName, lastName, phoneNumber, state, district, bloodGroup } = req.body;
  const _user = new User({
    firstName,
    lastName,
    phoneNumber,
    state,
    district,
    bloodGroup,
    type: 'beneficiery',
  });

  _user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: err.message });
    }
    if (user) {
      return res.status(200).json({ message: "Request Created Successfully", user: user });
    }
  });
};

exports.getBenificieries = (req, res) => {
  User.find({type: 'beneficiery'}).then((data, err) => {
    if (err)
      return res.status(400).json({ err: err });
    if (data)
      return res.status(200).json({ data: data });
  }
  )
};
