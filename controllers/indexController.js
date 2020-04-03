const carsJson = require("../views/cars.json");
const https = require('https');
/**
 * The index controller
 *
 * @controller indexController
 */
class indexController {
  /**
   * 1 Home page with a list of names json
   * 
   * @static
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @memberof indexController
   */
  static home(req, res) {

    https.get('https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=2017', function(result) {
      let data = '';
      
      result.on('data', function(chunk) {
        data += chunk;
      })
  
      result.on('end', () => {
        let makes = JSON.parse(data).Makes

        
        res.render('index', { title: 'index', brands: makes });
  
      })

    }).on("error", (err) => {
      console.log("Error: " + err)
    })
    
  }




   
  





  
  /**
   * 1 Home page with a list of names json
   * 
   * @static
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @memberof indexController
   */
  static models(req, res, next) {
 
 let idbrand = req.params.idbrand.toLowerCase();
console.log(idbrand);
    https.get(`https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${idbrand}`, function(result) {
      
     
    
    let data = '';
      
      result.on('data', function(chunk) {
        data += chunk;
      })
  
      result.on('end', () => {
        let makes = JSON.parse(data)

       
        res.json({ models : makes });
  
      })

    }).on("error", (err) => {
      console.log("Error: " + err)
    })
    }




   /*  res.send({models: modelsList}); */
  


    /**
   * 1 Home page with a list of names json
   * 
   * @static
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @memberof indexController
   */
  static infos(req, res, next) {
    let idbrand = req.params.idbrand;
    let idmodel = req.params.idmodel; 
    console.log(idbrand);
    console.log(idmodel);
  
    https.get(`https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${idbrand}&model=${idmodel}`, function(result) {
      // select only name of the car
      let data = '';
    
      result.on('data', function(chunk) {
        data += chunk;
      })
  
      result.on('end', () => {
        let infos = JSON.parse(data)
        console.log(infos.Trims[0]);
        res.send({ infos });
  
      })
      
    }).on("error", (err) => {
      console.log("Error: " + err)
    })
      
  
  }










  /**
   * Get the car datas with a id
   * 
   * @static
   * @param {object} req Express request object
   * @param {string} req.params.id id of car
   * @param {object} res Express response object
   * @memberof indexController
   * @return {object} The car datas object
   */
  static getOneCar(req, res) {
    const carId = req.params.id;
    const car = carsJson[carId];
    res.send(car);
  }



    /**
   * Get the car datas with a id
   * 
   * @static
   * @param {object} req Express request object
   * @param {string} req.params.id id of car
   * @param {object} res Express response object
   * @memberof indexController
   * @return {object} The car datas object
   */
/*   static getModels(req, res) {
    const brandId = req.params.id;
    const brand = carsJson[brandId];
    res.send(brand);
  } */







}
module.exports = indexController;