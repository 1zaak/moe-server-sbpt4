// //SST4 table
// if (Fikonlinesst4.find().count() === 0) {
//   var tawaran = [{
//     agiliran: 'DC061K007',
//     nokp: '000113030725',
//     nama: 'ABDUL HADI BIN  MOHD DARUS'

//   }, {
//     agiliran: 'AB23P323',
//     nokp: '001113030725',
//     nama: 'MOHD FAHMI KHALID'

//   },
//   {
//     agiliran: 'FC031K037',
//     nokp: '000913430725',
//     nama: 'AHMAD FARIZ AZHAR'

//   }];

//   _.each(tawaran, function(tawar) {
//     Fikonlinesst4.insert({
//       agiliran: tawar.agiliran,
//       nokp: tawar.nokp,
//       nama: tawar.nama
//     });





//   });
// }

// //TAWARAN table
// if (Tawaran_SBPT4.find().count() === 0) {
//   var tawaran = [{
//     agiliran: 'DC061K007',
//     nokp_murid: '000113030725',
//     SETUJU_TERIMA: null,
//     TKH_SETUJU_TERIMA: null,


//   },{
//     agiliran: 'AB23P323',
//     nokp_murid: '001113030725',
//     SETUJU_TERIMA: null,
//     TKH_SETUJU_TERIMA: null,


//   },{
//     agiliran: 'FC031K037',
//     nokp_murid: '000913430725',
//     SETUJU_TERIMA: null,
//     TKH_SETUJU_TERIMA: null,


//   }];

//   _.each(tawaran, function(tawar) {
//     Tawaran_SBPT4.insert({
//       agiliran: tawar.agiliran,
//       nokp_murid: tawar.nokp_murid,
//       SETUJU_TERIMA: tawar.SETUJU_TERIMA,
//       TKH_SETUJU_TERIMA: tawar.TKH_SETUJU_TERIMA,
//     });





//   });
// }

// //PERIBADI table
// if (Peribadi.find().count() === 0) {
//   var peribadi = [{
//     agiliran: 'DC061K007',
//     nokp: '000113030725',
//     nama: 'ABDUL HADI BIN  MOHD DARUS',
//     kodsek: 'DRA3001',
//     kodtel: '03',
//     notel: '33711658',
//     alirta: '2',
//     kodsbp: 'B01',
//     kelompok: ''

//   },{
//     agiliran: 'AB23P323',
//     nokp: '001113030725',
//     nama: 'MOHD FAHMI KHALID',
//     kodsek: 'DRA3001',
//     kodtel: '03',
//     notel: '33711658',
//     alirta: '2',
//     kodsbp: '',
//     kelompok: ''

//   },{
//     agiliran: 'FC031K037',
//     nokp: '000913430725',
//     nama: 'AHMAD FARIZ AZHAR',
//     kodsek: 'DRA3001',
//     kodtel: '03',
//     notel: '33711658',
//     alirta: '2',
//     kodsbp: 'B01',
//     kelompok: ''

//   }];

//   _.each(peribadi, function(diri) {
//     Peribadi.insert({
//       agiliran: diri.agiliran,
//       nokp: diri.nokp,
//       nama: diri.nama,
//       kodsek: diri.kodsek,
//       kodtel: diri.kodtel,
//       notel: diri.notel,
//       alirta: diri.alirta,
//       kodsbp: diri.kodsbp,
//       kelompok: diri.kelompok
//     });





//   });
// }


// //SEKMEN table
// if (Jl_sekolah_menengah.find().count() === 0) {
//   var sekmen = [{
//     nama_sek: 'SMK (A) LATI',
//     kodsek: 'DRA3001',


//   }];

//   _.each(sekmen, function(sek) {
//     Jl_sekolah_menengah.insert({
//       nama_sek: sek.nama_sek,
//       kodsek: sek.kodsek,
//     });





//   });
// }

// //SBP table
// if (SBP.find().count() === 0) {
//   var SBPs = [{
//     nama_sbp: 'KOLEJ ISLAM SULTAN ALAM SHAH',
//     kodsek: 'B01',


//   }];

//   _.each(SBPs, function(SBPsatu) {
//     SBP.insert({
//       nama_sbp: SBPsatu.nama_sbp,
//       kodsbp: SBPsatu.kodsek,
//     });





//   });
// }

// //JL_ALIRAN table
// if (Jl_aliran.find().count() === 0) {
//   var alirans = [{
//     kod_aliran: '2',
//     ket_aliran: 'SAINS TULEN (AGAMA)',


//   }];

//   _.each(alirans, function(aliran) {
//     Jl_aliran.insert({
//       kod_aliran: aliran.kod_aliran,
//       ket_aliran: aliran.ket_aliran,
//     });





