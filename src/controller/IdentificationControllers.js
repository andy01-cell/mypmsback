// exports.analyzer = async(req, res, next) => {
//     const SVM = await
//     require('libsvm-js');
//     const svm = new SVM({
//         kernel: SVM.KERNEL_TYPES.RBF, // The type of kernel I want to use
//         type: SVM.SVM_TYPES.C_SVC,    // The type of SVM I want to run
//         gamma: 2,                     // RBF kernel gamma parameter
//         cost: 1                       // C_SVC cost parameter
//     });

//     // const features = [["G01","G02","G03","G04","G05"], ["G06","G07","G08","G09","G010"], ["G11","G12","G13","G14","G15"], ["G16","G17","G18","G19","G20","G21","G22","G23","G24"]];
//     // const labels = [1, 2, 3, 4];
//     const features = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10],[11, 12, 13, 14, 15],[16, 17, 18, 19, 20,21, 22, 23, 24]]
//     const labels = [1, 2, 3, 4];
//     svm.train(features, labels);  // train the model
//     const predictedLabel = svm.predictOne([1, 2, 3, 6, 7, 8, 9, 10, 13, 14,16, 17, 18, 19, 20,21, 22, 23, 24]);
//     // const predictedLabel = svm.predictOne(["G01","G02"]);
//     const predictedLabel1 = svm.predictProbability([1, 2, 3, 6, 7, 8, 9, 10, 13, 14,16, 17, 18, 19, 20,21, 22, 23, 24]);

//     console.log(predictedLabel) // 0


//     res.status(200).json({
//         message: "succes",
//         result: predictedLabel1
//     })
// }

//=======================================================================================
const { makeSvm } = require('@botpress/node-svm')
const { x, y } = require('../../Data')

exports.analyzer = async(req, res, next) => {
  // + true;
  // + false;
  // const test = {state}

  const list = []

  console.log(req.body.test)

  if (req.body.test.sensitif) list.push(1)
  else list.push(0)

  if (req.body.test.labil) list.push(1)
  else list.push(0)

  if (req.body.test.cemas) list.push(1)
  else list.push(0)

  if (req.body.test.saraf) list.push(1)
  else list.push(0)
  
  if (req.body.test.depresiri) list.push(1)
  else list.push(0)

  if (req.body.test.nyeri) list.push(1)
  else list.push(0)

  if (req.body.test.endema) list.push(1)
  else list.push(0)

  if (req.body.test.perut) list.push(1)
  else list.push(0)

  if (req.body.test.berat) list.push(1)
  else list.push(0)
  
  if (req.body.test.bengkak) list.push(1)
  else list.push(0)

  if (req.body.test.pusing) list.push(1)
  else list.push(0)

  if (req.body.test.Kelelahan) list.push(1)
  else list.push(0)

  if (req.body.test.Lapar) list.push(1)
  else list.push(0)

  if (req.body.test.jantung) list.push(1)
  else list.push(0)

  if (req.body.test.pinsang) list.push(1)
  else list.push(0)

  if (req.body.test.depresi) list.push(1)
  else list.push(0)

  if (req.body.test.tidur) list.push(1)
  else list.push(0)

  if (req.body.test.stres) list.push(1)
  else list.push(0)

  if (req.body.test.verbalisasi) list.push(1)
  else list.push(0)

  if (req.body.test.menangis) list.push(1)
  else list.push(0)

  if (req.body.test.pelupa) list.push(1)
  else list.push(0)

  if (req.body.test.lemah) list.push(1)
  else list.push(0)

  if (req.body.test.bingung) list.push(1)
  else list.push(0)

  if (req.body.test.bundir) list.push(1)
  else list.push(0)

  if (req.body.test.none) list.push(1)
  else list.push(0)


  console.log(list)

  const svm = await makeSvm()

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
    probability: 1
  }


  
  svm.train(train_params, x, y)

  const model_object = svm.get_model() // this is equivalent to the svm_model object of libsvm
  // console.log(model_object)
  svm.set_model(model_object) // for testing purposes (not mandatory)
  
//   const prediction = svm.predict([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // outputs 0
// false = 0;

const test = svm.predict_probability(list)

console.log('predikis :', test)
  
  //   svm.predict_probability_async/
  
  res.status(200).json({
      message: "succes",
      result: test
  })
}
//========================================================================
// exports.analyzer = async(req, res, next) => {
// var svm = require('@botpress/node-svm');

// var xor = [
//     [[0, 0], 0],
//     [[0, 1], 1],
//     [[1, 0], 1],
//     [[1, 1], 0]
// ];

// // initialize a new predictor
// var clf = new svm.CSVC();

// clf.train(xor).done(function () {
//     // predict things
//     xor.forEach(function(ex){
//         var prediction = clf.predictSync(ex[0]);
//         console.log('%d XOR %d => %d', ex[0][0], ex[0][1], prediction);
//     });
// });
// }
