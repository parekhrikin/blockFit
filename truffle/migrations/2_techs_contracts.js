const TechStack = artifacts.require("./Techs.sol");

module.exports = function (deployer) {
  deployer.deploy(TechStack);
};