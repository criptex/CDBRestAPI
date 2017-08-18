- Install NodeJS
- Open the Bash on the Project Directory
- type "npm install" to install any missing libraries
- type "node app" to run the server
- the server will run on port 3000


Normally I use Postman to test requests

Test a post request
url: localhost:3000/api/cdb
{
	"InvestmentDate":"2016-11-14T00:00:00",
	"CdbRate": 103.5,
	"CurrentDate":"2016-12-26T00:00:00"
}