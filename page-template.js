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

${
    data.license !== "None"
      ? `[![License ${
          data.license
        }](https://img.shields.io/badge/License-${data.license.replace(
          " ",
          "%20"
        )}-blue.svg)](${getLicenseUrl(data.license)})`
      : ""
  }

## Table of Contents
* [Project Links](#project)
* [Description](#description)
* [Built With](#built)
* [Future Development](#future)
* [Contributors](#contributors)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)



##Installation




## Usage



## Project Links
* Deployed Link ${data.deployedlink}
* Repo Link ${data.repolink}






## Description
${data.description}





## Built With
${bullet(data.languages)}








## Future Development
${data.development}




## Contributors
${bullet(data.contributors)}





${data.image}



## Credits




## License
    
`
}

module.exports = generateReadme