//   });
// }



// // //Form 1
// // if (Tawaran_SBPT1.find().count() === 0) {
// //     var tawaran = [{
// //         AGILIRAN: 'AC0921002',
// //         NAMA: 'ABDUL HADI BIN  MOHD DARUS',
// //         TEMPAT: 'B04',
// //         TRKTAWAR: '17/01/2016',
// //         KODSEK: 'ABA2051',
// //         NOKP_BAPA: '670505085939',
// //         NOKP_IBU: '700207045052',
// //         TAWARAN: '02',
// //         ALAMAT1: 'NO 45 JALAN MENGLEMBU IMPIANA ',
// //         ALAMAT2: '10 TAMAN IMPIANA ADRIL',
// //         ALAMAT3: 'MENGLEMBU ',
// //         POSKOD: '31450',
// //         NEG_ALAMAT: '08',
// //         BANDAR: '0818',
// //         STATPEL: 'B',
// //         NO_TAWARAN: 'B040211958',
// //         JANTINA: 'L',
// //         NO_KPT: '030924080985',
// //         PENGESAHAN_TAWARAN: null,
// //         MARA: 'K',
// //         SETUJU_TERIMA: null,
// //         TKH_SETUJU_TERIMA: null,
// //         CETAK: '1'
// //     }];

// //     _.each(tawaran, function(tawar) {
// //         Tawaran_SBPT1.insert({
// //             AGILIRAN: tawar.AGILIRAN,
// //             NAMA: tawar.NAMA,
// //             TEMPAT: tawar.TEMPAT,
// //             TRKTAWAR: tawar.TRKTAWAR,
// //             KODSEK: tawar.KODSEK,
// //             NOKP_BAPA: tawar.NOKP_BAPA,
// //             NOKP_IBU: tawar.NOKP_IBU,
// //             TAWARAN: tawar.TAWARAN,
// //             ALAMAT1: tawar.ALAMAT1,
// //             ALAMAT2: tawar.ALAMAT2,
// //             ALAMAT3: tawar.ALAMAT3,
// //             POSKOD: tawar.POSKOD,
// //             NEG_ALAMAT: tawar.NEG_ALAMAT,
// //             BANDAR: tawar.BANDAR,
// //             STATPEL: tawar.STATPEL,
// //             NO_TAWARAN: tawar.NO_TAWARAN,
// //             JANTINA: tawar.JANTINA,
// //             NO_KPT: tawar.NO_KPT,
// //             PENGESAHAN_TAWARAN: tawar.PENGESAHAN_TAWARAN,
// //             MARA: tawar.MARA,
// //             SETUJU_TERIMA: tawar.SETUJU_TERIMA,
// //             TKH_SETUJU_TERIMA: tawar.TKH_SETUJU_TERIMA,
// //             CETAK: tawar.CETAK,
// //         });





// //     });
// // }

// // //SBP Data F1
// // if (SBP.find().count() === 0) {
// //   var sbps = [{
// //     KODSBP: 'B04',
// //     KODRINGKAS: 'SMAPK',
// //     NAMASBP: 'SMA PERSEKUTUAN KAJANG',
// //     ALAMAT1: 'BATU 13 JALAN CHERAS',
// //     ALAMAT2: null,
// //     BANDAR: 'KAJANG, SELANGOR',
// //     POSKOD: '43000',
// //     NEGERI: 'SELANGOR',
// //     NOTEL: '03-87362324',
// //     KODSEKOLAH: 'BRA4003',
// //     PASSWORD: 'B04SP126',
// //     KAPASITI: '30',
// //     KAPASITI_L: '15',
// //     KAPASITI_P: '15',
// //     IDSEKOLAH: '1998'
// //   }];

// //   _.each(sbps, function(sbp) {
// //     SBP.insert({
// //       KODSBP: sbp.KODSBP,
// //       KODRINGKAS: sbp.KODRINGKAS,
// //       NAMASBP: sbp.NAMASBP,
// //       ALAMAT1: sbp.ALAMAT1,
// //       ALAMAT2: sbp.ALAMAT2,
// //       BANDAR: sbp.BANDAR,
// //       POSKOD: sbp.POSKOD,
// //       NEGERI: sbp.NEGERI,
// //       NOTEL: sbp.NOTEL,
// //       KODSEKOLAH: sbp.KODSEKOLAH,
// //       PASSWORD: sbp.PASSWORD,
// //       KAPASITI: sbp.KAPASITI,
// //       KAPASITI_L: sbp.KAPASITI_L,
// //       KAPASITI_P: sbp.KAPASITI_P,
// //       IDSEKOLAH: sbp.IDSEKOLAH
// //     });





// //   });


// // }
