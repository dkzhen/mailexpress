var nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const env = require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/images", express.static(__dirname + "images"));
app.use(express.static(__dirname + "/public"));

var email;
var title;
var area;
var path;

var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./database");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

var upload = multer({
  storage: Storage,
}).single("image"); //Field name and max count

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/sendemail", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Something went wrong!");
    } else {
      email = req.body.email;
      title = req.body.title;
      area = req.body.area;
      path = req.file.path;
      console.log(email);
      console.log(title);
      console.log(area);
      console.log(req.file);
      console.log(req.files);
      const arbulan = [
        "JANUARI",
        "FEBRUARI",
        "MARET",
        "APRIL",
        "MEI",
        "JUNI",
        "JULI",
        "AGUSTUS",
        "SEPTEMBER",
        "OKTOBER",
        "NOVEMBER",
        "DESEMBER",
      ];
      let bulan = new Date().getMonth();

      function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
      }
      var items = ["fruit", "nature", "city"];
      var message = `
      <html xmlns:v="urn:schemas-microsoft-com:vml">
      
      <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
          <!--[if !mso]--><!-- -->
          <link href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700' rel="stylesheet">
          <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel="stylesheet">
          <!-- <![endif]-->
      
          <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
          <title>Material Design for Bootstrap</title>
      
          <style type="text/css">
              body {
                  width: 100%;
                  background-color: #ffffff;
                  margin: 0;
                  padding: 0;
                  -webkit-font-smoothing: antialiased;
                  mso-margin-top-alt: 0px;
                  mso-margin-bottom-alt: 0px;
                  mso-padding-alt: 0px 0px 0px 0px;
              }
              
              p,
              h1,
              h2,
              h3,
              h4 {
                  margin-top: 0;
                  margin-bottom: 0;
                  padding-top: 0;
                  padding-bottom: 0;
              }
              
              span.preheader {
                  display: none;
                  font-size: 1px;
              }
              
              html {
                  width: 100%;
              }
              
              table {
                  font-size: 14px;
                  border: 0;
              }
              /* ----------- responsivity ----------- */
              
              @media only screen and (max-width: 640px) {
                  /*------ top header ------ */
                  .main-header {
                      font-size: 20px !important;
                  }
                  .main-section-header {
                      font-size: 28px !important;
                  }
                  .show {
                      display: block !important;
                  }
                  .hide {
                      display: none !important;
                  }
                  .align-center {
                      text-align: center !important;
                  }
                  .no-bg {
                      background: none !important;
                  }
                  /*----- main image -------*/
                  .main-image img {
                      width: 440px !important;
                      height: auto !important;
                  }
                  /* ====== divider ====== */
                  .divider img {
                      width: 440px !important;
                  }
                  /*-------- container --------*/
                  .container590 {
                      width: 440px !important;
                  }
                  .container580 {
                      width: 400px !important;
                  }
                  .main-button {
                      width: 220px !important;
                  }
                  /*-------- secions ----------*/
                  .section-img img {
                      width: 320px !important;
                      height: auto !important;
                  }
                  .team-img img {
                      width: 100% !important;
                      height: auto !important;
                  }
              }
              
              @media only screen and (max-width: 479px) {
                  /*------ top header ------ */
                  .main-header {
                      font-size: 18px !important;
                  }
                  .main-section-header {
                      font-size: 26px !important;
                  }
                  /* ====== divider ====== */
                  .divider img {
                      width: 280px !important;
                  }
                  /*-------- container --------*/
                  .container590 {
                      width: 280px !important;
                  }
                  .container590 {
                      width: 280px !important;
                  }
                  .container580 {
                      width: 260px !important;
                  }
                  /*-------- secions ----------*/
                  .section-img img {
                      width: 280px !important;
                      height: auto !important;
                  }
              }
          </style>
          <!-- [if gte mso 9]><style type=”text/css”>
              body {
              font-family: arial, sans-serif!important;
              }
              </style>
          <![endif]-->
      </head>
      
      
      <body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
      
          <!-- header -->
          <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff">
      
              <tr>
                  <td align="center">
                      <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
      
                          <tr>
                              <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                          </tr>
    
                          <tr>
                              <td align="center">
      
                                  <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
      
                                      <tr>
                                          <td align="center" height="70" style="height:70px;">
                                             <h1 style="font-family: 'Share Tech Mono', monospace;">DKZhen - Mail</h1>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
      
                          <tr>
                              <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                          </tr>
      
                      </table>
                  </td>
              </tr>
          </table>
          <!-- end header -->
      
          <!-- big image section -->
          <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
      
              <tr>
                  <td align="center">
                      <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
                          <tr>
      
                              <td align="center" class="section-img">
                                  <a href="" style=" border-style: none !important; display: block; border: 0 !important;"><img src="https://source.unsplash.com/random/900x700/?${random_item(
                                    items
                                  )}" style="display: block; width: 590px;" width="590" border="0" alt="" /></a>
      
      
      
      
                              </td>
                          </tr>
                          <tr>
                              <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td align="center" style="color: #343434; font-size: 24px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 3px; line-height: 35px;" class="main-header">
      
      
                                  <div style="line-height: 35px">
      
                                      NEW IN <span  style="color: #5caad2;">${
                                        arbulan[bulan]
                                      }</span>
      
                                  </div>
                              </td>
                          </tr>
      
                          <tr>
                              <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                          </tr>
      
                          <tr>
                              <td align="center">
                                  <table border="0" width="40" align="center" cellpadding="0" cellspacing="0" bgcolor="eeeeee">
                                      <tr>
                                          <td height="2" style="font-size: 2px; line-height: 2px;">&nbsp;</td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
      
                          <tr>
                              <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                          </tr>
      
                          <tr>
                              <td align="center">
                                  <table border="0" width="400" align="center" cellpadding="0" cellspacing="0" class="container590">
                                      <tr>
                                          <td align="center" style="color: #888888; font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
      
      
                                              <div style="line-height: 24px">
                                                  <h3>Hello, ${title}</h3>
                                              </br>
                                                  ${area}
                                              </div>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
      
                          <tr>
                              <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                          </tr>
      
                          <tr>
                              
                          </tr>
      
      
                      </table>
      
                  </td>
              </tr>
      
          </table>
          <!-- end section -->
      
          <!-- contact section -->
          <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
      
              <tr class="hide">
                  <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
              </tr>
              <tr>
                  <td height="40" style="font-size: 40px; line-height: 40px;">&nbsp;</td>
              </tr>
      
              <tr>
                  <td height="60" style="border-top: 1px solid #e0e0e0;font-size: 60px; line-height: 60px;">&nbsp;</td>
              </tr>
      
              <tr>
                  <td align="center">
                      <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590 bg_color">
      
                          <tr>
                              <td>
                                  <table border="0" width="300" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="container590">
      
                                      <tr>
                                          <!-- logo -->
                                          <td align="left">
                                              <h1 style="font-family: 'Share Tech Mono', monospace;">DKZhen Inc.</h1>
                                          </td>
                                      </tr>
      
                                      <tr>
                                          <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                                      </tr>
      
                                      <tr>
                                          <td align="left" style="color: #888888; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 23px;" class="text_color">
                                              <div style="color: #333333; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; font-weight: 600; mso-line-height-rule: exactly; line-height: 23px;">
      
                                                  Email us: <br/> <a href="mailto:" style="color: #888888; font-size: 14px; font-family: 'Hind Siliguri', Calibri, Sans-serif; font-weight: 400;">support@zhen.biz.id</a>
      
                                              </div>
                                          </td>
                                      </tr>
      
                                  </table>
      
                                  <table border="0" width="2" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="container590">
                                      <tr>
                                          <td width="2" height="10" style="font-size: 10px; line-height: 10px;"></td>
                                      </tr>
                                  </table>
      
                                  <table border="0" width="200" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="container590">
      
                                      <tr>
                                          <td class="hide" height="45" style="font-size: 45px; line-height: 45px;">&nbsp;</td>
                                      </tr>
      
      
      
                                      <tr>
                                          <td height="15" style="font-size: 15px; line-height: 15px;">&nbsp;</td>
                                      </tr>
      
                                      <tr>
                                          <td>
                                              <table border="0" align="right" cellpadding="0" cellspacing="0">
                                                  <tr>
                                                      <td>
                                                          <a href="https://twitter.com/dk_zhen19" style="display: block; border-style: none !important; border: 0 !important;"><img width="24" border="0" style="display: block;" src="https://cdn-icons-png.flaticon.com/512/81/81609.png" alt=""></a>
                                                      </td>
                                                      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                      <td>
                                                          <a href="https://github.com/dkzhen" style="display: block; border-style: none !important; border: 0 !important;"><img width="24" border="0" style="display: block;" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""></a>
                                                      </td>
                                                      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                      <td>
                                                          <a href="https://instagram.com/dkzhen.eth" style="display: block; border-style: none !important; border: 0 !important;"><img width="24" border="0" style="display: block;" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt=""></a>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
      
                                  </table>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
      
              <tr>
                  <td height="60" style="font-size: 60px; line-height: 60px;">&nbsp;</td>
              </tr>
      
          </table>
          <!-- end section -->
      
          <!-- footer ====== -->
          <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="f4f4f4">
      
              <tr>
                  <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
              </tr>
      
              <tr>
                  <td align="center">
      
                      <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
      
                          <tr>
                              <td>
                                  <table border="0" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="container590">
                                      <tr>
                                          <td align="left" style="color: #aaaaaa; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                              <div style="line-height: 24px;">
      
                                                  <span style="color: #333333;">Design by Zhen</span>
      
                                              </div>
                                          </td>
                                      </tr>
                                  </table>
      
                                  <table border="0" align="left" width="5" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="container590">
                                      <tr>
                                          <td height="20" width="5" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                                      </tr>
                                  </table>
      
                                  <table border="0" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="container590">
      
                                      <tr>
                                          <td align="center">
                                              <table align="center" border="0" cellpadding="0" cellspacing="0">
                                                  <tr>
                                                      
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
      
                                  </table>
                              </td>
                          </tr>
      
                      </table>
                  </td>
              </tr>
      
              <tr>
                  <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
              </tr>
      
          </table>
          <!-- end footer ====== -->
      <script>
      var tampil = document.getElementById("bulan-ini");
       var arbulan=["JANUARI","FEBRUARI","MARET","APRIL","MEI","JUNI","JULI","AGUSTUS","SEPTEMBER","OKTOBER","NOVEMBER","DESEMBER",]
       bulan = new Date().getMonth();
       tampil.innerHTML = arbulan[bulan];
      
      </script>
      </body>
      
      </html>`;
      var transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          type: "login",
          user: "support@zhen.biz.id", // generated ethereal user
          pass: "Bandulan113@", // generated ethereal password
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      });

      var mailOptions = {
        from: '"DKZhen-Mail" support@zhen.biz.id',
        to: email,
        subject: "Thank You Message From DKZhen-Mail",
        html: message,
        attachments: [
          {
            path: path,
          },
        ],
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.json({ status: "success" });
          console.log("Email sent: " + info.response);
          fs.unlink(path, function (err) {
            if (err) {
              return res.end(err);
            } else {
              console.log("deleted");
            }
          });
        }
      });
    }
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App started on Port 5000");
});
