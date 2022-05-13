function generateReadme (data) {
    return `
    
# ${data.title}

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






## Project Links
* Deployed Link ${data.deployedlink}
* Repo Link ${data.repolink}






## Description
${data.description}





## Built With
${data.languages}





## Future Development
${data.development}




## Contributors
${data.contributors}





${data.image}




## Installation




## Usage




## Credits




## License
    
`
}

module.exports = generateReadme