
  
      
      /* get the car data and show on card*/
      $('#brand-select').on('click', function() {

$('.card').addClass("d-none");

      });
      $('#brand-select').on('change', function() {
        
        let brandIndex = $(this).find(":checked").val();
        $.get(`/brands/${brandIndex}`, (models) => {

         /*  console.log(models); */

let options = "<option id='default' selected disabled value=>Selectionez la marque :</option>";
let modeles = models.models;


for (const i in modeles.Models) {
       options+=`<option data-brand='${brandIndex}' value='${modeles.Models[i].model_name}'>${modeles.Models[i].model_name}</option>`; 
    
      
    }

   /*  for (const index in cars.Models) {
                models += <option value="${cars.Models[index].model_name}" data-brand="${cars.Models[index].model_make_id}">${cars.Modeles[index].model_name}</option>
            } */





console.log(options);
$('#model-select').html(options);
      /*   $('#default').remove(); */
});



       $('#model-select').on('change', function() {
        
        let brandIndex = $(this).find(":selected").data("brand");
        console.log(brandIndex);
        let modelIndex = $(this).find(":selected").val();
        console.log(modelIndex);
        $.get(`infos/${brandIndex}/${modelIndex}`, (infos) => {
        let info=infos.infos.Trims[0];

     if (info.model_make_id !="" && info.model_name !=""){
          $("#car-marque-nom").text(`${info.model_make_id} ${info.model_name}`);
        }else{
          $("#car-marque-nom").addClass("d-none");
        }

        if (info.model_make_id!=""){
          $("#car-marque").text(`Marque : ${info.model_make_id}`);
        }else{
          $("#car-marque").addClass("d-none");
        }

        if (info.model_name!=""){
          $("#car-nom").text(`Nom : ${info.model_name}`);
        }else{
          $("#car-nom").addClass("d-none");
        }

        if (info.model_trim!=""){
          $("#car-motorisation").text(`Motorisation : ${info.model_trim}`);
        }else{
          $("#car-motorisation").addClass("d-none");
        }

        if (info.model_body!=""){
          $("#car-type").text(`Type : ${info.model_body}`);
        }else{
          $("#car-type").addClass("d-none");
        }

        if (info.model_make_country!=""){
          $("#car-pays-origine").text(`Pays d'origine : ${info.model_make_country}`);
        }else{
          $("#car-pays-origine").addClass("d-none");
        }

        if (info.model_engine_fuel!=""){
          $("#car-fuel").text(`Carburant : ${info.model_engine_fuel}`);
        }else{
          $("#car-fuel").addClass("d-none");
        }

        if (info.model_doors!=""){
          $("#car-portes").text(`Nombre de portes : ${info.model_doors}`);
        }else{
          $("#car-portes").addClass("d-none");
        }

        if (info.model_seats!=""){
          $("#car-sieges").text(`Nombre de sièges : ${info.model_seats}`);
        }else{
          $("#car-sieges").addClass("d-none");
        }

        if (info.model_transmission_type!=""){
          $("#car-bdv").text(`Boite de vitesse : ${info.model_transmission_type}`);
        }else{
          $("#car-bdv").addClass("d-none");
        }

        if (info.model_year!=""){
          $("#car-year").text(`Année de production : ${info.model_year}`);
        }else{
          $("#car-year").addClass("d-none");
        }

        });
        $('#default').remove();
        $('.card').removeClass("d-none");
      });


      }); 