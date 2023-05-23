// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Techs {
    string[] myTechs;

    function addTech(string memory techName) public {
        myTechs.push(techName);
    }

    function updateTech(
        uint techIndex,
        string memory newTechName
    ) public returns (bool) {
        if (myTechs.length > techIndex) {
            myTechs[techIndex] = newTechName;
            return true;
        }
        return false;
    }

    function deleteTech(uint techIndex) public returns (bool) {
        if (myTechs.length > techIndex) {
            for (uint i = techIndex; i < myTechs.length - 1; i++) {
                myTechs[i] = myTechs[i + 1];
            }

            myTechs.pop();

            return true;
        }
        return false;
    }

    function getTechs() public view returns (string[] memory) {
        return myTechs;
    }
}
