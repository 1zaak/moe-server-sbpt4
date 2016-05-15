# Official Malaysian Ministry of Education App
This is the Meteor server-side application accompanying [this Ionic app.](https://github.com/1zaak/moe-ionic-sbpt4) The notable feature for this Meteor app is the integration with the production Oracle 12c database. The sole feature of this app is to verify any current student's application to the nation's boarding school. It is also at the same time a useful lesson in proper Hybrid Mobile Application technologies for the government.

## Architecture
<a href="https://docs.google.com/document/d/1LCQQUMiQV-8vSwk_JBIYTSkVQnZGb73Dte6XSJo3dgI/edit?usp=sharing">
<img src="http://1zaak.github.io/MOE%20SBPT4%20Architecture.svg" alt="MOE SBPT4 Architecture">
</a>
## Running the app

Before you run `meteor` from the root folder, uncomment the fake data in [fixtures.js](/server/lib/fixtures.js)  to use Mongo instead of Oracle as the database. Also, it has no client-side code and only exposes a few REST API.

## Official Documentation

The detailed documentation can be found [here](https://docs.google.com/document/d/1LCQQUMiQV-8vSwk_JBIYTSkVQnZGb73Dte6XSJo3dgI/edit?usp=sharing).

## In Google Play 

The [App](https://play.google.com/store/apps/details?id=com.moe.my&hl=en) in Google Play

## License
Code licensed under MIT. 
