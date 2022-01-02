const { makeSvm } = require("@botpress/node-svm");
const { x, y } = require("../../Data");

exports.analyzer = async (req, res, next) => {
  const list = [];
  let bobot = [];

  console.log(req.body.test);

  if (req.body.test.sensitif) {
    bobot.push(0.6);
    list.push(1);
  } else list.push(0);

  if (req.body.test.labil) {
    bobot.push(0.6);
    list.push(1);
  } else list.push(0);

  if (req.body.test.cemas) {
    bobot.push(0.6);
    list.push(1);
  } else list.push(0);

  if (req.body.test.saraf) {
    bobot.push(0.6);
    list.push(1);
  } else list.push(0);

  if (req.body.test.depresiri) {
    bobot.push(0.6);
    list.push(1);
  } else list.push(0);

  if (req.body.test.nyeri) {
    bobot.push(0.8);
    list.push(1);
  } else list.push(0);

  if (req.body.test.endema) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  if (req.body.test.perut) {
    bobot.push(0.4);
    list.push(1);
  } else list.push(0);

  if (req.body.test.berat) {
    bobot.push(0.4);
    list.push(1);
  } else list.push(0);

  if (req.body.test.bengkak) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  if (req.body.test.pusing) {
    bobot.push(0.4);
    list.push(1);
  } else list.push(0);

  if (req.body.test.Kelelahan) {
    bobot.push(0.6);
    list.push(1);
  } else list.push(0);

  if (req.body.test.Lapar) {
    bobot.push(0.4);
    list.push(1);
  } else list.push(0);

  if (req.body.test.jantung) {
    bobot.push(0.4);
    list.push(1);
  } else list.push(0);

  if (req.body.test.pinsang) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  if (req.body.test.depresi) {
    bobot.push(0.4);
    list.push(1);
  } else list.push(0);

  if (req.body.test.tidur) {
    bobot.push(0.4);
    list.push(1);
  } else list.push(0);

  if (req.body.test.stres) {
    bobot.push(0.4);
    list.push(1);
  } else list.push(0);

  if (req.body.test.verbalisasi) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  if (req.body.test.menangis) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  if (req.body.test.pelupa) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  if (req.body.test.lemah) {
    bobot.push(0.8);
    list.push(1);
  } else list.push(0);

  if (req.body.test.bingung) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  if (req.body.test.bundir) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  if (req.body.test.none) {
    bobot.push(0.0);
    list.push(1);
  } else list.push(0);

  const svm = await makeSvm();

  const train_params = {
    svm_type: 0,
    kernel_type: 2,
    degree: 3,
    gamma: 0.5,
    coef0: 0.0,
    cache_size: 100,
    eps: 0.1,
    C: 1.0,
    nr_weight: 0,
    weight_label: [0, 0],
    weight: [0.0, 0.0],
    nu: 0.5,
    p: 0.0,
    shrinking: 1,
    probability: 1,
  };

  svm.train(train_params, x, y);

  const model_object = svm.get_model(); // this is equivalent to the svm_model object of libsvm
  // console.log(model_object)
  svm.set_model(model_object); // for testing purposes (not mandatory)

  //   const prediction = svm.predict([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // outputs 0
  // false = 0;

  let test;

  let totalbobot = 0;

  bobot.map((data) => {
    console.log("data => ", data);
    totalbobot += data;
  });

  list.push(totalbobot);

  if (totalbobot > 0) {
    test = svm.predict_probability(list);
  } else {
    test = -1;
  }

  console.log("totalbobot :", totalbobot);
  console.log("predikis :", test);
  console.log("bobot => ", bobot);

  //   svm.predict_probability_async/

  res.status(200).json({
    message: "succes",
    result: test,
  });
};
