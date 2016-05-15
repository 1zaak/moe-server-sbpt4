if (Meteor.isServer) {
  Meteor.startup(function() {
    var createPDF = function(peribadi) {
      // SETUP
      // Grab required packages
      var webshot = Meteor.npmRequire('webshot');
      var fs = Npm.require('fs');
      var Future = Npm.require('fibers/future');

      var fut = new Future();

      var fileName = "surat-tawaran.pdf";

      // GENERATE HTML STRING
      var css = Assets.getText('bootstrap.min.css');

      SSR.compileTemplate('layout', Assets.getText('layout.html'));

      Template.layout.helpers({
        getDocType: function() {
          return "<!DOCTYPE html>";
        }
      });

      SSR.compileTemplate('surat_tawaran', Assets.getText('surat-tawaran.html'));


      // PREPARE DATA
      var peribadi = peribadi;
      var data = {
        peribadi: peribadi,
        date: moment().format('DD-MMM-YYYY')
      }


      var html_string = SSR.render('layout', {
        css: css,
        template: "surat_tawaran",
        data: data
      });

      // console.log(html_string);

      // Setup Webshot options
      var options = {
        //renderDelay: 2000,
        "paperSize": {
          "format": "A4",
          "orientation": "portrait",
          "margin": "1cm"
        },
        siteType: 'html'
      };

      // Commence Webshot
      // console.log("Commencing webshot...");
      webshot(html_string, fileName, options, function(err) {
        fs.readFile(fileName, function(err, data) {
          if (err) {
            // return console.log(err);
          }

          fs.unlinkSync(fileName);
          fut.return(data);

        });
      });

      let pdfData = fut.wait();
      let base64String = new Buffer(pdfData).toString('base64');

      return pdfData;
    };

    // Global API configuration
    var Api = new Restivus({
      useDefaultAuth: false,
      prettyJson: true
    });

    var pdfApi = new Restivus({
      useDefaultAuth: false,
      defaultHeaders: {
        'Content-Type': 'application/pdf'
      }
    });

    // Api.addCollection(Tawaran_SBPT4);

    //Tawaran_SBPT4
    Api.addRoute('tawaran_sbpt4/:agiliran/', {
      post: function() {
        var tawaran = {};
        var agiliran = this.urlParams.agiliran;
        var SETUJU_TERIMA = this.bodyParams.SETUJU_TERIMA;
        var TKH_SETUJU_TERIMA = this.bodyParams.TKH_SETUJU_TERIMA;
        // console.log("Hello POST running", this.bodyParams, agiliran);

        if (SETUJU_TERIMA === true) {
          tawaran = Tawaran_SBPT4.update({
            agiliran: this.urlParams.agiliran,
          }, {
            $set: {
              SETUJU_TERIMA: 1,
              TKH_SETUJU_TERIMA: TKH_SETUJU_TERIMA,
            },

          });
          // console.log("POST 'SETUJU' successful");
          return {
            status: 'success',
            data: {
              message: 'Pelajar ' + agiliran + ' setuju'
            },

          };

        } else if (SETUJU_TERIMA === false) {
          tawaran = Tawaran_SBPT4.update({
            agiliran: this.urlParams.agiliran,

          }, {
            $set: {
              SETUJU_TERIMA: 0,
              TKH_SETUJU_TERIMA: TKH_SETUJU_TERIMA,
            },

          });
          // console.log("POST 'X SETUJU' successful")
          return {
            status: 'success',
            data: {
              message: 'Pelajar ' + agiliran + ' tidak setuju'
            }
          };
        }
      }
    });


    Api.addRoute('sst4/:agiliran/:nokp', {
      get: function() {
        var fikonlinesst4, tawaran, peribadi, sekmen, sebepe,
          aliran = {};
        fikonlinesst4 = Fikonlinesst4.findOne({
          agiliran: this.urlParams.agiliran,
          nokp: this.urlParams.nokp
        });
        tawaran = Tawaran_SBPT4.findOne({
          agiliran: this.urlParams.agiliran,
          nokp_murid: this.urlParams.nokp
        });



        if (fikonlinesst4 != null && tawaran != null) {
          peribadi = Peribadi.findOne({
            agiliran: this.urlParams.agiliran,
            nokp: this.urlParams.nokp
          });
          sekmen = Jl_sekolah_menengah.findOne({
            kodsek: peribadi.kodsek
          });
          sebepe = SBP.findOne({
            kodsbp: peribadi.kodsbp
          });
          aliran = Jl_aliran.findOne({
            kod_aliran: peribadi.alirta
          });

          _.extend(peribadi, sekmen);
          _.extend(peribadi, sebepe);
          _.extend(peribadi, aliran);
          _.extend(peribadi, tawaran);
          _.extend(peribadi, {
            status: 'success'
          });
          // console.log("Successful query");

          return peribadi;
        } else if (fikonlinesst4 == null && tawaran != null) {
          // console.log("No tawaran");
          return {
            statusCode: 404,
            body: {
              status: 'not found',
              message: 'Calon not found'
            }
          };
        } else if (fikonlinesst4 != null && tawaran == null) {
          // console.log("No tawaran");
          return {
            statusCode: 404,
            body: {
              status: 'not found',
              message: 'Calon not found'
            }
          };
        } else if (fikonlinesst4 == null && tawaran == null) {
          // console.log("No tawaran");
          return {
            statusCode: 404,
            body: {
              status: 'not found',
              message: 'Calon not found'
            }
          };
        } else {
          return {
            statusCode: 404,
            body: {
              status: 'not found',
              message: 'Calon not found'
            }
          };
        }
      }
    });

    pdfApi.addRoute('pdf/:agiliran/:nokp', {
      get: function() {
        var fikonlinesst4, tawaran, peribadi, sekmen, sebepe,
          aliran = {};
        fikonlinesst4 = Fikonlinesst4.findOne({
          agiliran: this.urlParams.agiliran,
          nokp: this.urlParams.nokp
        });
        tawaran = Tawaran_SBPT4.findOne({
          agiliran: this.urlParams.agiliran,
          nokp_murid: this.urlParams.nokp
        });



        if (fikonlinesst4 != null && tawaran != null) {
          peribadi = Peribadi.findOne({
            agiliran: this.urlParams.agiliran,
            nokp: this.urlParams.nokp
          });
          sekmen = Jl_sekolah_menengah.findOne({
            kodsek: peribadi.kodsek
          });
          sebepe = SBP.findOne({
            kodsbp: peribadi.kodsbp
          });
          aliran = Jl_aliran.findOne({
            kod_aliran: peribadi.alirta
          });

          _.extend(peribadi, sekmen);
          _.extend(peribadi, sebepe);
          _.extend(peribadi, aliran);
          _.extend(peribadi, tawaran);
          _.extend(peribadi, {
            status: 'success'
          });
          // console.log("Successful query");

          var pdf = createPDF(peribadi);

          return pdf;
        } else if (fikonlinesst4 == null && tawaran != null) {
          // console.log("No tawaran");
          return {
            statusCode: 404,
            body: {
              status: 'not found',
              message: 'Calon not found'
            }
          };
        } else if (fikonlinesst4 != null && tawaran == null) {
          // console.log("No tawaran");
          return {
            statusCode: 404,
            body: {
              status: 'not found',
              message: 'Calon not found'
            }
          };
        } else if (fikonlinesst4 == null && tawaran == null) {
          // console.log("No tawaran");
          return {
            statusCode: 404,
            body: {
              status: 'not found',
              message: 'Calon not found'
            }
          };
        } else {
          return {
            statusCode: 404,
            body: {
              status: 'not found',
              message: 'Calon not found'
            }
          };
        }
      }
    });





  });
}
