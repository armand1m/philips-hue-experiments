const createColorErrorMessage = (message) => `

${message}. Please make sure you're calling this command like this:

npm run set-color -- purple
npm run set-color -- turquoise

npm run set-color -- ff0000
npm run set-color -- "ff0000"
npm run set-color -- "#ff0000"

npm run set-color -- rgb(255,255,255)
npm run set-color -- "rgb(255, 255, 255)"

npm run set-color -- rgba(255,255,255,0.8)
npm run set-color -- "rgba(255, 255, 255, 0.8)"

For more information, take a look at "onecolor" package documentation: https://www.npmjs.com/package/onecolor

`;

module.exports = createColorErrorMessage;