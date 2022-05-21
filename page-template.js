function bullet (data) {
    console.log(data)
    var bulletArr = data;
    var bulletList = "";
            for (var i = 0; i < bulletArr.length; i++) {
                bulletList += "* " + bulletArr[i] + "\n" ;
            
                    
        
        }
        return bulletList;
    }

    function getLicenseUrl(license) {
        switch (license) {
          case "MIT":
            return "https://opensource.org/licenses/MIT";
          case "APACHE 2.0":
            return "https://opensource.org/licenses/Apache-2.0";
          case "GPL 3.0":
            return "https://www.gnu.org/licenses/gpl-3.0";
          case "BSD 3":
            return "https://opensource.org/licenses/BSD-3-Clause";
          case "MPL 2.0":
            return "https://opensource.org/licenses/MPL-2.0";
          default:
            return "";
        }
      }

function generateReadme (data) {
    return `
    
## ${data.title}




## Table of Contents


* [Installation](#installation)
* [Test](#test)
* [Project Links](#project-links)
* [Description](#description)
* [Built With](#built-with)
* [Future Development](#future-development)
* [Contributors](#contributors)
* [Credits](#credits)
* [License](#license)


## Installation

${data.install}



## Test

${data.test}


## Project Links

* Deployed Link: ${data.deployedlink}
* Repo Link: ${data.repolink}






## Description

${data.description}





## Built With

${bullet(data.languages)}








## Future Development

${data.development}




## Contributors

${data.contributors}





![screenshot](${data.image})



## Credits

${data.credits}



## License

${
    data.license !== "None"
      ? `This project is licensed under the ${data.license} license.`
      : "No License"
  }
    
`
}

module.exports = generateReadme