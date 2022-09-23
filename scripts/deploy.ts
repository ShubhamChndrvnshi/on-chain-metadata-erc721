import { ethers } from "hardhat";

async function main() {

  const MyEpicNFT = await ethers.getContractFactory("MyEpicNFT");
  const myEpicNFT = await MyEpicNFT.deploy();

  await myEpicNFT.deployed();

  console.log(`MyEpicNFT deployed to ${myEpicNFT.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
