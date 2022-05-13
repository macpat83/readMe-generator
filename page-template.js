function generateReadme (data) {
    return `# ${data.title}

## Project Links
* Deployed Link ${data.deployedlink}
* Repo Link ${data.repolink}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Built With
${data.languages}

## Future Development
${data.development}

## Contributors
${data.contributors}

${data.img}


## Installation

    
`
}

module.exports = generateReadme