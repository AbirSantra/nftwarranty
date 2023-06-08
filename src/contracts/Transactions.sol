// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

error Product_Not_Purchased();
error Product_Creator_Unidentified();
error Product_Owner_Unidentified();
error Product_WarrantyPeriod_Over();

contract WarrantyCard is ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    struct nftInfo {
        uint256 duration;
        uint256 startTime;
        uint256 endTime;
    }

    address payable private i_nftCreator = payable(address(0)); // Store address of creator of Warranty Card
    // string public i_productName; // Stores the name/title of the product
    mapping(uint256 => nftInfo) private tokenIdToNFTInfo;

    // Only the creator of the product warranty card can call a function
    modifier onlyByCreator(address accountAddress) {
        if (accountAddress != i_nftCreator) {
            revert Product_Creator_Unidentified();
        }
        _;
    }

    modifier checkForEndOfWarranty(uint256 tokenId) {
        if (tokenIdToNFTInfo[tokenId].endTime != 0) {
            if (block.timestamp >= tokenIdToNFTInfo[tokenId].endTime) {
                revert Product_WarrantyPeriod_Over();
            }
        }
        _;
    }

    // Safely mint the tokens i.e. only the retailer can add more NFT's/warranty cards in this collection
    function safeMint(address to, string memory uri)
        public
        onlyByCreator(msg.sender)
    {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }